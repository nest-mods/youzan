export namespace MeiPromoterMeiPromoterList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 加入的结束时间，时间的毫秒值
     */
    end_time?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 推广员手机号
     */
    mobile?: string;
    /**
     * 要查询的页码
     */
    page?: number;
    /**
     * 每页显示的条目数量，最大200条
     */
    page_size?: number;
    /**
     * 加入的开始时间，时间的毫秒值
     */
    start_time?: number;
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
     * 推广员列表
     */
    items?: MeiPromoterDetail[];
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
   * 推广员列表
   */
  export interface MeiPromoterDetail {
    /**
     * 该推广员产生的订单数量
     */
    order_count?: number;
    /**
     * 推广员添加时间
     */
    created_at?: number;
    /**
     * 推广的id标识
     */
    pid?: number;
    /**
     * 推广员发展的下线推广员数量
     */
    invitation_count?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 推广员通过审核的时间
     */
    verify_at?: number;
    /**
     * 头像
     */
    avatar_url?: string;
    /**
     * 贡献给上线推广员的收益总和
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
    parent_pid?: number;
    /**
     * 上线推广员联系电话
     */
    parent_phone?: string;
    /**
     * 总推广收益
     */
    total_profit?: number;
    /**
     * 上线推广员昵称
     */
    parent_nickname?: string;
    /**
     * 该推广员的客户数量
     */
    customer_count?: number;
    /**
     * 更新时间
     */
    updated_at?: number;
  }

}
