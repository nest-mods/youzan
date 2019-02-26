export namespace RetailProductRetailOpenCategoryUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 分类ID
         */
        category_id?: number;
        /**
         * 类目名称
         */
        name?: string;
        /**
         * 零售调用来源(调用方和有赞约定的值)
         */
        retail_source?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 更新结果状态
         */
        response?: boolean;
    }

}
