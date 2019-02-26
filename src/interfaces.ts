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
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {Redis} from 'ioredis';
import {Queue} from 'kue';

export interface YouzanOptions {
    apiConfigs: { [cid: string]: YouzanApiConfig };
    apiTimeout: number;
    defaultClientId: string;
    redis: YouzanModuleRedisOptions;
    kue: YouzanModuleKueOptions;
}

export interface YouzanApiConfig {
    client_id: string;
    client_secret: string;
    kdt_id: string;
    grant_type: string;
}

export interface YouzanModuleRedisOptions {
    client?: Redis;
    factory?: () => Redis;
}

export interface YouzanModuleKueOptions {
    queue?: Queue;
    factory?: () => Queue;
}

export interface YouzanModuleOptions {
    apiConfigs: YouzanApiConfig | YouzanApiConfig[];
    apiTimeout?: number;
    defaultClientId?: string;
    redis: YouzanModuleRedisOptions;
    kue: YouzanModuleKueOptions;
}

export interface YouzanModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory?: (...args: any[]) => Promise<YouzanModuleOptions> | YouzanModuleOptions;
    inject?: any[];
}

export interface YouzanTokenResponse {
    access_token: string;
    expires_in: number;
    scope: string;
}

export namespace Youzan {
    export interface APIOptions {
        api: string;
        params?: any;
        method?: 'GET' | 'POST';
        files?: any;
        version?: string;
    }

    export interface APIResponse<T = any> {
        response: T;
        error_response: { msg: string, code: number, [key: string]: any };
    }
}
