// tslint:disable:max-line-length variable-name
export namespace BeautyCashierMeiCashierPay {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 支付方式
     * 120, "会员余额"
     * 130, "刷卡"
     * 201, "现金"
     * 204, "刷卡"
     * 微信和支付宝支付该字段不用传
     */
    channel_type?: number;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 要支付的订单号
     */
    order_no: string;
    /**
     * 如果是微信支付或者支付宝支付，则该字段必须要填写，填写内容为付款吗
     */
    pay_code?: string;
    /**
     * 如果是现金支付，则该字段必须要写，填写内容为顾客实际支付金额
     */
    receive_pay?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 支付状态
     * 0, "待开单"
     * 10, "待支付"
     * 20, "支付中"
     * 30, "已支付"
     * 40, "退款中"
     * 50, "已退款"
     * 98, "支付失败"
     */
    pay_status?: number;
  }

}
