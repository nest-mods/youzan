export namespace RetailGoodsRetailProductSellSkuUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 网店商品id
         */
        item_id?: number;
        /**
         * 网店商品规格id
         */
        item_sku_id?: number;
        /**
         * 规格价格，单位：分
         * （价格最小0.01元，最大值9999999元）
         */
        price?: number;
        /**
         * 请求来源（用于标识请求来源）
         */
        retail_source?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否修改成功
         */
        update_result?: boolean;
    }

}
