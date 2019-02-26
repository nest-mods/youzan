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
import {Inject, Injectable, LoggerService} from '@nestjs/common';
import {RequestTask} from '../task/request.task';
import {YOUZAN_MODULE_OPTIONS, YOUZAN_MODULE_TASK_INVOKE} from '../constants';
import {Youzan, YouzanOptions} from '../interfaces';
import {TokenStoreService} from './token-store.service';
import * as retry from 'async-retry';
import {YouzanRemoteApiException} from '../error/youzan-remote-api.exception';
import * as _ from 'lodash';
import {Log} from '@nest-mods/log';
import {FactoryService} from './factory.service';
import {Queue} from 'kue';
import {awaiter} from '../util/awaiter.util';

@Injectable()
export class RequestService {

    @Log() private logger: LoggerService;

    private queue: Queue;

    constructor(@Inject(YOUZAN_MODULE_OPTIONS) private options: YouzanOptions,
                private tokenStore: TokenStoreService,
                private tasks: RequestTask,
                private factory: FactoryService) {
        this.queue = factory.getQueue();
        this.queue.process(YOUZAN_MODULE_TASK_INVOKE, async (job, done) => {
            return this.tasks.invoke(job, done);
        });
    }

    async invoke(options: Youzan.APIOptions, client_id: string) {
        options = _.defaults(options, {version: '3.0.0', method: 'GET'});
        const token = await this.tokenStore.getToken(client_id);
        return await retry(async (bail) => {
            const job = await this.queue.createJob(YOUZAN_MODULE_TASK_INVOKE, {
                options,
                token,
            }).ttl(this.options.apiTimeout).save();

            const res = await awaiter(job);

            this.logger.log({
                message: '调用有赞接口',
                options,
                client_id,
                body: res.body,
                level: 'debug',
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
}
