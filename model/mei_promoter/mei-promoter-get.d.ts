export namespace MeiPromoterMeiPromoterGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 推广员id
     */
    pid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单数量
     */
    order_count?: number;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * id标识
     */
    pid?: string;
    /**
     * 邀请的下线分销员数量
     */
    invitation_count?: number;
    /**
     * 来源
  * 1. 自己申请 
  * 2. 好友邀请 
  * 3.手动添加
     */
    from_source?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 通过审核时间
     */
    verify_at?: number;
    /**
     * 头像地址
     */
    avatar_url?: string;
    /**
     * 贡献给上线的利润
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
     * 上线分销员的id
     */
    parent_pid?: string;
    /**
     * 上线分销员的联系电话
     */
    parent_phone?: string;
    /**
     * 获取的总推广收益
     */
    total_profit?: number;
    /**
     * 上线分销员的昵称
     */
    parent_nickname?: string;
    /**
     * 名下绑定的顾客数量
     */
    customer_count?: number;
  }

}
