export namespace RetailStockRetailOpenDistributionorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 配送单号
     */
    biz_bill_no?: string;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 配送单返回体
     */
    response?: OpenDistributionOrderResponse;
  }

  /**
   * 配送单返回体
   */
  export interface OpenDistributionOrderResponse {
    /**
     * 配送单号
     */
    biz_bill_no?: string;
    /**
     * 出库仓库编码
     */
    from_warehouse_code?: string;
    /**
     * 入库仓库编码
     */
    to_warehouse_code?: string;
    /**
     * 出库仓库名称
     */
    from_warehouse_name?: string;
    /**
     * 入库仓库名称
     */
    to_warehouse_name?: string;
    /**
     * 单据状态:
  * TO_CHECK=待审核
  * TO_OUT=待出库
  * TO_IN=待入库
  * REFUSED=已驳回
  * CLOSED=已关闭
  * FINISHED=已完成
  * OUT_DOING=出库执行中
  * IN_DOING=入库执行中
     */
    status?: string;
    /**
     * 制单人
     */
    creator?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 驳回原因
     */
    refused_reason?: string;
    /**
     * 配送单明细
     */
    order_items?: OpenDistributionOrderItemDTO;
    /**
     * 关联出库单据号
     */
    out_biz_bill_no?: string;
    /**
     * 关联入库单据号
     */
    in_biz_bill_no?: string;
    /**
     * 配送出库时间
     */
    distributed_out_time?: string;
  }

  /**
   * 配送单明细
   */
  export interface OpenDistributionOrderItemDTO {
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
     * 申请数量
     */
    apply_num?: string;
    /**
     * 预发数量
     */
    pre_out_num?: string;
    /**
     * 实际出库数量
     */
    actual_out_num?: string;
    /**
     * 实际入库数量
     */
    actual_in_num?: string;
  }

}
