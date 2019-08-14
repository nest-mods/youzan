// tslint:disable:max-line-length variable-name
export namespace PointsCrmCustomerPointsDecrease {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 帐号ID
     */
    account_id: string;
    /**
     * 帐号类型（与帐户ID配合使用: 2=粉丝(原fansId),3:手机号,4:三方帐号(原open_user_id);6:微信open_id）
     */
    account_type: number;
    /**
     * 外部业务标识, 相同帐号、业务标识字段的重复调用在三个月内不会重复发放积分
     */
    biz_value?: string;
    /**
     * 积分值
     */
    points: number;
    /**
     * 积分变动原因
     */
    reason: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: string;
  }

}
