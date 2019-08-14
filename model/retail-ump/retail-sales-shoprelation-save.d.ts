// tslint:disable:max-line-length variable-name
export namespace RetailUmpRetailSalesShoprelationSave {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 线下门店ID
     */
    offline_kdt_id: number;
    /**
     * 线上门店ID
     */
    online_kdt_id: number;
    /**
     * 请求的来源
     */
    retail_source: string;
  }

  export type Response = void;

}
