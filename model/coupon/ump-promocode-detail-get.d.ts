export namespace CouponUmpPromocodeDetailGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * id
     */
    id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 卡劵ID
     */
    id?: number;
    /**
     * 商家ID
     */
    kdt_id?: number;
    /**
     * 活动ID
     */
    coupon_group_id?: number;
    /**
     * 优惠类型
     */
    preferential_type?: number;
    /**
     * 优惠面额
     */
    value?: number;
    /**
     * 优惠码
     */
    code?: string;
    /**
     * 是否被使用 0:否 1:是
     */
    is_used?: number;
    /**
     * 是否被领取 0:否 1:是
     */
    is_take?: number;
    /**
     * 领取时间
     */
    take_at?: Date;
    /**
     * 订单中优惠面额（单位：分）
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
     * 有效开始时间
     */
    valid_start_at?: Date;
    /**
     * 有效过期时间
     */
    expire_at?: Date;
    /**
     * 是否同步微信卡劵 0:否 1:是
     */
    is_sync_card?: number;
    /**
     * 核销码
     */
    verify_code?: string;
  }

}
