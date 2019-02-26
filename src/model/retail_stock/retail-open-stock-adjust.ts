export namespace RetailStockRetailOpenStockAdjust {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 创建日期(YYYY-MM-DD HH:MM:SS)
         */
        create_time?: string;
        /**
         * 操作人
         */
        creator?: string;
        /**
         * 操作类型 1 增加 2 减少
         */
        operate_type?: number;
        /**
         * 商品明细
         */
        order_items?: StockOrderItem;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 调用来源标识
         */
        retail_source?: string;
        /**
         * 关联单据号，如其它渠道的订单号
         */
        source_order_no?: string;
        /**
         * 仓库编码，连锁版必填
         */
        warehouse_code?: string;
    }

    /**
     *
     */
    export interface StockOrderItem {
        /**
         * 库存数量
         */
        quantity?: string;
        /**
         * 商品编码
         */
        sku_code?: string;
        /**
         * 供应商编码
         */
        supplier_code?: string;
        /**
         * 含税总金额（含税成本单价*数量）（元）
         */
        with_tax_amount?: string;
        /**
         * 含税成本单价（元）
         */
        with_tax_cost?: string;
        /**
         * 含税总收入（实付金额）
         */
        with_tax_income?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否成功
         */
        is_success?: boolean;
    }

}
