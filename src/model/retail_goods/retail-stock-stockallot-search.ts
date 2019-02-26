export namespace RetailGoodsRetailStockStockallotSearch {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 单据操作人
         */
        biz_operator_id?: number;
        /**
         * 结束时间
         */
        end_time?: string;
        /**
         * 出库店铺
         */
        from_kdt_id?: number;
        /**
         * 单据名称或编码
         */
        name_or_no?: string;
        /**
         * 单据编号
         */
        order_no?: string;
        /**
         * 单据状态
         */
        order_status?: number;
        /**
         * 单据类型
         */
        order_type?: number;
        /**
         * 分页号
         */
        page_no?: number;
        /**
         * 分页大小
         */
        page_size?: number;
        /**
         * 系统来源
         */
        retail_source?: string;
        /**
         * 是否显示明细
         */
        show_item?: boolean;
        /**
         * 商品名称
         */
        sku_name?: string;
        /**
         * 商品编码
         */
        sku_no?: string;
        /**
         * 开始时间
         */
        start_time?: string;
        /**
         * 入库店铺
         */
        to_kdt_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 返回信息
         */
        response?: StockAllotSearchPaginatorVO;
    }

    /**
     * 返回信息
     */
    export interface StockAllotSearchPaginatorVO {
        /**
         * 待审核单据数量
         */
        to_check_num?: number;
        /**
         * 待出库单据数量
         */
        to_out_num?: number;
        /**
         * 待入库单据数量
         */
        to_in_num?: number;
        /**
         * 已驳回单据数量
         */
        refused_num?: number;
        /**
         * 单据分页列表信息
         */
        data?: PaginWithInterBusinessVO;
    }

    /**
     * 单据分页列表信息
     */
    export interface PaginWithInterBusinessVO {
        /**
         *
         */
        paginator?: Paginator;
        /**
         * 库间单据信息
         */
        items?: InterBusinessOrderVO;
    }

    /**
     *
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
     * 库间单据信息
     */
    export interface InterBusinessOrderVO {
        /**
         * 自增id
         */
        id?: number;
        /**
         * 创建时间
         */
        created_at?: Date;
        /**
         * 更新时间
         */
        updated_at?: Date;
        /**
         * 连锁总部kdtId
         */
        kdt_id?: number;
        /**
         * 单据号
         */
        biz_bill_no?: string;
        /**
         * 幂等单号
         */
        idempotent_no?: string;
        /**
         * 单据类型  1:调拨单   2:要货申请单  3:配送单
         */
        type?: number;
        /**
         * 单据详细类型
         * 11:库间调拨  12:库内调拨
         * 21:要货申请单
         * 31:配送单
         */
        business_type?: number;
        /**
         * 出库仓库kdtId
         */
        from_kdt_id?: number;
        /**
         * 入库仓库kdtId
         */
        to_kdt_id?: number;
        /**
         * 出库仓库名称
         */
        from_kdt_name?: string;
        /**
         * 入库店铺名称
         */
        to_kdt_name?: string;
        /**
         * 申请人名称
         */
        operator_name?: string;
        /**
         * 申请人id
         */
        admin_id?: string;
        /**
         * 申请人所在的店铺kdtId
         */
        kdt_id_of_admin?: number;
        /**
         * 申请店铺名称
         */
        warehosue_of_admin?: string;
        /**
         * 单据状态
         * 1:待审核  2:待出库  3:待入库  4:已驳回  5:已关闭  6：已完成  7:出库执行中（处理中状态）  8:入库执行中（处理中状态）
         */
        status?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 审核驳回原因
         */
        refused_reason?: string;
        /**
         * 版本乐观锁
         */
        version?: number;
        /**
         * 调拨单明细返回信息
         */
        business_order_items?: InterBusinessOrderItemOfProdVO;
        /**
         * 拓展信息
         */
        extInfo?: string;
        /**
         * 实际出库时间
         */
        distribute_out_at?: Date;
        /**
         * 审核时间
         */
        checked_at?: Date;
        /**
         * 入库单号
         */
        in_biz_bill_no?: string;
        /**
         * 出库单号
         */
        out_biz_bill_no?: string;
    }

    /**
     * 调拨单明细返回信息
     */
    export interface InterBusinessOrderItemOfProdVO {
        /**
         * 总部kdtId
         */
        kdt_id?: number;
        /**
         * 单据号
         */
        biz_bill_no?: string;
        /**
         * 单据类型   1:调拨单   2:要货申请单   3:配送单
         */
        type?: number;
        /**
         * 商品skuId
         */
        sku_id?: number;
        /**
         * 申请数量
         */
        apply_num?: number;
        /**
         * 实际出库数量
         */
        actual_out_num?: number;
        /**
         * 实际入库数量
         */
        actual_in_num?: number;
        /**
         * 成本单价
         */
        unit_price?: number;
        /**
         * 成本总计
         */
        total_price?: number;
        /**
         * 商品名称
         */
        product_name?: string;
        /**
         * 商品图片
         */
        product_picture?: string;
        /**
         * 规格描述
         */
        specifications?: string;
        /**
         * 商品条码
         */
        sku_no?: string;
        /**
         * 单位
         */
        unit?: string;
    }

}
