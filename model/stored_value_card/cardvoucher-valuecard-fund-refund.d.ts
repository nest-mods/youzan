export namespace StoredValueCardCardvoucherValuecardFundRefund {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款金额（单位：分）
     */
    amount: number;
    /**
     * 操作人姓名。如果是商家发起退款，请填写商家操作人姓名。如果是用户发起，请填写用户姓名（长度必须小于24）
     */
    operator: string;
    /**
     * 需退款的支付请求号（长度必须小于24）
     */
    pay_request_no: string;
    /**
     * 退款请求号,唯一标识一次退款请求，调用方自定义，请确保唯一（长度必须小于24）
     */
    refund_request_no: string;
    /**
     * 退款描述（长度必须小于100）
     */
    remark?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 退款的支付请求号
     */
    pay_request_no?: string;
    /**
     * 退款请求号
     */
    refund_request_no?: string;
    /**
     * 退款状态(SUCCESS:成功，FAIL:失败，ING:退款中）
     */
    status?: string;
    /**
     * 状态描述
     */
    msg?: string;
    /**
     * 结果码
  * 200：成功、支付中
  * 1001：退款失败
  * 1002：退款失败，原支付订单可退金额不足
  * 1003：退款失败，原支付订单不存在
  * 1004：退款失败，原支付订单交易失败
     */
    code?: string;
    /**
     * 退款单号
     */
    refund_order_no?: string;
  }

}
