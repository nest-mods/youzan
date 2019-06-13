export namespace RetailGoodsRetailStockStockreturnCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 幂等单号(请求唯一标识)
     */
    idempotent_no?: string;
    /**
     * 是否盘点成0
     */
    is_need_pd?: boolean;
    /**
     * 入库备注
     */
    remark?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 退货单明细
     */
    stock_return_order_items?: StockReturnInOrderItemCreateRequest[];
  }

  /**
   * 
   */
  export interface StockReturnInOrderItemCreateRequest {
    /**
     * 实际入库数量（千倍）非空
     */
    amount?: number;
    /**
     * 幂等单号
     */
    idempotent_no?: string;
    /**
     * 破损数量（千倍）非空
     */
    loss_amount?: number;
    /**
     * 商品名称 非空
     */
    product_name?: string;
    /**
     * 退货数量（千倍）非空 returnAmount= amount + lossAmount
     */
    return_amount?: number;
    /**
     * 商品skuId 非空
     */
    sku_id?: number;
    /**
     * 条码 非空
     */
    sku_no?: string;
    /**
     * 关联退货单  非空
     */
    source_no?: string;
    /**
     * 规格信息
     */
    specifications?: string;
    /**
     * 单位  非空
     */
    unit?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 入库单号
     */
    business_order_no?: string;
  }

}
