export namespace CouponUmpCouponTake {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 优惠券码组id
     */
    coupon_group_id?: number;
    /**
     * 粉丝id，fans_id与weixin_openid存在一个即可
     */
    fans_id?: number;
    /**
     * mobile，weixin_openid，fans_id，open_user_id任传一个即可。首先通过mobile查找，其次weixin_openid和fans_id，最后open_user_id
     */
    mobile?: number;
    /**
     * 三方用户id
     */
    open_user_id?: string;
    /**
     * 微信用户对应的openid
     */
    weixin_openid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 值：1.PROMOCODE（表示优惠码） 2.PROMOCARD（表示优惠券）
     */
    coupon_type?: string;
    /**
     * 用户领取优惠码详情
     */
    promocode?: UmpPromocodeUserTakedetail;
    /**
     * 用户领取优惠券详情（优惠码or优惠券详情只返回其一）
     */
    promocard?: UmpPromocardUserTakedetail;
  }

  /**
   * 用户领取优惠码详情
   */
  export interface UmpPromocodeUserTakedetail {
    /**
     * 优惠码id
     */
    promocode_id?: number;
    /**
     * 优惠码标题
     */
    title?: string;
    /**
     * 优惠码编号
     */
    code?: string;
    /**
     * 优惠码面额
     */
    value?: string;
    /**
     * 优惠码满额条件
     */
    condition?: string;
    /**
     * 优惠码生效时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_at?: Date;
    /**
     * 优惠码结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_at?: Date;
    /**
     * 优惠码是否已使用，0 表示未使用，1 表示已使用
     */
    is_used?: number;
    /**
     * 优惠码是否已实效，0 表示未实效，1 表示已实效
     */
    is_invalid?: number;
    /**
     * 优惠码是否已过期，0 表示未过期，1 表示已过期
     */
    is_expired?: number;
    /**
     * 优惠码背景颜色
     */
    background_color?: string;
    /**
     * 优惠码详情链接
     */
    detail_url?: string;
    /**
     * 优惠券核销码
     */
    verify_code?: string;
  }

  /**
   * 用户领取优惠券详情（优惠码or优惠券详情只返回其一）
   */
  export interface UmpPromocardUserTakedetail {
    /**
     * 优惠券Id
     */
    promocard_id?: number;
    /**
     * 优惠券标题
     */
    title?: string;
    /**
     * 优惠券面额
     */
    value?: string;
    /**
     * 优惠券满额条件
     */
    condition?: string;
    /**
     * 优惠券生效时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_at?: Date;
    /**
     * 优惠券结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_at?: Date;
    /**
     * 优惠券是否已使用，0 表示未使用，1 表示已使用
     */
    is_used?: number;
    /**
     * 优惠券是否已实效，0 表示未实效，1 表示已实效
     */
    is_invalid?: number;
    /**
     * 优惠券是否已过期，0 表示未过期，1 表示已过期
     */
    is_expired?: number;
    /**
     * 优惠券背景颜色
     */
    background_color?: string;
    /**
     * 优惠券详情链接
     */
    detail_url?: string;
    /**
     * 优惠券核销码
     */
    verify_code?: string;
  }

}
