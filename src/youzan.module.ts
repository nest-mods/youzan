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

import { DynamicModule, Global, Module } from '@nestjs/common';
import { LogModule } from '@nest-mods/log';
import * as _ from 'lodash';
import { YouzanModuleAsyncOptions, YouzanModuleOptions } from './interfaces';
import { YOUZAN_MODULE_OPTIONS } from './constants';
import { YouzanService } from './service/youzan.service';
import { RequestService } from './service/request.service';
import { TokenStoreService } from './service/token-store.service';
import { RequestTask } from './task/request.task';
import { FactoryService } from './service/factory.service';

const defaultOptions: Partial<YouzanModuleOptions> = {
  apiTimeout: 60 * 1000,
};

@Global()
@Module({
  providers: [YouzanService, RequestService, TokenStoreService, FactoryService, RequestTask],
  exports: [YouzanService],
})
export class YouzanModule {
  static forRootAsync(options: YouzanModuleAsyncOptions): DynamicModule {
    return {
      module: YouzanModule,
      imports: options.imports,
      providers: [{
        provide: YOUZAN_MODULE_OPTIONS,
        useFactory: async (...args) => {
          const opts = await options.useFactory(...args);
          if (!_.isArray(opts.apiConfigs)) {
            opts.apiConfigs = [opts.apiConfigs];
          }
          const apiConfigs = _.reduce(opts.apiConfigs, (result, value) => {
            result[value.client_id] = value;
            return result;
          }, {});
          const defaultClientId = opts.apiConfigs[0].client_id;
          return _.defaultsDeep({
            apiConfigs,
            defaultClientId: opts.defaultClientId,
            apiTimeout: opts.apiTimeout,
            redis: opts.redis,
            kue: opts.kue,
          }, { defaultClientId }, defaultOptions);
        },
        inject: options.inject,
      }],
    };
  }
}
