export namespace CouponUmpPromocardDetailGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * card_id
     */
    id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 卡券详情
     */
    couponCard?: CouponCardDetail;
  }

  /**
   * 卡券详情
   */
  export interface CouponCardDetail {
    /**
     * 卡ID
     */
    id?: number;
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 活动ID
     */
    coupon_group_id?: number;
    /**
     * 优惠属性，1：CASH，2：discount
     */
    preferential_type?: number;
    /**
     * 面额（单位：分）
     */
    value?: number;
    /**
     * 领取到的折扣值（88，8.8折）
     */
    discount?: number;
    /**
     * 是否已使用 1 是 0 否
     */
    is_used?: number;
    /**
     * 领取时间
     */
    take_at?: Date;
    /**
     * 实际优惠金额（单位：分）
     */
    used_value?: number;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 用券的订单号
     */
    used_in_order_nos?: string[];
    /**
     * 优惠开始时间
     */
    valid_start_at?: Date;
    /**
     * 过期时间
     */
    expire_at?: Date;
    /**
     * 是否已同步卡包 1: 已同步 2:已删除
     */
    is_sync_card?: number;
    /**
     * 核销码
     */
    verify_code?: string;
  }

}
