export namespace TradeTradesSoldGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 买家id
     */
    buyer_id?: number;
    /**
     * 交易创建结束时间，例:2017-01-01 12:00:00; 开始时间和结束时间的跨度不能大于3个月; 结束时间必须大于开始时间; 开始时间和结束时间必须成对出现
     */
    end_created?: Date;
    /**
     * 交易状态更新的结束时间，例:2017-01-01 12:00:00; 开始时间和结束时间的跨度不能大于3个月; 结束时间必须大于开始时间; 开始时间和结束时间必须成对出现
     */
    end_update?: Date;
    /**
     * 物流类型搜索
  * 同城送订单：LOCAL_DELIVERY
  * 自提订单：SELF_FETCH
  * 快递配送：EXPRESS
     */
    express_type?: string;
    /**
     * 粉丝id
     */
    fans_id?: number;
    /**
     * 粉丝类型
     */
    fans_type?: number;
    /**
     * 商品名称
     */
    goods_title?: string;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 通用搜索关键字
     */
    keywords?: string;
    /**
     * 是否需要返回订单详情url
     */
    need_order_url?: boolean;
    /**
     * 门店id
     */
    offline_id?: number;
    /**
     * 来源
     */
    order_source?: string;
    /**
     * 页码，从1开始，最大不能超过100
     */
    page_no?: number;
    /**
     * 每页条数，最大不能超过100，建议使用默认分页 20
     */
    page_size?: number;
    /**
     * 收货人昵称
     */
    receiver_name?: string;
    /**
     * 收货人手机号
     */
    receiver_phone?: string;
    /**
     * 交易创建的开始时间 例:2017-01-01 12:00:00; 开始时间和结束时间的跨度不能大于3个月; 结束时间必须大于开始时间; 开始时间和结束时间必须成对出现
     */
    start_created?: Date;
    /**
     * 交易状态更新的开始时间 例:2017-01-01 12:00:00; 开始时间和结束时间的跨度不能大于3个月; 结束时间必须大于开始时间; 开始时间和结束时间必须成对出现
     */
    start_update?: Date;
    /**
     * 订单状态，一次只能查询一种状态
  * 待付款：WAIT_BUYER_PAY
  * 待发货：WAIT_SELLER_SEND_GOODS
  * 等待买家确认：WAIT_BUYER_CONFIRM_GOODS
  * 订单完成：TRADE_SUCCESS
  * 订单关闭：TRADE_CLOSE
  * 退款中：TRADE_REFUND
     */
    status?: string;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 订单类型
  * NORMAL：普通订单
  * PEERPAY：代付
  * GIFT：我要送人
  * FX_CAIGOUDAN：分销采购单
  * PRESENT：赠品
  * WISH：心愿单
  * QRCODE：二维码订单
  * QRCODE_3RD：线下收银台订单
  * FX_MERGED：合并付货款
  * VERIFIED：1分钱实名认证
  * PINJIAN：品鉴
  * REBATE：返利
  * FX_QUANYUANDIAN：全员开店
  * FX_DEPOSIT：保证金
  * PF：批发
  * GROUP：拼团
  * HOTEL：酒店
  * TAKE_AWAY：外卖
  * CATERING_OFFLINE：堂食点餐
  * CATERING_QRCODE：外卖买单
  * BEAUTY_APPOINTMENT：美业预约单
  * BEAUTY_SERVICE：美业服务单
  * KNOWLEDGE_PAY：知识付费
  * GIFT_CARD：礼品卡
     */
    type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 交易基础信息结构体
     */
    full_order_info_list?: StructurizationTrade[];
    /**
     * 搜索订单总条数
     */
    total_results?: number;
  }

  /**
   * 交易基础信息结构体
   */
  export interface StructurizationTrade {
    /**
     * 交易基础信息结构体
     */
    full_order_info?: StructurizationTradeOrderInfo;
  }

  /**
   * 交易基础信息结构体
   */
  export interface StructurizationTradeOrderInfo {
    /**
     * 交易明细详情
     */
    order_info?: StructurizationOrderInfoDetail;
    /**
     * 订单来源
     */
    source_info?: StructurizationTradeSourceInfo;
    /**
     * 订单买家信息结构体
     */
    buyer_info?: StructurizationTradeBuyerInfoDetail;
    /**
     * 交易支付信息结构体
     */
    pay_info?: StructurizationTradePayInfoDetail;
    /**
     * 订单标记信息结构体
     */
    remark_info?: StructurizationTradeRemarkInfoDetail;
    /**
     * 订单收货地址信息结构体
     */
    address_info?: StructurizationTradeAddressInfoDetail;
    /**
     * 订单明细结构体
     */
    orders?: StructurizationTradeItemDetail[];
    /**
     * 交易送礼子单
     */
    child_info?: StructurizationTradeChildOrderInfo;
  }

  /**
   * 交易明细详情
   */
  export interface StructurizationOrderInfoDetail {
    /**
     * 主订单状态 WAIT_BUYER_PAY （等待买家付款，定金预售描述：定金待付、等待尾款支付开始、尾款待付）； TRADE_PAID（订单已支付 ）； WAIT_CONFIRM（待确认，包含待成团、待接单等等。即：买家已付款，等待成团或等待接单）； WAIT_SELLER_SEND_GOODS（等待卖家发货，即：买家已付款）； WAIT_BUYER_CONFIRM_GOODS (等待买家确认收货，即：卖家已发货) ； TRADE_SUCCESS（买家已签收以及订单成功）； TRADE_CLOSED（交易关闭）； PS：TRADE_PAID状态仅代表当前订单已支付成功，表示瞬时状态，稍后会自动修改成后面的状态。如果不关心此状态请再次请求详情接口获取下一个状态。
     */
    status?: string;
    /**
     * 主订单类型
  * 0:普通订单; 1:送礼订单; 2:代付; 3:分销采购单; 4:赠品; 5:心愿单; 6:二维码订单; 7:合并付货款; 8:1分钱实名认证; 9:品鉴; 10:拼团; 15:返利; 35:酒店; 40:外卖; 41:堂食点餐; 46:外卖买单; 51:全员开店; 61:线下收银台订单; 71:美业预约单; 72:美业服务单; 75:知识付费; 81:礼品卡; 100:批发
     */
    type?: number;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 主订单状态 描述
     */
    status_str?: string;
    /**
     * 支付类型 0:默认值,未支付; 1:微信自有支付; 2:支付宝wap; 3:支付宝wap;5:财付通;7:代付; 8:联动优势; 9:货到付款; 10:大账号代销; 11:受理模式; 12:百付宝; 13:sdk支付; 14:合并付货款; 15:赠品; 16:优惠兑换; 17:自动付货款; 18:爱学贷; 19:微信wap; 20:微信红包支付; 21:返利; 22:ump红包;24:易宝支付; 25:储值卡;27:qq支付; 28:有赞E卡支付; 29:微信条码; 30:支付宝条码; 33:礼品卡支付; 35:会员余额; 36:银行卡支付;37:银行卡支付;72:微信扫码二维码支付;80:店铺余额支付; 90:礼品卡支付;100:代收账户; 300:储值账户; 400:保证金账户; 101:收款码; 102:微信; 103:支付宝; 104:刷卡; 105:二维码台卡; 106:储值卡; 107:有赞E卡; 110:标记收款-自有微信支付; 111:标记收款-自有支付宝; 112:标记收款-自有POS刷卡; 113:通联刷卡支付; 114:标记收款-自定义;200:记账账户; 201:现金; 202:组合支付;203:外部支付;40:分期支付
     */
    pay_type?: number;
    /**
     * 店铺类型
  * 0:微商城; 1:微小店; 2:爱学贷微商城; 3:批发店铺; 4:批发商城; 5:外卖; 6:美业; 7:超级门店; 8:收银; 9:收银加微商城; 10:零售总部; 99:有赞开放平台平台型应用创建的店铺
     */
    team_type?: number;
    /**
     * 关闭类型
  * 0:未关闭; 1:过期关闭; 2:标记退款; 3:订单取消; 4:买家取消; 5:卖家取消; 6:部分退款; 10:无法联系上买家; 11:买家误拍或重拍了; 12:买家无诚意完成交易; 13:已通过银行线下汇款; 14:已通过同城见面交易; 15:已通过货到付款交易; 16:已通过网上银行直接汇款; 17:已经缺货无法交易
     */
    close_type?: number;
    /**
     * 物流类型
  * 0:快递发货; 1:到店自提; 2:同城配送; 9:无需发货（虚拟商品订单）
     */
    express_type?: number;
    /**
     * 订单信息打标
     */
    order_tags?: StructurizationOrderInfoDetailTags;
    /**
     * 订单扩展字段
     */
    order_extra?: StructurizationOrderInfoDetailExtra;
    /**
     * 订单创建时间
     */
    created?: Date;
    /**
     * 订单更新时间
     */
    update_time?: Date;
    /**
     * 订单过期时间（未付款将自动关单）
     */
    expired_time?: Date;
    /**
     * 订单支付时间
     */
    pay_time?: Date;
    /**
     * 订单发货时间（当所有商品发货后才会更新）
     */
    consign_time?: Date;
    /**
     * 订单确认时间（多人拼团成团）
     */
    confirm_time?: Date;
    /**
     * 退款状态 0:未退款; 1:部分退款中; 2:部分退款成功; 11:全额退款中; 12:全额退款成功
     */
    refund_state?: number;
    /**
     * 是否零售订单
     */
    is_retail_order?: boolean;
    /**
     * 订单成功时间
     */
    success_time?: Date;
    /**
     * 网点id
     */
    offline_id?: number;
    /**
     * 支付类型。取值范围： WEIXIN (微信自有支付) WEIXIN_DAIXIAO (微信代销支付) ALIPAY (支付宝支付) BANKCARDPAY (银行卡支付) PEERPAY (代付) CODPAY (货到付款) BAIDUPAY (百度钱包支付) PRESENTTAKE (直接领取赠品) COUPONPAY(优惠券/码全额抵扣) BULKPURCHASE(来自分销商的采购) MERGEDPAY(合并付货款) ECARD(有赞E卡支付) PURCHASE_PAY (采购单支付) MARKPAY (标记收款) OFCASH (现金支付) PREPAIDCARD (储值卡余额支付)ENCHASHMENT_GIFT_CARD(礼品卡支付)
     */
    pay_type_str?: string;
    /**
     * 活动类型:0: "没有活动",1: "没有活动", 2: "团购返现",3: "降价拍",4: "拼团",5: "积分兑换",6: "秒杀",7: "优惠套餐",8: "赠品",9: "商品扫码",10: "会员折扣",11: "限时折扣",12: "众筹",13:"周期购",14: "送礼",15: "随机点餐",16: "扫码优惠",19: "享立减",20: "F码",21: "助力砍价",22: "推荐有奖",23: "抽奖拼团",24: "加价购",63: "送礼社区版",101: "满减送",102: "订单返现",103: "供货商满包邮",114: "定金膨胀",115: "第二件半价",256:"积分抵现"
     */
    activity_type?: number;
  }

  /**
   * 订单信息打标
   */
  export interface StructurizationOrderInfoDetailTags {
    /**
     * 是否虚拟订单
     */
    is_virtual?: boolean;
    /**
     * 是否采购单
     */
    is_purchase_order?: boolean;
    /**
     * 是否分销单
     */
    is_fenxiao_order?: boolean;
    /**
     * 是否会员订单
     */
    is_member?: boolean;
    /**
     * 是否预订单
     */
    is_preorder?: boolean;
    /**
     * 是否线下订单
     */
    is_offline_order?: boolean;
    /**
     * 是否多门店订单
     */
    is_multi_store?: boolean;
    /**
     * 是否结算
     */
    is_settle?: boolean;
    /**
     * 是否支付
     */
    is_payed?: boolean;
    /**
     * 是否担保交易
     */
    is_secured_transactions?: boolean;
    /**
     * 是否享受免邮
     */
    is_postage_free?: boolean;
    /**
     * 是否有维权
     */
    is_feedback?: boolean;
    /**
     * 是否有退款
     */
    is_refund?: boolean;
    /**
     * 是否定金预售
     */
    is_down_payment_pre?: boolean;
  }

  /**
   * 订单扩展字段
   */
  export interface StructurizationOrderInfoDetailExtra {
    /**
     * 是否来自购物车 是：true 不是：false
     */
    is_from_cart?: string;
    /**
     * 收银员id
     */
    cashier_id?: string;
    /**
     * 收银员名字
     */
    cashier_name?: string;
    /**
     * 发票抬头
     */
    invoice_title?: string;
    /**
     * 结算时间
     */
    settle_time?: string;
    /**
     * 是否父单(分销合并订单) 是：1 其他：null
     */
    is_parent_order?: string;
    /**
     * 是否子单(分销买家订单) 是：1 其他：null
     */
    is_sub_order?: string;
    /**
     * 分销单订单号
     */
    fx_order_no?: string;
    /**
     * 分销店铺id
     */
    fx_kdt_id?: string;
    /**
     * 父单号
     */
    parent_order_no?: string;
    /**
     * 采购单订单号
     */
    purchase_order_no?: string;
    /**
     * 美业分店id
     */
    dept_id?: string;
    /**
     * 下单设备号
     */
    create_device_id?: string;
    /**
     * 是否是积分订单：1：是  0：不是
     */
    is_points_order?: string;
    /**
     * 海淘身份证信息：332527XXXXXXXXX
     */
    id_card_number?: string;
    /**
     * 下单人昵称
     */
    buyer_name?: string;
    /**
     * 是否会员订单
     */
    is_member?: string;
    /**
     * 团购返现优惠金额
     */
    tm_cash?: number;
    /**
     * 团购返现最大返现金额
     */
    t_cash?: number;
    /**
     * 订单返现金额
     */
    cash?: number;
    /**
     * 虚拟总单号：一次下单发生拆单时，会生成一个虚拟总单号
     */
    orders_combine_id?: string;
    /**
     * 拆单时店铺维度的虚拟总单号：发生拆单时，单个店铺生成了多笔订单会生成一个店铺维度的虚拟总单号
     */
    kdt_dimension_combine_id?: string;
    /**
     * 使用了同一张优惠券&优惠码的多笔订单对应的虚拟总单号
     */
    promotion_combine_id?: string;
    /**
     * 身份证姓名信息  （订购人的身份证号字段可通过订单详情4.0接口“id_card_number ”获取）
     */
    id_card_name?: string;
    /**
     * 分销单外部支付流水号
     */
    fx_outer_transaction_no?: string;
    /**
     * 分销单内部支付流水号
     */
    fx_inner_transaction_no?: string;
  }

  /**
   * 订单来源
   */
  export interface StructurizationTradeSourceInfo {
    /**
     * 是否来自线下订单
     */
    is_offline_order?: boolean;
    /**
     * 订单来源平台
     */
    source?: StructurizationTradeSource;
    /**
     * 订单标记
  * wx_apps:微信小程序买家版
  * wx_shop:微信小程序商家版
  * wx_wm:微信小程序外卖
  * wap_wm:移动端外卖
  * super_store:超级门店
  * weapp_spotlight:新微信小程序买家版
  * wx_meiye:美业小程序
  * wx_apps_maidan:小程序餐饮买单
  * wx_apps_diancan:小程序堂食
  * weapp_youzan:有赞小程序
  * retail_free_buy:零售自由购
  * weapp_owl:知识付费小程序
  * app_spotlight:有赞精选app
  * retail_scan_buy:零售扫码购
  * weapp_plugin:小程序插件
  * 除以上之外为其他
     */
    order_mark?: string;
    /**
     * 订单唯一识别码
     */
    book_key?: string;
    /**
     * 活动类型：如群团购：”mall_group_buy“
     */
    biz_source?: string;
  }

  /**
   * 订单来源平台
   */
  export interface StructurizationTradeSource {
    /**
     * 平台
  * wx:微信; merchant_3rd:商家自有app; buyer_v:买家版; browser:系统浏览器; alipay:支付宝;qq:腾讯QQ; wb:微博; other:其他
     */
    platform?: string;
    /**
     * 微信平台细分
  * wx_gzh:微信公众号; yzdh:有赞大号; merchant_xcx:商家小程序; yzdh_xcx:有赞大号小程序; direct_buy:直接购买
     */
    wx_entrance?: string;
  }

  /**
   * 订单买家信息结构体
   */
  export interface StructurizationTradeBuyerInfoDetail {
    /**
     * 买家id
     */
    buyer_id?: number;
    /**
     * 买家手机号
     */
    buyer_phone?: string;
    /**
     * 粉丝类型
  * 1:自有粉丝; 9:代销粉丝
     */
    fans_type?: number;
    /**
     * 粉丝id
     */
    fans_id?: number;
    /**
     * 粉丝昵称
     */
    fans_nickname?: string;
    /**
     * 微信H5和微信小程序（有赞小程序和小程序插件）的订单会返回微信weixin_openid，三方App（有赞APP开店）的订单会返回open_user_id，2019年1月30号后的订单支持返回该参数
     */
    outer_user_id?: string;
  }

  /**
   * 交易支付信息结构体
   */
  export interface StructurizationTradePayInfoDetail {
    /**
     * 优惠前商品总价
     */
    total_fee?: string;
    /**
     * 邮费
     */
    post_fee?: string;
    /**
     * 最终支付价格
  * payment=orders.payment的总和
     */
    payment?: string;
    /**
     * 有赞支付流水号
     */
    transaction?: string[];
    /**
     * 外部支付单号
     */
    outer_transactions?: string[];
    /**
     * 多阶段信息结构体
     */
    phase_payments?: StructurizationTradePhasePaymentsDetail[];
  }

  /**
   * 多阶段信息结构体
   */
  export interface StructurizationTradePhasePaymentsDetail {
    /**
     * 支付阶段
     */
    phase?: number;
    /**
     * 支付开始时间
     */
    pay_start_time?: Date;
    /**
     * 支付结束时间
     */
    pay_end_time?: Date;
    /**
     * 阶段支付金额
     */
    real_price?: string;
    /**
     * 外部支付流水号
     */
    outer_transaction_no?: string;
    /**
     * 内部支付流水号
     */
    inner_transaction_no?: string;
    /**
     * 支付类型。取值范围： WEIXIN (微信自有支付) WEIXIN_DAIXIAO (微信代销支付) ALIPAY (支付宝支付) BANKCARDPAY (银行卡支付) PEERPAY (代付) CODPAY (货到付款) BAIDUPAY (百度钱包支付) PRESENTTAKE (直接领取赠品) COUPONPAY(优惠券/码全额抵扣) BULKPURCHASE(来自分销商的采购) MERGEDPAY(合并付货款) ECARD(有赞E卡支付) PURCHASE_PAY (采购单支付) MARKPAY (标记收款) OFCASH (现金支付) PREPAIDCARD (储值卡余额支付)ENCHASHMENT_GIFT_CARD(礼品卡支付)
     */
    pay_type_str?: string;
  }

  /**
   * 订单标记信息结构体
   */
  export interface StructurizationTradeRemarkInfoDetail {
    /**
     * 订单买家留言
     */
    buyer_message?: string;
    /**
     * 订单标星等级 0-5
     */
    star?: number;
    /**
     * 订单商家备注
     */
    trade_memo?: string;
  }

  /**
   * 订单收货地址信息结构体
   */
  export interface StructurizationTradeAddressInfoDetail {
    /**
     * 收货人姓名
     */
    receiver_name?: string;
    /**
     * 收货人手机号
     */
    receiver_tel?: string;
    /**
     * 省
     */
    delivery_province?: string;
    /**
     * 市
     */
    delivery_city?: string;
    /**
     * 区
     */
    delivery_district?: string;
    /**
     * 详细地址
     */
    delivery_address?: string;
    /**
     * 字段为json格式，需要开发者自行解析
  * lng、lon（经纬度）；
  * checkOutTime（酒店退房时间）；
  * recipients（入住人）；
  * checkInTime（酒店入住时间）；
  * idCardNumber（海淘身份证信息）；
  * areaCode（邮政编码）
     */
    address_extra?: string;
    /**
     * 邮政编码
     */
    delivery_postal_code?: string;
    /**
     * 到店自提信息 json格式
     */
    self_fetch_info?: string;
    /**
     * 同城送预计送达时间-开始时间
  * 非同城送以及没有开启定时达的订单不返回
     */
    delivery_start_time?: Date;
    /**
     * 同城送预计送达时间-结束时间
  * 非同城送以及没有开启定时达的订单不返回
     */
    delivery_end_time?: Date;
  }

  /**
   * 订单明细结构体
   */
  export interface StructurizationTradeItemDetail {
    /**
     * 订单明细id
     */
    oid?: string;
    /**
     * 订单类型
  * 0:普通类型商品; 1:拍卖商品; 5:餐饮商品; 10:分销商品; 20:会员卡商品; 21:礼品卡商品; 23:有赞会议商品; 24:周期购; 30:收银台商品; 31:知识付费商品; 35:酒店商品; 40:普通服务类商品; 182:普通虚拟商品; 183:电子卡券商品; 201:外部会员卡商品; 202:外部直接收款商品; 203:外部普通商品; 205:mock不存在商品; 206:小程序二维码
     */
    item_type?: number;
    /**
     * 商品名称
     */
    title?: string;
    /**
     * 商品数量
     */
    num?: number;
    /**
     * 商家编码
     */
    outer_sku_id?: string;
    /**
     * 商品留言
     */
    buyer_messages?: string;
    /**
     * 单商品原价
     */
    price?: string;
    /**
     * 商品优惠后总价
     */
    total_fee?: string;
    /**
     * 商品最终均摊价
     */
    payment?: string;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 规格id（无规格商品为0）
     */
    sku_id?: number;
    /**
     * 规格信息（无规格商品为空）
     */
    sku_properties_name?: string;
    /**
     * 商品编码
     */
    outer_item_id?: string;
    /**
     * 商品积分价（非积分商品则为0）
     */
    points_price?: string;
    /**
     * 商品图片地址
     */
    pic_path?: string;
    /**
     * 商品详情链接
     */
    goods_url?: string;
    /**
     * 商品别名
     */
    alias?: string;
    /**
     * 是否赠品
     */
    is_present?: boolean;
    /**
     * 单商品现价，减去了商品的优惠金额
     */
    discount_price?: string;
    /**
     * 商品唯一编码
     */
    sku_unique_code?: string;
    /**
     * 0 全款预售，1 定金预售
     */
    pre_sale_type?: string;
    /**
     * 是否为预售商品 如果是预售商品则为1
     */
    is_pre_sale?: string;
    /**
     * 是否是跨境海淘订单("1":是,"0":否)
     */
    is_cross_border?: string;
    /**
     * 海关编号
     */
    customs_code?: string;
    /**
     * 海淘商品贸易模式
     */
    cross_border_trade_mode?: string;
    /**
     * 子订单号
     */
    sub_order_no?: string;
    /**
     * 分销单金额 ，单位元
     */
    fenxiao_price?: string;
    /**
     * 分销单实付金额，单位元
     */
    fenxiao_payment?: string;
  }

  /**
   * 交易送礼子单
   */
  export interface StructurizationTradeChildOrderInfo {
    /**
     * 送礼编号
     */
    gift_no?: string;
    /**
     * 送礼标记
     */
    gift_sign?: string;
    /**
     * 送礼子单详情
     */
    child_orders?: StructurizationTradeChildOrderDetail[];
  }

  /**
   * 送礼子单详情
   */
  export interface StructurizationTradeChildOrderDetail {
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 领取人姓名
     */
    user_name?: string;
    /**
     * 领取人电话
     */
    user_tel?: string;
    /**
     * 省
     */
    province?: string;
    /**
     * 市
     */
    city?: string;
    /**
     * 区
     */
    county?: string;
    /**
     * 收货地址详情
     */
    address_detail?: string;
    /**
     * 老送礼订单状态：WAIT_EXPRESS(5, "待发货"), EXPRESS(6, "已发货"), SUCCESS(100, "成功")
     */
    order_state?: string;
  }

}
