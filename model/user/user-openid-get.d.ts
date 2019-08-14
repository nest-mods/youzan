// tslint:disable:max-line-length variable-name
export namespace UserUserOpenidGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 有赞用户ID，不能为空
     */
    user_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 返回值
     */
    openResult?: UicOpenIdResult;
  }

  /**
   * 返回值
   */
  export interface UicOpenIdResult {
    /**
     * 有赞用户ID
     */
    userId?: number;
    /**
     * 有赞对外openId
     */
    openId?: string;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
  }

}
