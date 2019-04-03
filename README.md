# youzan
[![npm version](https://badge.fury.io/js/%40nest-mods%2Fyouzan.svg)](https://badge.fury.io/js/%40nest-mods%2Fyouzan)

Youzan API client wrapped with bull for nest.js

install via npm `npm i @nest-mods/youzan @nest-mods/log ioredis lodash bull`

`2.x` target at nestjs `6.x`
```ts
    @Module({
      imports: [
        YouzanModule.forRootAsync({
          useFactory: () => {
            return {
              apiConfigs: {
                client_id: process.env.TEST_YOUZAN_CLIENT_ID,
                client_secret: process.env.TEST_YOUZAN_CLIENT_SECRET,
                kdt_id: process.env.TEST_YOUZAN_KDT_ID,
                grant_type: 'silent',
              },
              redis: {},
            };
          },
        }),
      ],
    })
    export class DemoApp {}
```
