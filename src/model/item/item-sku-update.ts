export namespace ItemItemSkuUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品数字编号
         */
        item_id?: number;
        /**
         * 商品编码
         */
        item_no?: string;
        /**
         * sku销售价格，精确到小数点2位；单位:元
         */
        price?: string;
        /**
         * sku库存数量
         */
        quantity?: string;
        /**
         * sku id
         */
        sku_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否成功; 成功:true
         */
        is_success?: boolean;
    }

}
