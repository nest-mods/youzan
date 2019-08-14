// tslint:disable:max-line-length variable-name
export namespace RetailSupplierRetailOpenSupplierDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
    /**
     * 供应商编码
     */
    supplier_code: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 删除结果
     */
    response?: boolean;
  }

}
