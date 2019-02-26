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
import {DoneCallback, Job} from 'kue';
import {Injectable, LoggerService} from '@nestjs/common';
import * as YZClient from 'yz-open-sdk-nodejs';
import * as Token from 'yz-open-sdk-nodejs/Token';
import {Youzan} from '../interfaces';
import {Log} from '@nest-mods/log';
import {itsDone} from '../util/it-is-done.util';

@Injectable()
export class RequestTask {

    @Log() private logger: LoggerService;

    private cachedClient;
    private cachedToken;

    async invoke(job: Job, done: DoneCallback) {
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
