export namespace RetailProductRetailOpenOfflineSpuRelease {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 分类id：组合商品需要用户自己填写
         */
        category_id?: number;
        /**
         * 组合商品关联关系
         */
        combine_params?: OpenOnlineCombineParam;
        /**
         * 是否上架
         */
        display?: number;
        /**
         * 组合商品可选填商品编码
         */
        goods_no?: string;
        /**
         * 是否参加会员折扣。1:参加，0:不参加。 默认 1参加
         */
        join_level_discount?: number;
        /**
         * 建议指导价上限
         */
        max_guide_price?: string;
        /**
         * 称重非称重
         */
        measurement?: string;
        /**
         * 建议指导价下限
         */
        min_guide_price?: string;
        /**
         * 商品名称
         */
        name?: string;
        /**
         * 图片地址
         */
        photo_url?: string;
        /**
         * 不多于五个
         */
        prop_params?: OpenPropParam;
        /**
         * 零售价
         */
        retail_price?: string;
        /**
         * 来源
         */
        retail_source?: string;
        /**
         * 下架分店店铺id列表
         */
        sale_down_kdt_ids?: number[];
        /**
         * 上架分店店铺id列表
         */
        sale_up_kdt_ids?: number[];
        /**
         * 可售库存：组合商品需要传计算后的可售库存
         */
        sell_stock_count?: number;
        /**
         * 销售类型：1单个销售，2组合销售
         */
        sell_type?: number;
        /**
         * 商品库skucode
         */
        sku_center_code?: string;
        /**
         * 来源
         */
        source?: string;
        /**
         * 规格：组合商品需要用户自己填写
         */
        specifications?: string;
        /**
         * 商品code
         */
        spu_code?: string;
        /**
         * 库存规格定义
         */
        stocks?: OfflineStock;
    }

    /**
     *
     */
    export interface OpenOnlineCombineParam {
        /**
         * 子商品 捆绑数量
         */
        related_combine_num?: string;
        /**
         * 子商品 价格
         */
        related_combine_price?: string;
        /**
         * 组合商品子商品关联商品库商品code
         */
        related_combine_sku_code?: string;
    }

    /**
     *
     */
    export interface OpenPropParam {
        /**
         * 商品添加的属性项id
         */
        propId?: number;
        /**
         * 添加的属性项名称
         */
        propName?: string;
        /**
         * 商品关联的属性值id列表
         */
        textList?: number[];
    }

    /**
     *
     */
    export interface OfflineStock {
        /**
         * 建议指导价上限
         */
        max_guide_price?: number;
        /**
         * 建议指导价下限
         */
        min_guide_price?: number;
        /**
         * 零售价(零售价最大为999999900分，零售价最小为1分)，单位：分
         */
        price?: number;
        /**
         * 关联的商品库商品spuId
         */
        related_item_id?: number;
        /**
         * 关联的商品库商品skuId
         */
        related_sku_id?: number;
        /**
         * 可售库存
         */
        sell_stock_count?: number;
        /**
         * 门店商品规格id 更新时回传
         */
        sku_id?: number;
        /**
         *
         */
        specs?: SpecKeyValue;
    }

    /**
     *
     */
    export interface SpecKeyValue {
        /**
         * 规格属性名称
         */
        k?: string;
        /**
         * 规格属性id
         */
        kId?: number;
        /**
         * 规格值名称
         */
        v?: string;
        /**
         * 规格值id
         */
        vId?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 商品发布门店返回值
         */
        response?: OpenReleaseOfflineProductResponse;
    }

    /**
     * 商品发布门店返回值
     */
    export interface OpenReleaseOfflineProductResponse {
        /**
         * 商品id
         */
        item_id?: number;
        /**
         * sku 的id
         */
        sku_ids?: number[];
    }

}
