export namespace RetailGoodsRetailProductSpusBatchDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 请求来源（OPEN-XXX）
         */
        retail_source?: string;
        /**
         * 商品id列表
         */
        spu_ids?: number[];
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否删除成功
         */
        result?: boolean;
    }

}
