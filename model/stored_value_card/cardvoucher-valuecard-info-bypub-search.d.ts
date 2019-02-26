export namespace StoredValueCardCardvoucherValuecardInfoBypubSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 客户Id
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 查询第几页
     */
    page?: number;
    /**
     * 分页大小，目前最大支持50
     */
    page_size?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: LongPaginator;
    /**
     * 实体信息
     */
    items?: PageQueryValueCardInfoByPublishKdtIdDTO;
  }

  /**
   * 分页信息
   */
  export interface LongPaginator {
    /**
     * 查询第几页
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 查询获得数据总条数
     */
    total_count?: number;
  }

  /**
   * 实体信息
   */
  export interface PageQueryValueCardInfoByPublishKdtIdDTO {
    /**
     * 发卡机构的店铺Id
     */
    kdt_id?: number;
    /**
     * 客户Id
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 总金额
     */
    denomination?: number;
    /**
     * 本金金额
     */
    principal_denomination?: number;
    /**
     * 赠送金金额
     */
    bonus_denomination?: number;
    /**
     * 手机号码
     */
    mobile?: string;
  }

}
