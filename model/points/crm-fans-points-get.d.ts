// tslint:disable:max-line-length variable-name
export namespace PointsCrmFansPointsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 粉丝id
     * fans_id/open_user_id/mobile 三选一传入
     */
    fans_id?: number;
    /**
     * 手机号
     * fans_id/open_user_id/mobile 三选一传入
     */
    mobile?: string;
    /**
     * 三方用户ID，三方打通帐号后可以使用，目前仅app开店用户可以使用。
     * fans_id/open_user_id/mobile 三选一传入
     */
    open_user_id?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 积分
     */
    point?: string;
  }

}
