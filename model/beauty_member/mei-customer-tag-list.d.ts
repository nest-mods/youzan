export namespace BeautyMemberMeiCustomerTagList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否列出所有 0否 1是 默认0
     */
    list_all?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 标签名字
     */
    name?: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页数量
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
    paginator?: MeiPaginator;
    /**
     * 标签信息列表
     */
    items?: MeiMemberTagResp[];
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
   * 标签信息列表
   */
  export interface MeiMemberTagResp {
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 上次更新时间
     */
    updated_at?: number;
    /**
     * 标签名字
     */
    name?: string;
    /**
     * 标签ID
     */
    tag_id?: number;
    /**
     * 标签状态 0:删除 1正常
     */
    status?: number;
  }

}
