export namespace BeautyMemberMeiCustomerPointsDecrease {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 要扣减的积分值，最小为1，不支持小数
         */
        points?: number;
        /**
         * 会员的id
         */
        yz_uid?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 扣减结果
         */
        is_success?: boolean;
    }

}
