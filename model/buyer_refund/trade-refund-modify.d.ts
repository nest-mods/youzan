// tslint:disable:max-line-length variable-name
export namespace BuyerRefundTradeRefundModify {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款说明，备注
     */
    desc: string;
    /**
     * 退款原因，原因列表地址：https://www.youzanyun.com/docs/guide/faq/699
     */
    reason: number;
    /**
     * 退款金额
     */
    refund_fee: string;
    /**
     * 退款ID
     */
    refund_id: string;
    /**
     * false(仅退款) true(退货退款)
     */
    return_goods: boolean;
    /**
     *
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
