// tslint:disable:max-line-length variable-name
export namespace BeautyServiceLogMeiServicelogList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 查询创建结束时间
     */
    end_time?: Date;
    /**
     * 美业登陆token
     */
    m_token?: string;
    /**
     * 顾客的yzUid
     */
    member_id?: number;
    /**
     * 页码
     */
    page_no: number;
    /**
     * 每页数量
     */
    page_size: number;
    /**
     * 订单号
     */
    source_no?: string;
    /**
     * 查询创建开始时间
     */
    start_time?: Date;
    /**
     * 手艺人的yzUid
     */
    yz_uid?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 服务日志列表
     */
    items?: ServiceLogResp[];
    /**
     * 分页
     */
    paginator?: MeiPaginator;
  }

  /**
   * 服务日志列表
   */
  export interface ServiceLogResp {
    /**
     * 会员id
     */
    member_id?: number;
    /**
     * 关联的订单号
     */
    source_no?: string;
    /**
     * 日志id
     */
    log_id?: number;
    /**
     * 创建时间戳
     */
    created_at?: number;
    /**
     * 员工id
     */
    yz_uid?: number;
    /**
     * 日志内容
     */
    content?: string;
    /**
     * 关联的工单号
     */
    work_order_no?: string;
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
