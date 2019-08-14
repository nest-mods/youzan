// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailStockDeliveryIn {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据号
     */
    biz_bill_no: string;
    /**
     * 业务时间
     */
    business_time: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 来源
     */
    retail_source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 成功时返回的入库单据号
     */
    response?: string;
  }

}
