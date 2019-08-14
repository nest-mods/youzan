// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiUserPlatformIdList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 用户id数组
     */
    user_ids: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 用户平台信息
     */
    response?: UserPlatformIdResp[];
  }

  /**
   * 用户平台信息
   */
  export interface UserPlatformIdResp {
    /**
     * 可选;微信openId
     */
    open_id?: string;
    /**
     * 可选;微信unionId
     */
    union_id?: string;
    /**
     * 1:公众号;2小程序
     */
    wechat_type?: string;
    /**
     * 用户id
     */
    user_id?: string;
  }

}
