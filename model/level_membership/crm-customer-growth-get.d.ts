export namespace LevelMembershipCrmCustomerGrowthGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 帐号ID
     */
    account_id: string;
    /**
     * 帐号类型(与帐户ID配合使用:1=客户(yzUid) 2=粉丝(原fansId),3:手机号,4:三方帐号(原open_user_id)
     */
    account_type: number;
  }

  export type Response = void;

}
