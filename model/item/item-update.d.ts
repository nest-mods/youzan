export namespace ItemItemUpdate {
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
     * 预计发货结束时间, 字符串格式的时间
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
     * 是否为二手商品
     */
    is_used?: boolean;
    /**
     * 商品ID
     */
    item_id?: number;
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
     */
    item_sku_extends?: string;
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
     * 商家自定义的序号
     */
    num?: number;
    /**
     * 显示在“原价”一栏中的信息
     */
    origin_price?: string;
    /**
     * 运费
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
     * 要删除的商品图片id列表，英文逗号分隔，格式如"1,2"
     */
    remove_image_ids?: string;
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
     * 新接口重新组装成一个大JSON，传入一定要按照这个格式
  *      [
  *      {
  *      "price":10000,
  *      "quantity":100,
  *       "item_no":"ATC-002",
  *      "skus":[
  *      {
  *      "k":"颜色",
  *      "kid":1,
  *      "v":"绿色",
  *      "vid":1217
  *      },
  *      {
  *      "k":"尺寸",
  *      "kid":2,
  *      "v":"l",
  *      "vid":1367
  *      },
  *      {
  *      "k":"内存",
  *      "kid":41,
  *      "v":"1024G",
  *      "vid":303435
  *      }
  *      ]
  *      },
  *      {
  *      "price":10000,
  *      "quantity":100,
  *      "item_no":"ATC-002",
  *      "skus":[
  *      {
  *      "k":"颜色",
  *      "kid":1,
  *      "v":"绿色",
  *      "vid":1217
  *      },
  *      {
  *      "k":"尺寸",
  *      "kid":2,
  *      "v":"l",
  *      "vid":1367
  *      },
  *      {
  *      "k":"内存",
  *      "kid":41,
  *      "v":"16G",
  *      "vid":6356
  *      }
  *      ]
  *      }
  *      ]
  * 注意：sku_stocks数量=规格1数量 * 规格2数量 * 规格3数量
     */
    sku_stocks?: string;
    /**
     * 带有SKU时用
  * 按如下格式
  *     100,200
  * 并且和SKU对应
     */
    sku_weight?: string;
    /**
     * 是否标品，true表示是，false表示否
     */
    standard?: boolean;
    /**
     * 分组列表，字符串类型，分组id以逗号分割，默认只允许传入店铺下其他以及列表中隐藏分组
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
  *   "item_id":122111,
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
     * 商品ID
     */
    item_id?: number;
    /**
     * 操作是否成功
     */
    is_success?: boolean;
  }

}
