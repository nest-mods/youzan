// tslint:disable:max-line-length variable-name
export namespace BuyerRefundTradeRefundConditionGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 交易的商品明细编号
     */
    oid: number;
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
     * 是否只能申请全额退款，是为true，否为false
     */
    is_full_refund?: boolean;
    /**
     * 是否可以申请退货退款，是为true，否为false
     */
    has_retrun_goods?: boolean;
    /**
     * 最大可退金额
     */
    refund_fee?: string;
  }

}
