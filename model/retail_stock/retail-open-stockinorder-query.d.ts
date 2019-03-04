export namespace RetailStockRetailOpenStockinorderQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 创建截止时间
     */
    create_time_end?: string;
    /**
     * 创建开始时间
     */
    create_time_start?: string;
    /**
     * 入库单据类型：
  * BYRK=报溢入库
  * PYRK=盘盈入库
  * CGRK=采购入库
  * THRK=退货入库
  * DBRK=调拨入库
     */
    order_type?: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页条数
     */
    page_size?: number;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 单据信息
     */
    orders?: OpenStockInOrderDTO[];
    /**
     * 分页信息
     */
    paginator?: OpenPaginatorDTO;
  }

  /**
   * 单据信息
   */
  export interface OpenStockInOrderDTO {
    /**
     * 单据编号
     */
    biz_bill_no?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
    /**
     * 单据创建时间
     */
    create_time?: string;
    /**
     * 入库单据类型：
  * BYRK=报溢入库
  * PYRK=盘盈入库
  * CGRK=采购入库
  * THRK=退货入库
  * DBRK=调拨入库
     */
    order_type?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 制单人
     */
    creator?: string;
    /**
     * 关联单据号，如交易出库关联的订单号
     */
    source_order_no?: string;
    /**
     * 订单明细
     */
    order_items?: OpenStockOrderItemDTO[];
    /**
     * 供应商编码
     */
    supplier_code?: string;
  }

  /**
   * 订单明细
   */
  export interface OpenStockOrderItemDTO {
    /**
     * 商品编码
     */
    sku_code?: string;
    /**
     * 商品条码
     */
    sku_no?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 出库数量
     */
    quantity?: string;
    /**
     * 含税成本单价（元）
     */
    with_tax_cost?: string;
    /**
     * 税总金额（含税成本单价*数量）
     */
    with_tax_amount?: string;
    /**
     * 不含税成本单价（元）
     */
    without_tax_cost?: string;
    /**
     * 不含税总金额（不含税成本单价*数量）
     */
    without_tax_amount?: string;
    /**
     * 销项税率
     */
    output_tax_rate?: string;
    /**
     * 进项税率
     */
    input_tax_rate?: string;
    /**
     * 成交单价（单个商品的实付单价，销售出库单中才存在）（元）
     */
    real_sales_price?: string;
    /**
     * 成交单价（单个商品的实付单价，销售出库单中才存在）（元）
     */
    with_tax_income?: string;
  }

  /**
   * 分页信息
   */
  export interface OpenPaginatorDTO {
    /**
     * 页码
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 总数
     */
    total_count?: number;
  }

}
