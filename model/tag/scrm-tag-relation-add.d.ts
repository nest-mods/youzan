// tslint:disable:max-line-length variable-name
export namespace TagScrmTagRelationAdd {
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
    /**
     * 标签集合
     */
    tags: UserTagCreate[];
  }

  /**
   *
   */
  export interface UserTagCreate {
    /**
     * 标签名，30个字符以内
     */
    tag_name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 代表是否成功
     */
    response?: boolean;
  }

}
