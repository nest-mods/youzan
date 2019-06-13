export namespace RetailStockRetailOpenStockcheckCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据编码
     */
    biz_bill_no: string;
    /**
     * 单据日期
     */
    create_time?: string;
    /**
     * 创建人
     */
    creator: string;
    /**
     * 盘点单明细
     */
    order_items: OpenStockCheckOrderItem[];
    /**
     * 页码（从第一页开始）
     */
    page_no: number;
    /**
     * 每页记录数（最大值为500）
     */
    page_size: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
    /**
     * 总记录数
     */
    total_count: number;
    /**
     * 仓库编码（连锁版必须）
     */
    warehouse_code?: string;
  }

  /**
   * 
   */
  export interface OpenStockCheckOrderItem {
    /**
     * 真实库存数量
     */
    real_amount?: string;
    /**
     * skuCode
     */
    sku_code?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 业务单号
     */
    response?: string;
  }

}
