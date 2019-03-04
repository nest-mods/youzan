export namespace CouponUmpPromocodeBuyerSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * fans_id
     */
    fans_id?: number;
    /**
     * fans_type
     */
    fans_type?: number;
    /**
     * 手机号
     */
    mobile?: number;
    /**
     * open_user_id
     */
    open_user_id?: string;
    /**
     * VALID 有效（未使用） USED 已使用 INVALID 已失效
     */
    status?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 买家优惠码列表
     */
    codes?: CouponCode[];
  }

  /**
   * 买家优惠码列表
   */
  export interface CouponCode {
    /**
     * 卡券ID
     */
    id?: number;
    /**
     * kdtId
     */
    kdt_id?: number;
    /**
     * 活动ID
     */
    coupon_group_id?: number;
    /**
     * 优惠券熟悉 1：CASH（代金券）
     */
    preferential_type?: number;
    /**
     * 优惠面额（单位：分）
     */
    value?: number;
    /**
     * 优惠码（兑换码）
     */
    code?: string;
    /**
     * 是否被使用 0：否 1：是
     */
    is_used?: number;
    /**
     * 是否被领取 0：否 1：是
     */
    is_take?: number;
    /**
     * 领取时间
     */
    take_at?: Date;
    /**
     * 订单中优惠面值（单位：分）
     */
    used_value?: number;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 使用订单号
     */
    used_in_order_no?: string;
    /**
     * 卡券有效开始时间
     */
    valid_start_at?: Date;
    /**
     * 卡券有效过期时间
     */
    expire_at?: Date;
    /**
     * 是否同步微信卡券 0：否 1：是
     */
    is_sync_card?: number;
    /**
     * 核销码（卡券被用户使用时提供）
     */
    verify_code?: string;
  }

}
