export namespace ItemItemCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 开始出售时间。默认0，设置为0 立即出售
     */
    auto_listing_time?: number;
    /**
     * 每人限购多少件。0代表无限购，默认为0
     */
    buy_quota?: number;
    /**
     * 商品分类的叶子类目id
     */
    cid?: number;
    /**
     * 运费模版id
     */
    delivery_template_id?: number;
    /**
     * 商品描述。字数要大于5个字符，小于25000个字符 ，受违禁词控制
     */
    desc?: string;
    /**
     * 付款成功 后发货天数, 默认0
     */
    etd_days?: number;
    /**
     * 预计发货结束时间, 字符串格式的时间
     */
    etd_end?: string;
    /**
     * 预计发货开始时间, 字符串格式的时间
     */
    etd_start?: string;
    /**
     * 发货类型: 0, xxx 时间开始发货, 1, 付款 n 天后发货。
     */
    etd_type?: number;
    /**
     * 是否隐藏商品库存。在商品展示时不显示商品的库存，默认0 显示库存，设置为1 不显示库存
     */
    hide_stock?: number;
    /**
     * 酒店扩展信息，按以下格式：
  * {
  * "service_tel_code":"0571",//服务电话区号
  * "service_tel":"4790043"//服务电话
  * }
     */
    hotel_extra?: string;
    /**
     * 图片id列表，用逗号分隔。可以通过 youzan.materials.storage.platform.img.upload 上传图片接口去上传图片后获取图片id 。
     */
    image_ids?: string;
    /**
     * 是否上架商品。默认1 上架商品，设置为0 不上架商品，放入仓库
     */
    is_display?: number;
    /**
     * 商品货号（商家为商品设置的外部编号）
     */
    item_no?: string;
    /**
     * 商品sku扩展信息，组装成一个JSON,与sku_stocks参数匹配。如上面传入的sku_stocks，则s1为颜色对应的vid，传入一定要按照这个格式
  *      [
  *      {
  *      "cost_price":2000, //成本价
  *      "s1":1217,规格层级1对应的规格属性ID
  *      "s2":1367,
  *      "s3":303435,
  *      "s4":0,
  *      "s5":0
  *      },
  *      {
  *      "cost_price":2000,
  *      "s1":1217,
  *      "s2":1367,
  *      "s3":6356,
  *      "s4":0,
  *      "s5":0
  *      }
  *      ]
  * 无规格商品若需要设置成本价则传入
  * [{"cost_price":1700,"s1":0,"s2":0,"s3":0,"s4":0,"s5":0}]，多规格商品若只设置部分规格商品成本价，则无成本价的sku成本价传入-1，如：
  *  [
  *      {
  *      "cost_price":2000, //成本价
  *      "s1":1217,规格层级1对应的规格属性ID
  *      "s2":1367,
  *      "s3":303435,
  *      "s4":0,
  *      "s5":0
  *      },
  *      {
  *      "cost_price":-1,
  *      "s1":1217,
  *      "s2":1367,
  *      "s3":6356,
  *      "s4":0,
  *      "s5":0
  *      }
  *      ]
     */
    item_sku_extends?: string;
    /**
     * 商品类型
  * 0：普通商品
  * 35：酒店商品
  * 60：虚拟商品
  * 61：电子卡券
     */
    item_type?: number;
    /**
     * 商品重量，没有SKU时用
     */
    item_weight?: number;
    /**
     * 是否参加会员折扣。默认1，设置为1 参加会员折扣
     */
    join_level_discount?: number;
    /**
     * 商品留言
     */
    messages?: string;
    /**
     * 商品划线价格，可以自定义。例如 促销价：888
     */
    origin_price?: string;
    /**
     * 运费，单位分
     */
    post_fee?: number;
    /**
     * 是否预售
     */
    pre_sale?: boolean;
    /**
     * 预售结束时间, 字符串格式的时间
     */
    pre_sale_end?: string;
    /**
     * 价格，单位分
     */
    price?: number;
    /**
     * 是否设置商品购买权限
     */
    purchase_right?: boolean;
    /**
     * 总库存
     */
    quantity?: number;
    /**
     * 商品卖点信息
     */
    sell_point?: string;
    /**
     * SKU图片，仅支持第一级规格，
  * 参数一定要与sku_stocks参数匹配，
  * 如sku_stocks参数是这样的
  * [ { "price":10000, "quantity":100, "item_no":"MOYU-1", "skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"1024G", } ] }, { "price":10000, "quantity":100, "item_no":"MOYU-2","skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"16G", } ] } ]
  * 颜色就是第一级规格。它下面的规格只有“绿色”这一项，sku_images应该与之一一对应，如下
  * [{"v":"绿色","img_url":"www.youzan.com"}]
  * 请务必按此格式传参数，不然校验通不过，无法新增商品
     */
    sku_images?: string;
    /**
     * sku 的JSON字符串，传入一定要按照这个格式[ { "price":10000, "quantity":100, "item_no":"MOYU-1", "skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"1024G", } ] }, { "price":10000, "quantity":100, "item_no":"MOYU-2","skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"16G", } ] } ] price是 sku 价格，quantity 是sku 的库存，item_no 是 sku 的商家编码，k 是规格名称，v 是规格值名称
  * 要注意：sku_stocks数量=规格1数量 * 规格2数量 * 规格3数量
     */
    sku_stocks?: string;
    /**
     * SKU重量带有SKU时用
  * 按如下格式
  * “100，200”
  * 由重量组成并且和SKU对应
  * 顺序由业务方来维护
     */
    sku_weight?: string;
    /**
     * 分组列表,若不传，则会默认加到其他分组当中
     */
    tag_ids?: string;
    /**
     * 商品页模板
     */
    template_id?: number;
    /**
     * 商品标题。不能超过100字，受违禁词控制
     */
    title?: string;
    /**
     * 允许购买的粉丝等级，用逗号分隔
     */
    ump_level?: string;
    /**
     * 允许购买的粉丝标签，用,号分隔
     */
    ump_tags?: string;
    /**
     * 虚拟信息扩展信息，一定要按如下JSON格式，否则校验不通过
  * {
  *   "item_validity_start":2322222,//虚拟商品有效期开始时间, 1970-01-01 开始的秒数,留空表示长期有效
  *   "item_validity_end":2322222,//虚拟商品有效期结束时间,1970-01-01 开始的秒数,留空表示长期有效
  *   "effective_type":1,//电子凭证生效类型，0 立即生效， 1 自定义推迟时间， 2 隔天生效
  *   "effective_delay_hours":1,//电子凭证自定义推迟时间
  *   "holidays_available":true//节假日是否可用
  * }
     */
    virtual_extra?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 创建成功后的商品详情
     */
    item?: ItemDetailOpenModel;
  }

  /**
   * 创建成功后的商品详情
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
