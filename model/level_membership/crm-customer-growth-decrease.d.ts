export namespace LevelMembershipCrmCustomerGrowthDecrease {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 帐号ID
     */
    account_id: string;
    /**
     * 帐号类型（1-有赞账号、2-有赞粉丝、3-手机号、4-三方账号）
     */
    account_type: number;
    /**
     * 成长值
     */
    amount: number;
    /**
     * 业务唯一标示(可用以幂等，幂等时效三个月, 超过三个月的相同值调用不保证幂等)
     */
    biz_value?: string;
    /**
     * 描述
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
