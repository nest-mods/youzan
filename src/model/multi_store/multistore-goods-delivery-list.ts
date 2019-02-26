export namespace MultiStoreMultistoreGoodsDeliveryList {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 网点id
         */
        offline_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 网点下所有商品的配送方式
         */
        list?: MultistoreDeliverySetting;
    }

    /**
     * 网点下所有商品的配送方式
     */
    export interface MultistoreDeliverySetting {
        /**
         * 是否支持自提：1支持；0不支持
         */
        self_fetch?: number;
        /**
         * 是否支持快递：1支持；0不支持
         */
        express?: number;
        /**
         * 网点id
         */
        shop_id?: number;
        /**
         * 是否支持同城送：1支持；0不支持
         */
        local_delivery?: number;
        /**
         * 商品id
         */
        goods_id?: number;
    }

}
