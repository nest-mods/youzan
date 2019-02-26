export namespace BeautyItemMeiGoodsServingSkuCreate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 规格名称
         */
        name?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 规格ID，成功时会返回
         */
        sku_id?: number;
        /**
         * 错误提示信息
         */
        msg?: string;
    }

}
