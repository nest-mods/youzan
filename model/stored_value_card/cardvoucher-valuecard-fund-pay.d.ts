export namespace StoredValueCardCardvoucherValuecardFundPay {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 支付金额（单位：分）
     */
    amount: number;
    /**
     * 用户buyerId，与手机号码二选一
     */
    buyer_id?: number;
    /**
     * 用于支付的卡号列表，目前仅支持一张卡。
  * 可通过以下接口获取用户可用储值卡列表，以及卡内余额
  * youzan.cardvoucher.valuecard.info.bysup.query
     */
    card_nos: string[];
    /**
     * 商品名称（长度必须小于24）
     */
    goods_name: string;
    /**
     * 用户手机号码，与buyerId 二选一
     */
    mobile?: string;
    /**
     * 操作人姓名。如果是商家发起支付，请填写商家操作人姓名。如果是用户发起，请填写用户姓名（长度必须小于24）
     */
    operator: string;
    /**
     * 支付请求号，唯一标识一次支付请求，调用方自定义，请确保唯一（长度必须小于24）
     */
    pay_request_no: string;
    /**
     * 支付描述（长度必须小于100）
     */
    remark?: string;
  }

  /**
   * 
   */
  export interface ListString {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 支付请求号
     */
    pay_request_no?: string;
    /**
     * 支付状态(SUCCESS:成功，FAIL:失败，ING:支付中）
     */
    status?: string;
    /**
     * 状态描述
     */
    msg?: string;
    /**
     * 结果码
  * 200：成功、支付中
  * 1001：支付失败
  * 1002：支付失败，未订阅储值插件
  * 1003：支付失败，卡号不存在
  * 1004：支付失败，余额不足
     */
    code?: string;
    /**
     * 支付订单号
     */
    pay_order_no?: string;
  }

}
