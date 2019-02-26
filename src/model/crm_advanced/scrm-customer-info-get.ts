export namespace CrmAdvancedScrmCustomerInfoGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 用户会员卡卡号
         */
        card_no?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 会员卡名称
         */
        card_name?: string;
        /**
         * 姓名
         */
        name?: string;
        /**
         * 手机号码
         */
        mobile?: string;
        /**
         * 粉丝id
         */
        fans_id?: number;
        /**
         * 粉丝类型
         */
        fans_type?: number;
        /**
         * 会员卡别名
         */
        card_alias?: string;
    }

}
