export namespace BeautyMemberMeiCustomerAssetsinfoGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 美业token
         */
        m_token?: string;
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
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 会员卡数量
         */
        member_card_count?: number;
        /**
         * 会员id
         */
        yz_uid?: number;
        /**
         * 积分
         */
        points?: number;
        /**
         * 储值账户余额。它的值等于储值赠送金额+储值本金金额
         */
        account_balance?: number;
        /**
         * 储值赠送金额
         */
        present_balance?: number;
        /**
         * 储值本金金额
         */
        capital_balance?: number;
        /**
         * 优惠券数量
         */
        coupon_count?: number;
        /**
         * 权益数量
         */
        total_rights?: number;
    }

}
