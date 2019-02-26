export namespace ItemStandardItemStandardGetbycode {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品条码，通用编码，不是商家编码
         */
        code?: string;
        /**
         * 商品类型
         */
        item_type?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 商品标准信息详情
         */
        item_standard?: ItemStandardOpenModel;
    }

    /**
     * 商品标准信息详情
     */
    export interface ItemStandardOpenModel {
        /**
         * 条形码编码
         */
        code?: string;
        /**
         * 商品类型
         */
        item_type?: string;
        /**
         * 价格, 单位为分
         */
        price?: number;
        /**
         * 图片，格式为JSON，如下
         * [{"width":320,"id":"20177","url":"http://img.yzcdn.cn/upload_files/2017/07/11/FjM2RwUUXEvcEr6lEyyeH9E_C8rZ.jpg","height":320},{"width":790,"id":"20178","url":"http://img.yzcdn.cn/upload_files/2017/07/11/FlkOmdespJXZg70D40LDODCw51Um.jpg","height":955},{"width":790,"id":"20179","url":"ht
         */
        imgs?: string;
        /**
         * 商品SPU标准模型
         */
        spu?: ItemStandardSpuOpenModel;
        /**
         * 商品标准扩展信息模型
         */
        extra_info?: ItemStandardExtraOpenModel;
    }

    /**
     * 商品SPU标准模型
     */
    export interface ItemStandardSpuOpenModel {
        /**
         * 厂商
         */
        manu_name?: string;
        /**
         * 商品名称
         */
        item_name?: string;
        /**
         * 商标/品牌
         */
        brand?: string;
        /**
         * 有效期
         */
        valid_period?: string;
    }

    /**
     * 商品标准扩展信息模型
     */
    export interface ItemStandardExtraOpenModel {
        /**
         * 扩展信息键ID
         */
        kid?: number;
        /**
         * 扩展信息键名称
         */
        attr_key?: string;
        /**
         * 扩展信息值
         */
        attr_value?: string;
    }

}
