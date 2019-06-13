export namespace UserUsersAccountCheck {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 帐号ID
     */
    account_id: string;
    /**
     * 帐号类型
     */
    account_type: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否存在帐号
     */
    data?: boolean;
  }

}
