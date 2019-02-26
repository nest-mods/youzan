export namespace RetailGoodsRetailStockStockoutCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 出库时间
     */
    business_time?: string;
    /**
     * 幂等单号（请求唯一标识）
     */
    idempotent_no?: string;
    /**
     * 入库备注
     */
    remark?: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 出库单明细
     */
    stock_out_order_items?: StockOutOrderItemCreateRequest;
    /**
     * 出库单类型（  OTHER_OUT_LOSS(43, "其他出库-报损"),
  *   OTHER_OUT_USE(44, "其他出库-领用"),
  *   OTHER_OUT_OTHER(49, "其他出库-其他"),）
     */
    stock_out_type?: number;
    /**
     * 门店或独立仓id   注意：连锁版必填
     */
    warehouse_id?: number;
  }

  /**
   * 
   */
  export interface StockOutOrderItemCreateRequest {
    /**
     * 数量
     */
    amount?: number;
    /**
     * 商品名称
     */
    productName?: string;
    /**
     * 编码
     */
    skuNo?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 
     */
    totalSell?: number;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 出库成本价
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
   * 响应参数
   */
  export interface Response {
    /**
     * 出库单编号
     */
    business_order_no?: string;
  }

}
