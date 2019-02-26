export namespace ItemStandardItemStandardCreate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品条码，通用的条形编码，不是商家编码
         */
        code?: string;
        /**
         * 商品类型
         */
        item_type?: number;
    }

    export type Response = void;

}
