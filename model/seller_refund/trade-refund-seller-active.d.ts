// tslint:disable:max-line-length variable-name
export namespace SellerRefundTradeRefundSellerActive {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款原因
     */
    desc: string;
    /**
     * 交易明细id
     */
    oid: number;
    /**
     * 退款金额
     */
    refund_fee: string;
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
     * 操作是否成功
     */
    is_success?: boolean;
    /**
     * 退款单号
     */
    refund_id?: string;
  }

}
