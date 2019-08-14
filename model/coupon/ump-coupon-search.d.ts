// tslint:disable:max-line-length variable-name
export namespace CouponUmpCouponSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 活动类型 PROMOCARD 优惠券，PROMOCODE 优惠码
     */
    group_type?: string;
    /**
     * 第几页
     */
    page_no: number;
    /**
     * 每页数量
     */
    page_size: number;
    /**
     * 活动状态 FUTURE 未开始 ,END 已结束,ON 进行中 （默认查所有状态）
     */
    status?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 优惠活动组信息
     */
    groups?: CouponGroup[];
    /**
     * 活动数量
     */
    total?: number;
  }

  /**
   * 优惠活动组信息
   */
  export interface CouponGroup {
    /**
     * 活动ID
     */
    id?: number;
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 优惠券类型 7：优惠券 9：优惠码 - 一卡一码 10：优惠码 - 通用码
     */
    group_type?: number;
    /**
     * 优惠券名称
     */
    title?: string;
    /**
     * 优惠属性，1表示优惠，2表示折扣
     */
    preferential_type?: number;
    /**
     * 面额（单位分）
     */
    denominations?: number;
    /**
     * 面值随机上限。不随机为0
     */
    value_random_to?: number;
    /**
     * 满额条件
     */
    condition?: number;
    /**
     * 折扣（88，8.8折）
     */
    discount?: number;
    /**
     * 是否限制 1：一人一次 0：不限制
     */
    is_limit?: number;
    /**
     * 是否仅原价购买商品时可用（1:是，0:否）
     */
    is_forbid_preference?: number;
    /**
     * 会员等级
     */
    user_level?: number;
    /**
     * 优惠使用时间类型，1表示固定活动时间，2表示延迟类型，几天后几天内有效
     */
    date_type?: number;
    /**
     * 固定时长
     */
    fixed_term?: number;
    /**
     * 延迟开始的时间
     */
    fixed_begin_term?: number;
    /**
     * 有效开始时间
     */
    valid_start_time?: Date;
    /**
     * 有效结束时间
     */
    valid_end_time?: Date;
    /**
     * 总发放量
     */
    total_qty?: number;
    /**
     * 库存数量
     */
    stock_qty?: number;
    /**
     * 使用范围类型
     */
    range_type?: string;
    /**
     * 使用范围值
     */
    range_value?: string;
    /**
     * 到期是否提醒 1是 0否
     */
    expire_notice?: string;
    /**
     * 使用说明
     */
    description?: string;
    /**
     * 一些额外配置信息
     */
    meta_data?: string;
    /**
     * 到期是否可分享 1是 0否
     */
    is_share?: number;
    /**
     * 是否同步微信卡券 1是 0否
     */
    is_sync_weixin?: number;
    /**
     * 是否失效，默认0为没失效
     */
    is_invalid?: number;
    /**
     * 粉丝领取总人数(去重)
     */
    total_fans_taked?: number;
    /**
     * 已使用总数
     */
    total_used?: number;
    /**
     * 领取次数
     */
    total_take?: number;
    /**
     * 创建于
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
  }

}
