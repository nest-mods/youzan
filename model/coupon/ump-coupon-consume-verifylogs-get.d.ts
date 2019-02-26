export namespace CouponUmpCouponConsumeVerifylogsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页条数
     */
    page_size?: number;
    /**
     * 优惠券/优惠码的类型
     */
    type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 验证列表
     */
    verifylogs?: UmpPromotionVerifylog;
  }

  /**
   * 验证列表
   */
  export interface UmpPromotionVerifylog {
    /**
     * 记录的ID
     */
    id?: string;
    /**
     * 优惠的ID
     */
    group_id?: string;
    /**
     * 优惠券／优惠码的名称
     */
    title?: string;
    /**
     * 面额。单位：元，精确到分
     */
    value?: string;
    /**
     * 满额条件。单位：元，精确到分
     */
    condition?: string;
    /**
     * 使用说明
     */
    description?: string;
    /**
     * 验证方式 1扫码 2输入id
     */
    verify_type?: string;
    /**
     * 核销号码
     */
    verify_code?: string;
    /**
     * 交易号
     */
    trade_no?: string;
    /**
     * 状态
     */
    state?: string;
    /**
     * 验证人员
     */
    admin_nickname?: string;
    /**
     * 验证时间
     */
    created_at?: Date;
    /**
     * 优惠券ID
     */
    promocard_id?: string;
    /**
     * 优惠码ID
     */
    promocode_id?: string;
  }

}
