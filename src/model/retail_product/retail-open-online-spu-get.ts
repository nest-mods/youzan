export namespace RetailProductRetailOpenOnlineSpuGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 网店商品id
         */
        item_id?: number;
        /**
         * 零售调用来源(调用方和有赞约定的值)
         */
        retail_source?: string;
        /**
         * 连锁多网店下查指定网店网店商品用
         */
        sub_kdt_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 网店商品返回对象
         */
        response?: OpenOnlineSpuDTO;
    }

    /**
     * 网店商品返回对象
     */
    export interface OpenOnlineSpuDTO {
        /**
         * 网店商品id
         */
        item_id?: number;
        /**
         * 关联商品库商品id
         */
        related_item_id?: number;
        /**
         * 短地址
         */
        alias?: string;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 标题
         */
        title?: string;
        /**
         * 价格，单位元
         */
        price?: string;
        /**
         * 显示在原价那里的信息
         */
        origin?: string;
        /**
         * 运费，单位元
         */
        postage?: string;
        /**
         * 购买地址
         */
        buy_url?: string;
        /**
         * 内容
         */
        content?: string;
        /**
         * 自定义组件内容
         */
        components?: string;
        /**
         * 商品详情额外组件
         */
        components_extra_id?: number;
        /**
         * 创建时间
         */
        create_time?: string;
        /**
         * 更新时间
         */
        update_time?: string;
        /**
         * 商家排序字段
         */
        num?: number;
        /**
         * 是否显示(上架) 0：未发布，草稿状态（wap看不到） 1：发布 （正常状态）
         */
        is_display?: number;
        /**
         * 是否标记删除 0：否 1：是
         */
        is_delete?: number;
        /**
         * 商品类型 0：普通商品 3：UMP降价拍 5：外卖商品 10：分销商品 20：会员卡商品 21：礼品卡商品 22：团购券 25：批发商品 30：收银台商品 31：知识付费商品 35：酒店商品 40：美业商品 60：虚拟商品 61：电子卡券
         */
        item_type?: number;
        /**
         * 1,发售中 2,已售罄 3,部分售罄
         */
        sold_status?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 商品条码
         */
        item_no?: string;
        /**
         * 用户购买限额
         */
        quota?: number;
        /**
         * 留言信息，json
         */
        messages?: string;
        /**
         * 一级品类
         */
        class1?: number;
        /**
         * 二级品类
         */
        class2?: number;
        /**
         * 是否锁定 1:是;0:否; 2,活动冻结
         */
        is_lock?: number;
        /**
         * 商品定时上架（定时开售）的时间。没设置则为空
         */
        start_sold_time?: string;
        /**
         * 是否参加会员折扣，默认：0 不参加
         */
        join_level_discount?: number;
        /**
         * 总库存
         */
        total_stock?: string;
        /**
         * 图片
         */
        picture?: string;
        /**
         * 总销量
         */
        total_sold_num?: string;
        /**
         * 是否提供发票 0:不提供 1：提供
         */
        invoice?: number;
        /**
         * 是否保修 0：不保修 1：保修
         */
        warranty?: number;
        /**
         * 子标题
         */
        sub_title?: string;
        /**
         * 供应商店铺id
         */
        supplier_kdt_id?: number;
        /**
         * 供货商商品id
         */
        supplier_item_id?: number;
        /**
         * 是否设置商品购买权限
         */
        purchase_right?: boolean;
        /**
         * 是否预售商品
         */
        pre_sale?: boolean;
        /**
         * 是否仅限实名购买
         */
        st_real_name_purchase?: boolean;
        /**
         * 是否参加会员包邮
         */
        st_not_free_delivery?: boolean;
        /**
         * 是否需要海关清关身份信息
         */
        need_customs_info?: boolean;
        /**
         * 是否需要海关清关身份图片
         */
        need_customs_picture?: boolean;
        /**
         * 分组ids
         */
        group_ids?: number[];
        /**
         * 卖点
         */
        sell_point?: string;
        /**
         * 在售门店id （连锁版使用）
         */
        on_sale_kdt_ids?: number[];
        /**
         * 零售网店商品规格信息
         */
        skus?: OpenOnlineSkuDTO;
        /**
         * 组合商品信息
         */
        combine_models?: OpenOnlineCombineDTO;
        /**
         * 虚拟商品扩展信息
         */
        virtual_extend?: OpenVirtualExtralDTO;
        /**
         * 预售商品信息
         */
        pre_sale_extend?: OpenPreSaleDTO;
        /**
         * 酒店商品扩展信息
         */
        hotel_extend?: OpenHotelExtendDTO;
        /**
         * 商品所属业务标
         */
        biz_mark?: OpenBizMarkDTO;
        /**
         * 商品能力标聚合_item维度
         */
        item_mark_aggregate?: OpenItemMarkAggregateDTO;
        /**
         * 商品能力标聚合_sku维度
         */
        sku_mark_aggregate_list?: OpenSkuMarkAggregateDTO;
        /**
         * 可购买该商品的用户标签id列表
         */
        ump_tags?: number[];
        /**
         * 可购买该商品的会员等级id列表
         */
        ump_levels?: number[];
        /**
         * 会员标签
         */
        ump_tag_infos?: OpenUmpTagDTO;
        /**
         * 商品SKU图片模型
         */
        item_sku_images?: OpenItemSkuImageDTO;
        /**
         * 运费模板信息
         */
        delivery_template?: OpenDeliveryTemplateDTO;
        /**
         * 是否虚拟商品，0否（此时判断根据itemType字段）, 2 虚拟商品， 3 电子卡券
         */
        is_virtual?: number;
    }

    /**
     * 零售网店商品规格信息
     */
    export interface OpenOnlineSkuDTO {
        /**
         * 商品ID
         */
        item_id?: number;
        /**
         * 规格ID
         */
        sku_id?: number;
        /**
         * 销售价格
         */
        price?: string;
        /**
         * 折扣，100表示没有折扣
         */
        discount?: number;
        /**
         * 折扣价格
         */
        discount_price?: string;
        /**
         * 属于这个Sku的成本价
         */
        cost_price?: string;
        /**
         * 库存数量
         */
        stock_num?: string;
        /**
         * 已售数量
         */
        sold_num?: string;
        /**
         * sku json格式信息
         */
        sku?: string;
        /**
         * 规格条码
         */
        sku_no?: string;
        /**
         * 创建时间
         */
        create_time?: string;
        /**
         * 更新时间
         */
        update_time?: string;
        /**
         * 关联的商品库规格id
         */
        related_sku_id?: number;
        /**
         * 关联的商品库商品id
         */
        related_item_id?: number;
        /**
         * 组合商品名称或者关联商品库商品名称
         */
        name?: string;
        /**
         * 组合商品信息
         */
        combine_models?: OpenOnlineCombineDTO;
    }

    /**
     * 组合商品信息
     */
    export interface OpenOnlineCombineDTO {
        /**
         * 关联商品库skuId
         */
        related_combine_sku_id?: number;
        /**
         * 关联商品库商品id
         */
        related_combine_item_id?: number;
        /**
         * 关联的商品库商品数量
         */
        related_combine_num?: string;
        /**
         * 网店/门店组合数量
         */
        combine_num?: string;
        /**
         * 商品库商品条码
         */
        sku_no?: string;
        /**
         * 商品库商品名称
         */
        name?: string;
    }

    /**
     * 组合商品信息
     */
    export interface OpenOnlineCombineDTO {
        /**
         * 关联商品库skuId
         */
        related_combine_sku_id?: number;
        /**
         * 关联商品库商品id
         */
        related_combine_item_id?: number;
        /**
         * 关联的商品库商品数量
         */
        related_combine_num?: string;
        /**
         * 网店/门店组合数量
         */
        combine_num?: string;
        /**
         * 商品库商品条码
         */
        sku_no?: string;
        /**
         * 商品库商品名称
         */
        name?: string;
    }

    /**
     * 虚拟商品扩展信息
     */
    export interface OpenVirtualExtralDTO {
        /**
         * 虚拟商品有效期开始时间,留空表示长期有效
         */
        item_validity_start?: string;
        /**
         * 虚拟商品有效期结束时间,留空表示长期有效
         */
        item_validity_end?: string;
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
        holidays_available?: boolean;
    }

    /**
     * 预售商品信息
     */
    export interface OpenPreSaleDTO {
        /**
         * 预售结束时间
         */
        presale_end?: string;
        /**
         * 发货开始时间
         */
        etd_start?: string;
        /**
         * 发货类型: 0, xxx 时间开始发货, 1, 付款 n 天后发货
         */
        etd_type?: number;
        /**
         * 付款成功 后发货天数
         */
        etd_days?: number;
        /**
         * 是否为虚拟库存
         */
        is_virtual_stock?: boolean;
    }

    /**
     * 酒店商品扩展信息
     */
    export interface OpenHotelExtendDTO {
        /**
         * 客服电话区号
         */
        service_tel_code?: string;
        /**
         * 客服电话
         */
        service_tel?: string;
    }

    /**
     * 商品所属业务标
     */
    export interface OpenBizMarkDTO {
        /**
         * 能力标名称
         */
        name?: string;
        /**
         * 能力标编码
         */
        code?: string;
        /**
         * 能力标编码集合
         */
        ability_mark_code_list?: number[];
    }

    /**
     * 商品能力标聚合_item维度
     */
    export interface OpenItemMarkAggregateDTO {
        /**
         * 物流属性
         */
        distribution_mark?: OpenDistributionMark;
        /**
         * 备货属性
         */
        prepare_time_mark?: OpenPrepareTimeMark;
    }

    /**
     * 物流属性
     */
    export interface OpenDistributionMark {
        /**
         * 是否支持快递
         */
        express?: boolean;
        /**
         * 是否支持同城送
         */
        city_delivery?: boolean;
        /**
         * 是否支持自提
         */
        self_pick?: boolean;
    }

    /**
     * 备货属性
     */
    export interface OpenPrepareTimeMark {
        /**
         * 备货时间
         */
        prepare_time?: string;
    }

    /**
     * 商品能力标聚合_sku维度
     */
    export interface OpenSkuMarkAggregateDTO {
        /**
         * 规格id
         */
        sku_id?: number;
        /**
         * 备货属性
         */
        prepare_time_mark?: OpenPrepareTimeMark;
    }

    /**
     * 备货属性
     */
    export interface OpenPrepareTimeMark {
        /**
         * 备货时间
         */
        prepare_time?: string;
    }

    /**
     * 会员标签
     */
    export interface OpenUmpTagDTO {
        /**
         * 标签ID
         */
        tag_id?: number;
        /**
         * 标签名称
         */
        tag_name?: string;
    }

    /**
     * 商品SKU图片模型
     */
    export interface OpenItemSkuImageDTO {
        /**
         * 规格Id
         */
        dict_id?: number;
        /**
         * 规格说明
         */
        dict_value?: string;
        /**
         * 子规格Id
         */
        node_value_id?: number;
        /**
         * 图片地址
         */
        image_url?: string;
        /**
         * 父节点
         */
        parent_id?: number;
    }

    /**
     * 运费模板信息
     */
    export interface OpenDeliveryTemplateDTO {
        /**
         * 模板id
         */
        template_id?: number;
        /**
         * 模板名称
         */
        template_title?: string;
    }

}
