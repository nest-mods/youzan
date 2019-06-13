export namespace BeautyMemberMeiCardDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要查询的会员卡标识
     */
    card_alias: string;
    /**
     * 美业token
     */
    m_token: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 删除结果
     */
    is_success?: boolean;
  }

}
