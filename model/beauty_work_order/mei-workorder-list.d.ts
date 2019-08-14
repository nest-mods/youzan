// tslint:disable:max-line-length variable-name
export namespace BeautyWorkOrderMeiWorkorderList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 过滤条件：创建开始时间
     */
    begin_time?: Date;
    /**
     * 过滤条件：是否删除
     */
    delete?: boolean;
    /**
     * 过滤条件：创建结束时间
     */
    end_time?: Date;
    /**
     * 美业登陆token
     */
    m_token: string;
    /**
     * 过滤条件：订单号
     */
    order_no?: string;
    /**
     * 页码
     */
    page_no: number;
    /**
     * 每页数量
     */
    page_size: number;
    /**
     * 过滤条件：员工id
     */
    staff_id?: number;
    /**
     * 过滤条件：状态列表。99： "取消"，0： "待服务"，30,："服务中"，40,："收款完成"，44,："技师操作完成"
     */
    states?: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 工单详情列表
     */
    items?: WorkOrderResp[];
    /**
     * 分页
     */
    paginator?: MeiPaginator;
  }

  /**
   * 工单详情列表
   */
  export interface WorkOrderResp {
    /**
     * 关联的订单号码
     */
    order_no?: string;
    /**
     * 工单号
     */
    work_no?: string;
    /**
     * 会员id
     */
    member_id?: number;
    /**
     * 员工id
     */
    staff_id?: number;
    /**
     * 关联的商品序列号
     */
    item_index?: number;
    /**
     * 关联商品的item_id
     */
    item_id?: number;
    /**
     * 关联商品的名称
     */
    item_name?: string;
    /**
     * 关联商品good id
     */
    goods_id?: number;
    /**
     * 关联商品skuid
     */
    skuId?: number;
    /**
     * 工单开始时间戳
     */
    start_at?: number;
    /**
     * 工单结束时间戳
     */
    finish_at?: number;
    /**
     * 工单状态
     */
    state?: number;
    /**
     * 是否删除
     */
    is_delete?: number;
    /**
     * 服务的数量
     */
    num?: number;
    /**
     * 被服务顾客的名称
     */
    guestName?: string;
    /**
     * 工单创建时间
     */
    created_at?: number;
    /**
     * 预约人的名称
     */
    reserveGuestName?: string;
    /**
     * 预约人的手机号
     */
    reserveGuestMobile?: string;
  }

  /**
   * 分页
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

}
