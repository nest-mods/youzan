export namespace BeautyCashierMeiCashierPayGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 要查询的订单号
     */
    order_no: string;
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
     * 支付通道名称
  * 现金、微信、支付宝、刷卡、储值
     */
    channel_name?: string;
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
    /**
     * 通道类型
  * 1,"微信"
  * 3，“支付宝”
  * 120, "会员余额"
  * 201, "现金"
  * 204, "刷卡"
     */
    channel_type?: number;
  }

}
