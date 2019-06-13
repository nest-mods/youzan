export namespace BeautyServiceLogMeiServicelogGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 日志id
     */
    log_id: number;
    /**
     * 美业登陆token
     */
    m_token: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
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

}
