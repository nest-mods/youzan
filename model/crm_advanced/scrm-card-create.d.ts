export namespace CrmAdvancedScrmCardCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 创建会员卡所需的会员卡信息
     */
    card_create: CardCreate;
  }

  /**
   * 
   */
  export interface CardCreate {
    /**
     * 激活方式，0:不需要激活；1:仅需手机激活；2:手机+填写资料
     */
    activate_mode?: number;
    /**
     * 卡的类型;1:无门槛卡,2:规则卡;默认为无门槛卡
     */
    card_type?: number;
    /**
     * #55bd47  卡背景颜色，范围选择：#55bd47, #10ad61, #35a4de, #3d78da, #9058cb,#de9c33, #ebac16, #f9861f, #f08500, #e75735,#d54036, #cf3e36
     */
    color_code?: string;
    /**
     * 使用须知
     */
    description?: string;
    /**
     * 
     */
    grant_condition?: GrantCondition;
    /**
     * 是否允许微信端分享 ，默认允许
     */
    is_allow_share?: boolean;
    /**
     * 若微商城店铺已升级至新会员等级体系，此字段将不在支持，无需传入。 未升级至等级体系的店铺仍可使用该字段，当 card_type 为2时必填
     */
    level?: number;
    /**
     * 会员卡名，卡名不允许重复，最大字符：9
     */
    name?: string;
    /**
     * 
     */
    rights?: CardRights[];
    /**
     * 客服电话
     */
    service_phone?: string;
    /**
     * 微信卡包的同步设置范围选择：0-3，0:不同步；1:基于卡号核销；2:基于卡号和条形码核销；3:基于卡号和二维码核销
     */
    sync_weixin_mode?: number;
    /**
     * 生效持续天数，term_type为3时必传
     */
    term_days?: number;
    /**
     * 生效结束时间，如："2017-03-08 00:00:00"。term_type为2时必传
     */
    term_end_time?: string;
    /**
     * 生效开始时间，如："2017-03-07 00:00:00"，term_type为2时必传
     */
    term_start_time?: string;
    /**
     * 失效后，默认转变的会员卡，默认不转变
     */
    term_to_card_alias?: string;
    /**
     * 生效方式类型，1:从领取开始无期限；2:从固定时刻开始，到固定时刻结束；3:从领取开始，持续一段时长(termDays)
     */
    term_type?: number;
  }

  /**
   * 
   */
  export interface GrantCondition {
    /**
     * 累积消费金额(金额单位为分)
     */
    amount_limit?: number;
    /**
     * 累积积分
     */
    points_limit?: number;
    /**
     * 累积下单成功次数
     */
    trade_limit?: number;
  }

  /**
   * 
   */
  export interface CardRights {
    /**
     * 
     */
    coupon?: Coupon[];
    /**
     * 折扣权益字段，折数 ，1表示0.01折范围选择：1-100（type为2时必传）
     */
    discount?: number;
    /**
     * 是否可用，必须为true
     */
    is_available?: boolean;
    /**
     * 积分权益字段，积分数量（type为4时必传）
     */
    points?: number;
    /**
     * 权益类型，1:包邮；2:折扣；3:送现金券；4：送积分
     */
    type?: number;
  }

  /**
   * 
   */
  export interface Coupon {
    /**
     * 优惠券ID
     */
    coupon_id?: number;
    /**
     * 优惠券名称
     */
    name?: string;
    /**
     * 优惠券数量
     */
    number?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商家会员卡的唯一标识
     */
    card_alias?: string;
    /**
     * 会员卡名
     */
    name?: string;
    /**
     * 卡背景颜色
     */
    color_code?: string;
    /**
     * 使用须知
     */
    description?: string;
    /**
     * 客服电话
     */
    service_phone?: string;
    /**
     * 激活方式，0:不需要激活；1:仅需手机激活；2:手机+填写资料
     */
    activate_mode?: number;
    /**
     * 微信卡包的同步设置
  * 0:不同步；1:基于卡号核销；2:基于卡号和条形码；3:基于卡号和二维码
     */
    sync_weixin_mode?: number;
    /**
     * 会员卡权益
     */
    rights?: CardRightsV2DTO[];
    /**
     * 生效开始时间，如："2017-03-07 00:00:00"
     */
    term_start_time?: string;
    /**
     * 生效结束时间，如："2017-03-08 00:00:00"
     */
    term_end_time?: string;
    /**
     * 生效持续天数
     */
    term_days?: number;
    /**
     * 生效方式类型，1:从领取开始无期限；2:从固定时刻开始，到固定时刻结束；
  * 3:从领取开始，持续一段时长(termDays)
     */
    term_type?: number;
    /**
     * 失效后，默认转变的会员卡，默认不转变
     */
    term_to_card_alias?: string;
    /**
     * 是否允许微信端分享 ，默认允许
     */
    is_allow_share?: boolean;
    /**
     * 发卡链接
     */
    card_url?: string;
    /**
     * 同步微信卡状态，1：不同步；2：审核中；3：通过；4：失败
     */
    sync_weixin_status?: number;
    /**
     * 会员卡状态，1：正常；2：已禁用；3：已删除
     */
    status?: number;
    /**
     * 会员卡等级，没有则为0
     */
    level?: number;
    /**
     * 卡的类型;1:无门槛卡,2:规则卡
     */
    card_type?: number;
    /**
     * 当卡为规则卡时卡的发放规则
     */
    grant_condition?: GrantCondition;
  }

  /**
   * 会员卡权益
   */
  export interface CardRightsV2DTO {
    /**
     * 权益类型
     */
    type?: number;
    /**
     * 权益名称
     */
    name?: string;
    /**
     * 是否可用
     */
    is_available?: boolean;
    /**
     * 折扣权益字段，折数 ，1表示0.01折 范围选择：1-100, type为2时必传
     */
    discount?: number;
    /**
     * 积分权益字段，积分数量,type为4时必传
     */
    points?: number;
    /**
     * 优惠券内容
     */
    coupon?: CouponRightsValueDTO[];
  }

  /**
   * 优惠券内容
   */
  export interface CouponRightsValueDTO {
    /**
     * 优惠券ID
     */
    coupon_id?: number;
    /**
     * 优惠券名称
     */
    name?: string;
    /**
     * 优惠券数量
     */
    number?: number;
  }

  /**
   * 当卡为规则卡时卡的发放规则
   */
  export interface GrantCondition {
    /**
     * 累积下单成功次数
     */
    trade_limit?: number;
    /**
     * 累积消费金额(金额单位为分)
     */
    amount_limit?: number;
    /**
     * 累积积分
     */
    points_limit?: number;
  }

}
