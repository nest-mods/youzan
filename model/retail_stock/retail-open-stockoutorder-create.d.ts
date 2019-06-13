export namespace RetailStockRetailOpenStockoutorderCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据编号
     */
    biz_bill_no: string;
    /**
     * 单据创建日期(YYYY-MM-DD HH:MM:SS)
     */
    create_time: string;
    /**
     * 制单人
     */
    creator: string;
    /**
     * 物流公司id（配送出库用）
     */
    logistics_company_id?: number;
    /**
     * 物流公司（配送出库选填）
     */
    logistics_company_name?: string;
    /**
     * 物流单号（配送出库选填）
     */
    logistics_order_no?: string;
    /**
     * 出库商品明细
     */
    order_items: StockOrderItem[];
    /**
     * 出库单类型(PSCK=配送出库; BSCK=报损出库;PKCK=盘亏出库;DBCK=调拨出库; YHTHCK=要货退货出库)
     */
    order_type: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source: string;
    /**
     * 关联单据号，如交易出库关联的订单号
     */
    source_order_no?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
  }

  /**
   * 
   */
  export interface StockOrderItem {
    /**
     * 库存数量
     */
    quantity?: string;
    /**
     * 商品编码
     */
    sku_code?: string;
    /**
     * 供应商编码
     */
    supplier_code?: string;
    /**
     * 含税总金额（含税成本单价*数量）（元）
     */
    with_tax_amount?: string;
    /**
     * 含税成本单价（元）
     */
    with_tax_cost?: string;
    /**
     * 含税总收入（实付金额）
     */
    with_tax_income?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 出库单单据号
     */
    biz_bill_no?: string;
  }

}
