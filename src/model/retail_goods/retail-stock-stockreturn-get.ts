export namespace RetailGoodsRetailStockStockreturnGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 入库单单号
         */
        business_order_no?: string;
        /**
         * 是否显示明细
         */
        show_item?: boolean;
        /**
         * 请求来源（需调用方自定义标识：OPEN_XXXX）
         */
        source?: string;
        /**
         * 门店或独立仓id   注意：连锁版必填
         */
        warehouse_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 退货入库详情
         */
        stock_return_complex_vo?: StockReturnComplexVO;
    }

    /**
     * 退货入库详情
     */
    export interface StockReturnComplexVO {
        /**
         * 操作员工名称
         */
        operator_name?: string;
        /**
         * 创建时间
         */
        created_at?: number;
        /**
         * 业务单据单号
         */
        biz_bill_no?: string;
        /**
         * 幂等单号
         */
        idempotent_no?: string;
        /**
         * 业务时间
         */
        business_time?: number;
        /**
         * 退货入库单明细
         */
        stock_return_order_items?: StockReturnOrderItemVO;
        /**
         * 业务类型（STOCK_CHECK(1, "库存盘点单"),
         *   STOCK_IN(2, "采购入库单"),
         *   STOCK_RETURN(3, "退货入库单"),
         *   STOCK_OUT(4, "出库单")）
         */
        type?: number;
        /**
         * 原单号--记录订单数据（其他单据为业务单号）
         */
        source_order_no?: string;
        /**
         * 商家id
         */
        kdt_id?: number;
        /**
         * 更新时间
         */
        updated_at?: number;
        /**
         * 操作者id
         */
        admin_id?: number;
        /**
         * 状态
         */
        status?: number;
        /**
         * 仓库名称
         */
        warehouse_name?: string;
    }

    /**
     * 退货入库单明细
     */
    export interface StockReturnOrderItemVO {
        /**
         * 关联退货单编号
         */
        source_no?: string;
        /**
         * 业务单据单号
         */
        biz_bill_no?: string;
        /**
         * 实际入库数量（千倍）
         */
        amount?: number;
        /**
         * 退货数量（千倍）  returnAmount= amount + ossAmount
         */
        return_amount?: number;
        /**
         * 成本价小计
         */
        total_cost?: number;
        /**
         * 商品id
         */
        sku_id?: number;
        /**
         * 业务类型
         */
        type?: number;
        /**
         * 规格信息
         */
        specifications?: string;
        /**
         * 商品名称
         */
        product_name?: string;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 单位
         */
        unit?: string;
        /**
         * 商品条码
         */
        sku_no?: string;
        /**
         * 破损数量（千倍）
         */
        loss_amount?: number;
        /**
         * 操作者id
         */
        admin_id?: number;
        /**
         * 成本单价
         */
        unit_cost?: number;
    }

}
