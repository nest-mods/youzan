// tslint:disable:max-line-length variable-name
export namespace PointsCrmCustomerPointsChangelogGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商家签名模式调用接口时的app_id, 若无则无需填写。
     */
    app_id?: string;
    /**
     * 结束时间（以start_date开始7天内的某个时刻）
     */
    end_date?: string;
    /**
     * 粉丝id
     * mobile/fans_id/open_user_id 三选一传入
     */
    fans_id?: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1）
     */
    fans_type?: number;
    /**
     * 用户手机号
     * mobile/fans_id/open_user_id 三选一传入
     */
    mobile?: string;
    /**
     * 三方用户ID 
     * mobile/fans_id/open_user_id 三选一传入
     */
    open_user_id?: string;
    /**
     * 页码
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 起始时间（30天内的某个时刻, 默认取7天内的记录）例如20170821080808
     */
    start_date?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 总记录条数
     */
    total_results?: string;
    /**
     * 用户总积分
     */
    total_points?: string;
    /**
     * 积分变动记录
     */
    details?: UserPointsChangeLogDTOV2[];
  }

  /**
   * 积分变动记录
   */
  export interface UserPointsChangeLogDTOV2 {
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
    /**
     * 过期时间(秒级时间戳, 0: 永不过期)
     */
    expired_at?: number;
    /**
     * 三方调用开放平台加/减积分接口传入的biz_value, 三方未传入则不会返回
     */
    third_biz_value?: string;
  }

}
