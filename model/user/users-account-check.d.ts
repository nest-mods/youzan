export namespace UserUsersAccountCheck {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 帐号ID
     */
    account_id?: string;
    /**
     * 帐号类型，支持Mobile和UnionId
     */
    account_type?: string;
  }

  export type Response = void;

}
