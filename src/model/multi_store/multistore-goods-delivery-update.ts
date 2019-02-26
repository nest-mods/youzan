export namespace MultiStoreMultistoreGoodsDeliveryUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 网点id
         */
        offline_id?: number;
        /**
         * 商品配送方式,json字符串,结构如：{"335438058":{"express":1,"local_delivery":0,"self_fetch":0}} 其中 express 为快递；local_delivery 为同城送；self_fetch 为到店自提。1为开启0为关闭。
         */
        settings?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 保存成功为true
         */
        is_success?: boolean;
    }

}
