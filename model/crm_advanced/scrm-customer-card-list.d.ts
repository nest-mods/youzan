export namespace CrmAdvancedScrmCustomerCardList {
  /**
   * 请求参数
   */
  export interface Request {
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
    /**
     * 页码
     */
    page?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 会员拥有的会员卡总数
     */
    total?: number;
    /**
     * 当前页码
     */
    page?: number;
    /**
     * 每页的最大记录条数
     */
    page_size?: number;
    /**
     * 会员卡列表
     */
    items?: CustomerCardListItemDTO;
  }

  /**
   * 会员卡列表
   */
  export interface CustomerCardListItemDTO {
    /**
     * 会员卡有效期截止日期
     */
    card_end_time?: Date;
    /**
     * 会员卡有效期开始日期
     */
    card_start_time?: Date;
    /**
     * 用户会员卡卡号
     */
    card_no?: string;
    /**
     * 商家会员卡的唯一标识
     */
    card_alias?: string;
  }

}
