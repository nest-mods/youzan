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
import * as rp from 'request-promise-native';
import {YouzanOptions, YouzanTokenResponse} from '../interfaces';
import {YOUZAN_MODULE_OPTIONS} from '../constants';
import {YouzanApiConfigNotFoundException} from '../error';
import {Log} from '@nest-mods/log';
import {FactoryService} from './factory.service';

function getKey(client_id: string) {
    return `TOKENS:youzan:${client_id}`;
}

@Injectable()
export class TokenStoreService {

    @Log() private logger: LoggerService;

    constructor(@Inject(YOUZAN_MODULE_OPTIONS) private options: YouzanOptions,
                private factory: FactoryService) {
    }

    async getToken(client_id: string, force: boolean = false) {
        let token: string = await this.factory.getClient().get(getKey(client_id));
        if (force || !token) {
            token = await this.getNewAndSave(client_id);
        }
        return token;
    }

    private async getNewAndSave(client_id: string) {
        const token = await this.requestNewToken(client_id);
        await this.factory.getClient().setex(getKey(client_id), token.expires_in, token.access_token);
        return token.access_token;
    }

    private async requestNewToken(client_id: string) {
        const apiConfig = this.options.apiConfigs[client_id];
        if (!apiConfig) {
            throw new YouzanApiConfigNotFoundException(client_id);
        }

        const token: YouzanTokenResponse = await rp('https://open.youzan.com/oauth/token', {qs: apiConfig, json: true});

        this.logger.log({
            message: '有赞API Token',
            client_id,
            token,
            level: 'debug',
        });

        return token;
    }
}
