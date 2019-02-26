export namespace CouponAdvancedUmpLimitdiscountSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码，最大翻页限制：4000
     */
    page_no?: number;
    /**
     * 每页条数，最大限制：200
     */
    page_size?: number;
    /**
     * 活动状态，0: 所有，1: 未开始，2: 进行中，3: 已结束
     */
    status?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 总条数
     */
    total?: number;
    /**
     * 活动信息
     */
    items?: BriefTimeLimitedDiscount;
  }

  /**
   * 活动信息
   */
  export interface BriefTimeLimitedDiscount {
    /**
     * 活动id
     */
    id?: number;
    /**
     * 活动名称
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
     * 是否有效；true:有效；false:无效
     */
    valid?: boolean;
    /**
     * 活动标签
     */
    desc?: string;
    /**
     * 创建时间
     */
    create_at?: Date;
    /**
     * 编辑时间
     */
    update_at?: Date;
    /**
     * 限时折扣周期类型
     */
    period?: PeriodDTO;
  }

  /**
   * 限时折扣周期类型
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
