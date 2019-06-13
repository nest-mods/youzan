export namespace RetailGoodsRetailStockCostchangeCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 成本调价明细
     */
    cost_change_order_items: CostChangeOrderItemCreate[];
    /**
     * 幂等单号（请求唯一标识）
     */
    idempotent_no?: string;
    /**
     * 备注 max=200
     */
    remark?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    retail_source: string;
    /**
     * 门店或独立仓id   注意：连锁版必填
     */
    warehouse_id?: number;
  }

  /**
   * 
   */
  export interface CostChangeOrderItemCreate {
    /**
     * 
     */
    after_unit_cost?: number;
    /**
     * 调整后成本单价 (单位元)，与after_unit_cost必须有一个有值
     */
    after_with_tax_cost_str?: string;
    /**
     * 
     */
    before_unit_cost?: number;
    /**
     * 调整前成本单价 (单位元)
     */
    before_with_tax_cost_str?: string;
    /**
     * 幂等单号
     */
    idempotent_no?: string;
    /**
     * (必填)商品名称
     */
    product_name?: string;
    /**
     * 
     */
    sku_id?: number;
    /**
     * (必填)商品条码
     */
    sku_no?: string;
    /**
     * 规格信息
     */
    specifications?: string;
    /**
     * (必填)单位
     */
    unit?: string;
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
     * 成本调价单号
     */
    business_order_no?: string;
  }

}
