export namespace CrmAdvancedScrmCustomerSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商家会员卡的唯一标识
     */
    card_alias?: string;
    /**
     * 每页默认20条，最大支持500页
     */
    page?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 会员卡对应的会员个数
     */
    total?: number;
    /**
     * 当前页码
     */
    page?: number;
    /**
     * 每页的记录数20
     */
    page_size?: number;
    /**
     * 客户信息项
     */
    items?: CardCustomerListItemDTO;
  }

  /**
   * 客户信息项
   */
  export interface CardCustomerListItemDTO {
    /**
     * 客户名称
     */
    name?: string;
    /**
     * 粉丝id
     */
    fans_id?: number;
    /**
     * 粉丝类型
     */
    fasn_type?: number;
    /**
     * 客户手机号
     */
    mobile?: string;
    /**
     * 微信昵称
     */
    wx_nickname?: string;
  }

}
