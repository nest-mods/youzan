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
import * as fs from 'fs';
import * as path from 'path';
import { Injectable, LoggerService } from '@nestjs/common';
import * as rp from 'request-promise-native';
import * as _ from 'lodash';
import { Log } from '@nest-mods/log';

const endpoint = 'https://open.youzan.com/v3/docs/debugger/interface/params';

namespace ApiInfoResponse {

  export interface RequestUrl {
    type: string;
    url: string;
  }

  export interface RequestParam {
    name: string;
    type: string;
    example: string;
    defaultValue: string;
    isRequired: string;
    desc: string;
    isStruct: boolean;
    structUrl?: any;
    struct?: any;
  }

  export interface Struct {
    name: string;
    type: string;
    isNeed: boolean;
    desc: string;
    defaultValue?: any;
    example?: any;
    isStruct: boolean;
    children: Struct[];
  }

  export interface ResponseParam {
    name: string;
    type: string;
    isRequired: string;
    desc: string;
    isStruct: boolean;
    structUrl: string;
    struct: Struct;
  }

  export interface ApiDesc {
    requestUrls: RequestUrl[];
    requestParams: RequestParam[];
    responseParams: ResponseParam[];
    requestDemos: any[];
    errorCodes?: any;
    responseDemo: string;
    errorResponseDemo: string;
  }

  export interface Data {
    name: string;
    ids: number[];
    scenarios: string;
    version: string[];
    desc: string;

    [version: string]: ApiDesc | any;
  }

  export interface RootObject {
    code: number;
    message: string;
    data: Data;
  }

}

interface IntlType {
  alias: string;
  createTime?: Date;
  description: string;
  id: number;
  level: number;
  name: string;
  updateTime?: Date;
  details?: IntlDetailType[];
}

interface IntlDetailType {
  name: string;
  desc: string;
  sequence: number;
  scenarios: string;
  category: number[];
  versions: string[];
}

interface ApiDesc {
  group: string;
  api: string;
  version?: string;
  desc?: string;
  method?: string;
}

interface TypeDesc {
  name: string;
  type?: string;
  props?: PropDesc[];
  comment?: string;
}

interface PropDesc {
  name: string;
  optional: boolean;
  type: string;
  comment: string;
}

function getType(o: ApiInfoResponse.Struct): string {

  const re = /Map<(\w+),\s*(\w+)>/;

  if (re.test(o.type)) {
    const match = re.exec(o.type);
    const t1 = getType({ type: match[1] } as any);
    const t2 = getType({ type: match[2] } as any);
    return `Map<${t1}, ${t2}>`;
  }

  const re2 = /List<(\w+)>/;
  if (re2.test(o.type)) {
    const match = re2.exec(o.type);
    const t1 = getType({ type: match[1] } as any);
    return `${t1}[]`;
  }

  if (o.type === 'byte[]') {
    return 'Buffer';
  }

  const re3 = /\[]$/;
  const isArray = re3.test(o.type);

  function f(type: string, isStruct?: boolean) {
    switch (type) {
      case 'String':
      case 'Boolean':
      case 'Number':
        return type.toLowerCase();
      case 'Price':
        return 'string';
      case 'Long':
      case 'Integer':
        return 'number';
      default:
        return isStruct ? getTypeName(type) : type;
    }
  }

  const type = f(o.type.replace(re3, ''), o.isStruct);
  if (isArray) {
    return `${type}[]`;
  }
  return type;
}

function getTypeName(name: string) {
  return _.startCase(name).replace(/\W/g, '');
}

function getNamespace(api: ApiDesc) {
  return _.startCase(api.api.replace(/^youzan\./, api.group + '.')).replace(/ /g, '');
}

function getFilename(api: ApiDesc) {
  return _.kebabCase(api.api.replace(/^youzan\./, '')) + '.d.ts';
}

const outputFolder = '../../model';

@Injectable()
export class YouzanApiModelInterfaceGenerateService {

  @Log() private logger: LoggerService;

  async generateAll(apis?: ApiDesc[]) {
    if (!apis) {
      apis = await this.getAllApiDesc();
    }
    for (const o of apis) {
      await this.generate(o);
    }
    await this.generateIndex();

    await this.generateService(apis);
  }

  async generateService(apis: ApiDesc[]) {
    const imports: string[] = [];
    let codes = '';

    for (const o of apis) {
      const methodName = _.camelCase(o.api.replace(/^youzan\./, o.group + '.'));
      const ns = getNamespace(o);

      const code = `
  /**
   * ${o.desc}
   */
  async ${methodName}(params: ${ns}.Request, client_id: string = this.options.defaultClientId): Promise<${ns}.Response> {
    return await this.requestService.invoke({
      api: '${o.api}',
      version: '${o.version}',
      method: '${o.method}',
      params,
    }, client_id);
  }`;

      codes += code + '\n';

      imports.push(ns);
    }

    let source = `import { YouzanOptions } from '../interfaces';
import { RequestService } from './request.service';
`;

    source += `import { ${imports.join(', ')} } from '../../model';\n`;
    source += `
/**
 * Generated at ${new Date().toISOString()}
 */
export class GeneratedYouzanService {
  constructor(protected options: YouzanOptions,
              protected requestService: RequestService) {
  }
`;
    source += codes;
    source += '}\n';

    fs.writeFileSync(path.join(__dirname, 'generated-youzan.service.ts'), source);
  }

  async generate(api: ApiDesc) {
    this.logger.log(`开始生成接口(${api.group}/${api.api})`);

    const apiDesc = await this.fetchDesc(api);

    const types = this.generateTypes(apiDesc);

    const codes = this.render(api, types);

    await this.writeFile(api, codes);

    this.logger.log({ message: `生成接口(${api.group}/${api.api}@${api.version})完成`, level: 'debug' });
    return codes;
  }

  async generateIndex() {
    const dirs = fs.readdirSync(path.join(__dirname, outputFolder), { withFileTypes: true });
    const re = /\.d\.ts$/;
    let code = '';
    for (const dir of dirs) {
      if (dir.name === 'index.d.ts') {
        continue;
      }
      if (dir.isDirectory()) {
        const files = fs.readdirSync(path.join(__dirname, outputFolder, dir.name));
        for (const file of files) {
          if (re.test(file)) {
            const moduleName = file.replace(re, '');
            code += `export * from './${dir.name}/${moduleName}';\n`;
          }
        }
      }
    }
    fs.writeFileSync(path.join(__dirname, outputFolder, 'index.d.ts'), code);
  }

  private async getAllApiDesc() {
    const list: ApiDesc[] = [];
    const res1 = await rp('https://open.youzan.com/v3/docs/debugger/interface', { json: true });
    const interfaces: IntlType[] = res1.data;

    for (const intl of interfaces) {
      const res2 = await rp(`https://open.youzan.com/v3/docs/debugger/interface/detail/${intl.alias}`, { json: true });
      const details: IntlDetailType[] = res2.data;
      intl.details = details;

      for (const detail of details) {
        if (detail.name.endsWith('.upload')) {
          this.logger.log(`${detail.name} 不支持文件上传，跳过……`);
          continue;
        }
        list.push({
          api: detail.name,
          group: intl.alias,
        });
      }
    }

    fs.mkdirSync(path.join(__dirname, '../../docs'), { recursive: true });
    fs.writeFileSync(path.join(__dirname, '../../docs/youzan-api-info.json'), JSON.stringify(interfaces));

    return list;
  }

  private async writeFile(api: ApiDesc, codes: string) {
    const filename = getFilename(api);
    this.logger.log(`写入文件[${filename}](${api.group}/${api.api}@${api.version})`);
    fs.mkdirSync(path.join(__dirname, outputFolder, api.group), { recursive: true });
    fs.writeFileSync(path.join(__dirname, outputFolder, api.group, filename), codes);
  }

  private render(api: ApiDesc, types: TypeDesc[]) {
    this.logger.log(`渲染文档(${api.group}/${api.api}@${api.version})`);
    const ns = getNamespace(api);
    let codes = `export namespace ${ns} {\n`;
    for (const type of types) {
      const code = this.renderType(type);
      const lines = code.split('\n');
      for (const line of lines) {
        if (/^\s*$/.test(line)) {
          codes += '\n';
        } else {
          codes += '\t' + line + '\n';
        }
      }
    }
    codes += '}\n';

    codes = codes.replace(/\t/g, '  ');
    return codes;
  }

  private renderType(type: TypeDesc) {
    if (type.type) {
      return `export type ${type.name} = ${type.type};\n`;
    }
    let code = '';
    code += `/**
 ${this.renderComment(type.comment)}
 */\n`;
    code += `export interface ${type.name} {\n`;

    for (const p of type.props) {
      code += `\t/**
\t ${this.renderComment(p.comment)}
\t */\n`;
      code += `\t${p.name}${p.optional ? '?' : ''}: ${p.type};\n`;
    }

    code += '}\n';
    return code;
  }

  private async fetchDesc(api: ApiDesc) {
    this.logger.log(`拉取文档(${api.group}/${api.api})`);
    const res: ApiInfoResponse.RootObject = await rp(`${endpoint}/${api.group}/${api.api}`, { json: true });
    if (!api.version) {
      api.version = _.first(res.data.version);
    }

    const apiDesc: ApiInfoResponse.ApiDesc = res.data[api.version];

    api.desc = res.data.desc;
    api.method = res.data.name === 'get' ? 'GET' : 'POST';

    this.logger.log({
      message: `fetchDesc from ${api.group}/${api.api}@${api.version}`,
      apiDesc,
      level: 'silly',
    });

    fs.mkdirSync(path.join(__dirname, '../../docs', api.group), { recursive: true });
    fs.writeFileSync(path.join(__dirname, '../../docs', api.group, api.api + '.json'), JSON.stringify(res.data));

    return apiDesc;
  }

  private generateTypes(apiDesc: ApiInfoResponse.ApiDesc) {
    this.logger.log(`生成类型`);

    const types: TypeDesc[] = [];

    if (apiDesc.requestParams) {
      types.push({
        name: 'Request',
        props: this.structProps(apiDesc.requestParams as any[]),
        comment: '请求参数',
      });

      for (const o of apiDesc.requestParams) {
        if (o.isStruct) {
          this.recruitStruct(types, o.struct);
        }
      }
    } else {
      types.push({
        name: 'Request',
        type: 'void',
      });
    }

    if (apiDesc.responseParams) {
      types.push({
        name: 'Response',
        props: this.structProps(apiDesc.responseParams as any[]),
        comment: '响应参数',
      });

      for (const o of apiDesc.responseParams) {
        if (o.isStruct) {
          this.recruitStruct(types, o.struct);
        }
      }
    } else {
      types.push({
        name: 'Response',
        type: 'void',
      });
    }

    this.logger.log({
      message: 'generateTypes',
      types,
      level: 'silly',
    });

    return types;
  }

  private recruitStruct(types: TypeDesc[], o: ApiInfoResponse.Struct) {
    this.logger.log({ message: `生成结构体`, level: 'silly', struct: o });
    // if (_.isEmpty(o.children)) {
    //     this.logger.log({
    //         message: '检测到空的结构体，跳过……',
    //         level: 'debug',
    //     });
    //     return;
    // }
    types.push({
      name: getTypeName(o.type),
      props: this.structProps(o.children),
      comment: _.trim(o.desc),
    });
    if (_.isArray(o.children)) {
      for (const c of o.children) {
        this.logger.log({
          message: 'recruitStruct',
          level: 'silly',
          check: c,
        });
        if (c.isStruct) {
          this.recruitStruct(types, c);
        }
      }
    }
  }

  private structProps(list: ApiInfoResponse.Struct[]) {
    this.logger.log({ message: `生成结构体属性`, level: 'silly', props: list });
    const props: PropDesc[] = [];
    for (const p of list) {
      props.push({
        name: p.name.replace(/\W/g, ''),
        type: getType(p),
        optional: p['isRequired'] === '是'
          ? false
          : p['isRequired'] === '否'
            ? true
            : !p.isNeed,
        comment: _.trim(p.desc),
      });
    }
    this.logger.log({
      message: 'structProps',
      props,
      level: 'silly',
    });
    return props;
  }

  private renderComment(comment: string) {
    return _.chain(comment).trim().split('\n').map(o => `* ${o}`).join('\n').value();
  }
}
