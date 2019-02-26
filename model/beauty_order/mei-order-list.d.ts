export namespace BeautyOrderMeiOrderList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 开始时间。可不传，默认为空
     */
    begin_time?: number;
    /**
     * 结束时间。可不传，默认为空
     */
    end_time?: number;
    /**
     * 搜索词
     */
    keyword?: string;
    /**
     * 搜索词类型 
  * 1, "根据手机号搜索" 
  * 2, "根据订单编号搜索" 
  * 3, "根据yzUid搜索" 
  * 4, "根据父退款单号搜索"
  * 5, "收货人姓名"
  * 6, "收货人电话"
  * 7, "收货人电话后4位"
  * 8, "订单备注"
  * 9, "订单商品名称"
  * 10, "会员编号"
     */
    keyword_type?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 订单状态 
  * 30 待付款
  * 32 待发货
  * 34 待收货
  * 40 已完成
  * 99 取消
     */
    order_status?: number;
    /**
     * 订单类型 0, "普通" 1, "开卡购卡" 2, "充值" 3, "直接收款" 4, "台卡" 8, "产品订单"
     */
    order_type?: number;
    /**
     * 页码
     */
    page?: number;
    /**
     * 每页显示的条目数量
     */
    page_size?: number;
    /**
     * 支付类型 0, "所有" 1, "现金" 2, "微信" 3, "支付宝" 4, "会员余额" 5, "刷卡" 6, "E卡" 7, "标记支付"
     */
    pay_type?: number;
    /**
     * 客户id。可不传，默认为空
     */
    yz_uid?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单列表
     */
    items?: OrderDetailResp;
    /**
     * 分页信息
     */
    paginator?: MeiPaginator;
  }

  /**
   * 订单列表
   */
  export interface OrderDetailResp {
    /**
     * 订单类型。0:"普通",1,:"开卡购卡",2,:"充值",3,:"直接收款",4:"台卡",8:"产品订单"。默认是0.
     */
    type?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 订单编号，修改订单时填写
     */
    order_no?: string;
    /**
     * 订单项详情
     */
    order_items?: OrderItemDetailEntity;
    /**
     * 订单赠送项
     */
    order_gift_items?: OrderGiftItem;
    /**
     * 门店ID
     */
    dept_id?: number;
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 预约单号
     */
    reserve_no?: string;
    /**
     * 实付金额
     */
    real_pay?: number;
    /**
     * 收银员名称
     */
    cashier_name?: string;
    /**
     * 买家备注
     */
    buyer_memo?: string;
    /**
     * 收银员ID
     */
    cashier_id?: number;
    /**
     * 创建时间
     */
    create_time?: number;
    /**
     * 部门名称
     */
    dept_name?: string;
    /**
     * 支付时间
     */
    pay_time?: number;
    /**
     * 总额
     */
    total_pay?: number;
    /**
     * 原价
     */
    origin_price?: number;
    /**
     * 订单状态 10, "未支付" 20, "取消" 30, "待付款" 32, "待发货" 34, "待收货" 40, "已完成" 99, "取消"
     */
    order_state?: number;
    /**
     * 发货时间
     */
    ship_time?: number;
    /**
     * 订单支付信息
     */
    payments?: MeiOrderDetailPaymentInfo;
    /**
     * 美业买家信息
     */
    buyer?: MeiOrderBuyerInfo;
  }

  /**
   * 订单项详情
   */
  export interface OrderItemDetailEntity {
    /**
     * 订单项别名
     */
    item_alias?: string;
    /**
     * 订单项ID
     */
    item_id?: number;
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 订单项位置，更新订单项时需传入
     */
    index?: number;
    /**
     * 是否已支付
     */
    is_pay?: number;
    /**
     * 订单项类型。1, "服务" 2, "次卡" 3, "折扣卡" 4, "充值卡" 5, "充值" 6, "台卡二维码收款" 7, "直接收款" 8, "实物商品" 9, "余额充值"
     */
    item_type?: number;
    /**
     * 数量
     */
    num?: number;
    /**
     * 原始价格
     */
    origin_price?: number;
    /**
     * 优惠卡号
     */
    promotion_card_no?: string;
    /**
     * 优惠id
     */
    promotion_id?: number;
    /**
     * 优惠名称
     */
    promotion_name?: string;
    /**
     * 优惠的价格
     */
    promotion_price?: number;
    /**
     * 0, "无优惠" 1, "次卡" 2, "折扣值" 3, "预付已付款" 5, "导入权益次数" 6, "赠送权益次数" 7, "导入权益折扣" 8, "赠送权益折扣" 11, "产品折扣（会员特权）" 21, "服务折扣（会员特权）" 30, "包邮", "等级权益包邮" 31, "抹零", "抹零" 40, "手动减价", "手动减价" 51, "减价优惠券", "优惠券" 52, "折扣优惠券", "优惠券" 100, "体验价", "体验价优惠" 101, "拼团", "拼团" 103, "同行打折", "同行优惠" 104, "同行免单", "同行优惠"
     */
    promotion_type?: number;
    /**
     * 优惠卡面值
     */
    promotion_value?: number;
    /**
     * 实际支付价格
     */
    real_pay?: number;
    /**
     * 销售人员
     */
    salesmen?: Salesman;
    /**
     * sku id
     */
    sku_id?: number;
    /**
     * 0 预约，1 订单
     */
    stage?: number;
    /**
     * 技师信息
     */
    technicians?: Technician;
  }

  /**
   * 销售人员
   */
  export interface Salesman {
    /**
     * 销售人员id
     */
    id?: number;
    /**
     * 销售人员名字
     */
    name?: string;
  }

  /**
   * 技师信息
   */
  export interface Technician {
    /**
     * 技师id
     */
    id?: number;
    /**
     * 技师名字
     */
    name?: string;
    /**
     * 技师标签
     */
    tag?: string;
    /**
     * 是不是客户指定
     */
    assigned?: number;
  }

  /**
   * 订单赠送项
   */
  export interface OrderGiftItem {
    /**
     * 权益有效期时间（giftItemTermTime，xxxx前有效），0-永久有效, 单位毫秒
     */
    gift_item_term_time?: number;
    /**
     * 赠送项目唯一值, 如：商品id
     */
    gift_item_unique?: string;
    /**
     * 赠送权益值（giftItemValue, 赠送次数/数量）
     */
    gift_item_value?: number;
    /**
     * 赠送类型（giftType,1-次数/2-折扣/3-余额/4-积分/5-券/6-会员卡/7-服务/8-产品）
     */
    gift_type?: number;
  }

  /**
   * 订单支付信息
   */
  export interface MeiOrderDetailPaymentInfo {
    /**
     * 支付渠道
     */
    channel_name?: string;
    /**
     * 订单来源
     */
    from_source?: string;
    /**
     * 订单数量
     */
    amount?: number;
    /**
     * 订单阶段 0 预约，1订单
     */
    stage?: number;
    /**
     * 外部交易单号
     */
    out_flow_no?: string;
    /**
     * 交易单号
     */
    flow_no?: string;
    /**
     * 实际收款额
     */
    receive_pay?: number;
    /**
     * 支付渠道 1, "微信"  2, "微信" 3, "支付宝" 4, "支付宝" 5, "条码支付" 10, "默认渠道" 11, "外部导入" 12, "组合支付" 13, "无需支付" 14, "其它" 28, "有赞E卡" 120, "会员余额" 130, "刷卡" 201, "现金" 202, "小程序" 203, "预支付" 204, "刷卡"
     */
    channel_type?: number;
    /**
     * 支付状态:10:待支付, 20:支付中, 30:已支付, 40:退款中, 50:已退款, 98:支付失败
     */
    status?: number;
  }

  /**
   * 美业买家信息
   */
  export interface MeiOrderBuyerInfo {
    /**
     * 性别 0无，1男，2女
     */
    gender?: number;
    /**
     * 是否是会员
     */
    is_member?: number;
    /**
     * 会员等级
     */
    level?: number;
    /**
     * 会员编号
     */
    member_no?: number;
    /**
     * 等级别名
     */
    level_alias?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 备注名
     */
    memo_name?: string;
    /**
     * 赠送余额
     */
    gift_balance?: number;
    /**
     * 会员头像
     */
    avatar?: string;
    /**
     * 会员名称
     */
    member_name?: string;
    /**
     * 员工ID
     */
    yz_uid?: number;
    /**
     * UIC头像
     */
    uic_avatar?: string;
    /**
     * 等级名称
     */
    level_name?: string;
    /**
     * 余额
     */
    balance?: number;
    /**
     * 名称
     */
    name?: string;
    /**
     * 主余额
     */
    capital_balance?: number;
  }

  /**
   * 分页信息
   */
  export interface MeiPaginator {
    /**
     * 总记录数
     */
    total_count?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页显示的记录数
     */
    page_size?: number;
  }

}
