export namespace CrmAdvancedScrmCustomerCardDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商家会员卡唯一标识，没有则写''，与card_no任选其一，优先级低于card_no
     */
    card_alias?: string;
    /**
     * 用户会员卡号，没有则写''，与card_alias任选其一，优先级高于card_alias
     */
    card_no?: string;
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
     * 手机号，如果没有则写 0
  * mobile/fans_id/open_user_id 三选一传入
     */
    mobile?: string;
    /**
     * 三方用户ID
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
  }

}
