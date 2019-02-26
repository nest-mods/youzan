export namespace TradeTradeStarUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 等级 1-5
     */
    star?: number;
    /**
     * 交易编号
     */
    tid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
