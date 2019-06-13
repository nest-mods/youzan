export namespace BuyerRefundTradeRefundApply {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款说明，备注
     */
    desc: string;
    /**
     * 手机号
     */
    mobile: string;
    /**
     * 交易的商品明细编号。
     */
    oid: number;
    /**
     * 退款原因，原因列表地址：https://www.youzanyun.com/docs/guide/faq/699
     */
    reason: number;
    /**
     * 退款金额
     */
    refund_fee: string;
    /**
     * 是否退货 false(仅退款) true(退货退款)
     */
    return_goods: boolean;
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
     * 操作是否成功，成功为true
     */
    is_success?: boolean;
  }

}
