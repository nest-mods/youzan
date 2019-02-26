export namespace RetailGoodsRetailProductSkucategoriesUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 分类Id
         */
        category_id?: number;
        /**
         * 待修改skuId列表
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
         * 批量更新商品库商品，各个商品是否更新成功
         */
        batch_update_result?: Map<number, boolean>;
    }

}
