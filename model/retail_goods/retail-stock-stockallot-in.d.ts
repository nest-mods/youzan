export namespace RetailGoodsRetailStockStockallotIn {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 业务单据编号
     */
    biz_bill_no?: string;
    /**
     * 来源请求
     */
    retail_source?: string;
    /**
     * 选择的入库仓库
     */
    to_kdt_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 成功的单据号
     */
    response?: string;
  }

}
