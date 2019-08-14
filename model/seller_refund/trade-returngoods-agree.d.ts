// tslint:disable:max-line-length variable-name
export namespace SellerRefundTradeReturngoodsAgree {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 收货地址
     */
    address: string;
    /**
     * 收货手机号
     */
    mobile: string;
    /**
     * 收货人
     */
    name: string;
    /**
     * 邮编
     */
    post?: number;
    /**
     * 退款ID，退款查询接口可查询到，如https://open.youzan.com/v3/apicenter/doc-api-main/1/2/trade_advanced/youzan.trade.refund.search
     */
    refund_id: string;
    /**
     * 说明
     */
    remark?: string;
    /**
     * 收货电话
     */
    tel?: string;
    /**
     * 退款版本号，退款查询接口可查询到，如https://open.youzan.com/v3/apicenter/doc-api-main/1/2/trade_advanced/youzan.trade.refund.get
     */
    version: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 同意退货是否成功
     */
    is_success?: boolean;
  }

}
