// tslint:disable:max-line-length variable-name
export namespace CrmAdvancedScrmCustomerCardGrant {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商家会员卡的唯一标识
     */
    card_alias: string;
    /**
     * 粉丝ID，与 fans_type 同时出现，如果没有写0
     * mobile/fans_id/open_user_id 三选一传入
     */
    fans_id?: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1）
     */
    fans_type?: number;
    /**
     * 手机号，如果没有则传空字符串
     * mobile/fans_id/open_user_id 三选一传入
     */
    mobile?: string;
    /**
     * 三方用户ID，如果没有则传空字符串
     * mobile/fans_id/open_user_id 三选一传入
     */
    open_user_id?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
    /**
     * 用户会员卡号
     */
    card_no?: string;
  }

}
