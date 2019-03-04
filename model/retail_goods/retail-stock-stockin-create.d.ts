export namespace RetailGoodsRetailStockStockinCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 采购入库时间
     */
    business_time?: string;
    /**
     * 幂等单号（请求唯一标示）
     */
    idempotent_no?: string;
    /**
     * 入库备注
     */
    remark?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
    /**
     * 入库明细
     */
    stock_in_order_items?: StockInOrderItemCreate[];
    /**
     * 供应商id
     */
    vendor_id?: number;
    /**
     * 供应商名称
     */
    vendor_name?: string;
    /**
     * 门店或独立仓id   注意：连锁版必填
     */
    warehouse_id?: number;
  }

  /**
   * 
   */
  export interface StockInOrderItemCreate {
    /**
     * 数量（千倍）
     */
    amount?: number;
    /**
     * 商品名称
     */
    productName?: string;
    /**
     * sku编码
     */
    skuNo?: string;
    /**
     * 规格描述
     */
    specifications?: string;
    /**
     * 
     */
    totalCost?: number;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 
     */
    unitCost?: number;
    /**
     * 含税成本总金额(单位元) 可不传
     */
    withTaxAmountStr?: string;
    /**
     * 含税成本单价 (单位元), unitCost和withTaxCostStr必须传一个
     */
    withTaxCostStr?: string;
  }

  /**
   * 
   */
  export interface Long {
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
     * 入库单号
     */
    business_order_no?: string;
  }

}
