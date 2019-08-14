// tslint:disable:max-line-length variable-name
export namespace RetailTradeRetailOpenRefundorderRefuse {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款单号
     */
    refund_order_no: string;
    /**
     * 拒绝理由
     */
    remark: string;
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source: string;
    /**
     * 退款单版本
     */
    version: number;
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
