export namespace ItemItemDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品Id
         */
        item_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 被删除的商品id
         */
        item_id?: number;
        /**
         * 是否操作成功，成功为true
         */
        is_success?: boolean;
    }

}
