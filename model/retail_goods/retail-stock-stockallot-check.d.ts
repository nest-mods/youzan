export namespace RetailGoodsRetailStockStockallotCheck {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据号列表
     */
    biz_bill_nos?: string[];
    /**
     * 是否通过
     */
    is_ok?: boolean;
    /**
     * 驳回理由
     */
    refused_reason?: string;
    /**
     * 来源
     */
    retail_source?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 审核结果
     */
    response?: InterCheckRes[];
  }

  /**
   * 审核结果
   */
  export interface InterCheckRes {
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 对应的单据号
     */
    biz_bill_no?: string;
  }

}
