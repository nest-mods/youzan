export namespace UserUserWeixinOpenidGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 手机号国际码
         */
        country_code?: string;
        /**
         * 手机号
         */
        mobile?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 获取到的用户open_id
         */
        open_id?: string;
        /**
         * 微信union_id
         */
        union_id?: string;
    }

}
