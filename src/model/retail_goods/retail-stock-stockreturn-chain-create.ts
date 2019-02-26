export namespace RetailGoodsRetailStockStockreturnChainCreate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 业务时间
         */
        business_time?: string;
        /**
         * 幂等单号(请求唯一标识)
         */
        idempotent_no?: string;
        /**
         * 是否将库存盘点成0，默认false不盘点
         */
        is_need_pd?: boolean;
        /**
         * 入库备注
         */
        remark?: string;
        /**
         * 请求来源（需调用方自定义标识：OPEN_XXXX）
         */
        retail_source?: string;
        /**
         * 退货单明细
         */
        stock_return_order_items?: HqStockReturnOrderItemCreateRequest;
        /**
         * 入库的仓库或门店id
         */
        warehouse_id?: number;
    }

    /**
     *
     */
    export interface HqStockReturnOrderItemCreateRequest {
        /**
         * 实际入库数量（千倍）非空
         */
        amount?: number;
        /**
         * 幂等单号
         */
        idempotent_no?: string;
        /**
         * 破损数量（千倍）非空
         */
        loss_amount?: number;
        /**
         * 商品名称 非空
         */
        product_name?: string;
        /**
         * 退货数量（千倍）非空 returnAmount= amount + lossAmount
         */
        return_amount?: number;
        /**
         * 商品skuId 非空
         */
        sku_id?: number;
        /**
         * 条码 非空
         */
        sku_no?: string;
        /**
         * 商品所属kdtId 连锁版退货入库必填
         */
        source_kdt_id?: number;
        /**
         * 关联退货单  非空
         */
        source_no?: string;
        /**
         * 规格信息
         */
        specifications?: string;
        /**
         * 单位  非空
         */
        unit?: string;
    }

    /**
     *
     */
    export interface Long {
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 退货入库单号
         */
        business_order_no?: string;
    }

}
