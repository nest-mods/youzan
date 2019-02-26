export namespace ItemItemsCustomGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品编码
         */
        item_no?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 搜索到的商品列表
         */
        items?: ItemListOpenModel;
        /**
         * 商品总数量
         */
        count?: number;
    }

    /**
     * 搜索到的商品列表
     */
    export interface ItemListOpenModel {
        /**
         * 商品的数字id
         */
        item_id?: number;
        /**
         * 商品别名，是一串字符
         */
        alias?: string;
        /**
         * 商品标题
         */
        title?: string;
        /**
         * 价格，单位分
         */
        price?: number;
        /**
         * 商品类型
         */
        item_type?: number;
        /**
         * 商家编码，商家给商品设置的商家编码。
         */
        item_no?: string;
        /**
         * 总库存
         */
        quantity?: number;
        /**
         * 运费类型，1 是统一运费，2是运费模板
         */
        post_type?: number;
        /**
         * 运费，单位分。当post_type为1时的运费
         */
        post_fee?: number;
        /**
         * 创建时间
         */
        created_time?: string;
        /**
         * 更新时间
         */
        update_time?: string;
        /**
         * 商品详情链接
         */
        detail_url?: string;
        /**
         * 运费模板信息
         */
        delivery_template?: DeliveryTemplateOpenModel;
        /**
         * 商家排序字段
         */
        num?: number;
        /**
         * 图片信息
         */
        item_imgs?: ItemImageOpenModel;
        /**
         * 商品划线价
         */
        origin?: string;
        /**
         * 默认为"youzan_goods_selling"
         */
        classId?: string;
        /**
         * 图片链接
         */
        image?: string;
        /**
         * 同image
         */
        shareIcon?: string;
        /**
         * 商品标题
         */
        shareTitle?: string;
        /**
         * 同price
         */
        shareDetail?: number;
        /**
         * 小程序路径
         */
        pageUrl?: string;
    }

    /**
     * 运费模板信息
     */
    export interface DeliveryTemplateOpenModel {
        /**
         * 运费模板ID
         */
        delivery_template_id?: number;
        /**
         * 运费的范围
         */
        delivery_template_fee?: string;
        /**
         * 运费模板名称
         */
        delivery_template_name?: string;
        /**
         * 运费模版的计算类型，1 按件 2 按重量 3 按体积
         */
        delivery_template_valuationType?: number;
    }

    /**
     * 图片信息
     */
    export interface ItemImageOpenModel {
        /**
         * 图片链接地址
         */
        url?: string;
        /**
         * 图片缩略图链接地址
         */
        thumbnail?: string;
        /**
         * 中号大小图片链接地址
         */
        medium?: string;
        /**
         * 组合图片链接地址
         */
        combine?: string;
        /**
         * 图片创建时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        created?: string;
        /**
         * 图片ID
         */
        id?: number;
    }

}
