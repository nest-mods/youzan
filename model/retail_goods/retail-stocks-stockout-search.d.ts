export namespace RetailGoodsRetailStocksStockoutSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 业务操作人id
     */
    biz_operator_id?: number;
    /**
     * 出库单单号
     */
    business_order_no?: string;
    /**
     * 结束时间
     */
    end_time?: string;
    /**
     * 查询页面
     */
    page_no?: number;
    /**
     * 一页数量
     */
    page_size?: number;
    /**
     * 是否展示子信息
     */
    show_item?: boolean;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
    /**
     * 开始时间
     */
    start_time?: string;
    /**
     * 出库单类型（41, "网店销售出库",
  * 42, "门店销售出库",  43, "其他出库-报损",44, "其他出库-领用",49, "其他出库-其他"）
     */
    stock_out_types?: number[];
    /**
     * 仓库id列表  注意：连锁版必填
     */
    warehouse_ids?: number[];
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
     * 分页信息
     */
    paginator?: Paginator;
    /**
     * 出库单详情
     */
    items?: StockOutOrderVO[];
  }

  /**
   * 分页信息
   */
  export interface Paginator {
    /**
     * 页码
     */
    page?: number;
    /**
     * 数量
     */
    size?: number;
    /**
     * 总条数
     */
    totalCount?: number;
  }

  /**
   * 出库单详情
   */
  export interface StockOutOrderVO {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 业务时间
     */
    business_time?: Date;
    /**
     * 业务类型（STOCK_CHECK(1, "库存盘点单"),
  *   STOCK_IN(2, "采购入库单"),
  *   STOCK_RETURN(3, "退货入库单"),
  *   STOCK_OUT(4, "出库单")）
     */
    type?: number;
    /**
     * 操作者id
     */
    admin_id?: number;
    /**
     * 业务单据单号
     */
    biz_bill_no?: string;
    /**
     * 幂等单号（请求唯一标识）
     */
    idempotent_no?: string;
    /**
     * 用于存储退货入库单关联的订单号（其他单据为业务单号）
     */
    source_order_no?: string;
    /**
     * 单据业务类型（  SELL_ONLINE_OUT(41, "网店销售出库"),
  *   SELL_OFFLINE_OUT(42, "门店销售出库"),）
     */
    order_biz_type?: number;
    /**
     * 创建人
     */
    create_name?: string;
    /**
     * 操作人
     */
    operator_name?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联订单号
     */
    relation_order_no?: string;
    /**
     * 出库单详情
     */
    stock_out_order_items?: StockOutOrderItemVO[];
    /**
     * 仓库名称
     */
    warehouse_name?: string;
  }

  /**
   * 出库单详情
   */
  export interface StockOutOrderItemVO {
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 规格描述
     */
    specifications?: string;
    /**
     * 条码
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 数量（千倍）
     */
    amount?: number;
    /**
     * 商家id
     */
    kdt_id?: number;
    /**
     * 业务单据单号
     */
    biz_bill_no?: string;
    /**
     * 业务类型
     */
    type?: number;
    /**
     * skuId
     */
    skuId?: number;
    /**
     * 操作者id
     */
    admin_id?: number;
    /**
     * 成本价小计
     */
    total_cost?: number;
    /**
     * 销售小计
     */
    total_sell?: number;
    /**
     * 成本单价
     */
    unit_cost?: number;
    /**
     * 销售单价
     */
    unit_sell?: number;
  }

}
