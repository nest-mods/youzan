// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailStockGoodsapplyClose {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据号
     */
    biz_bill_no: string;
    /**
     * 系统来源
     */
    retail_source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    response?: PlainBoolResult;
  }

  /**
   * 是否成功
   */
  export interface PlainBoolResult {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
