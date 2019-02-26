export namespace BeautyCashierMeiCashierRechargeGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 要查询的订单号
     */
    order_no?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 充值单号
     */
    order_no?: string;
    /**
     * 充值支付通道名称
  * 微信、支付宝、刷卡、现金
     */
    channel_name?: string;
    /**
     * 充值结果
  * 10, "准备充值"
  * 20, "支付中"
  * 30, "已支付"
  * 33, "已充值"
  * 35, "发放权益"
  * 98, "支付失败"
     */
    pay_status?: number;
    /**
     * 充值支付通道类型
  * 1,"微信"
  * 3，“支付宝”
  * 201, "现金"
  * 204, "刷卡"
     */
    channel_type?: number;
  }

}
