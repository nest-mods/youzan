export namespace RetailGoodsRetailProductSkusConfirmationDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 待删除商品库商品Id列表
         */
        sku_ids?: number[];
        /**
         * 请求来源（需调用方自定义标识：OPEN_XXXX）
         */
        source?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 关联门店商品数量
         */
        offlineTotalCount?: number;
        /**
         * 关联网店商品数量
         */
        onlineTotalCount?: number;
    }

}
