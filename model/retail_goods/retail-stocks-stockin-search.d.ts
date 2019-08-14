// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailStocksStockinSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 入库单单号
     */
    business_order_no?: string;
    /**
     * 结束时间
     */
    end_time?: string;
    /**
     * 入库单类型（TOCK_IN(2, "采购入库单"),STOCK_RETURN(3, "退货入库单")）
     */
    order_types?: number[];
    /**
     * 查询页面
     */
    page_no?: number;
    /**
     * 一页数量
     */
    page_size?: number;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 开始时间
     */
    start_time?: string;
    /**
     * 供货商id
     */
    vendor_id?: number;
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
     * 入库单详细信息
     */
    items?: StockInOrderVO[];
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
   * 入库单详细信息
   */
  export interface StockInOrderVO {
    /**
     * 操作人
     */
    operato_name?: string;
    /**
     * 供应商ID
     */
    vendor_id?: number;
    /**
     * 供应商名称
     */
    vendor_name?: string;
    /**
     * 实付金额(单位分)
     */
    real_payment?: number;
    /**
     * 入库备注
     */
    remark?: string;
    /**
     * 入库单明细
     */
    stock_in_order_items?: StockInOrderItemVO[];
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
     * 操作者id
     */
    admin_id?: number;
    /**
     * 状态
     */
    status?: number;
    /**
     * 业务时间
     */
    business_time?: Date;
    /**
     * 幂等单号
     */
    idempotent_no?: string;
    /**
     * 原单号--记录订单数据（其他单据为业务单号）
     */
    source_order_no?: string;
    /**
     * 版本号
     */
    version?: number;
    /**
     * 仓库名称
     */
    warehouse_name?: string;
  }

  /**
   * 入库单明细
   */
  export interface StockInOrderItemVO {
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
     * 数量（一千倍）
     */
    amount?: number;
    /**
     * skuId
     */
    sku_id?: number;
    /**
     * 成本单价（单位：分）
     */
    unit_cost?: number;
    /**
     * 成本价小计
     */
    total_cost?: number;
    /**
     * 操作者id
     */
    admin_id?: number;
    /**
     * 业务单据单号
     */
    biz_bill_no?: string;
    /**
     * 商家id
     */
    kdt_id?: number;
    /**
     * 业务类型
     */
    type?: number;
  }

}
