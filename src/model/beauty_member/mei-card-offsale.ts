export namespace BeautyMemberMeiCardOffsale {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 会员卡标识
         */
        card_alias?: string;
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 要上架的门店列表
         */
        select_dept_ids?: number[];
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 下架是否成功
         */
        is_success?: boolean;
    }

}
