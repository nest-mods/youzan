export namespace RetailGoodsRetailStocksStockcheckSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 盘点单单号
     */
    business_order_no?: string;
    /**
     * 盘点单状态（CHECKING(1, "盘点中"), DONE(2, "已完成"), CANCEL(3, "已作废")）
     */
    check_order_status?: number[];
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
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
    /**
     * 开始时间
     */
    start_time?: string;
    /**
     * 仓库id列表  注意：连锁版必填
     */
    warehouse_ids?: number[];
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
     * 实体信息
     */
    items?: StockCheckVO;
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
   * 实体信息
   */
  export interface StockCheckVO {
    /**
     * 业务单据单号
     */
    biz_bill_no?: string;
    /**
     * 幂等单号（请求唯一标识）
     */
    idempotent_no?: string;
    /**
     * 盘点时间
     */
    business_time?: number;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 业务类型（STOCK_CHECK(1, "库存盘点单"),
  *   STOCK_IN(2, "采购入库单"),
  *   STOCK_RETURN(3, "退货入库单"),
  *   STOCK_OUT(4, "出库单")）
     */
    type?: number;
    /**
     * 退货入库单用于记录关联订单号
     */
    source_order_no?: string;
    /**
     * 员工名称
     */
    operator_name?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 更新时间
     */
    updated_at?: number;
    /**
     * 员工id
     */
    admin_id?: number;
    /**
     * 状态（DOING(1, "待处理"),
  *   DONE(2, "处理成功"),
  *   FAIL(3, "处理失败")）
     */
    status?: number;
    /**
     * 盘点单明细
     */
    stock_take_order_items?: StockCheckItemVO;
    /**
     * 仓库名称
     */
    warehouse_name?: string;
  }

  /**
   * 盘点单明细
   */
  export interface StockCheckItemVO {
    /**
     * 业务单据单号
     */
    biz_bill_no?: string;
    /**
     * 系统库存数量，amount= realAmount - oldAmount
     */
    amount?: number;
    /**
     * 成本价小计
     */
    total_cost?: number;
    /**
     * 数据库原值
     */
    old_amount?: number;
    /**
     * skuId
     */
    sku_id?: number;
    /**
     * 业务类型
     */
    type?: number;
    /**
     * 版本号
     */
    version?: number;
    /**
     * 规格描述
     */
    specifications?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 实际库存数量,变更后的值
     */
    real_amount?: number;
    /**
     * 商家id
     */
    kdt_id?: number;
    /**
     * 单位
     */
    unit?: string;
    /**
     * sku序号
     */
    sku_no?: string;
    /**
     * 操作者id
     */
    admin_id?: number;
    /**
     * 成本单价
     */
    unit_cost?: number;
  }

}
