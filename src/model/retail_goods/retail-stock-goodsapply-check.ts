export namespace RetailGoodsRetailStockGoodsapplyCheck {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 单据号
         */
        biz_bill_nos?: string[];
        /**
         * 审核明细
         */
        business_order_items?: OutGoodsApplyCheckItem;
        /**
         * 出库仓库
         */
        from_kdt_id?: number;
        /**
         * 是否通过
         */
        is_ok?: boolean;
        /**
         * 驳回理由
         */
        refused_reason?: string;
        /**
         * 系统来源
         */
        retail_source?: string;
    }

    /**
     *
     */
    export interface OutGoodsApplyCheckItem {
        /**
         * 预发数量
         */
        num?: number;
        /**
         * 商品skuId
         */
        sku_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 本次操作是否成功
         */
        response?: PlainBoolResult;
    }

    /**
     * 本次操作是否成功
     */
    export interface PlainBoolResult {
        /**
         * 是否成功
         */
        is_success?: boolean;
    }

}
