export namespace RetailStockRetailOpenApplyorderCheck {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 要货申请单号
         */
        apply_order_no?: string;
        /**
         * 调出仓仓库编码
         */
        from_warehouse_code?: string;
        /**
         * 要货商品明细
         */
        items?: OpenApplyOrderItem;
        /**
         * 零售调用来源(调用方和有赞约定的值)
         */
        retail_source?: string;
    }

    /**
     *
     */
    export interface OpenApplyOrderItem {
        /**
         * 审核配送价
         */
        checked_delivery_cost?: string;
        /**
         * 预发数量
         */
        num?: string;
        /**
         * sku编码
         */
        sku_code?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 配送单号
         */
        response?: string;
    }

}
