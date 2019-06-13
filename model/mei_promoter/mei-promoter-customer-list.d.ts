export namespace MeiPromoterMeiPromoterCustomerList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 要查询的页码
     */
    page: number;
    /**
     * 每页显示的条目数量，最大200条
     */
    page_size: number;
    /**
     * 推广员id
     */
    pid: string;
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
     * 绑定的顾客列表
     */
    items?: MeiPromoterCustomer[];
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
   * 绑定的顾客列表
   */
  export interface MeiPromoterCustomer {
    /**
     * 下单次数
     */
    order_count?: number;
    /**
     * 是否是会员
  * 0 不是
  * 1 是
     */
    is_member?: number;
    /**
     * 绑定方式
  * 0:浏览绑定
  * 1:会员激活绑定
  * 2:下单绑定 
  * 3:手动添加
     */
    bind_mode?: number;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 备注名
     */
    memo_name?: string;
    /**
     * 绑定的推广员的id
     */
    pid?: string;
    /**
     * 会员名
     */
    member_name?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 头像链接
     */
    avatar_url?: string;
    /**
     * 更新时间
     */
    updated_at?: number;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 总共贡献的收益
     */
    total_profit?: number;
    /**
     * 分店id
     */
    dept_id?: number;
    /**
     * 顾客id
     */
    customer_id?: number;
    /**
     * 状态
  * 0 未生效
  * 1 已生效
     */
    status?: number;
  }

}
