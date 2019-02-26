export namespace CrmAdvancedScrmCardDisable {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商家会员卡的唯一标识
     */
    card_alias?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
