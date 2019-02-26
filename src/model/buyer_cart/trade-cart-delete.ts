export namespace BuyerCartTradeCartDelete {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品列表信息，goods_id(商品id)、sku_id(sku id)、kdt_id(店铺id)。
         * 例如
         * [{"kdt_id":55,"goods_id":1103945,"sku_id":2722}]
         */
        item_list?: string;
        /**
         * 会话key,如果没有该值，填
         */
        nobody?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 操作是否成功，true为成功，false为失败
         */
        is_success?: boolean;
    }

}
