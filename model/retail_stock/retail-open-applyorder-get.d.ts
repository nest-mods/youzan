export namespace RetailStockRetailOpenApplyorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要货单编号
     */
    apply_order_no?: string;
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
     * 要货申请单
     */
    response?: OpenGoodsApplyOrderDTO;
  }

  /**
   * 要货申请单
   */
  export interface OpenGoodsApplyOrderDTO {
    /**
     * 要货申请单单号
     */
    apply_biz_no?: string;
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
     * 1-待审核 2-待出库 3-待入库 4-已驳回 5-已关闭 6-已完成 7-出库执行中 8-入库执行中
     */
    status?: number;
    /**
     * 拒绝理由
     */
    refused_reason?: string;
    /**
     * 出库单据编号
     */
    out_biz_no?: string;
    /**
     * 入库单据编号
     */
    in_biz_no?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 制单人
     */
    creator?: string;
    /**
     * 单据日期
     */
    created_time?: string;
    /**
     * 要货申请单-商品详情
     */
    order_items?: OpenApplyOrderItemDTO[];
    /**
     * 关联配送单号
     */
    dis_orders?: string[];
  }

  /**
   * 要货申请单-商品详情
   */
  export interface OpenApplyOrderItemDTO {
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
     * 配送价（元）
     */
    delivery_cost?: string;
    /**
     * 审核配送价（元）
     */
    checked_delivery_cost?: string;
    /**
     * 商品sku编码
     */
    sku_code?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 商品sku条码
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 含税成本单价（元）
     */
    with_tax_cost?: string;
    /**
     * 不含税成本单价（元）
     */
    without_tax_cost?: string;
    /**
     * 不含税总金额
     */
    without_tax_amount?: string;
    /**
     * 含税总金额
     */
    with_tax_amount?: string;
  }

}
