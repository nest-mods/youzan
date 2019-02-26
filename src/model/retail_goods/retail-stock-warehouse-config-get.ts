export namespace RetailGoodsRetailStockWarehouseConfigGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 系统来源
         */
        retail_source?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否开启调拨审核
         */
        response?: boolean;
    }

}
