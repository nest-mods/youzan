// tslint:disable:max-line-length variable-name
export namespace UserUserWeixinOpenidGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 手机号国际码
     */
    country_code?: string;
    /**
     * 手机号
     */
    mobile: string;
    /**
     * 类型，1表示公众号，2表示小程序
     */
    wechat_type?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 微信open_id
     */
    open_id?: string;
    /**
     * 微信union_id
     */
    union_id?: string;
  }

}
