export namespace RetailProductRetailOpenSpuDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 零售调用来源（调用方和有赞约定的值）
         */
        retail_source?: string;
        /**
         * 商品编码列表（最多20个）
         */
        spu_codes?: string[];
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 删除结果
         */
        response?: boolean;
    }

}
