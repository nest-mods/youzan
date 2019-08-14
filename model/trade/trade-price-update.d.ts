// tslint:disable:max-line-length variable-name
export namespace TradeTradePriceUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 改价后允许是否允许买家再使用其他优惠，0 表示不允许，1 表示允许
     */
    is_allow_preference: number;
    /**
     * 邮费价格(单位:元）
     */
    post_fee: string;
    /**
     * 价格增减(单位:元）
     */
    price_change: string;
    /**
     * 交易编号
     */
    tid: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功，成功为true、失败为false
     */
    is_success?: boolean;
  }

}
