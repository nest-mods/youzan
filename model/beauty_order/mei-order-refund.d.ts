// tslint:disable:max-line-length variable-name
export namespace BeautyOrderMeiOrderRefund {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业登陆token
     */
    m_token: string;
    /**
     * 退款订单
     */
    order_no: string;
    /**
     * 退款详情，多种支付方式退款则是个list
     */
    refunds: RefundReq[];
    /**
     * 退款备注
     */
    remark?: string;
  }

  /**
   *
   */
  export interface RefundReq {
    /**
     * 退款金额，单位：分
     */
    amount?: number;
    /**
     * 运费，单位：分
     */
    include_postage?: number;
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 支付单号
     */
    pay_no?: string;
    /**
     * 退款方式：0:"原路退回",1:"现金",2:"其它"
     */
    refund_mode?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 退款单号
     */
    parentReverseOrderNo?: string;
    /**
     * 订单状态
     */
    state?: number;
  }

}
