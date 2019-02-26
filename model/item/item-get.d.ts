export namespace ItemItemGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品别名，可以通过列表接口如youzan.items.onsale.get （查询出售中商品）和 youzan.items.inventory.get （查询仓库中商品）获取到
     */
    alias?: string;
    /**
     * 商品ID，可以通过列表接口如youzan.items.onsale.get （查询出售中商品）和 youzan.items.inventory.get （查询仓库中商品）获取到
     */
    item_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 返回的商品详情
     */
    item?: ItemDetailOpenModel;
  }

  /**
   * 返回的商品详情
   */
  export interface ItemDetailOpenModel {
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 标题
     */
    title?: string;
    /**
     * 商品内容
     */
    desc?: string;
    /**
     * 商品划线价格，可以自定义。例如 促销价：888
     */
    origin_price?: string;
    /**
     * 每人限购多少件。0代表无限购，默认为0
     */
    buy_quota?: number;
    /**
     * 创建时间
     */
    created?: string;
    /**
     * 短地址
     */
    alias?: string;
    /**
     * 商品分类的叶子类目id
     */
    cid?: number;
    /**
     * 商品标签id列表
     */
    tag_ids?: number[];
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
     * 总库存
     */
    quantity?: number;
    /**
     * 总销量
     */
    sold_num?: number;
    /**
     * 价格(分)
     */
    price?: number;
    /**
     * 商品类型
  * 0：普通商品
  * 3：UMP降价拍
  * 5：外卖商品
  * 10：分销商品
  * 20：会员卡商品
  * 21：礼品卡商品
  * 22：团购券
  * 25：批发商品
  * 30：收银台商品
  * 31：知识付费商品
  * 35：酒店商品
  * 40：美业商品
  * 60：虚拟商品
  * 61：电子卡券
     */
    item_type?: number;
    /**
     * 商品上架状态。true 为已上架，false 为已下架
     */
    is_listing?: boolean;
    /**
     * 商品是否锁定。true 为已锁定，false 为未锁定
     */
    is_lock?: boolean;
    /**
     * 商品定时上架（定时开售）的时间。没设置则为空
     */
    auto_listing_time?: string;
    /**
     * 是否参加会员折扣
     */
    join_level_discount?: boolean;
    /**
     * 是否设置商品购买权限
     */
    purchase_right?: boolean;
    /**
     * 运费类型
     */
    post_type?: number;
    /**
     * 运费
     */
    post_fee?: number;
    /**
     * 商品货号（商家为商品设置的外部编号，可与商家外部系统对接）
     */
    item_no?: string;
    /**
     * 商品预售信息
     */
    presale_extend?: ItemPreSaleOpenModel;
    /**
     * 商品分销信息
     */
    fenxiao_extend?: FenxiaoExtendOpenModel;
    /**
     * 商品酒店扩展信息
     */
    hotel_extend?: ItemHotelOpenModel;
    /**
     * 虚拟商品扩展信息
     */
    virtual_extend?: ItemVirtualOpenModel;
    /**
     * 运费模板信息
     */
    delivery_template_info?: DeliveryTemplateOpenModel;
    /**
     * 商品规格库存信息
     */
    skus?: ItemSkuOpenModel;
    /**
     * 图片信息
     */
    item_imgs?: ItemImageOpenModel;
    /**
     * 分组信息
     */
    item_tags?: ItemGroupOpenModel;
    /**
     * 商品留言
     */
    messages?: string;
    /**
     * 商品详情模板信息
     */
    template?: TemplateOpenModel;
    /**
     * 购买权限信息
     */
    purchase_rightList?: PurchaseRightOpenModel;
    /**
     * open api商品SKU图片模型
     */
    sku_images?: SkuImageOpenModel;
    /**
     * 商家排序字段
     */
    num?: number;
    /**
     * 商品卖点
     */
    sell_point?: string;
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
   * 商品分销信息
   */
  export interface FenxiaoExtendOpenModel {
    /**
     * 供货店铺Id
     */
    supplier_kdt_id?: number;
    /**
     * 供货商品Id
     */
    supplier_goods_id?: number;
  }

  /**
   * 商品酒店扩展信息
   */
  export interface ItemHotelOpenModel {
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
   * 商品规格库存信息
   */
  export interface ItemSkuOpenModel {
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * 规格ID
     */
    sku_id?: number;
    /**
     * 唯一编码，店铺Id和商品Id组合
     */
    sku_unique_code?: string;
    /**
     * Sku所对应的销售属性的Json字符串（需另行解析）。
  *        格式定义：
  *      [
  *      {
  *      "kid": "20000",
  *      "vid": "3275069",
  *      "k": "品牌",
  *      "v": "盈讯"
  *      },
  *      {
  *      "kid": "1753146",
  *      "vid": "3485013",
  *      "k": "型号",
  *      "v": "F908"
  *      }
     */
    properties_name_json?: string;
    /**
     * 商品在付款减库存的状态下，该Sku上未付款的订单数量
     */
    with_hold_quantity?: number;
    /**
     * 商品的这个Sku的价格，单位 分
     */
    price?: number;
    /**
     * Sku创建日期，时间格式：yyyy-MM-dd HH:mm:ss
     */
    created?: string;
    /**
     * Sku最后修改日期，时间格式：yyyy-MM-dd HH:mm:ss
     */
    modified?: string;
    /**
     * 属于这个Sku的商品的数量
     */
    quantity?: number;
    /**
     * 商家编码（商家为Sku设置的外部编号）
     */
    item_no?: string;
    /**
     * 属于这个Sku的销量
     */
    sold_num?: number;
    /**
     * 属于这个Sku的成本价
     */
    cost_price?: number;
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

  /**
   * 分组信息
   */
  export interface ItemGroupOpenModel {
    /**
     * id
     */
    id?: number;
    /**
     * 分组类型
     */
    type?: number;
    /**
     * 别名
     */
    alias?: string;
    /**
     * 分组链接
     */
    tag_url?: string;
    /**
     * 分享链接
     */
    share_url?: string;
    /**
     * 商品数量
     */
    item_num?: number;
    /**
     * 创建时间
     */
    created?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 分组名称
     */
    name?: string;
  }

  /**
   * 商品详情模板信息
   */
  export interface TemplateOpenModel {
    /**
     * 模板ID
     */
    template_id?: number;
    /**
     * 模板名称
     */
    template_title?: string;
  }

  /**
   * 购买权限信息
   */
  export interface PurchaseRightOpenModel {
    /**
     * 可购买该商品的用户标签id列表
     */
    ump_tags?: string[];
    /**
     * 可购买该商品的会员等级id列表
     */
    ump_levels?: string[];
    /**
     * 可购买该商品的用户标签名称列表
     */
    ump_tags_text?: string[];
    /**
     * 可购买该商品的会员等级名称列表
     */
    ump_level_text?: string[];
  }

  /**
   * open api商品SKU图片模型
   */
  export interface SkuImageOpenModel {
    /**
     * 规格值ID
     */
    v_id?: number;
    /**
     * 规格项ID，第一级规格项
     */
    k_id?: number;
    /**
     * SKU图片链接
     */
    img_url?: string;
  }

}
