// tslint:disable:max-line-length variable-name
export namespace LevelMembershipCrmCustomerGrowthList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 客户类型(与帐户ID配合使用:1=客户(yzUid) ,3:手机号)
     */
    account_type: number;
    /**
     * 客户列表
     */
    users: string[];
  }

  /**
   *
   */
  export interface ListString {
  }

  export type Response = void;

}
