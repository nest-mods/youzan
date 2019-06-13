export namespace TradeTradeMemoUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 订单备注加星标，取值为1-5
     */
    flag?: string;
    /**
     * 订单备注
     */
    memo?: string;
    /**
     * 订单号
     */
    tid: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功，true为成功，false为否
     */
    is_success?: boolean;
  }

}
