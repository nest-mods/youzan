export namespace LogisticsLogisticsFeeGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 城市名称
         */
        city_name?: string;
        /**
         * 区县名称
         */
        county_name?: string;
        /**
         * 交易商品列表
         */
        item_param_list?: string;
        /**
         * 订单号
         */
        order_no?: string;
        /**
         * 省份名称
         */
        province_name?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 区县id
         */
        countyId?: number;
        /**
         * 订单总快递费
         */
        totalPostage?: number;
        /**
         * 商品运费详情 key=itemId, value=postage
         */
        itemsPostage?: Map;
    }

    /**
     * 商品运费详情 key=itemId, value=postage
     */
    export interface Map {
        /**
         * 待更新商品id
         */
        skuId?: number;
        /**
         * 是否更新成功
         */
        result?: boolean;
    }

}
