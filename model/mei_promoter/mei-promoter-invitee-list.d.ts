export namespace MeiPromoterMeiPromoterInviteeList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 要查询的页码
     */
    page?: number;
    /**
     * 每页显示的条目数量，最大200条
     */
    page_size?: number;
    /**
     * 推广员id
     */
    parent_pid?: string;
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
     * 邀请的推广员列表信息
     */
    items?: MeiPromoterInvitee[];
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
   * 邀请的推广员列表信息
   */
  export interface MeiPromoterInvitee {
    /**
     * 产生的订单数量
     */
    order_count?: number;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 推广员id
     */
    pid?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 审核通过时间
     */
    verify_at?: number;
    /**
     * 头像地址
     */
    avatar_url?: string;
    /**
     * 贡献给上线推广员的收益
     */
    parent_profit?: number;
    /**
     * 联系电话
     */
    phone?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 上线推广员id
     */
    parent_pid?: string;
    /**
     * 上线推广员联系电话
     */
    parent_phone?: string;
    /**
     * 获取的总收益
     */
    total_profit?: number;
    /**
     * 上线推广员昵称
     */
    parent_nickname?: string;
  }

}
