export namespace PayQrcodeTradeQrcodeHasoutidGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 外部订单号
     */
    out_id: string;
    /**
     * 外部来源（由有赞分配）
     */
    out_source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 0未支付，1已支付
     */
    pay_state?: number;
    /**
     * 支付时间
     */
    pay_time?: number;
    /**
     * 支付方式
     */
    pay_way?: string;
    /**
     * 交易单号
     */
    tid?: string;
  }

}
