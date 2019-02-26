export namespace MultiStoreMultistoreGoodsSkuGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品id
         */
        num_iid?: number;
        /**
         * 网点id
         */
        offline_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 接口仅返回 商品独立库存、价格、商家编码和独立SKU等字段，具体 和 响应示例 的字段一致
         */
        item?: GoodsDetail;
    }

    /**
     * 接口仅返回 商品独立库存、价格、商家编码和独立SKU等字段，具体 和 响应示例 的字段一致
     */
    export interface GoodsDetail {
        /**
         * 商品数字编号
         */
        num_iid?: number;
        /**
         * 商品别称
         */
        alias?: string;
        /**
         * 商品标题
         */
        title?: string;
        /**
         * 商品分类的叶子类目id，可参考API：kdt.itemcategories.get
         */
        cid?: number;
        /**
         * 商品推广栏目id，可参考API：kdt.itemcategories.promotions.get
         */
        promotion_cid?: number;
        /**
         * 商品标签id串，结构如：1234,1342,...，可参考API：kdt.itemcategories.tags.get
         */
        tag_ids?: string;
        /**
         * 商品描述
         */
        desc?: string;
        /**
         * 显示在“原价”一栏中的信息
         */
        origin_price?: string;
        /**
         * 商品货号（商家为商品设置的外部编号，可与商家外部系统对接）
         */
        outer_id?: string;
        /**
         * 商品外部购买链接
         */
        outer_buy_url?: string;
        /**
         * 每人限购多少件。0代表无限购，默认为0
         */
        buy_quota?: number;
        /**
         * 商品的发布时间
         */
        created?: Date;
        /**
         * 是否为虚拟商品
         */
        is_virtual?: boolean;
        /**
         * 普通商品0，电子卡券3
         */
        virtual_type?: number;
        /**
         * 长期有效，留空；非空表示自定义有效期的开始时间
         */
        item_validity_start?: number;
        /**
         * 长期有效，留空；非空表示自定义有效期的开始时间
         */
        item_validity_end?: number;
        /**
         * 电子凭证生效类型，0 立即生效， 1 自定义推迟时间， 2 隔天生效
         */
        effective_type?: number;
        /**
         * 电子凭证自定义推迟时间
         */
        effective_delay_hours?: number;
        /**
         * 节假日是否可用
         */
        holidays_available?: number;
        /**
         * 商品上架状态。true 为已上架，false 为已下架
         */
        is_listing?: boolean;
        /**
         * 商品是否锁定。true 为已锁定，false 为未锁定
         */
        is_lock?: boolean;
        /**
         * 是否为二手商品
         */
        is_used?: boolean;
        /**
         * 是否为二手商品
         */
        product_type?: string;
        /**
         * 商品定时上架（定时开售）的时间。没设置则为空
         */
        auto_listing_time?: Date;
        /**
         * 适合wap应用的商品详情url
         */
        detail_url?: string;
        /**
         * 分享出去的商品详情url
         */
        share_url?: string;
        /**
         * 商品主图片地址
         */
        pic_url?: string;
        /**
         * 商品主图片缩略图地址
         */
        pic_thumb_url?: string;
        /**
         * 商品数量
         */
        num?: number;
        /**
         * 商品销量
         */
        sold_num?: number;
        /**
         * 商品价格，格式：5.00；单位：元；精确到：分
         */
        price?: string;
        /**
         * 运费类型。<br>1：统一邮费；<br>2：运费模版;
         */
        post_type?: number;
        /**
         * 运费（针对“统一运费”），格式：5.00；单位：元；精确到：分
         */
        post_fee?: string;
        /**
         * 运费（针对“运费模版”），格式：5.00；单位：元；精确到：分<br>若存在运费区间，中间用逗号隔开，如 “5.00,9.00”
         */
        delivery_template_fee?: string;
        /**
         * 运费模版id
         */
        delivery_template_id?: number;
        /**
         * 运费模版名称
         */
        delivery_template_name?: string;
        /**
         * Sku数据结构
         */
        skus?: GoodsSku;
        /**
         * 商品图片数据结构
         */
        item_imgs?: GoodsImage;
        /**
         * 商品二维码数据结构
         */
        item_qrcodes?: GoodsQrcode;
        /**
         * 商品标签数据结构
         */
        item_tags?: GoodsTag;
        /**
         * 商品类型。<br>0：普通商品；<br>10：分销商品;
         */
        item_type?: number;
        /**
         * 是否是供货商商品。
         */
        is_supplier_item?: boolean;
        /**
         * 商品点赞数
         */
        like_count?: number;
        /**
         * 模板id
         */
        template_id?: number;
        /**
         * 模板名称
         */
        template_title?: string;
        /**
         * 是否参加会员折扣
         */
        join_level_discount?: boolean;
        /**
         * 商品序号
         */
        order?: number;
        /**
         * 是否设置商品购买权限
         */
        purchase_right?: number;
        /**
         * 商品库存是否锁定 0:未锁定 1:锁定，如果商品有SKU该字段恒为0
         */
        stock_locked?: number;
    }

    /**
     * Sku数据结构
     */
    export interface GoodsSku {
        /**
         * 商家编码（商家为Sku设置的外部编号）
         */
        outer_id?: string;
        /**
         * Sku的ID，sku_id 在系统里<span style="color: #ff0000;">并不是唯一的</span>，结合商品ID一起使用才是唯一的。
         */
        sku_id?: number;
        /**
         * Sku在系统中的唯一编号，可以在开发者的系统中用作 Sku 的唯一ID，但不能用于调用接口
         */
        sku_unique_code?: string;
        /**
         * Sku所属商品的数字编号
         */
        num_iid?: number;
        /**
         * 属于这个Sku的商品的数量
         */
        quantity?: number;
        /**
         * Sku所对应的销售属性的中文名字串，格式如：pid1:vid1:pid_name1:vid_name1;pid2:vid2:pid_name2:vid_name2……
         */
        properties_name?: string;
        /**
         * Sku所对应的销售属性的Json字符串（需另行解析），
         *         该字段内容与properties_name字段除了格式不一样，内容完全一致。
         *         由于产品规格信息难以避免涉及到‘:’、‘,’、‘;’这些与解析规则冲突的字符，所以增加该字段。
         *         </br>格式定义：
         * <pre>
         *
         * [
         *   {
         *     "kid": "20000",
         *     "vid": "3275069",
         *     "k": "品牌",
         *     "v": "盈讯"
         *   },
         *   {
         *     "kid": "1753146",
         *     "vid": "3485013",
         *     "k": "型号",
         *     "v": "F908"
         *   }
         *   .....
         */
        properties_name_json?: string;
        /**
         * 商品在付款减库存的状态下，该Sku上未付款的订单数量
         */
        with_hold_quantity?: number;
        /**
         * 商品的这个Sku的价格；精确到2位小数；单位：元
         */
        price?: string;
        /**
         * Sku创建日期，时间格式：yyyy-MM-dd HH:mm:ss
         */
        created?: Date;
        /**
         * Sku最后修改日期，时间格式：yyyy-MM-dd HH:mm:ss
         */
        modified?: Date;
        /**
         * Sku库存是否锁定 0:未锁定 1:锁定
         */
        stock_locked?: number;
    }

    /**
     * 商品图片数据结构
     */
    export interface GoodsImage {
        /**
         * 商品图片的ID
         */
        id?: number;
        /**
         * 图片创建时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        created?: Date;
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
    }

    /**
     * 商品二维码数据结构
     */
    export interface GoodsQrcode {
        /**
         * 商品二维码的ID
         */
        id?: number;
        /**
         * 二维码的名称
         */
        name?: string;
        /**
         * 二维码的描述
         */
        desc?: string;
        /**
         * 商品二维码创建时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        created?: Date;
        /**
         * 商品二维码类型。可选值：<br>
         * GOODS_SCAN_FOLLOW(扫码关注后购买商品) <br>
         * GOODS_SCAN_FOLLOW_DECREASE(扫码关注后减优惠额) <br>
         * GOODS_SCAN_FOLLOW_DISCOUNT(扫码关注后折扣) <br>
         * GOODS_SCAN_DECREASE(扫码直接减优惠额) <br>
         * GOODS_SCAN_DISCOUNT(扫码直接折扣) <br>
         */
        type?: string;
        /**
         * 折扣，格式：9.0；单位：折，精确到小数点后 1 位。如果没有折扣，则为 0
         */
        discount?: string;
        /**
         * 减金额优惠，格式：5.00；单位：元；精确到：分。如果没有减额优惠，则为 0
         */
        decrease?: string;
        /**
         * 扫码直接购买的二维码基于这个url生成。如果不是扫码直接购买的类型，则为空
         */
        link_url?: string;
        /**
         * 扫码关注购买的二维码图片地址。如果不是扫码关注购买的类型，则为空
         */
        weixin_qrcode_url?: string;
    }

    /**
     * 商品标签数据结构
     */
    export interface GoodsTag {
        /**
         * 商品标签的ID
         */
        id?: number;
        /**
         * 商品标签的名称
         */
        name?: string;
        /**
         * 商品标签类型，0 自定义，1 未分类，2 最新，3 最热，4 隐藏
         */
        type?: number;
        /**
         * 商品标签创建时间
         */
        created?: string;
        /**
         * 商品标签内的商品数量
         */
        item_num?: number;
        /**
         * 商品标签的展示的URL地址
         */
        tag_url?: string;
        /**
         * 分享出去的商品标签展示地址
         */
        share_url?: string;
        /**
         * 商品标签描述
         */
        desc?: string;
    }

}
