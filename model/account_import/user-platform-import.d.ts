export namespace AccountImportUserPlatformImport {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 国际码，目前只支持+86
     */
    country_code?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 三方App帐号唯一性标识
     */
    open_user_id?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 导入是否成功。true：成功。false：失败
     */
    response?: boolean;
  }

}
