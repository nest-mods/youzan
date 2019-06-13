export namespace RetailProductRetailOpenOnlineSpuRelease {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否全量上下架状态
  * 0 下架
  * 1 上架
  * 未操作不传
     */
    all_batch_operate?: number;
    /**
     * 是否支持同城送
     */
    biz_mark_city_delivery?: boolean;
    /**
     * 商品所属业务标编码
     */
    biz_mark_code?: string;
    /**
     * 是否支持快递
     */
    biz_mark_express?: boolean;
    /**
     * 无规格时的备货时间(毫秒ms)
     */
    biz_mark_prepare_time?: number;
    /**
     * 是否支持自提
     */
    biz_mark_self_pick?: boolean;
    /**
     * 购买地址
     */
    buy_url?: string;
    /**
     * 购买方式0：淘宝连接购买，1：在有赞购买
     */
    buy_way?: number;
    /**
     * 渠道扩展信息
     */
    category_id?: string;
    /**
     * 渠道扩展信息
     */
    category_name?: number;
    /**
     * 渠道 0: 网店 1:门店
     */
    channel?: number;
    /**
     * 组合商品关联关系
     */
    combine_params?: OpenOnlineCombineParam[];
    /**
     * 自定义组件信息
     */
    components?: string;
    /**
     * 商品详情额外组件
     */
    components_extra_id: number;
    /**
     * 详情内容
     */
    content?: string;
    /**
     * 运费模板id
     */
    delivery_template_id: number;
    /**
     * 电子卡券扩展信息
     */
    effective_delay_hours?: number;
    /**
     * 电子卡券扩展信息
     */
    effective_type?: number;
    /**
     * 付款成功 后发货天数, 默认0。
     */
    etd_days?: number;
    /**
     * 预计发货开始时间, 字符串格式的时间
     */
    etd_start?: string;
    /**
     * 发货类型: 0, xxx 时间开始发货(默认), 1, 付款 n 天后发货
     */
    etd_type?: number;
    /**
     * 一级品类
     */
    first_level_class?: number;
    /**
     * 活动冻结结束时间
     */
    freezing_endtime?: string;
    /**
     * 货号
     */
    goods_no?: string;
    /**
     * 商品参与平台 0：普通商品 10：分销平台
     */
    goods_platform?: number;
    /**
     * 商品类型：0：普通商品，1: 拍卖商品, 3：ump降价拍，10:分销商品；20：会员卡商品；25：批发商品；30：收银台商品；35：酒店商品。
     */
    goods_type?: number;
    /**
     * 页面不显示商品库存: 0, 显示; 1, 不显示
     */
    hide_stock?: number;
    /**
     * 假日
     */
    holidays_available?: boolean;
    /**
     * 是否提供发票，目前应该无用
     */
    invoice?: number;
    /**
     * 是否上架
  * 0：未发布，草稿状态（wap看不到） 1：发布 （正常状态）
     */
    is_display?: number;
    /**
     * 是否店铺初始化任务，会回调店铺的 接口
     */
    is_init?: boolean;
    /**
     * 否锁定 1:是;0:否; 2,活动冻结
     */
    is_lock?: number;
    /**
     * 是否虚拟商品，0否, 2 虚拟商品， 3 电子卡券
     */
    is_virtual?: number;
    /**
     * 是否使用虚拟库存（仅限预售商品）
     */
    is_virtual_stock?: boolean;
    /**
     * 多规格时的标记属性
     */
    item_sku_mark_aggregates?: OpenProductSkuMarkAggregateParam[];
    /**
     * 有sku规格情况下，
  * 商品的计量属性
     */
    item_sku_meas_props?: OpenProductSkuMeasProp[];
    /**
     * 电子卡券扩展信息
     */
    item_validity_end?: number;
    /**
     * 电子卡券扩展信息
     */
    item_validity_start?: number;
    /**
     * 商品重量, 没有sku规格情况下
     */
    item_weight?: number;
    /**
     * 是否参加会员折扣，默认：0 不参加
     */
    join_level_discount?: number;
    /**
     * 标记
     */
    mark?: number;
    /**
     * 留言信息，json
     */
    messages?: string;
    /**
     * 是否开启海淘身份认证
     */
    need_customs_info?: boolean;
    /**
     * 是否需要上传身份证图片
     */
    need_customs_picture?: boolean;
    /**
     * 序号
     */
    num?: number;
    /**
     * 现实在原价的信息
     */
    origin?: string;
    /**
     * 外部id
     */
    out_id?: string;
    /**
     * 图片地址
     */
    picture: string;
    /**
     * 照片高度
     */
    picture_height?: number;
    /**
     * 运费(元）
     */
    postage?: number;
    /**
     * 是否预售
     */
    pre_sale: boolean;
    /**
     * 价格（元）
     */
    price?: string;
    /**
     * 渠道扩展信息
     */
    pricing_strategy?: string;
    /**
     * 会员权限
     */
    purchase_right?: boolean;
    /**
     * 用户购买限额
     */
    quota?: number;
    /**
     * 备注
     */
    remark?: string;
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
     * 二级品类（不填 后端默认填""，当一级分类不是8其他的时候，需传"0"）
     */
    second_level_class?: string;
    /**
     * 卖点
     */
    sell_point?: string;
    /**
     * 销售类型：1单个销售，2组合销售
     */
    sell_type?: string;
    /**
     * 关联商品库的skucode，无规格商品必传
     */
    sku_center_code?: string;
    /**
     * sku图片目录值
     */
    sku_img_dict_id?: number;
    /**
     * sku图片目录id
     */
    sku_img_dict_value?: string;
    /**
     * 图片是否展示
     */
    sku_img_is_show?: number;
    /**
     * sku图片id
     */
    sku_img_parent_id?: number;
    /**
     * sku图片地址
     */
    sku_img_urls?: ImgUrlParam[];
    /**
     * 开卖时间: 0 立即开售, 1 定时开售
     */
    sold_time: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 0 自建 1导入 2 api 3 拍拍 4 模板商品
     */
    source_id?: number;
    /**
     * 渠道扩展信息
     */
    spec?: string;
    /**
     * 关联商品库的商品code
     */
    spu_code?: string;
    /**
     * 加星
     */
    star?: number;
    /**
     * 定时上架时间
     */
    start_sold_time?: string;
    /**
     * 状态位
     */
    status_map?: Map<string, boolean>;
    /**
     * 网店商品规格信息，规格商品必传
     */
    stocks?: OpenOnlineStock[];
    /**
     * 子标题
     */
    sub_title?: string;
    /**
     * 商品分类，tagIds 的json 格式
     */
    tag?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 总库存
     */
    total_stock?: string;
    /**
     * 允许购买的粉丝等级
     */
    ump_level?: string[];
    /**
     * 允许购买的粉丝标签
     */
    ump_tags?: string[];
    /**
     * 单位信息
     */
    unit?: string;
    /**
     * 视频id
     */
    video_id?: number;
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
  export interface OpenProductSkuMarkAggregateParam {
    /**
     * 
     */
    prepare_time_mark?: OpenPrepareTimeMark;
    /**
     * 
     */
    s1?: number;
    /**
     * 
     */
    s2?: number;
    /**
     * 
     */
    s3?: number;
    /**
     * 
     */
    s4?: number;
    /**
     * 
     */
    s5?: number;
    /**
     * 
     */
    sku_code?: string;
  }

  /**
   * 
   */
  export interface OpenPrepareTimeMark {
    /**
     * 备货时间
     */
    prepareTime?: string;
  }

  /**
   * 
   */
  export interface OpenProductSkuMeasProp {
    /**
     * 
     */
    s1?: number;
    /**
     * 
     */
    s2?: number;
    /**
     * 
     */
    s3?: number;
    /**
     * 
     */
    s4?: number;
    /**
     * 
     */
    s5?: number;
    /**
     * 
     */
    sku_code?: string;
    /**
     * 
     */
    weight?: number;
  }

  /**
   * 
   */
  export interface ImgUrlParam {
    /**
     * id
     */
    id?: number;
    /**
     * url
     */
    img_url?: string;
  }

  /**
   * 
   */
  export interface MapStringBoolean {
  }

  /**
   * 
   */
  export interface OpenOnlineStock {
    /**
     * 
     */
    combineParams?: OpenOnlineCombineParam[];
    /**
     * 成本价
     */
    costPrice?: string;
    /**
     * 是否分销
     */
    isSell?: number;
    /**
     * 最大建议零售价
     */
    max_retail_price?: string;
    /**
     * 最小建议零售价
     */
    min_retail_price?: string;
    /**
     * 组合商品名称
     */
    name?: string;
    /**
     * 前一次关联的商品库商品code
     */
    pre_related_sku_code?: string;
    /**
     * 售价
     */
    price?: string;
    /**
     * 关联skucode
     */
    related_sku_code?: string;
    /**
     * 关联商品code
     */
    related_spu_code?: string;
    /**
     * 销售库存
     */
    sell_stock_count?: string;
    /**
     * 
     */
    skus?: SkuParam[];
    /**
     * 条码
     */
    sku_no?: string;
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
  export interface SkuParam {
    /**
     * 规格分类 值; eg: 颜色
     */
    k?: string;
    /**
     * 规格分类 id
     */
    kid?: number;
    /**
     * 规格具体值:eg: 白色
     */
    v?: string;
    /**
     * 规则值id
     */
    vid?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品发布网店返回值
     */
    reponse?: OpenReleaseOnlineProductResponse;
  }

  /**
   * 商品发布网店返回值
   */
  export interface OpenReleaseOnlineProductResponse {
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 别名
     */
    alias?: string;
    /**
     * sku
     */
    sku_id?: number[];
  }

}
