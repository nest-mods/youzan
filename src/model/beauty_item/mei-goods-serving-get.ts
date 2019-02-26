export namespace BeautyItemMeiGoodsServingGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品ID
         */
        goods_id?: number;
        /**
         * 美业token
         */
        m_token?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 服务详情信息
         */
        serving_info?: MeiGoodsInfoResp;
    }

    /**
     * 服务详情信息
     */
    export interface MeiGoodsInfoResp {
        /**
         * 服务/产品 ID
         */
        item_id?: number;
        /**
         * 商品ID
         */
        goods_id?: number;
        /**
         * 条形码
         */
        sn?: string;
        /**
         * 商品名称
         */
        title?: string;
        /**
         * 创建时间
         */
        create_time?: number;
        /**
         * 更新时间
         */
        update_time?: number;
        /**
         * 推广链接
         */
        promotion_link?: string;
        /**
         * 服务简介
         */
        short_memo?: string;
        /**
         * 服务详情
         */
        memo?: string;
        /**
         * 最低价格
         */
        price?: number;
        /**
         * 价格标签
         */
        original_text?: string;
        /**
         * 商品类型  1 服务 2 产品
         */
        goods_type?: number;
        /**
         * 商品规格信息
         */
        sku_tree_list?: MeiGoodsSkuTreeResponse;
        /**
         * 商品图片信息
         */
        goods_picture_list?: MeiGoodsPictureResponseDTO;
        /**
         * 商品规格信息
         */
        sku_info_list?: MeiSkuInfoResponseDTO;
        /**
         * 售卖属性
         */
        sale_info?: MeiGoodsSaleInfoResp;
        /**
         * 商品库存信息
         */
        stock?: MeiGoodsStockResponseDTO;
        /**
         * 商品分类信息
         */
        category?: MeiCategoryResponseDTO;
        /**
         * 商品标签信息
         */
        tag_list?: MeiTagResponseDTO;
        /**
         * 美业商品产品信息
         */
        product?: MeiGoodsProductInfo;
        /**
         * 成本价
         */
        cost_price?: number;
    }

    /**
     * 商品规格信息
     */
    export interface MeiGoodsSkuTreeResponse {
        /**
         * 规格ID
         */
        id?: number;
        /**
         * 规格名称
         */
        name?: string;
        /**
         * 商品规格项信息
         */
        leaf_list?: MeiGoodsSkuLeafResponse;
    }

    /**
     * 商品规格项信息
     */
    export interface MeiGoodsSkuLeafResponse {
        /**
         * 规格项ID
         */
        id?: number;
        /**
         * 规格项名称
         */
        name?: string;
        /**
         * 规格项图片
         */
        imageUrl?: string;
    }

    /**
     * 商品图片信息
     */
    export interface MeiGoodsPictureResponseDTO {
        /**
         * 图片URL
         */
        image_url?: string;
        /**
         * 图片宽度
         */
        width?: number;
        /**
         * 图片高度
         */
        height?: number;
    }

    /**
     * 商品规格信息
     */
    export interface MeiSkuInfoResponseDTO {
        /**
         * 价格
         */
        price?: number;
        /**
         * 规格ID
         */
        sku_id?: number;
        /**
         * 条形码
         */
        sku_code?: string;
        /**
         * 商品规格项信息
         */
        name_list?: MeiSkuNameResponseDTO;
        /**
         * 成本价
         */
        cost_price?: number;
    }

    /**
     * 商品规格项信息
     */
    export interface MeiSkuNameResponseDTO {
        /**
         * 规格项目Id
         */
        kid?: number;
        /**
         * 规格项目名称
         */
        kname?: string;
        /**
         * 规格Id
         */
        vid?: number;
        /**
         * 规格名称
         */
        vname?: string;
    }

    /**
     * 售卖属性
     */
    export interface MeiGoodsSaleInfoResp {
        /**
         * 上架店铺数量
         */
        shelve_num?: number;
        /**
         * 销量
         */
        sold_num?: number;
        /**
         * 下架状态
         */
        on_shelve?: number;
        /**
         * 是否售罄 1否 2部分 3全部售罄
         */
        sold_out?: number;
    }

    /**
     * 商品库存信息
     */
    export interface MeiGoodsStockResponseDTO {
        /**
         * 商品ID
         */
        goods_id?: number;
        /**
         * 库存数量
         */
        stock_num?: number;
        /**
         * 商品库存信息
         */
        goods_sku_stock_list?: MeiGoodsSkuStockResponseDTO;
    }

    /**
     * 商品库存信息
     */
    export interface MeiGoodsSkuStockResponseDTO {
        /**
         * 规格ID
         */
        sku_id?: number;
        /**
         * 库存数量
         */
        stock_num?: number;
        /**
         * 总销量
         */
        total_sold_num?: number;
    }

    /**
     * 商品分类信息
     */
    export interface MeiCategoryResponseDTO {
        /**
         * 分类ID
         */
        id?: number;
        /**
         * 分类名称
         */
        name?: string;
    }

    /**
     * 商品标签信息
     */
    export interface MeiTagResponseDTO {
        /**
         * 标签ID
         */
        tag_id?: number;
        /**
         * 标签名称
         */
        name?: string;
    }

    /**
     * 美业商品产品信息
     */
    export interface MeiGoodsProductInfo {
        /**
         * 邮费
         */
        postage?: number;
        /**
         * 单位ID
         */
        quantityUnitId?: number;
        /**
         * 单位名称
         */
        quantityUnitName?: string;
    }

}
