// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiCustomerRightsList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 权益状态 1:可使用 2过期 3用完 -2已退款
     */
    right_status: number;
    /**
     * 权益类型 1折扣 2次数
     */
    right_type?: number;
    /**
     * 过期时间类型 永久有效:0 全部:-1
     */
    times?: number;
    /**
     * 会员ID
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
     * 权益列表
     */
    items?: MeiMemberRightsResp[];
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
   * 权益列表
   */
  export interface MeiMemberRightsResp {
    /**
     * 权益名称
     */
    right_name?: string;
    /**
     * 来源名称
     */
    source_name?: string;
    /**
     * 总使用次数
     */
    total_used?: number;
    /**
     * 商品图片url
     */
    item_img?: string;
    /**
     * 权益ID
     */
    right_id?: number;
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 分店ID
     */
    dept_id?: number;
    /**
     * 会员ID
     */
    yz_uid?: number;
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * 商品别名
     */
    item_alias?: string;
    /**
     * 商品价格
     */
    item_price?: number;
    /**
     * 商品类型
     */
    item_type?: number;
    /**
     * 权益类型
     */
    right_type?: number;
    /**
     * 来源ID 比如卡ID
     */
    source_id?: number;
    /**
     * 来源类型 1 卡 2 会员等级 3 直接导入 4 开单
     */
    source_type?: number;
    /**
     * 权益开始时间
     */
    begin_time?: number;
    /**
     * 权益结束时间
     */
    end_time?: number;
    /**
     * 权益值
     */
    right_value?: number;
    /**
     * 权益剩余值
     */
    right_remain_value?: number;
    /**
     * 是否是赠送 1是 0否
     */
    gift?: number;
    /**
     * 状态： -1:删除；0：无效；1：有效
     */
    status?: number;
    /**
     * 权益创建时间
     */
    created_at?: number;
    /**
     * 权益更新时间
     */
    update_at?: number;
    /**
     * 权益激活时间
     */
    active_at?: number;
    /**
     * 单均价格
     */
    average_price?: number;
  }

}
