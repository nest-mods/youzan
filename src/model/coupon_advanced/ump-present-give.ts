export namespace CouponAdvancedUmpPresentGive {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 赠品活动ID
         */
        activity_id?: number;
        /**
         * 有赞手机注册用户ID，fans_id和buyer_id至少要传一个
         */
        buyer_id?: number;
        /**
         * 微信粉丝ID，fans_id和buyer_id至少要传一个
         */
        fans_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否领取成功
         */
        is_success?: boolean;
        /**
         * 赠品ID
         */
        present_id?: number;
        /**
         * 赠品名
         */
        present_name?: string;
        /**
         * 赠品领取链接
         */
        receive_address?: string;
    }

}
