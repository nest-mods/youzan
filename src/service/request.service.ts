/*
 * MIT License
 *
 * Copyright (c) 2019 nest-mods
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Created by Diluka on 2019-02-21.
 *
 *
 * ----------- 神 兽 佑 我 -----------
 *        ┏┓      ┏┓+ +
 *       ┏┛┻━━━━━━┛┻┓ + +
 *       ┃          ┃
 *       ┣     ━    ┃ ++ + + +
 *      ████━████   ┃+
 *       ┃          ┃ +
 *       ┃  ┴       ┃
 *       ┃          ┃ + +
 *       ┗━┓      ┏━┛  Code is far away from bug
 *         ┃      ┃       with the animal protecting
 *         ┃      ┃ + + + +
 *         ┃      ┃
 *         ┃      ┃ +
 *         ┃      ┃      +  +
 *         ┃      ┃    +
 *         ┃      ┗━━━┓ + +
 *         ┃          ┣┓
 *         ┃          ┏┛
 *         ┗┓┓┏━━━━┳┓┏┛ + + + +
 *          ┃┫┫    ┃┫┫
 *          ┗┻┛    ┗┻┛+ + + +
 * ----------- 永 无 BUG ------------
 */
import { Inject, Injectable, LoggerService, OnModuleInit } from '@nestjs/common';
import * as YZClient from 'yz-open-sdk-nodejs';
import * as Token from 'yz-open-sdk-nodejs/Token';
import { YOUZAN_MODULE_OPTIONS, YOUZAN_MODULE_TASK_INVOKE, YOUZAN_QUEUE_NAME } from '../constants';
import { Youzan, YouzanOptions } from '../interfaces';
import { TokenStoreService } from './token-store.service';
import * as retry from 'async-retry';
import { YouzanRemoteApiException } from '../error/youzan-remote-api.exception';
import * as _ from 'lodash';
import { Log } from '@nest-mods/log';
import * as Bull from 'bull';
import { DoneCallback, Job, Queue } from 'bull';
import { itsDone } from '../util/it-is-done.util';

@Injectable()
export class RequestService implements OnModuleInit {
  @Log() private logger: LoggerService;
  private cachedClient;
  private cachedToken;

  constructor(@Inject(YOUZAN_MODULE_OPTIONS) private options: YouzanOptions,
              private tokenStore: TokenStoreService) {
  }

  private static _queue: Queue;

  protected get queue(): Queue {
    if (!RequestService._queue) {
      RequestService._queue = this.createQueue();
    }

    return RequestService._queue;
  }

  async onModuleInit() {
    await this.queue.clean(1000, 'active');
  }

  async invoke(options: Youzan.APIOptions, client_id: string) {
    options = _.defaults(options, { version: '3.0.0', method: 'GET' });
    const token = await this.tokenStore.getToken(client_id);
    return await retry(async (bail) => {

      const job = await this.queue.add(YOUZAN_MODULE_TASK_INVOKE, { options, token });
      const res = await job.finished();

      this.logger.verbose({
        message: '调用有赞接口',
        options,
        client_id,
        body: res.body,
      });

      const result: Youzan.APIResponse = JSON.parse(res.body);

      if (result.error_response) {
        if (result.error_response.code === 40010) {
          throw new Error(result.error_response.msg);
        } else {
          return bail(new YouzanRemoteApiException(result.error_response));
        }
      }

      return result.response;
    }, {
      onRetry: async () => {
        await this.tokenStore.getToken(client_id, true);
      },
    });
  }

  private createQueue() {
    const queue = new Bull(YOUZAN_QUEUE_NAME, {
      redis: this.options.redis,
      prefix: 'b:YOUZAN:',
      defaultJobOptions: {
        timeout: this.options.apiTimeout,
        removeOnFail: true,
        removeOnComplete: true,
      },
    });

    queue.process(YOUZAN_MODULE_TASK_INVOKE, 1, this.processor.bind(this));

    return queue;
  }

  private async processor(job: Job, done: DoneCallback) {
    const options: Youzan.APIOptions = job.data.options;
    const token: string = job.data.token;
    const client = this.getClient(token);
    await itsDone(client.invoke(options.api, options.version, options.method, options.params, options.files), done);
  }

  private getClient(token: string) {
    if (this.cachedToken === token) {
      return this.cachedClient;
    }
    return this.createClient(token);
  }

  private createClient(token: string) {
    const client = new YZClient(new Token(token));
    this.logger.log(`创建新的有赞客户端，使用token: ${token}`);
    this.cachedToken = token;
    this.cachedClient = client;
    return client;
  }
}
