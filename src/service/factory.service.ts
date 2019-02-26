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
 * Created by Diluka on 2019-02-25.
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
import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {YOUZAN_MODULE_OPTIONS} from '../constants';
import {YouzanOptions} from '../interfaces';
import {Redis} from 'ioredis';
import {Queue} from 'kue';

@Injectable()
export class FactoryService {
    private client: Redis;
    private queue: Queue;
    private clientFactory: () => Redis;
    private queueFactory: () => Queue;

    constructor(@Inject(YOUZAN_MODULE_OPTIONS) private options: YouzanOptions) {
        this.client = options.redis.client;
        this.queue = options.kue.queue;
        this.clientFactory = options.redis.factory;
        this.queueFactory = options.kue.factory;

        if (!this.client && !this.clientFactory) {
            throw new InternalServerErrorException('One of client or factory in redis option must be provided.', 'YouzanModuleConfigException');
        }
        if (!this.queue && !this.queueFactory) {
            throw new InternalServerErrorException('One of queue or factory in kue option must be provided.', 'YouzanModuleConfigException');
        }
    }

    getClient() {
        if (!this.client) {
            this.client = this.clientFactory();
        }
        return this.client;
    }

    getQueue() {
        if (!this.queue) {
            this.queue = this.queueFactory();
        }
        return this.queue;
    }
}
