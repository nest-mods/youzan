// tslint:disable:max-line-length variable-name
export namespace CrmAdvancedScrmCardList {
  /**
   * 请求参数
   */
  export interface Request {
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
     * 会员卡总数
     */
    total?: number;
    /**
     * 页码
     */
    page?: number;
    /**
     * 每页最大纪录数
     */
    page_size?: number;
    /**
     * 会员卡列表
     */
    items?: CardListItemDTO[];
  }

  /**
   * 会员卡列表
   */
  export interface CardListItemDTO {
    /**
     * 商家会员卡的唯一标识
     */
    card_alias?: string;
    /**
     * 会员卡名称
     */
    name?: string;
    /**
     * 发卡链接
     */
    card_link?: string;
    /**
     * 会员卡状态：使用中:true 已禁用:false
     */
    is_available?: boolean;
    /**
     * 会员卡创建时间
     */
    create_time?: Date;
    /**
     * 会员卡类型;3:无门槛卡,2:付费卡,1:规则卡
     */
    grant_type?: number;
  }

}
