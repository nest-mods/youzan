export namespace BuyerRefundTradeReturngoodsFill {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 物流公司编号: 查询youzan.logistics.express.get接口获取
     */
    logistics_company_code?: number;
    /**
     * 物流公司运单号
     */
    logistics_waybill_no?: string;
    /**
     * 退款ID
     */
    refund_id?: string;
    /**
     * 退款版本号
     */
    version?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
