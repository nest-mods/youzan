export namespace TagsUsersWeixinFollowerTagsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 微信粉丝用户ID。调用时，参数 weixin_openid 和 fans_id 选其一即可
     */
    fans_id?: string;
    /**
     * 微信粉丝用户的openid
     */
    weixin_openid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 该粉丝的标签集合
     */
    tags?: CrmFansTag;
  }

  /**
   * 该粉丝的标签集合
   */
  export interface CrmFansTag {
    /**
     * 标签ID
     */
    tag_id?: number;
    /**
     * 标签名
     */
    tag_name?: string;
  }

}
