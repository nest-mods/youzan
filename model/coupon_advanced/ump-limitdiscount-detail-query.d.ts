export namespace CouponAdvancedUmpLimitdiscountDetailQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id，支持多个批量查询
     */
    goods_ids?: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 限时折扣商品信息
     */
    result?: BriefTimeLimitedDiscountGoodsJoin;
  }

  /**
   * 限时折扣商品信息
   */
  export interface BriefTimeLimitedDiscountGoodsJoin {
    /**
     * 活动id
     */
    activityId?: number;
    /**
     * 商品id
     */
    goodsId?: number;
    /**
     * 优惠类型；discount:打折；decrease:减价
     */
    discountType?: string;
    /**
     * 优惠值;如果是打折:70=7折; 如果是减价:100=1元
     */
    discountValue?: number;
    /**
     * 限购数；0为不限购
     */
    quota?: number;
    /**
     * 限购类型；0:不限购，1：超过限购数后允许原价购买；2:限购X件
     */
    quotaType?: number;
    /**
     * 是否有效；
     */
    valid?: boolean;
    /**
     * 抹去金额类型。1表示抹去角、分，2表示抹去分，0表示不抹去
     */
    eraseType?: number;
    /**
     * 创建时间
     */
    createdAt?: Date;
    /**
     * 编辑时间
     */
    updatedAt?: Date;
    /**
     * 开始时间
     */
    startAt?: Date;
    /**
     * 结束时间
     */
    endAt?: Date;
    /**
     * 折扣价；单位分。目前不支持抹分抹角，需要开发者自行根据eraseType进行抹角抹分
     */
    discountPrice?: number;
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
