// tslint:disable:max-line-length variable-name
export namespace UserUsersWeixinFollowersInfoPull {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 用于拉取该粉丝编码之后的查询条件。第一次查询可传入0，之后每次查询可传入上次查询里返回的last_fans_id，直到返回结果里的has_next为false
     */
    after_fans_id: number;
    /**
     * 需要返回的除微信粉丝基础信息外的资产信息。枚举值：points，trade，level。points可获取“points”字段，trade可获取”traded_num,trade_money”两个字段，level可获取”level_info”字段信息。传多个枚举值需用“,”分隔，如果该字段为空则只返回粉丝基础信息。默认为空。(“fields”字段传入枚举值越多，查询数据耗费时间越长。）
     */
    fields?: string;
    /**
     * 每页条数，最大值：50
     */
    page_size?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 搜索到的微信粉丝用户详细信息列表
     */
    users?: WeixinFansCustomerInfo[];
    /**
     * 是否有下一页数据
     */
    has_next?: boolean;
    /**
     * 当前列表中最后一个粉丝编码
     */
    last_fans_id?: number;
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
