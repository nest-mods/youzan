export namespace BeautyItemMeiGoodsServingCategoryDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 分组ID
         */
        category_id?: number;
        /**
         * 美业token
         */
        m_token?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 结果，0代表成功，否则代表失败
         */
        data?: number;
        /**
         * 失败时的提示信息
         */
        message?: string;
    }

}
