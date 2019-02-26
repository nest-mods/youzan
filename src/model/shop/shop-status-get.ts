export namespace ShopShopStatusGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 需要返回的店铺状态信息对象字段
         */
        fields?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 店铺状态信息
         */
        status?: AccountShopStatus;
    }

    /**
     * 店铺状态信息
     */
    export interface AccountShopStatus {
        /**
         * 是否绑定了微信
         */
        is_bind_weixin?: boolean;
        /**
         * 是否是微信认证服务号
         */
        is_weixin_service?: boolean;
        /**
         * 是否是微信未认证服务号
         */
        is_weixin_unauthorized_service?: boolean;
        /**
         * 是否是微信认证订阅号
         */
        is_weixin_publisher?: boolean;
        /**
         * 是否是微信未认证订阅号
         */
        is_weixin_unauthorized_publisher?: boolean;
        /**
         * 是否是担保交易
         */
        is_secured_transactions?: boolean;
        /**
         * 是否设置购物车
         */
        is_set_shopping_cart?: boolean;
        /**
         * 是否设置购买记录
         */
        is_set_buy_record?: boolean;
        /**
         * 是否设置商品评价
         */
        is_set_customer_reviews?: boolean;
        /**
         * 是否设置仅粉丝购买
         */
        is_set_fans_only?: boolean;
    }

}
