export namespace UserUsersWeixinFollowersPull {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 用于拉取该粉丝编码之后的查询条件。第一次查询可传入0，之后每次查询可传入上次查询里返回的last_fans_id，直到返回结果里的has_next为false
     */
    after_fans_id: number;
    /**
     * 需要返回的微信粉丝对象字段，如nick,avatar等。可选值：CrmWeixinFans微信粉丝结构体中所有字段均可返回；多个字段用“,”分隔。如果为空则返回所有
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
     * 搜索到的微信粉丝用户列表
     */
    users?: CrmWeixinFans[];
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
   * 搜索到的微信粉丝用户列表
   */
  export interface CrmWeixinFans {
    /**
     * 微信粉丝用户ID
     */
    user_id?: number;
    /**
     * 微信粉丝用户的openid，可用于微信Api
     */
    weixin_openid?: string;
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
     * 当前积分
     */
    points?: number;
    /**
     * 成交订单笔数
     */
    traded_num?: number;
    /**
     * 成交订单总额。单位：元
     */
    traded_money?: string;
    /**
     * 用户标签
     */
    tags?: CrmUserTag[];
    /**
     * 粉丝会员等级的数据结构
     */
    level_info?: CrmFansLevel;
    /**
     * 是否关注
     */
    is_follow?: boolean;
    /**
     * 微信粉丝用户的unionid，可用于微信Api
     */
    union_id?: string;
  }

  /**
   * 用户标签
   */
  export interface CrmUserTag {
    /**
     * 标签ID
     */
    id?: number;
    /**
     * 标签名
     */
    name?: string;
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
