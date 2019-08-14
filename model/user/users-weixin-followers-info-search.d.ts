// tslint:disable:max-line-length variable-name
export namespace UserUsersWeixinFollowersInfoSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 关注的结束时间。查询在该时间之前关注的粉丝，不能为空，查询时间间隔不能超过一天，格式同start_follow
     */
    end_follow: Date;
    /**
     * 需要返回的除微信粉丝基础信息外的资产信息。枚举值：points，trade，level。points可获取“points”字段，trade可获取”traded_num,trade_money”两个字段，level可获取”level_info”字段信息。传多个枚举值需用“,”分隔，如果该字段为空则只返回粉丝基础信息。默认为空。(“fields”字段传入枚举值越多，查询数据耗费时间越长。）
     */
    fields?: string;
    /**
     * 是否仅拉取关注的粉丝。1:仅拉取已关注的粉丝 0:拉取已关注和已跑路粉丝
     */
    only_follow?: number;
    /**
     * 页码，page_no * page_size参数不超过10000。若备选数据多于10000条，请通过调整start_follow/end_follow来缩小时间范围。
     */
    page_no?: number;
    /**
     * 每页条数，最大值：50。默认为10。
     */
    page_size?: number;
    /**
     * 关注的起始时间。查询在该时间之后（包含该时间）关注的粉丝，不能为空。格式可为“20170101”或“2017-01-01 12:00:00"
     */
    start_follow: Date;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 搜索到的微信粉丝用户总数
     */
    total_results?: number;
    /**
     * 搜索到的微信粉丝用户详细信息列表
     */
    users?: WeixinFansCustomerInfo[];
  }

  /**
   * 搜索到的微信粉丝用户详细信息列表
   */
  export interface WeixinFansCustomerInfo {
    /**
     * 微信粉丝用户ID
     */
    user_id?: number;
    /**
     * 微信粉丝用户的openid，可用于微信Api
     */
    weixin_open_id?: string;
    /**
     * 微信粉丝用户的昵称
     */
    nick?: string;
    /**
     * 微信粉丝用户的头像Url
     */
    avatar?: string;
    /**
     * 关注时间
     */
    follow_time?: Date;
    /**
     * 性别。可选值：m(男)，f(女)。未知则为空
     */
    sex?: string;
    /**
     * 所在城市
     */
    city?: string;
    /**
     * 所在身份
     */
    province?: string;
    /**
     * 所在国家
     */
    country?: string;
    /**
     * 当前积分（当入参fields字段传入"points"枚举值才会返回该字段。）
     */
    points?: number;
    /**
     * 成交订单笔数（当入参fields字段传入"trade"枚举值才会返回该字段。）
     */
    traded_num?: number;
    /**
     * 成交订单总额。单位：元。（当入参fields字段传入"trade"枚举值才会返回该字段。）
     */
    trade_money?: string;
    /**
     * 粉丝会员等级的数据结构
     */
    level_info?: CrmFansLevel;
    /**
     * 是否关注
     */
    is_follow?: boolean;
  }

  /**
   * 粉丝会员等级的数据结构
   */
  export interface CrmFansLevel {
    /**
     * 会员等级编码
     */
    level_id?: number;
    /**
     * 会员等级名
     */
    level_name?: string;
  }

}
