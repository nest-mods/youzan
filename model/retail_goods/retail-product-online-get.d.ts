export namespace RetailGoodsRetailProductOnlineGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 网店商品id
     */
    item_id?: number;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 网店商品实体信息
     */
    online_vo?: OnlineProductVO;
  }

  /**
   * 网店商品实体信息
   */
  export interface OnlineProductVO {
    /**
     * 网店商品id
     */
    id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品别名
     */
    alias?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 价格 单位：分
     */
    price?: number;
    /**
     * 原价
     */
    origin?: string;
    /**
     * 运费 单位：分
     */
    postage?: number;
    /**
     * 商品模版详情内容
     */
    content?: string;
    /**
     * 商品模版json串
     */
    components?: string;
    /**
     * 商品模版id
     */
    components_extra_id?: number;
    /**
     * 创建时间
     */
    created_time?: number;
    /**
     * 更新时间
     */
    update_time?: number;
    /**
     * 是否上架（1上架 0下架）
     */
    is_display?: number;
    /**
     * 商品类型 0：普通商品
     */
    goods_type?: number;
    /**
     * 商品编码
     */
    goods_no?: string;
    /**
     * 是否虚拟商品，0否, 2 虚拟商品， 3 电子卡券
     */
    is_virtual?: number;
    /**
     * 每人限购多少件。0代表无限购，默认为0
     */
    quota?: number;
    /**
     * 商品留言
     */
    messages?: string;
    /**
     * 是否锁定 1:是;0:否; 2,活动冻结
     */
    is_lock?: number;
    /**
     * 定时上架时间
     */
    start_sold_time?: number;
    /**
     * 是否参加会员折扣 1参加；0不参加 ，默认：0 不参加
     */
    join_level_discount?: number;
    /**
     * 运费模版id
     */
    delivery_template_id?: number;
    /**
     * 商品参与平台 0：普通商品
     */
    goods_platform?: number;
    /**
     * 分组信息
     */
    tag?: string;
    /**
     * 库存总量
     */
    total_stock?: number;
    /**
     * 商品主图片地址
     */
    picture?: string;
    /**
     * 开卖时间: 0 立即开售, 1 定时开售
     */
    sold_time?: number;
    /**
     * 商品子标题
     */
    sub_title?: number;
    /**
     * 是否设置商品购买权限
     */
    purchase_right?: boolean;
    /**
     * 是否预售
     */
    pre_sale?: boolean;
    /**
     * 商品销量
     */
    total_sold_num?: number;
    /**
     * 商品预售信息
     */
    pre_sale_info?: ItemPreSaleOpenModel;
    /**
     * 可购买该商品的用户标签id列表
     */
    ump_tags?: number[];
    /**
     * 虚拟商品扩展信息
     */
    virtual_extral?: ItemVirtualOpenModel;
    /**
     * 可购买该商品的会员等级id列表
     */
    ump_level?: number[];
    /**
     * 无规格商品关联的商品库商品
     */
    sku_center_id?: number;
    /**
     * 规格图片信息
     */
    item_sku_image_model?: ItemSkuImageModel;
    /**
     * 商品规格信息
     */
    stocks?: ItemSkuModel;
  }

  /**
   * 商品预售信息
   */
  export interface ItemPreSaleOpenModel {
    /**
     * 预售结束时间
     */
    presale_end?: string;
    /**
     * 发货开始时间
     */
    etd_start?: string;
    /**
     * 发货结束时间
     */
    etd_end?: string;
    /**
     * 发货类型: 0, xxx 时间开始发货, 1, 付款 n 天后发货。
     */
    etd_type?: number;
    /**
     * 付款成功 后发货天数。
     */
    etd_days?: number;
  }

  /**
   * 虚拟商品扩展信息
   */
  export interface ItemVirtualOpenModel {
    /**
     * 虚拟商品有效期开始时间
     */
    item_validity_start?: string;
    /**
     * 虚拟商品有效期结束时间
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
   * 规格图片信息
   */
  export interface ItemSkuImageModel {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 规格项ID，第一级规格项
     */
    dict_id?: number;
    /**
     * 规格项名称，第一级规格项
     */
    dict_value?: string;
    /**
     * 规格值ID
     */
    node_value_id?: number;
    /**
     * 图片
     */
    image_url?: string;
  }

  /**
   * 商品规格信息
   */
  export interface ItemSkuModel {
    /**
     * 店铺Id
     */
    kdt_id?: number;
    /**
     * 网店商品Id
     */
    item_id?: number;
    /**
     * 售价，单位：分
     */
    price?: number;
    /**
     * 库存数量
     */
    stock_num?: number;
    /**
     * 商品规格编码
     */
    sku_no?: string;
    /**
     * 第一个规格值id
     */
    s1?: number;
    /**
     * 第二个规格值id
     */
    s2?: number;
    /**
     * 第三个规格值id
     */
    s3?: number;
    /**
     * 第四个规格值id
     */
    s4?: number;
    /**
     * 第五个规格值id
     */
    s5?: number;
    /**
     * 创建时间
     */
    created_time?: number;
    /**
     * 更新时间
     */
    updateTime?: number;
    /**
     * 规格名称
     */
    name?: number;
    /**
     * 规格关联的商品库商品
     */
    sku_center_id?: number;
    /**
     * 成本价
     */
    cost_price?: number;
  }

}
