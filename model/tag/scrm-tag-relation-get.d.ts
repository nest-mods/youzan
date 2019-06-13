export namespace TagScrmTagRelationGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 账户ID
     */
    account_id: string;
    /**
     * 帐号类型。目前支持以下选项（只支持传一种）： FansID：自有粉丝ID， Mobile：手机号， YouZanAccount：有赞账号，OpenUserId：三方自身账号， WeiXinOpenId：微信openId
     */
    account_type: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 客户标签集合
     */
    tags?: CrmUserTag[];
  }

  /**
   * 客户标签集合
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

}
