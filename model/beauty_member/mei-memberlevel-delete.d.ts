export namespace BeautyMemberMeiMemberlevelDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要删除的等级id
     */
    level_id: number;
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
