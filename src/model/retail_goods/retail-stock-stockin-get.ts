export namespace RetailGoodsRetailStockStockinGet {
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
         * 入库单实体信息
         */
        stock_in_order_vo?: StockInOrderVO;
    }

    /**
     * 入库单实体信息
     */
    export interface StockInOrderVO {
        /**
         * 操作人
         */
        operato_name?: string;
        /**
         * 供应商ID
         */
        vendor_id?: number;
        /**
         * 供应商名称
         */
        vendor_name?: string;
        /**
         * 实付金额(单位分)
         */
        real_payment?: number;
        /**
         * 入库备注
         */
        remark?: string;
        /**
         * 入库单明细
         */
        stock_in_order_items?: StockInOrderItemVO;
        /**
         * 商家id
         */
        kdt_id?: number;
        /**
         * 业务单据单号
         */
        biz_bill_no?: string;
        /**
         * 业务类型
         */
        type?: number;
        /**
         * 操作者id
         */
        admin_id?: number;
        /**
         * 状态
         */
        status?: number;
        /**
         * 业务时间
         */
        business_time?: Date;
        /**
         * 幂等单号
         */
        idempotent_no?: string;
        /**
         * 原单号--记录订单数据（其他单据为业务单号）
         */
        source_order_no?: string;
        /**
         * 版本号
         */
        version?: number;
        /**
         * 仓库名称
         */
        warehouse_name?: string;
    }

    /**
     * 入库单明细
     */
    export interface StockInOrderItemVO {
        /**
         * 商品名称
         */
        product_name?: string;
        /**
         * 规格描述
         */
        specifications?: string;
        /**
         * 条码
         */
        sku_no?: string;
        /**
         * 单位
         */
        unit?: string;
        /**
         * 数量（一千倍）
         */
        amount?: number;
        /**
         * skuId
         */
        sku_id?: number;
        /**
         * 成本单价（单位：分）
         */
        unit_cost?: number;
        /**
         * 成本价小计
         */
        total_cost?: number;
        /**
         * 操作者id
         */
        admin_id?: number;
        /**
         * 业务单据单号
         */
        biz_bill_no?: string;
        /**
         * 商家id
         */
        kdt_id?: number;
        /**
         * 业务类型
         */
        type?: number;
    }

}
