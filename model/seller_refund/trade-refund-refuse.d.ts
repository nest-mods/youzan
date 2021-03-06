// tslint:disable:max-line-length variable-name
export namespace SellerRefundTradeRefundRefuse {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款ID，退款查询接口可查询到，如https://open.youzan.com/v3/apicenter/doc-api-main/1/2/trade_advanced/youzan.trade.refund.search
     */
    refund_id: string;
    /**
     * 拒绝理由
     */
    remark: string;
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
     * 拒绝退款是否成功
     */
    is_success?: boolean;
  }

}
