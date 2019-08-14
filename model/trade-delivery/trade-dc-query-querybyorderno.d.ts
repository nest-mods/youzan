// tslint:disable:max-line-length variable-name
export namespace TradeDeliveryTradeDcQueryQuerybyorderno {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否包含配送单信息 不包含具体的物流信息
     */
    include_dist_order?: boolean;
    /**
     * 是否包含物流详情
     */
    include_dist_order_and_detail?: boolean;
    /**
     * 是否包含商品发货状态
     */
    include_item_delivery_status?: boolean;
    /**
     * 是否包含操作记录
     */
    include_operation_log?: boolean;
    /**
     * 店铺号
     */
    kdt_id: number;
    /**
     * 订单号
     */
    order_no: string;
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
     * 发货单
     */
    deliveryOrders?: DeliveryOrderDTO[];
  }

  /**
   * 发货单
   */
  export interface DeliveryOrderDTO {
    /**
     * 货单号
     */
    deliveryNo?: string;
    /**
     * 订单号
     */
    orderNo?: string;
    /**
     * 店铺Id
     */
    kdtId?: number;
    /**
     * 出货点Id
     */
    deliveryPointId?: number;
    /**
     * 货单状态
     * 0 待发货
     * 1 已发货
     * 2 无需发货
     */
    status?: number;
    /**
     * 配送方式
     * 1 快递
     * 2 同城送
     * 3 自提
     */
    distType?: number;
    /**
     * 扩展信息
     */
    extend?: string;
    /**
     * 发货时间
     */
    createTime?: Date;
    /**
     * 货单更新时间
     */
    updateTime?: Date;
    /**
     * 应付运费
     */
    deliveryFee?: number;
    /**
     * 实付运费
     */
    realDeliveryFee?: number;
    /**
     * 货单备注
     */
    remark?: string;
    /**
     * 配送单
     */
    distOrderDTOs?: DistOrderDTO[];
    /**
     * 发货单明细
     */
    deliveryOrderItems?: DeliveryOrderItemDTO[];
    /**
     * 操作记录
     */
    operationLogs?: OperationLogDTO[];
  }

  /**
   * 配送单
   */
  export interface DistOrderDTO {
    /**
     * 主订单ID
     */
    orderNo?: string;
    /**
     * 配送单id
     */
    distId?: string;
    /**
     * 店铺id
     */
    kdtId?: number;
    /**
     * 发货类型
     * 11 快递-系统呼叫快递
     * 12 快递-商家呼叫快递
     * 13 快递-无需物流
     * 14 快递-电子面单
     * 21 同城送-商家呼叫三方配送
     * 22 同城送-商家自主配送
     * 23 同城送-系统呼叫三方配送
     * 24 自提-核销提货
     * 92 自提-无码提货
     * 91 自提-有码提货
     */
    deliveryType?: number;
    /**
     * 发货单号
     */
    deliveryNo?: string;
    /**
     * 出货点id
     */
    deliveryPointId?: number;
    /**
     * 扩展字段
     */
    extend?: string;
    /**
     * 配送单版本号
     */
    version?: string;
    /**
     * 配送单状态
     * 0 未发货
     * 1 发货中
     * 2 已发货
     * 3 已取消
     */
    status?: number;
    /**
     * 配送方式
     * 1 快递
     * 2 同城送
     * 3 自提
     */
    distType?: number;
    /**
     * 物流快递信息
     */
    expressInfo?: ExpressInfo;
    /**
     * 同城送配送信息详情
     */
    localDeliveryDetail?: LocalDeliveryDetail;
  }

  /**
   * 物流快递信息
   */
  export interface ExpressInfo {
    /**
     * 物流状态 0：在途 1：揽件 2：疑难 3：签收 4：退签 5：派件 6：退回
     */
    state?: number;
    /**
     * 物流信息json
     */
    data?: string;
    /**
     * 物流单号
     */
    expressNo?: string;
    /**
     * 物流公司id
     */
    expressId?: number;
    /**
     * 快递发货->物流详情
     */
    expressDetail?: ExpressDetail;
  }

  /**
   * 快递发货->物流详情
   */
  export interface ExpressDetail {
    /**
     * 物流公司名称
     */
    expressCompanyName?: string;
    /**
     * 物流进度详情
     */
    expressProgressInfo?: string;
    /**
     * 物流状态 
     * 0 待发货
     * 1 已发货
     * 2 已签收
     * 6 待取货
     * 7 已取消
     * 8 已过期
     */
    expressStatus?: string;
    /**
     * 物流公司编码
     */
    com?: string;
  }

  /**
   * 同城送配送信息详情
   */
  export interface LocalDeliveryDetail {
    /**
     * 货单号
     */
    deliveryNo?: string;
    /**
     * 违约金
     */
    deductFee?: number;
    /**
     * 同城送状态描述
     *   STATUS_NONE(Integer.valueOf(-1), "初始状态", false),
     *   STATUS_NORMAL(Integer.valueOf(0), "初始状态", false),
     *   STATUS_ORDERING(Integer.valueOf(1), "待接单", false),
     *   STATUS_TAKING(Integer.valueOf(2), "待取货", false),
     *   STATUS_SENDING(Integer.valueOf(3), "配送中", false),
     *   STATUS_DONE(Integer.valueOf(4), "已完成", true),
     *   STATUS_CANCEL(Integer.valueOf(5), "已取消", true),
     *   STATUS_CANCEL_EXCEPTION(Integer.valueOf(6), "取消异常", false),
     *   STATUS_OVERDUE(Integer.valueOf(7), "已过期", true);
     */
    distStatus?: string;
    /**
     * 同城送状态码
     *   STATUS_NONE(Integer.valueOf(-1), "初始状态", false),
     *   STATUS_NORMAL(Integer.valueOf(0), "初始状态", false),
     *   STATUS_ORDERING(Integer.valueOf(1), "待接单", false),
     *   STATUS_TAKING(Integer.valueOf(2), "待取货", false),
     *   STATUS_SENDING(Integer.valueOf(3), "配送中", false),
     *   STATUS_DONE(Integer.valueOf(4), "已完成", true),
     *   STATUS_CANCEL(Integer.valueOf(5), "已取消", true),
     *   STATUS_CANCEL_EXCEPTION(Integer.valueOf(6), "取消异常", false),
     *   STATUS_OVERDUE(Integer.valueOf(7), "已过期", true);
     */
    distStatusCode?: number;
    /**
     * 配送员经度
     */
    distLng?: string;
    /**
     * 配送员纬度
     */
    distLat?: string;
    /**
     * 配送员小费
     */
    tip?: number;
    /**
     * 配送费
     */
    deliveryFee?: number;
    /**
     * 配送员距离
     */
    distance?: string;
    /**
     * 发单时间
     */
    createTime?: string;
    /**
     * 接单时间
     */
    acceptTime?: string;
    /**
     * 取货时间
     */
    fetchTime?: string;
    /**
     * 送达时间
     */
    finishTime?: string;
    /**
     * 取消时间
     */
    cancelTime?: string;
    /**
     * 取消原因
     */
    cancelReason?: string;
    /**
     * 过期时间
     */
    expireTime?: string;
  }

  /**
   * 发货单明细
   */
  export interface DeliveryOrderItemDTO {
    /**
     * 货单号
     */
    deliveryNo?: string;
    /**
     * 订单号
     */
    orderNo?: string;
    /**
     * 店铺Id
     */
    kdtId?: number;
    /**
     * 订单商品id，即子订单号
     */
    itemId?: number;
    /**
     * 商品数量
     */
    num?: number;
    /**
     * 发货商品数量
     */
    weight?: number;
    /**
     * 商品发货状态
     * 0 待发货
     * 1 已发货
     * 2 无需发货
     */
    deliveryStatus?: number;
    /**
     * 商品发货状态描述
     */
    deliveryStatusDesc?: string;
    /**
     * 商品无需发货的原因
     */
    noNeedDeliveryReason?: string;
  }

  /**
   * 操作记录
   */
  export interface OperationLogDTO {
    /**
     * 发货单号
     */
    deliveryNo?: string;
    /**
     * 配送单号
     */
    distId?: string;
    /**
     * 订单号
     */
    orderNo?: string;
    /**
     * 店铺Id
     */
    kdtId?: number;
    /**
     * 操作人Id
     */
    operatorId?: number;
    /**
     * 操作人姓名
     */
    operatorName?: string;
    /**
     * 操作人手机号
     */
    operatorPhone?: string;
    /**
     * 操作的动作
     */
    action?: string;
    /**
     * 备注信息
     */
    note?: string;
    /**
     * 操作人角色
     */
    role?: string;
    /**
     * 操作人角色描述
     */
    roleDesc?: string;
    /**
     * 日志创建时间
     */
    createTime?: Date;
  }

}
