export namespace RetailGoodsRetailProductOnlineUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 无规格组合商品组合明细，如：[{"related_combine_num":1000,"related_combine_price":12300,"related_combine_sku_id":7568911}]
     */
    combine_params?: OnlineCombineParam[];
    /**
     * 商品详情额外组件(固定值：-1)
     */
    components_extra_id?: number;
    /**
     * 运费模板id（统一运费传0）
     */
    delivery_template_id?: number;
    /**
     * 电子卡券-电子凭证自定义推迟时间
     */
    effective_delay_hours?: number;
    /**
     * 电子卡券-电子凭证生效类型，0 立即生效， 1 自定义推迟时间， 2 隔天生
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
     * 活动冻结结束时间, 时间戳, 单位毫秒
     */
    freezing_endtime?: number;
    /**
     * 商品编号
     */
    goods_no?: string;
    /**
     * 商品参与平台 0：普通商品。仅支持普通商品
     */
    goods_platform?: number;
    /**
     * 商品类型：0：普通商品，1: 拍卖商品, 3：ump降价拍，10:分销商品；20：会员卡商品；25：批发商品；30：收银台商品；35：酒店商品。仅支持普通商品
     */
    goods_type?: number;
    /**
     * 页面不显示商品库存: 0, 显示; 1, 不显示
     */
    hide_stock?: number;
    /**
     * 电子卡券-节假日是否可用
     */
    holidays_available?: boolean;
    /**
     * 是否删除
     */
    is_delete?: number;
    /**
     * 是否上架
  * 0：未发布，草稿状态（wap看不到） 1：发布 （正常状态）
     */
    is_display?: number;
    /**
     * 是否虚拟商品，0否, 2 虚拟商品， 3 电子卡券
     */
    is_virtual?: number;
    /**
     * 网店商品id
     */
    item_id?: number;
    /**
     * 商品重量信息
     */
    item_sku_extend_param_list?: ItemSkuExtendParam[];
    /**
     * 有sku规格情况下，
  * 商品的计量属性
     */
    item_sku_meas_props?: ItemSkuMeasProp[];
    /**
     * 虚拟商品有效期结束时间,1970-01-01 开始的秒数,留空表示长期有效
     */
    item_validity_end?: number;
    /**
     * 虚拟商品有效期开始时间,1970-01-01 开始的秒数,留空表示长期有效
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
     * 序号
     */
    num?: number;
    /**
     * 显示在原价那里的信息
     */
    origin?: string;
    /**
     * 图片地址,注意 图片地址必须是符合以下规则的json，且必须已https开头。
  * （例如：[{"url":"https://img.youzan.com/upload_files/2016/05/16/FjvGju7UwGfol_yAXK3RzxOGelt0.png","id":"642430978","width":"300","height":"299"},{"url":"https://img.youzan.com/upload_files/2016/05/20/FgNkCcgqoGd_fMDPPCas1UIX3aCM.jpg","id":"644360875","width":"640","height":"379"}]）
     */
    picture?: string;
    /**
     * 照片高度
     */
    picture_height?: number;
    /**
     * 运费，单位：分（运费模版不为0的情况下、使用该字段计算运费）
     */
    postage?: number;
    /**
     * 是否预售
     */
    pre_sale?: boolean;
    /**
     * 价格（多规格商品，商品价格不得小于各个规格价格），单位：分
     */
    price?: number;
    /**
     * 是否限购
     */
    purchase_right?: boolean;
    /**
     * 用户购买限额
     */
    quota?: number;
    /**
     * 无规格商品关联商品库商品
     */
    relate_sku_id?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 销售类型：1单个销售，2组合销售
     */
    sell_type?: number;
    /**
     * 规格图片所属规格项id
     */
    sku_img_dict_id?: number;
    /**
     * 规格图片所属规格项名称
     */
    sku_img_dict_value?: string;
    /**
     * 规格图片是否展示
     */
    sku_img_is_show?: boolean;
    /**
     * 规格图片父级id
     */
    sku_img_parent_id?: number;
    /**
     * sku图片信息
     */
    sku_img_urls?: ImgUrlParam[];
    /**
     * 当前商品镜像的key
     */
    snap_key?: string;
    /**
     * 开卖时间: 0 立即开售, 1 定时开售
     */
    sold_time?: number;
    /**
     * 请求来源（例：OPEN_XXXXX）
     */
    source?: string;
    /**
     * 加星
     */
    star?: number;
    /**
     * 定时上架时间
     */
    start_sold_time?: number;
    /**
     * 多规格商品库存信息
  * 注意：
  * 实物商品至少关联一个商品库商品
  * 当实物商品存在部分规格不关联的情况时，sku售价传0.01元，库存值传0。
  * 例如：[{"sku_id":0,"related_sku_id":2250523,"price":100,"sell_stock_count":0,"sold_num":0,"cost_price":null,"sku_no":"P171011010602432","name":"测绘0333","skus":[{"k":"颜色","v":"粉色","kid":1,"vid":40172}],"k1":"颜色","v1":"粉色"},{"sku_id":0,"related_sku_id":2250523,"price":100,"sell_stock_count":12,"sold_num":0,"cost_price":null,"sku_no":"P171010025662807","name":"测试删除2","skus":[{"k":"颜色","v":"红色","kid":1,"vid":1215}],"k1":"颜色","v1":"红色"}]
     */
    stocks?: OnlineStock[];
    /**
     * 子标题
     */
    sub_title?: string;
    /**
     * 商品分类，tagIds 的json 格式
     */
    tag?: string;
    /**
     * 商品名称
     */
    title?: string;
    /**
     * 总库存
     */
    total_stock?: number;
    /**
     * 允许购买的粉丝等级
     */
    ump_level?: string[];
    /**
     * 允许购买的粉丝标签
     */
    ump_tags?: string[];
    /**
     * 视频id
     */
    video_id?: number;
  }

  /**
   * 
   */
  export interface OnlineCombineParam {
    /**
     * 子商品 捆绑数量 支持三位小数，需放大1000倍传入
     */
    related_combine_num?: number;
    /**
     * 子商品 价格 单位：分
     */
    related_combine_price?: string;
    /**
     * 组合商品子商品关联商品库商品id
     */
    related_combine_sku_id?: number;
  }

  /**
   * 
   */
  export interface ItemSkuExtendParam {
    /**
     * costPrice
     */
    cost_price?: number;
    /**
     * s1
     */
    s1?: number;
    /**
     * s2
     */
    s2?: number;
    /**
     * s3
     */
    s3?: number;
    /**
     * s4
     */
    s4?: number;
    /**
     * s5
     */
    s5?: number;
    /**
     * wmBoxPrice
     */
    wm_box_price?: number;
  }

  /**
   * 
   */
  export interface ItemSkuMeasProp {
    /**
     * s1
     */
    s1?: number;
    /**
     * s2
     */
    s2?: number;
    /**
     * s3
     */
    s3?: number;
    /**
     * s4
     */
    s4?: number;
    /**
     * s5
     */
    s5?: number;
    /**
     * skuId
     */
    sku_id?: number;
    /**
     * 重量
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
  export interface OnlineStock {
    /**
     * 
     */
    combine_params?: OnlineCombineParam[];
    /**
     * 成本价
     */
    cost_price?: number;
    /**
     * 是否分销
     */
    is_sell?: number;
    /**
     * 多规格-最高建议零售价(分)
     */
    max_retail_price?: number;
    /**
     * 多规格-最小建议零售价(分)
     */
    min_retail_price?: number;
    /**
     * 组合商品名称
     */
    name?: string;
    /**
     * 前一次关联的商品库商品id
     */
    pre_related_sku_id?: number;
    /**
     * 售价
     */
    price?: number;
    /**
     * 
     */
    related_item_id?: number;
    /**
     * 本次关联的商品库商品id
     */
    related_sku_id?: number;
    /**
     * 销售库存
     */
    sell_stock_count?: number;
    /**
     * 
     */
    skus?: SkuParam;
    /**
     * 修改必传
     */
    sku_id?: number;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 多规格-供货价格（分）
     */
    supply_price?: number;
  }

  /**
   * 
   */
  export interface OnlineCombineParam {
    /**
     * 子商品 捆绑数量 支持三位小数，需放大1000倍传入
     */
    related_combine_num?: number;
    /**
     * 子商品 价格 单位：分
     */
    related_combine_price?: string;
    /**
     * 组合商品子商品关联商品库商品id
     */
    related_combine_sku_id?: number;
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
     * 网店商品更新结果
     */
    update_result?: boolean;
  }

}
