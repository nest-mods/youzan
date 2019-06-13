export namespace RetailStockRetailOpenAllotorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 调拨单号
     */
    allot_order_no: string;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 调拨单
     */
    response?: OpenAllotOrderDTO;
  }

  /**
   * 调拨单
   */
  export interface OpenAllotOrderDTO {
    /**
     * 调拨单号
     */
    allot_order_no?: string;
    /**
     * 调出仓库仓库编码
     */
    from_warehouse_code?: string;
    /**
     * 调出仓库仓库名称
     */
    from_warehouse_name?: string;
    /**
     * 调入仓库仓库编码
     */
    to_warehouse_code?: string;
    /**
     * 调入仓库仓库名称
     */
    to_warehouse_name?: string;
    /**
     * 单据状态：
  * 1=待审核
  * 2=待出库
  * 3=待入库
  * 4=已驳回
  * 5=已关闭
  * 6=已完成
  * 7=出库执行中
  * 8=入库执行中
     */
    status?: number;
    /**
     * 单据类型：
  * 1=店内调拨单
  * 2=店间调拨单
     */
    type?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 驳回原因
     */
    refused_reason?: string;
    /**
     * 关联出库单单据号
     */
    out_biz_no?: string;
    /**
     * 关联入库单单据号
     */
    in_biz_no?: string;
    /**
     * 制单人
     */
    creator?: string;
    /**
     * 制单时间
     */
    created_time?: string;
    /**
     * 调拨单明细
     */
    order_items?: OpenAllotOrderItemDTO[];
  }

  /**
   * 调拨单明细
   */
  export interface OpenAllotOrderItemDTO {
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
    /**
     * 成本单价
     */
    unit_cost?: string;
    /**
     * 配送价
     */
    delivery_cost?: string;
    /**
     * 审核配送价
     */
    checked_delivery_cost?: string;
    /**
     * 总价
     */
    total_cost?: string;
  }

}
