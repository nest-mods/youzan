export namespace TagsUsersWeixinFollowerTagsDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 微信粉丝用户ID。调用时，参数 weixin_openid 和 fans_id 选其一即可
         */
        fans_id?: number;
        /**
         * 标签名，多个标签名用“,”分隔
         */
        tags?: string;
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
         * 删除是否成功
         */
        is_success?: boolean;
    }

}
