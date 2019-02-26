export namespace BeautyItemMeiGoodsServingCategoryUpdate {
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
        /**
         * 分组名称
         */
        name?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 结果码
         */
        code?: number;
        /**
         * 数据
         */
        data?: number;
        /**
         * 是否成功
         */
        success?: boolean;
        /**
         * 详细信息
         */
        message?: string;
    }

}
