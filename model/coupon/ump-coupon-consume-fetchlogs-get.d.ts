export namespace CouponUmpCouponConsumeFetchlogsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 优惠券/优惠码id
     */
    coupon_group_id?: number;
    /**
     * 按照领取时间筛选（结束时间）格式：'2017-09-09 17:12:41'
     */
    end_taked?: Date;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页数量，最大值500
     */
    page_size?: number;
    /**
     * 按照领取时间筛选（开始时间）格式：'2017-09-09 17:12:41'
     */
    start_taked?: Date;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 领取记录
     */
    fetchlogs?: UmpPromotionFetchlog;
    /**
     * 领取总数
     */
    total_results?: number;
  }

  /**
   * 领取记录
   */
  export interface UmpPromotionFetchlog {
    /**
     * 优惠券／优惠码活动的名称
     */
    title?: string;
    /**
     * 领取人fans_id
     */
    fans_id?: number;
    /**
     * 领取人用户类型
     */
    fans_type?: number;
    /**
     * 使用的订单号
     */
    used_in_order_no?: string;
    /**
     * 是否已使用 0未使用 1已使用
     */
    is_used?: number;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 优惠券和通用优惠码的领取时间；若优惠码是用户自行导入的，则为优惠码导入时间。
     */
    created_at?: Date;
    /**
     * 优惠码ID
     */
    promocode_id?: number;
    /**
     * 优惠券ID
     */
    promocard_id?: number;
    /**
     * 手机号（若有）
     */
    mobile?: string;
    /**
     * 领取时间
     */
    taked_at?: Date;
    /**
     * 三方用户ID
     */
    open_user_id?: string;
  }

}
