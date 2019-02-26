export namespace ShopShopBasicGet {
    /**
     * 请求参数
     */
    export interface Request {
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 店铺ID
         */
        sid?: number;
        /**
         * 店铺名称
         */
        name?: string;
        /**
         * 店铺LOGO
         */
        logo?: string;
        /**
         * 店铺地址
         */
        url?: string;
        /**
         * 门店地址
         */
        physical_url?: string;
        /**
         * 认证类型（0 未认证 2 企业认证 3/4 个人认证 6/7/8/9 官方认证）
         */
        cert_type?: number;
    }

}
