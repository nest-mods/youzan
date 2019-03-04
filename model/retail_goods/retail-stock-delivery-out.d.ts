export namespace RetailGoodsRetailStockDeliveryOut {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据号
     */
    biz_bill_no?: string;
    /**
     * 商品列表
     */
    items?: DeliveryOutItemRequest[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 来源参数（需调用方自定义标识：OPEN_XXXX）
     */
    retail_source?: string;
  }

  /**
   * 
   */
  export interface DeliveryOutItemRequest {
    /**
     * 实际出库数量（须乘以1000传入，如：现实中出库数量为5，则须传5000）
     */
    out_num?: number;
    /**
     * 商品skuId
     */
    sku_id?: number;
    /**
     * 商品成本价（须乘以100传入）
     */
    unit_cost?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 成功生成的出库单据号
     */
    response?: string;
  }

}
