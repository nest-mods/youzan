export namespace ItemItemUpdateDelisting {
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
         * 操作下架的商品id
         */
        item_id?: number;
        /**
         * 操作是否成功，true为成功
         */
        is_success?: boolean;
    }

}
