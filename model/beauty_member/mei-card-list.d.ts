export namespace BeautyMemberMeiCardList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 查询的卡列表
     */
    card_aliases?: string[];
    /**
     * 卡名称
     */
    card_name?: string;
    /**
     * 卡类型
     */
    card_type?: number;
    /**
     * 是否删除
     */
    delete?: number;
    /**
     * 分店信息
     */
    dept_id?: number;
    /**
     * 是否上架销售
     */
    display?: number;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 查询的页数
     */
    page?: number;
    /**
     * 美业显示的条目数量，最多200
     */
    page_size?: number;
    /**
     * 是否在网店展示
     */
    wap_show?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: MeiPaginator;
    /**
     * 卡列表项
     */
    items?: MeiCardListInfo;
  }

  /**
   * 分页信息
   */
  export interface MeiPaginator {
    /**
     * 总记录数
     */
    total_count?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页显示的记录数
     */
    page_size?: number;
  }

  /**
   * 卡列表项
   */
  export interface MeiCardListInfo {
    /**
     * 是否在网店展示
  * 0 否
  * 1 是
     */
    wap_show?: number;
    /**
     * 背景图片url
     */
    backgroud_img?: string;
    /**
     * 上否上架销售
  * 0 否
  * 1 是
     */
    on_shelve?: number;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 卡类型
  * 1 折扣卡
  * 2 次卡
  * 3 储值卡
     */
    card_type?: number;
    /**
     * 卡标识
     */
    card_alias?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 是否删除
  * 0 删除
  * 1 未删除
     */
    deleted?: number;
    /**
     * 更新时间
     */
    updated_at?: number;
    /**
     * 卡名称
     */
    card_name?: string;
    /**
     * 赠送储值金额
     */
    prepaid_gift_price?: number;
    /**
     * 卡售价
     */
    card_price?: number;
  }

}
