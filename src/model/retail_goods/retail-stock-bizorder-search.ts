export namespace RetailGoodsRetailStockBizorderSearch {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 业务操作人id
         */
        biz_operator_id?: number;
        /**
         * 盘点单状态（CHECKING(1, "盘点中"), DONE(2, "已完成"), CANCEL(3, "已作废")）
         */
        check_order_status?: number[];
        /**
         * 结束时间
         */
        end_time?: string;
        /**
         * 业务单据单号
         */
        order_no?: string;
        /**
         * 单据类型  1, "库存盘点单" 2, "采购入库单"  3, "退货入库单"  4, "出库单"  5,"成本改价"  与order_types必须有一个
         */
        order_type?: number;
        /**
         * 单据类型集合（入库聚合）
         */
        order_types?: number[];
        /**
         * 查询页面
         */
        page_no?: number;
        /**
         * 一页数量
         */
        page_size?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * sku名称
         */
        sku_name?: string;
        /**
         * sku条码
         */
        sku_no?: string;
        /**
         * 请求来源（需调用方自定义标识：OPEN_XXXX）
         */
        source?: string;
        /**
         * 源单号
         */
        source_order_no?: string;
        /**
         * 开始时间
         */
        start_time?: string;
        /**
         * 入库单据详细类型  21:采购入库  22:调拨入库   31 退货入库
         */
        stock_in_type?: number;
        /**
         * 出库单详细类型  41:网店出库  42:门店出库   43:其它出库-报损  44:其它出库-领用  49：其它出库-其他
         */
        stock_out_types?: number[];
        /**
         * 供货商id
         */
        vendor_id?: number;
        /**
         * 门店或独立仓id   连锁版使用此字段,若不传,会默认查下面所有仓库的单据
         */
        warehouse_ids?: number[];
    }

    /**
     *
     */
    export interface Long {
    }

    /**
     *
     */
    export interface Long {
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
         * 分页信息
         */
        paginator?: Paginator;
        /**
         * 实体信息
         */
        items?: StockBizOrderSearchVO;
    }

    /**
     * 分页信息
     */
    export interface Paginator {
        /**
         * 页码
         */
        page?: number;
        /**
         * 数量
         */
        size?: number;
        /**
         * 总条数
         */
        totalCount?: number;
    }

    /**
     * 实体信息
     */
    export interface StockBizOrderSearchVO {
        /**
         * 店铺id
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
         * 操作员工名称
         */
        operator_name?: string;
        /**
         * 状态
         */
        status?: number;
        /**
         * 单据业务类型
         */
        order_biz_type?: number;
        /**
         * 业务时间
         */
        business_time?: Date;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 供应商ID
         */
        vendor_id?: number;
        /**
         * 供应商名称
         */
        vendor_name?: string;
        /**
         * 变更总金额
         */
        change_total_cost?: number;
        /**
         * 创建时间
         */
        created_at?: Date;
        /**
         * 更新时间
         */
        updated_at?: Date;
        /**
         * 仓库名称
         */
        warehouse_name?: string;
        /**
         * 来源单据单号
         */
        source_order_no?: string;
    }

}
