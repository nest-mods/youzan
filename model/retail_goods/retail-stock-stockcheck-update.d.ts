export namespace RetailGoodsRetailStockStockcheckUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 盘点单单号
     */
    business_order_no?: string;
    /**
     * 是否完成盘点
     */
    is_finish?: boolean;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
    /**
     * 列表
     */
    update_items?: StockCheckItemCreateRequest;
    /**
     * 门店或独立仓id   注意：连锁版必填
     */
    warehouse_id?: number;
  }

  /**
   * 
   */
  export interface StockCheckItemCreateRequest {
    /**
     * 商品名称
     */
    productName?: string;
    /**
     * 系统实际库存
     */
    realAmount?: number;
    /**
     * 实际库存str类型
     */
    realAmountStr?: string;
    /**
     * 
     */
    skuId?: number;
    /**
     * sku编码
     */
    skuNo?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 单位
     */
    unit?: string;
  }

  /**
   * 
   */
  export interface Long {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
