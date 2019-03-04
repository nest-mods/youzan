export namespace CouponUmpPromocardAdd {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 如果 is_at_least 为 1，该字段表示订单必须满这个价格，优惠券才可用。单位：元，精确到分
     */
    at_least?: string;
    /**
     * 同步微信卡券时，设置是否可以转赠，1 为可转赠，0 为不可转赠
     */
    can_give_friend?: number;
    /**
     * 优惠使用时间类型，1 表示固定活动时间（配合start_at和end_at 这两个字段使用）；2 表示延迟类型，几天后几天内有效（配合fixed_term和fixed_begin_term 这两个字段使用）
     */
    date_type?: number;
    /**
     * 使用说明
     */
    description?: string;
    /**
     * 折扣（示例：88 8.8折）
     */
    discount?: number;
    /**
     * 优惠券结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_at?: Date;
    /**
     * 是否到期前4天发送提醒，0 表示不发送，1 表示发送
     */
    expire_notice?: number;
    /**
     * 延迟开始的时间，如传入1，表示优惠券延迟1天生效；date_type=2时使用。
     */
    fixed_begin_term?: number;
    /**
     * 固定时长，如传入1，表示优惠券1天内有效；date_type=2时使用。
     */
    fixed_term?: number;
    /**
     * 是否设置满多少元可用，0 表示不限制，1 表示限制
     */
    is_at_least?: number;
    /**
     * 是否仅原价购买商品时可用，0 表示否，1 表示是
     */
    is_forbid_preference?: number;
    /**
     * 是否是随机优惠券，0 表示不随机，1 表示随机
     */
    is_random?: number;
    /**
     * 是否可分享领取链接，0 表示否，1 表示是
     */
    is_share?: number;
    /**
     * 是否同步微信卡券，0 表示否，1 表示是
     */
    is_sync_weixin?: number;
    /**
     * 领取优惠券要给用户打上的标签的ID，多个用半角逗号分隔
     */
    mark_tag_ids?: string;
    /**
     * 是否限制领用者的等级，0 表示不限制，大于 0 表示领用者必须是这个等级ID
     */
    need_user_level?: number;
    /**
     * 优惠属性，1表示优惠，2表示折扣
     */
    preferential_type?: number;
    /**
     * 每人限领个数，为 0 则表示不限制
     */
    quota?: number;
    /**
     * 可用范围的类型，可选值：PART（部分商品可用，或指定商品可用）ALL（全部商品可用）
     */
    range_type?: string;
    /**
     * 同步微信卡券时，卡券的客服电话
     */
    service_phone?: string;
    /**
     * 如果 range_type 为 PART，需要指定可用商品ID，多个用半角逗号分隔
     */
    specify_item_ids?: string;
    /**
     * 优惠券生效时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_at?: Date;
    /**
     * 优惠券标题
     */
    title?: string;
    /**
     * 总库存
     */
    total?: number;
    /**
     * 优惠券面额。如果 is_random 为 1，则该字段表示随机金额的下限。单位：元，精确到分
     */
    value?: string;
    /**
     * 如果 is_random 为 1，则该字段表示随机金额的上限。单位：元，精确到分
     */
    value_random_to?: string;
    /**
     * 同步微信卡券时，选择的卡券颜色的值。例如：Color010
     */
    weixin_color?: string;
    /**
     * 同步微信卡券时，选择的卡券颜色的RGB值。例如：  #55bd47
     */
    weixin_color_rgb?: string;
    /**
     * 同步微信卡券时，卡券的副标题，长度：18个字
     */
    weixin_sub_title?: string;
    /**
     * 同步微信卡券时，卡券的标题，长度：9个字
     */
    weixin_title?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 新建优惠券信息
     */
    promocard?: UmpPromotionCard;
  }

  /**
   * 新建优惠券信息
   */
  export interface UmpPromotionCard {
    /**
     * 优惠券的ID
     */
    group_id?: number;
    /**
     * 可用范围的类型，可选值：
  *             <br>PART（部分商品可用，或指定商品可用）
  *             <br>ALL（全部商品可用）
     */
    range_type?: string;
    /**
     * 优惠券标题
     */
    title?: string;
    /**
     * 优惠券面额。如果 is_random 为 1，则该字段表示随机金额的下限。单位：元，精确到分
     */
    value?: string;
    /**
     * 是否是随机优惠券，0 表示不随机，1 表示随机
     */
    is_random?: number;
    /**
     * 如果 is_random 为 1，则该字段表示随机金额的上限。单位：元，精确到分
     */
    value_random_to?: string;
    /**
     * 是否限制领用者的等级，0 表示不限制，大于 0 表示领用者必须是这个等级ID
     */
    need_user_level?: number;
    /**
     * 限制领用者等级的名称
     */
    user_level_name?: string;
    /**
     * 每人限领个数，为 0 则表示不限制
     */
    quota?: number;
    /**
     * 是否设置满多少元可用，0 表示不限制，1 表示限制
     */
    is_at_least?: number;
    /**
     * 如果 is_at_least 为 1，该字段表示订单必须满这个价格，优惠券才可用。单位：元，精确到分
     */
    at_least?: string;
    /**
     * 总库存
     */
    total?: number;
    /**
     * 剩余可用库存
     */
    stock?: number;
    /**
     * 优惠券生效时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_at?: Date;
    /**
     * 优惠券结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_at?: Date;
    /**
     * 是否到期前4天发送提醒，0 表示不发送，1 表示发送
     */
    expire_notice?: number;
    /**
     * 使用说明
     */
    description?: string;
    /**
     * 是否仅原价购买商品时可用，0 表示否，1 表示是
     */
    is_forbid_preference?: number;
    /**
     * 是否同步微信卡券，0 表示否，1 表示是
     */
    is_sync_weixin?: number;
    /**
     * 优惠券状态，0 表示有效，1 表示失效，2 表示微信卡券审核中
     */
    status?: number;
    /**
     * 优惠券是否已过期，0 表示未过期，1 表示已过期
     */
    is_expired?: number;
    /**
     * 优惠券是否进行中，0 表示不在进行中，1 表示进行中
     */
    is_ongoing?: number;
    /**
     * 是否可分享领取链接，0 表示否，1 表示是
     */
    is_share?: number;
    /**
     * 优惠券领取链接
     */
    fetch_url?: string;
    /**
     * 用户标签
     */
    mark_tags?: CrmUserTag[];
    /**
     * 商品数据结构
     */
    specify_items?: GoodsDetail[];
    /**
     * 领取优惠券的人数
     */
    stat_fetch_user_num?: number;
    /**
     * 领取优惠券的次数
     */
    stat_fetch_num?: number;
    /**
     * 使用优惠券的次数
     */
    stat_use_num?: number;
    /**
     * 优惠券创建时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    created?: Date;
    /**
     * 同步微信卡券，选择的卡券颜色的值
     */
    weixin_color?: string;
    /**
     * 同步微信卡券，选择的卡券颜色的RGB值
     */
    weixin_color_rgb?: string;
    /**
     * 同步微信卡券，卡券的标题
     */
    weixin_title?: string;
    /**
     * 同步微信卡券，卡券的副标题
     */
    weixin_sub_title?: string;
    /**
     * 同步微信卡券，卡券的客服电话
     */
    service_phone?: string;
    /**
     * 同步微信卡券，设置是否可以转赠，1 为可转赠，0 为不可转赠
     */
    can_give_friend?: number;
  }

  /**
   * 用户标签
   */
  export interface CrmUserTag {
    /**
     * 标签ID
     */
    id?: number;
    /**
     * 标签名
     */
    name?: string;
  }

  /**
   * 商品数据结构
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
    skus?: GoodsSku[];
    /**
     * 商品图片数据结构
     */
    item_imgs?: GoodsImage[];
    /**
     * 商品二维码数据结构
     */
    item_qrcodes?: GoodsQrcode[];
    /**
     * 商品标签数据结构
     */
    item_tags?: GoodsTag[];
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
