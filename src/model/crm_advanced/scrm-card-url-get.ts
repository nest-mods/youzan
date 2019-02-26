export namespace CrmAdvancedScrmCardUrlGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商家会员卡的唯一标识
         */
        card_alias?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 会员卡发卡链接
         */
        card_url?: string;
    }

}
