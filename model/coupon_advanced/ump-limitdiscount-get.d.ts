export namespace CouponAdvancedUmpLimitdiscountGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 活动id
     */
    activity_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 限时折扣活动id
     */
    id?: number;
    /**
     * 限时折扣活动名称
     */
    name?: string;
    /**
     * 活动开始时间
     */
    start_at?: Date;
    /**
     * 活动结束时间
     */
    end_at?: Date;
    /**
     * 活动是否有效，true：有效；false：已失效
     */
    valid?: boolean;
    /**
     * 活动标签
     */
    desc?: string;
    /**
     * 活动创建时间
     */
    create_at?: Date;
    /**
     * 活动最新更新时间
     */
    update_at?: Date;
    /**
     * 活动周期重复参数
     */
    period?: PeriodDTO;
  }

  /**
   * 活动周期重复参数
   */
  export interface PeriodDTO {
    /**
     * 重复类型；每天:daily; 每周:weekly; 每月:monthly；
     */
    type?: string;
    /**
     * 按周、月重复时有值，按月时1-31，按周时0-6，周日是0
     */
    days?: number[];
    /**
     * 开始时间，格式：HH:mm
     */
    start_at?: string;
    /**
     * 结束时间，格式：HH:mm
     */
    end_at?: string;
  }

}
