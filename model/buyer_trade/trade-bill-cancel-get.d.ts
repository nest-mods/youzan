export namespace BuyerTradeTradeBillCancelGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 订单号
     */
    tid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作是否成功
     */
    is_success?: boolean;
  }

}
