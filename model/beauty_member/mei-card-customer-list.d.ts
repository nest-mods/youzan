export namespace BeautyMemberMeiCardCustomerList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 页数
     */
    page?: number;
    /**
     * 每页显示的数量
     */
    page_size?: number;
    /**
     * 会员id
     */
    yz_uid?: number;
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
     * 会员卡列表信息
     */
    items?: MeiPersonCardInfo[];
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
   * 会员卡列表信息
   */
  export interface MeiPersonCardInfo {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 卡别名
     */
    card_alias?: string;
    /**
     * 卡名称
     */
    card_name?: string;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 卡类型
  * 1 折扣
  * 2 次数
     */
    card_type?: number;
    /**
     * 价格
     */
    card_price?: number;
    /**
     * 有效期开始时间
     */
    term_begin_at?: number;
    /**
     * 有效期结束时间（0：无限）
     */
    term_end_at?: number;
    /**
     * 是否全店折扣
     */
    all_discount?: number;
    /**
     * 全店折扣值
     */
    all_discount_value?: number;
    /**
     * 全店折扣权益值
     */
    all_discount_rights_id?: number;
    /**
     * 描述
     */
    description?: string;
    /**
     * 卡权限--分配到会员后的权限信息
     */
    card_rights?: MeiPersonCardRight[];
    /**
     * 等级信息
     */
    level?: number;
    /**
     * 创建时间
     */
    create_at?: number;
    /**
     * 更新时间
     */
    active_at?: number;
    /**
     * 赠送金额
     */
    prepaid_gift_price?: number;
    /**
     * 背景图片
     */
    bgImg?: string;
  }

  /**
   * 卡权限--分配到会员后的权限信息
   */
  export interface MeiPersonCardRight {
    /**
     * 是否是赠送的权益
     */
    gift?: number;
    /**
     * 有效期结束时间（0：无限）
     */
    term_end_at?: number;
    /**
     * 有效期开始时间
     */
    term_begin_at?: number;
    /**
     * 权益Id
     */
    rights_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 剩余权益值
     */
    remain_value?: number;
    /**
     * 权益类型：
  * 1 折扣；
  * 2 次数
     */
    rights_type?: number;
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 权益值
     */
    value?: number;
  }

}
