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
import {Test} from '@nestjs/testing';
import {YouzanApiModelInterfaceGenerateService} from './youzan-api-model-interface-generate.service';
import {LogModule} from '@nest-mods/log';
import {Logger} from '@nestjs/common';

const logger = new Logger('Generator Tests');

describe('有赞接口类型生成器', function() {

    let service: YouzanApiModelInterfaceGenerateService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [YouzanApiModelInterfaceGenerateService],
            imports: [LogModule],
        }).compile();

        service = module.get(YouzanApiModelInterfaceGenerateService);
    });

    it('生成接口', async function() {
        await service.generate({group: 'trade', api: 'youzan.trade.get'});
    });

    it.skip('生成index.ts', async function() {
        await service.generateIndex();
    });

    it.skip('批量生成', async function() {
        await service.generateAll([
            {group: 'coupon', api: 'youzan.ump.coupon.take'},
            {group: 'points', api: 'youzan.crm.fans.points.get'},
        ]);
    });

    it('生成所有接口', async function() {
        await service.generateAll();
    });
});
