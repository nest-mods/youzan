export namespace RetailGoodsRetailStockGoodsapplyGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据号
     */
    biz_bill_no?: string;
    /**
     * 系统来源
     */
    retail_source?: string;
    /**
     * 是否显示明细
     */
    show_item?: boolean;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 要货申请单据详情
     */
    response?: GoodsApplyOrderVO;
  }

  /**
   * 要货申请单据详情
   */
  export interface GoodsApplyOrderVO {
    /**
     * 审核时间
     */
    checked_at?: Date;
    /**
     * 总部的kdtId
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
  * 1.调拨单
  * 2.要货申请单
  * 3.配送单
     */
    type?: number;
    /**
     * 单据详细类型
  * 11.库间调拨单
  * 12.库内调拨单
  * 21.要货申请单
  * 31.配送单
     */
    business_type?: number;
    /**
     * 出库仓库id
     */
    from_kdt_id?: number;
    /**
     * 入库仓库id
     */
    to_kdt_id?: number;
    /**
     * 出库仓库名称
     */
    from_kdt_name?: string;
    /**
     * 入库仓库名称
     */
    to_kdt_name?: string;
    /**
     * 创建人名称
     */
    operator_name?: string;
    /**
     * 创建人id
     */
    admin_id?: number;
    /**
     * 创建人仓库名称
     */
    warehouse_of_admin?: string;
    /**
     * 单据状态 
  * 1.待审核  2:待出库  3:待入库
  * 4.已驳回  5:已关闭  6已完成
  * 7:出库执行中  8:入库执行中
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
     * 记录版本号
     */
    version?: number;
    /**
     * 出库单据单据号
     */
    out_biz_bill_no?: string;
    /**
     * 入库单据单据号
     */
    in_biz_bill_no?: string;
    /**
     * 拓展信息，json字符串
     */
    ext_info?: string;
    /**
     * 库间单明细信息
     */
    business_order_items?: InterBusinessOrderItemVO[];
  }

  /**
   * 库间单明细信息
   */
  export interface InterBusinessOrderItemVO {
    /**
     * 自增id
     */
    id?: number;
    /**
     * 总部的kdtId
     */
    kdt_id?: number;
    /**
     * 业务单据号
     */
    biz_bill_no?: string;
    /**
     * 单据类型  1.调拨单  2.要货申请单  3.配送单
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
     * 预发数量
     */
    pre_out_num?: number;
    /**
     * 成本单价
     */
    unit_price?: number;
    /**
     * 成本总价
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
     * 规格信息
     */
    specifications?: string;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 记录乐观锁
     */
    version?: string;
  }

}
