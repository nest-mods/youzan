export namespace RetailGoodsRetailStockDeliverySearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 操作人id
     */
    biz_operator_id?: number;
    /**
     * 结束时间
     */
    end_time?: string;
    /**
     * 出库kdtId
     */
    from_kdt_id?: number;
    /**
     * 总部id
     */
    group_kdt_id?: number;
    /**
     * 商品名称或编码
     */
    name_or_no?: string;
    /**
     * 单据号
     */
    order_no?: string;
    /**
     * 单据状态
     */
    order_status?: number;
    /**
     * 单据状态列表
     */
    order_status_list?: number[];
    /**
     * 单据类型
     */
    order_type?: number;
    /**
     * 当前页码
     */
    page_no?: number;
    /**
     * 一页展示数量
     */
    page_size?: number;
    /**
     * 来源
     */
    retail_source?: string;
    /**
     * 是否展示其他状态的单据数量
     */
    show_all_num?: boolean;
    /**
     * 是否展示单据详细商品信息
     */
    show_item?: boolean;
    /**
     * 商品名称
     */
    sku_name?: string;
    /**
     * 商品编号
     */
    sku_no?: string;
    /**
     * 开始时间
     */
    start_time?: string;
    /**
     * 入库kdtId
     */
    to_kdt_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 配送单据列表分页信息
     */
    response?: DeliveryPaginatorSearchVO;
  }

  /**
   * 配送单据列表分页信息
   */
  export interface DeliveryPaginatorSearchVO {
    /**
     * 配送单列表查询单个response
     */
    items?: DeliverySearchVO;
    /**
     * 
     */
    paginator?: Paginator;
  }

  /**
   * 配送单列表查询单个response
   */
  export interface DeliverySearchVO {
    /**
     * 自增ID
     */
    id?: number;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
    /**
     * 总部kdtId
     */
    kdt_id?: number;
    /**
     * 单据号
     */
    biz_bill_no?: string;
    /**
     * 幂等单号
     */
    idempotent_no?: string;
    /**
     * 业务单据类型
  * 1.调拨单   2.要货申请单
  * 3.配送单
     */
    type?: number;
    /**
     * 业务单据详细类型
  * 11.库间调拨单  12.库内调拨单
  * 21.要货申请单
  * 31.配送单
     */
    business_type?: number;
    /**
     * 出库仓库kdtId
     */
    from_kdt_id?: number;
    /**
     * 入库店铺kdtId
     */
    to_kdt_id?: number;
    /**
     * 出库仓库名称
     */
    from_kdt_name?: string;
    /**
     * 入库店铺名称
     */
    to_kdt_name?: string;
    /**
     * 申请人名称
     */
    operator_name?: string;
    /**
     * 申请人id
     */
    admin_id?: number;
    /**
     * 申请店铺kdtId
     */
    kdt_id_of_admin?: number;
    /**
     * 申请店铺名称
     */
    warehsoue_of_admin?: string;
    /**
     * 状态
  * 1.待审核  2.待出库  3.待入库  4.已驳回  5.已关闭  6.已完成  7.出库执行中  8.入库执行中
     */
    status?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 驳回原因
     */
    refused_reason?: string;
    /**
     * 调拨单明细返回信息
     */
    business_order_items?: InterBusinessOrderItemOfProdVO;
    /**
     * 数据乐观锁
     */
    version?: number;
    /**
     * 配送时间
     */
    distributed_out_at?: Date;
    /**
     * 对应申请单号列表
     */
    source_order_nos?: string[];
  }

  /**
   * 调拨单明细返回信息
   */
  export interface InterBusinessOrderItemOfProdVO {
    /**
     * 总部kdtId
     */
    kdt_id?: number;
    /**
     * 单据号
     */
    biz_bill_no?: string;
    /**
     * 单据类型   1:调拨单   2:要货申请单   3:配送单
     */
    type?: number;
    /**
     * 商品skuId
     */
    sku_id?: number;
    /**
     * 申请数量
     */
    apply_num?: number;
    /**
     * 实际出库数量
     */
    actual_out_num?: number;
    /**
     * 实际入库数量
     */
    actual_in_num?: number;
    /**
     * 成本单价
     */
    unit_price?: number;
    /**
     * 成本总计
     */
    total_price?: number;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 商品图片
     */
    product_picture?: string;
    /**
     * 规格描述
     */
    specifications?: string;
    /**
     * 商品条码
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
  }

  /**
   * 
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

}
