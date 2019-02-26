export namespace RetailStockRetailOpenStockoutorderGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 出库单单据编号
         */
        biz_bill_no?: string;
        /**
         * 零售调用来源（调用方和有赞约定的值）
         */
        retail_source?: string;
        /**
         * 仓库编码
         */
        warehouse_code?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 单据编号
         */
        biz_bill_no?: string;
        /**
         * 仓库编码
         */
        warehouse_code?: string;
        /**
         * 单据日期（YYYY-MM-DD HH:MM:SS）
         */
        create_time?: string;
        /**
         * 出库单类型(BSCK=报损出库;PKCK=盘亏出库;
         * CGTC=采购退厂; XSCK=销售出库;DBCK=调拨出库;)
         */
        order_type?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 制单人
         */
        creator?: string;
        /**
         * 关联单据号，如交易出库关联的订单号
         */
        source_order_no?: string;
        /**
         * 明细列表
         */
        order_items?: OpenStockOrderItemDTO;
    }

    /**
     * 明细列表
     */
    export interface OpenStockOrderItemDTO {
        /**
         * 商品编码
         */
        sku_code?: string;
        /**
         * 商品条码
         */
        sku_no?: string;
        /**
         * 商品名称
         */
        product_name?: string;
        /**
         * 单位
         */
        unit?: string;
        /**
         * 出库数量
         */
        quantity?: string;
        /**
         * 含税成本单价（元）
         */
        with_tax_cost?: string;
        /**
         * 税总金额（含税成本单价*数量）
         */
        with_tax_amount?: string;
        /**
         * 不含税成本单价（元）
         */
        without_tax_cost?: string;
        /**
         * 不含税总金额（不含税成本单价*数量）
         */
        without_tax_amount?: string;
        /**
         * 销项税率
         */
        output_tax_rate?: string;
        /**
         * 进项税率
         */
        input_tax_rate?: string;
        /**
         * 成交单价（单个商品的实付单价，销售出库单中才存在）（元）
         */
        real_sales_price?: string;
        /**
         * 成交单价（单个商品的实付单价，销售出库单中才存在）（元）
         */
        with_tax_income?: string;
    }

}
