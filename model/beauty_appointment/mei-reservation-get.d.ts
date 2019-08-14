// tslint:disable:max-line-length variable-name
export namespace BeautyAppointmentMeiReservationGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业的token
     */
    m_token: string;
    /**
     * 要查询的预约单号
     */
    order_no: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 预约单单号
     */
    order_no?: string;
    /**
     * 预约单是否需哟啊支付
     * 0 不需要支付
     * 1 需要支付
     */
    need_pay?: number;
    /**
     * 顾客姓名
     */
    customer_name?: string;
    /**
     * 取消来源
     * 1 商家主动取消
     * 2 买家主动取消
     * 3 开单后取消
     */
    cancel_source?: number;
    /**
     * 实际支付金额，单位：分
     */
    real_pay?: number;
    /**
     * 预约人电话
     */
    mobile?: string;
    /**
     * 预约单创建时间
     */
    created_at?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 外部业务单号，比如预约是由其他业务创建，那么这里就会放置该业务的单号
     */
    out_biz_no?: string;
    /**
     * 买家的有赞账号id
     */
    yz_uid?: number;
    /**
     * 预约来源
     * 1 商家发起的预约
     * 2 买家发起的预约
     */
    from_source?: number;
    /**
     * 预约取消原因
     */
    cancel_reason?: string;
    /**
     * 支付状态
     * 10 待支付
     * 20 无需支付
     * 30 已支付
     */
    pay_status?: number;
    /**
     * 预约单状态
     * 5 已创建
     * 10 待服务
     * 20 已开单
     * 30 已完成
     * 97 已取消（由外部业务取消）
     * 98 已取消
     */
    reservation_status?: number;
    /**
     * 开单时间
     */
    billed_at?: number;
    /**
     * 到店时间
     */
    arrange_at?: number;
    /**
     * 外部业务状态
     */
    out_biz_state?: number;
    /**
     * 取消时间
     */
    cancel_at?: number;
    /**
     * 预约的项目列表
     */
    reservation_items?: MeiReservationItem[];
    /**
     * 订单单号。当预约单支付过才会有该字段，通过该字段可以查询支付的订单信息
     */
    trade_order_no?: string;
  }

  /**
   * 预约的项目列表
   */
  export interface MeiReservationItem {
    /**
     * 预约项名称
     */
    item_sku_name?: string;
    /**
     * 预约项id
     */
    item_id?: number;
    /**
     * 预约项的图片链接
     */
    image_url?: string;
    /**
     * 如果已经支付，那么预约项的支付金额，单位：分
     */
    real_pay?: number;
    /**
     * 预约的数量
     */
    num?: number;
    /**
     * 预约的资源类型：
     * 0 没有占用资源
     * 1占用了技师资源
     */
    resource_type?: number;
    /**
     * 预约项的服务id
     */
    goods_id?: number;
    /**
     * 预约项目id
     */
    reservation_item_id?: string;
    /**
     * 预约项目名称
     */
    item_name?: string;
    /**
     * 预约的服务的规格id
     */
    sku_id?: number;
    /**
     * 预约项的资源id
     * 0 表示没有使用预约资源
     */
    resource_id?: number;
    /**
     * 预约的项目的原价，单位：分
     */
    origin_price?: number;
    /**
     * 预约的资源名称，例如资源类型是技师，则这个为技师名称
     */
    resource_name?: string;
  }

}
