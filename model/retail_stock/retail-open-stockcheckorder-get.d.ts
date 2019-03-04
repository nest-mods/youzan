export namespace RetailStockRetailOpenStockcheckorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 盘点单编号
     */
    biz_bill_no?: string;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 盘点单返回体
     */
    response?: OpenStockCheckOrderResponse;
  }

  /**
   * 盘点单返回体
   */
  export interface OpenStockCheckOrderResponse {
    /**
     * 单点单号
     */
    biz_bill_no?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
    /**
     * 仓库名称
     */
    warehouse_name?: string;
    /**
     * 单据状态:
  * CHECKING=盘点中
  * DONE=已完成
  * CANCEL=已作废
  * ASYNC_DOING=异步处理中
  * FAILURE=失败
     */
    status?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 制单人
     */
    creator?: string;
    /**
     * 制单时间
     */
    created_time?: string;
    /**
     * 盘点单明细
     */
    order_items?: OpenStockCheckOrderItemDTO[];
  }

  /**
   * 盘点单明细
   */
  export interface OpenStockCheckOrderItemDTO {
    /**
     * sku编码
     */
    sku_code?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * sku条码
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 原库存数
     */
    old_num?: string;
    /**
     * 实际库存数（变更后的值）
     */
    real_num?: string;
    /**
     * 系统库存数（实际库存-原库存）
     */
    number?: string;
  }

}
