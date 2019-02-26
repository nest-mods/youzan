export namespace ItemCategoryItemcategoriesTagDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品分组ID
         */
        tag_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否删除成功
         */
        is_success?: boolean;
    }

}
