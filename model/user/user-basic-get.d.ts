// tslint:disable:max-line-length variable-name
export namespace UserUserBasicGet {
  /**
   * 请求参数
   */
  export interface Request {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 用户ID
     */
    user_id?: number;
    /**
     * 昵称
     */
    nick_name?: string;
    /**
     * 图片地址
     */
    avatar?: string;
  }

}
