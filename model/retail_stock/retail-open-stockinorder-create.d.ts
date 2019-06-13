export namespace RetailStockRetailOpenStockinorderCreate {
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
     * 入库商品明细
     */
    order_items?: StockOrderItem[];
    /**
     * 入库单类型(PYRK=盘盈入库;CGRK=采购入库;THRK=退货入库;DBRK=调拨入库; PSRK=配送入库;YHTHRK=要货退货入库)
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
     * 供应商编码
     */
    supplier_code?: string;
    /**
     * 仓库编码（连锁版需指明具体入到哪个仓库）
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
     * 入库单号
     */
    biz_bill_no?: string;
  }

}
