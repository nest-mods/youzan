export namespace RetailProductRetailOpenOfflineSpuQuery {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 页码
         */
        page_no?: number;
        /**
         * 每页数量
         */
        page_size?: number;
        /**
         * 零售调用来源(调用方和有赞约定的值)
         */
        retail_source?: string;
        /**
         * 销售状态：0-已售罄，1-销售中，2- 在库中。不传值默认查询销售中状态
         */
        show_display?: number;
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
         * 分页信息
         */
        paginator?: Paginator;
        /**
         * 门店商品信息
         */
        offlineSpus?: OfflineSpuDTO;
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
     * 门店商品信息
     */
    export interface OfflineSpuDTO {
        /**
         * 名称
         */
        title?: string;
        /**
         * 单位
         */
        unit?: string;
        /**
         * 零售价
         */
        price?: string;
        /**
         * 最大建议零售价
         */
        max_guide_price?: string;
        /**
         * 最小建议零售价
         */
        min_guide_price?: string;
        /**
         * 商品条码
         */
        spu_no?: string;
        /**
         * 创建时间
         */
        created_at?: string;
        /**
         * 销售库存
         */
        sell_stock_count?: string;
        /**
         * 总销量
         */
        sold_num?: string;
        /**
         * 商品标编码
         */
        biz_mark_code?: string;
        /**
         * 商品标名称
         */
        biz_mark_name?: string;
        /**
         * 税务编码
         */
        tax_code?: string;
        /**
         * 是否多规格
         */
        has_multi_sku?: boolean;
        /**
         * 是否无规格
         */
        is_non_spec?: boolean;
        /**
         * 类目
         */
        category_name?: string;
        /**
         * 规格
         */
        specifications?: string;
        /**
         * 计量方式
         */
        measurement?: string;
        /**
         * 1：上架状态 0:未上架
         */
        is_display?: number;
        /**
         * plu码
         */
        plu_code?: string;
        /**
         * 门店商品sku信息
         */
        sku_models?: SkuModelDTO;
    }

    /**
     * 门店商品sku信息
     */
    export interface SkuModelDTO {
        /**
         * 规格信息
         */
        specs?: string;
        /**
         * 价格
         */
        price?: string;
        /**
         * 最大建议零售价
         */
        maxGuidePrice?: string;
        /**
         * 最小建议零售价
         */
        minGuidePrice?: string;
        /**
         * plu码
         */
        pluCode?: string;
        /**
         * 单位
         */
        unit?: string;
        /**
         * 商品条码
         */
        skuNo?: string;
    }

}
