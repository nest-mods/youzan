export namespace PointsCrmCustomerPointsChangelogSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 帐户ID
     */
    account_id: string;
    /**
     * 与帐户ID配合使用: 2=粉丝(原fansId),3:手机号,4:三方帐号(原open_user_id)
     */
    account_type: number;
    /**
     * 结束时间（以start_date开始7天内的某个时刻）例如2015-02-23 02:03:00
     */
    end_date?: string;
    /**
     * 页码
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 起始时间（30天内的某个时刻, 默认取最近7天内的记录）例如2015-02-03 02:03:00
     */
    start_date?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 总条数
     */
    total_results?: string;
    /**
     * 可用积分
     */
    total_points?: string;
    /**
     * 明细
     */
    details?: UserPointsChangeLogDTO[];
  }

  /**
   * 明细
   */
  export interface UserPointsChangeLogDTO {
    /**
     * 积分值（负数为扣积分）
     */
    amount?: string;
    /**
     * 操作之后的最新积分数值
     */
    total?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 创建时间
     */
    created_time?: string;
  }

}
