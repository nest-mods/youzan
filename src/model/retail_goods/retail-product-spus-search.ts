export namespace RetailGoodsRetailProductSpusSearch {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 返回属性
         * 1:商品基本信息
         */
        attributes?: number[];
        /**
         * 批量筛选子类目id
         */
        category_ids?: number[];
        /**
         * 类目筛选的时候是否包括子类目 默认 true
         */
        child_category?: boolean;
        /**
         * 搜索编码
         */
        code?: string;
        /**
         * 首选供应商id
         */
        default_vendor_id?: number;
        /**
         * 商品名称
         */
        name?: string;
        /**
         * 名称或编码
         */
        name_or_code?: string;
        /**
         * 页码
         */
        page_no?: number;
        /**
         * 页大小(最大50个)
         */
        page_size?: number;
        /**
         * 请求来源
         */
        retail_source?: string;
        /**
         * 销售渠道过滤  [] 未设置  [2] 门店 [4] 网店 [2,4]门店+网店 传null则表示全部
         */
        sell_channels?: number[];
        /**
         * 排序字段
         */
        sort_name?: string;
        /**
         * 1 升序 2 降序
         */
        sort_type?: number;
        /**
         * 商品库ID列表(最大50个)
         */
        spu_ids?: number[];
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
         * 商品库搜索结果对象
         */
        items?: SpuSearchVO;
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
     * 商品库搜索结果对象
     */
    export interface SpuSearchVO {
        /**
         * 商品id
         */
        spu_id?: number;
        /**
         * 关联的商户id
         */
        kdt_id?: number;
        /**
         * 分类id
         */
        category_id?: number;
        /**
         * 分类名称
         */
        category_name?: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 规格型号
         */
        specifications?: string;
        /**
         * 图片地址
         */
        photo_url?: string;
        /**
         * 单位
         */
        unit?: string;
        /**
         * 编码
         */
        spu_no?: string;
        /**
         * 创建时间
         */
        created_at?: Date;
        /**
         * 更新时间
         */
        updated_at?: Date;
        /**
         * 销售渠道 注：2 门店 4 网店
         */
        sell_channels?: number[];
        /**
         * 一品多码
         */
        bar_codes?: string[];
        /**
         * 规格定义组
         */
        spec_define_tuple?: string;
        /**
         * sku详情
         */
        skus?: SkuVO;
    }

    /**
     * sku详情
     */
    export interface SkuVO {
        /**
         * 商品规格id
         */
        sku_id?: number;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * spu id
         */
        spu_id?: number;
        /**
         * 商品建议零售价
         */
        retail_price?: number;
        /**
         * 商品实物库存
         */
        stock_num?: number;
        /**
         * 商品销售库存
         */
        sell_stock_count?: number;
        /**
         * 商品编码
         */
        sku_no?: string;
        /**
         * 规格创建时间
         */
        created_at?: Date;
        /**
         * 规格更新时间
         */
        updated_at?: Date;
        /**
         * 最后一次入库成本价
         */
        last_cost_price?: number;
        /**
         * 平均入库成本价
         */
        avg_cost_price?: number;
        /**
         * 一品多码
         */
        bar_codes?: string[];
        /**
         * 规格定义
         */
        specs?: SpecKeyValue;
    }

    /**
     * 规格定义
     */
    export interface SpecKeyValue {
        /**
         * 规格项id
         */
        kId?: number;
        /**
         * 规格项名称
         */
        k?: string;
        /**
         * 规格值id
         */
        vId?: number;
        /**
         * 规格值名称
         */
        v?: string;
    }

}
