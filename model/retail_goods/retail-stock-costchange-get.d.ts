export namespace RetailGoodsRetailStockCostchangeGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 调价单单号
     */
    business_order_no?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    retail_source?: string;
    /**
     * 是否显示明细
     */
    show_item?: boolean;
    /**
     * 门店或独立仓id   注意：连锁版必填
     */
    warehouse_id?: number;
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
     * 成本变更实体信息
     */
    cost_change_order_vo?: CostChangeOrderVO;
  }

  /**
   * 成本变更实体信息
   */
  export interface CostChangeOrderVO {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 仓库名称
     */
    warehouse_name?: string;
    /**
     * 业务单据号
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
     * 操作人
     */
    operator_name?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 变更总金额
     */
    change_total_cost?: number;
    /**
     * 成本变更明细
     */
    cost_change_order_items?: CostChangeOrderItemVO;
  }

  /**
   * 成本变更明细
   */
  export interface CostChangeOrderItemVO {
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 规格
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
     * 调整前成本单价
     */
    before_unit_cost?: number;
    /**
     * 调整前后成本单价
     */
    after_unit_cost?: number;
    /**
     * 变更时库存值
     */
    change_current_num?: number;
    /**
     * 变更小计
     */
    change_total_cost?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 业务单据号
     */
    biz_bill_no?: string;
    /**
     * 业务类型
     */
    type?: number;
    /**
     * skuId
     */
    sku_id?: number;
  }

}
