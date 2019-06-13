export namespace SelffetchcodeTradeSelffetchcodeGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 提货码
     */
    code: string;
    /**
     * 需要返回的交易对象字段，如tid,title,receiver_city等。可选值：TradeDetail交易结构体中所有字段均可返回；多个字段用“,”分隔。如果为空则返回所有
     */
    fields?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 提货码
     */
    code?: string;
    /**
     * 核销状态 0 未核销 1 已核销
     */
    status?: number;
    /**
     * 订单编号
     */
    tid?: string;
    /**
     * 订单详情
     */
    trade?: TradeDetail;
    /**
     * 扩展信息
     */
    extra_info?: string;
  }

  /**
   * 订单详情
   */
  export interface TradeDetail {
    /**
     * 买家签收时间
     */
    sign_time?: Date;
    /**
     * 卖家发货时间
     */
    consign_time?: Date;
    /**
     * 交易数据结构
     */
    sub_trades?: TradeDetail[];
    /**
     * 订单中使用到的卡券的数据结构
     */
    coupon_details?: UmpTradeCoupon[];
    /**
     * 卖家对该交易的备注
     */
    trade_memo?: string;
    /**
     * 同城送订单送达时间
     */
    delivery_time_display?: string;
    /**
     * 订单中使用到的优惠活动的数据结构
     */
    promotion_details?: TradePromotion[];
    /**
     * (即将废弃,请参考fans_info中的说明) 微信粉丝ID
     */
    weixin_user_id?: number;
    /**
     * 商品购买数量。当一个trade对应多个order的时候，值为所有商品购买数量之和
     */
    num?: number;
    /**
     * 结算状态（分销订单特有）。1：已结算，0：未结算
     */
    handled?: number;
    /**
     * 支付流水号
     */
    transaction_tid?: string;
    /**
     * 外部交易编号。比如，如果支付方式是微信支付，就是财付通的交易单号
     */
    outer_tid?: string;
    /**
     * 创建交易时的物流方式。取值范围：express（快递），fetch（到店自提），local（同城配送）
     */
    shipping_type?: string;
    /**
     * 收货人的详细地址
     */
    receiver_address?: string;
    /**
     * 交易明细数据结构
     */
    orders?: TradeOrder[];
    /**
     * 交易维权状态。<br>
  *         0 无维权，1 顾客发起维权，2 顾客拒绝商家的处理结果，3 顾客接受商家的处理结果，9 商家正在处理,101 维权处理中,110 维权结束。<br>
  *             备注：1到10的状态码是微信维权状态码，100以上的状态码是有赞维权状态码
     */
    feedback?: number;
    /**
     * 支付类型。取值范围：<br>
  * WEIXIN (微信自有支付)<br>
  * WEIXIN_DAIXIAO (微信代销支付)<br>
  * ALIPAY (支付宝支付)<br>
  * BANKCARDPAY (银行卡支付)<br>
  * PEERPAY (代付)<br>
  * CODPAY (货到付款)<br>
  * BAIDUPAY (百度钱包支付)<br>
  * PRESENTTAKE (直接领取赠品)<br>
  * COUPONPAY（优惠券/码全额抵扣）<br>
  * BULKPURCHASE（来自分销商的采购）<br>
  * MERGEDPAY (合并付货款) <br>
  * ECARD（有赞E卡支付）
     */
    pay_type?: string;
    /**
     * 收货人的所在地区
     */
    receiver_district?: string;
    /**
     * 收货人的所在城市。<br>
  * PS：如果订单类型是送礼订单，收货地址在sub_trades字段中；如果物流方式是到店自提，收货地址在fetch_detail字段中
     */
    receiver_city?: string;
    /**
     * 交易标题，以首个商品标题作为此标题的值
     */
    title?: string;
    /**
     * 买家购买附言
     */
    buyer_message?: string;
    /**
     * 积分兑换订单，数值代表消耗的积分 非积分兑换订单默认为0
     */
    points_price?: number;
    /**
     * 买家付款时间
     */
    pay_time?: Date;
    /**
     * 实付金额。单位：元，精确到分
     */
    payment?: string;
    /**
     * 交易完成后退款的金额。单位：元，精确到分
     */
    refunded_fee?: string;
    /**
     * 代付订单外部交易号列表,非代付订单类型返回空
     */
    out_trade_no?: string[];
    /**
     * 退款状态。取值范围：<br>
  * NO_REFUND（无退款）<br>
  * PARTIAL_REFUNDING（部分退款中）<br>
  * PARTIAL_REFUNDED（已部分退款）<br>
  * PARTIAL_REFUND_FAILED（部分退款失败）<br>
  * FULL_REFUNDING（全额退款中）<br>
  * FULL_REFUNDED（已全额退款）<br>
  * FULL_REFUND_FAILED（全额退款失败）<br>
     */
    refund_state?: string;
    /**
     * 收银台订单的二维码id号
     */
    qr_id?: number;
    /**
     * 运费。单位：元，精确到分
     */
    post_fee?: string;
    /**
     * 交易编号
     */
    tid?: string;
    /**
     * 是否为团长订单
     */
    is_tuan_head?: number;
    /**
     * (即将废弃,请参考fans_info中的说明) 买家类型，取值范围：0 为未知，1 为微信粉丝，2 为微博粉丝
     */
    buyer_type?: number;
    /**
     * 交易类型。取值范围：<br>
  * FIXED （一口价）<br>
  * GIFT （送礼）<br>
  * BULK_PURCHASE（来自分销商的采购）<br>
  * PRESENT （赠品领取）<br>
  * GROUP （拼团订单）<br>
  * PIFA （批发订单）<br>
  * COD （货到付款）<br>
  * PEER （代付）<br>
  * QRCODE（扫码商家二维码直接支付的交易）<br>
  * QRCODE_3RD（线下收银台二维码交易)
     */
    type?: string;
    /**
     * 三方APP用户id
     */
    outer_user_id?: string;
    /**
     * 交易状态。取值范围：<br>
  * TRADE_NO_CREATE_PAY (没有创建支付交易) <br>
  * WAIT_BUYER_PAY (等待买家付款) <br>
  * WAIT_PAY_RETURN (等待支付确认) <br>
  * WAIT_GROUP（等待成团，即：买家已付款，等待成团）<br>
  * WAIT_SELLER_SEND_GOODS (等待卖家发货，即：买家已付款) <br>
  * WAIT_BUYER_CONFIRM_GOODS (等待买家确认收货，即：卖家已发货) <br>
  * TRADE_BUYER_SIGNED (买家已签收) <br>
  * TRADE_CLOSED (付款以后用户退款成功，交易自动关
     */
    status?: string;
    /**
     * 交易更新时间。当交易的：状态改变、备注更改、星标更改 等情况下都会刷新更新时间
     */
    update_time?: Date;
    /**
     * relation_type返回source时,为分销订单号列表<br>
  * 返回fenxiao时,为供应商订单号列表<br>
  * 返回空时,列表返回空
     */
    relations?: string[];
    /**
     * 用户信息
     */
    fans_info?: FansInfo;
    /**
     * 卖家备注星标，取值范围 1、2、3、4、5；<br>如果为0，表示没有备注星标
     */
    seller_flag?: number;
    /**
     * 商品价格。精确到2位小数；单位：元。当一个trade对应多个order的时候，值为第一个交易明细中的商品的价格
     */
    price?: string;
    /**
     * 收货人的邮编
     */
    receiver_zip?: string;
    /**
     * 分销/采购单:source:采购单;fenxiao:分销单 空串则为非分销/采购单
     */
    relation_type?: string;
    /**
     * 拼团订单对应的团编号
     */
    tuan_no?: string;
    /**
     * 表示线下网点id，包含自提点和门店
     */
    offline_id?: number;
    /**
     * 收货人的手机号码
     */
    receiver_mobile?: string;
    /**
     * 收货人的姓名
     */
    receiver_name?: string;
    /**
     * 到店自提详情
     */
    fetch_detail?: TradeFetch;
    /**
     * 买家下单的地区
     */
    buyer_area?: string;
    /**
     * 酒店入住信息
     */
    hotel_info?: HotelInfo;
    /**
     * (即将废弃,请参考fans_info中的说明) 买家昵称
     */
    buyer_nick?: string;
    /**
     * 交易优惠金额（不包含交易明细中的优惠金额）。单位：元，精确到分
     */
    discount_fee?: string;
    /**
     * 改价信息
     */
    adjust_fee?: AdjustFee;
    /**
     * 交易创建时间
     */
    created?: Date;
    /**
     * 商品数字编号。当一个trade对应多个order的时候，值为第一个交易明细中的商品的编号
     */
    num_iid?: number;
    /**
     * 商品主图片缩略图地址
     */
    pic_thumb_path?: string;
    /**
     * 利润（分销订单特有）。格式：5.20；单位：元；精确到：分
     */
    profit?: string;
    /**
     * 多门店订单的门店id 非多门店订单则默认为0
     */
    shop_id?: number;
    /**
     * 商品总价（商品价格乘以数量的总金额）。单位：元，精确到分
     */
    total_fee?: string;
    /**
     * 收货人的所在省份
     */
    receiver_state?: string;
    /**
     * 商品主图片地址。当一个trade对应多个order的时候，值为第一个交易明细中的商品的图片地址
     */
    pic_path?: string;
    /**
     * (即将废弃,请参考fans_info中的说明) 买家ID，当 buyer_type 为 1 时，buyer_id 的值等于 weixin_user_id 的值
     */
    buyer_id?: number;
  }

  /**
   * 交易数据结构
   */
  export interface TradeDetail {
    /**
     * 买家签收时间
     */
    sign_time?: Date;
    /**
     * 卖家发货时间
     */
    consign_time?: Date;
    /**
     * 订单中使用到的卡券的数据结构
     */
    coupon_details?: UmpTradeCoupon[];
    /**
     * 卖家对该交易的备注
     */
    trade_memo?: string;
    /**
     * 同城送订单送达时间
     */
    delivery_time_display?: string;
    /**
     * 订单中使用到的优惠活动的数据结构
     */
    promotion_details?: TradePromotion[];
    /**
     * (即将废弃,请参考fans_info中的说明) 微信粉丝ID
     */
    weixin_user_id?: number;
    /**
     * 商品购买数量。当一个trade对应多个order的时候，值为所有商品购买数量之和
     */
    num?: number;
    /**
     * 结算状态（分销订单特有）。1：已结算，0：未结算
     */
    handled?: number;
    /**
     * 支付流水号
     */
    transaction_tid?: string;
    /**
     * 外部交易编号。比如，如果支付方式是微信支付，就是财付通的交易单号
     */
    outer_tid?: string;
    /**
     * 创建交易时的物流方式。取值范围：express（快递），fetch（到店自提），local（同城配送）
     */
    shipping_type?: string;
    /**
     * 收货人的详细地址
     */
    receiver_address?: string;
    /**
     * 交易明细数据结构
     */
    orders?: TradeOrder[];
    /**
     * 交易维权状态。<br>
  *         0 无维权，1 顾客发起维权，2 顾客拒绝商家的处理结果，3 顾客接受商家的处理结果，9 商家正在处理,101 维权处理中,110 维权结束。<br>
  *             备注：1到10的状态码是微信维权状态码，100以上的状态码是有赞维权状态码
     */
    feedback?: number;
    /**
     * 支付类型。取值范围：<br>
  * WEIXIN (微信自有支付)<br>
  * WEIXIN_DAIXIAO (微信代销支付)<br>
  * ALIPAY (支付宝支付)<br>
  * BANKCARDPAY (银行卡支付)<br>
  * PEERPAY (代付)<br>
  * CODPAY (货到付款)<br>
  * BAIDUPAY (百度钱包支付)<br>
  * PRESENTTAKE (直接领取赠品)<br>
  * COUPONPAY（优惠券/码全额抵扣）<br>
  * BULKPURCHASE（来自分销商的采购）<br>
  * MERGEDPAY (合并付货款) <br>
  * ECARD（有赞E卡支付）
     */
    pay_type?: string;
    /**
     * 收货人的所在地区
     */
    receiver_district?: string;
    /**
     * 收货人的所在城市。<br>
  * PS：如果订单类型是送礼订单，收货地址在sub_trades字段中；如果物流方式是到店自提，收货地址在fetch_detail字段中
     */
    receiver_city?: string;
    /**
     * 交易标题，以首个商品标题作为此标题的值
     */
    title?: string;
    /**
     * 买家购买附言
     */
    buyer_message?: string;
    /**
     * 积分兑换订单，数值代表消耗的积分 非积分兑换订单默认为0
     */
    points_price?: number;
    /**
     * 买家付款时间
     */
    pay_time?: Date;
    /**
     * 实付金额。单位：元，精确到分
     */
    payment?: string;
    /**
     * 交易完成后退款的金额。单位：元，精确到分
     */
    refunded_fee?: string;
    /**
     * 代付订单外部交易号列表,非代付订单类型返回空
     */
    out_trade_no?: string[];
    /**
     * 退款状态。取值范围：<br>
  * NO_REFUND（无退款）<br>
  * PARTIAL_REFUNDING（部分退款中）<br>
  * PARTIAL_REFUNDED（已部分退款）<br>
  * PARTIAL_REFUND_FAILED（部分退款失败）<br>
  * FULL_REFUNDING（全额退款中）<br>
  * FULL_REFUNDED（已全额退款）<br>
  * FULL_REFUND_FAILED（全额退款失败）<br>
     */
    refund_state?: string;
    /**
     * 收银台订单的二维码id号
     */
    qr_id?: number;
    /**
     * 运费。单位：元，精确到分
     */
    post_fee?: string;
    /**
     * 交易编号
     */
    tid?: string;
    /**
     * 是否为团长订单
     */
    is_tuan_head?: number;
    /**
     * (即将废弃,请参考fans_info中的说明) 买家类型，取值范围：0 为未知，1 为微信粉丝，2 为微博粉丝
     */
    buyer_type?: number;
    /**
     * 交易类型。取值范围：<br>
  * FIXED （一口价）<br>
  * GIFT （送礼）<br>
  * BULK_PURCHASE（来自分销商的采购）<br>
  * PRESENT （赠品领取）<br>
  * GROUP （拼团订单）<br>
  * PIFA （批发订单）<br>
  * COD （货到付款）<br>
  * PEER （代付）<br>
  * QRCODE（扫码商家二维码直接支付的交易）<br>
  * QRCODE_3RD（线下收银台二维码交易)
     */
    type?: string;
    /**
     * 三方APP用户id
     */
    outer_user_id?: string;
    /**
     * 交易状态。取值范围：<br>
  * TRADE_NO_CREATE_PAY (没有创建支付交易) <br>
  * WAIT_BUYER_PAY (等待买家付款) <br>
  * WAIT_PAY_RETURN (等待支付确认) <br>
  * WAIT_GROUP（等待成团，即：买家已付款，等待成团）<br>
  * WAIT_SELLER_SEND_GOODS (等待卖家发货，即：买家已付款) <br>
  * WAIT_BUYER_CONFIRM_GOODS (等待买家确认收货，即：卖家已发货) <br>
  * TRADE_BUYER_SIGNED (买家已签收) <br>
  * TRADE_CLOSED (付款以后用户退款成功，交易自动关
     */
    status?: string;
    /**
     * 交易更新时间。当交易的：状态改变、备注更改、星标更改 等情况下都会刷新更新时间
     */
    update_time?: Date;
    /**
     * relation_type返回source时,为分销订单号列表<br>
  * 返回fenxiao时,为供应商订单号列表<br>
  * 返回空时,列表返回空
     */
    relations?: string[];
    /**
     * 用户信息
     */
    fans_info?: FansInfo;
    /**
     * 卖家备注星标，取值范围 1、2、3、4、5；<br>如果为0，表示没有备注星标
     */
    seller_flag?: number;
    /**
     * 商品价格。精确到2位小数；单位：元。当一个trade对应多个order的时候，值为第一个交易明细中的商品的价格
     */
    price?: string;
    /**
     * 收货人的邮编
     */
    receiver_zip?: string;
    /**
     * 分销/采购单:source:采购单;fenxiao:分销单 空串则为非分销/采购单
     */
    relation_type?: string;
    /**
     * 拼团订单对应的团编号
     */
    tuan_no?: string;
    /**
     * 表示线下网点id，包含自提点和门店
     */
    offline_id?: number;
    /**
     * 收货人的手机号码
     */
    receiver_mobile?: string;
    /**
     * 收货人的姓名
     */
    receiver_name?: string;
    /**
     * 到店自提详情
     */
    fetch_detail?: TradeFetch;
    /**
     * 买家下单的地区
     */
    buyer_area?: string;
    /**
     * 酒店入住信息
     */
    hotel_info?: HotelInfo;
    /**
     * (即将废弃,请参考fans_info中的说明) 买家昵称
     */
    buyer_nick?: string;
    /**
     * 交易优惠金额（不包含交易明细中的优惠金额）。单位：元，精确到分
     */
    discount_fee?: string;
    /**
     * 改价信息
     */
    adjust_fee?: AdjustFee;
    /**
     * 交易创建时间
     */
    created?: Date;
    /**
     * 商品数字编号。当一个trade对应多个order的时候，值为第一个交易明细中的商品的编号
     */
    num_iid?: number;
    /**
     * 商品主图片缩略图地址
     */
    pic_thumb_path?: string;
    /**
     * 利润（分销订单特有）。格式：5.20；单位：元；精确到：分
     */
    profit?: string;
    /**
     * 多门店订单的门店id 非多门店订单则默认为0
     */
    shop_id?: number;
    /**
     * 商品总价（商品价格乘以数量的总金额）。单位：元，精确到分
     */
    total_fee?: string;
    /**
     * 收货人的所在省份
     */
    receiver_state?: string;
    /**
     * 商品主图片地址。当一个trade对应多个order的时候，值为第一个交易明细中的商品的图片地址
     */
    pic_path?: string;
    /**
     * (即将废弃,请参考fans_info中的说明) 买家ID，当 buyer_type 为 1 时，buyer_id 的值等于 weixin_user_id 的值
     */
    buyer_id?: number;
  }

  /**
   * 订单中使用到的卡券的数据结构
   */
  export interface UmpTradeCoupon {
    /**
     * 该组卡券的ID
     */
    coupon_id?: number;
    /**
     * 该组卡券的名称
     */
    coupon_name?: string;
    /**
     * 卡券的类型。可选值：PROMOCARD（优惠券）、PROMOCODE（优惠码）
     */
    coupon_type?: string;
    /**
     * 卡券内容。当卡券类型为优惠码时，值为优惠码字符串
     */
    coupon_content?: string;
    /**
     * 卡券的说明
     */
    coupon_description?: string;
    /**
     * 卡券使用条件说明
     */
    coupon_condition?: string;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 优惠的金额，单位：元，精确到小数点后两位
     */
    discount_fee?: string;
  }

  /**
   * 订单中使用到的优惠活动的数据结构
   */
  export interface TradePromotion {
    /**
     * 该优惠活动的ID
     */
    promotion_id?: number;
    /**
     * 该优惠活动的名称
     */
    promotion_name?: string;
    /**
     * 优惠的类型。可选值：<br> FULLREDUCE（满减满送）<br> ORDERCASHBACK（订单返现）<br> GROUPBUYING（商品团购）<br> GROUPON（多人拼团）<br> SECKILL（秒杀）<br> AUCTION（降价拍）
     */
    promotion_type?: string;
    /**
     * 优惠使用条件说明
     */
    promotion_condition?: string;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 优惠的金额，单位：元，精确到小数点后两位
     */
    discount_fee?: string;
  }

  /**
   * 交易明细数据结构
   */
  export interface TradeOrder {
    /**
     * Sku的ID，sku_id 在系统里<span style="color: #ff0000;">并不是唯一的</span>，结合商品ID一起使用才是唯一的。
     */
    sku_id?: number;
    /**
     * 商品在分销商那边的实付金额。精确到2位小数；单位：元。如果是采购单才有值，否则值为 0
     */
    fenxiao_payment?: string;
    /**
     * 商品购买数量
     */
    num?: number;
    /**
     * 商家编码（商家为Sku设置的外部编号）
     */
    outer_sku_id?: string;
    /**
     * 交易明细中的优惠信息的数据结构
     */
    order_promotion_details?: TradeOrderPromotion[];
    /**
     * SKU的值，即：商品的规格。如：机身颜色:黑色;手机套餐:官方标配
     */
    sku_properties_name?: string;
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品在分销商那边的出售价格。精确到2位小数；单位：元。如果是采购单才有值，否则值为 0
     */
    fenxiao_price?: string;
    /**
     * 1 虚拟商品 0 非虚拟商品
     */
    is_virtual?: number;
    /**
     * 退款金额
     */
    refunded_fee?: string;
    /**
     * 商品货号（商家为商品设置的外部编号）
     */
    outer_item_id?: string;
    /**
     * 商品价格。精确到2位小数；单位：元
     */
    price?: string;
    /**
     * 交易明细编号。该编号并不唯一，只用于区分交易内的多条明细记录
     */
    oid?: number;
    /**
     * 交易明细中买家留言的数据结构
     */
    buyer_messages?: TradeBuyerMessage[];
    /**
     * Sku在系统中的唯一编号，可以在开发者的系统中用作 Sku 的唯一ID，但不能用于调用接口
     */
    sku_unique_code?: string;
    /**
     * 是否允许发货  1 可以发货 0 不能发货
     */
    allow_send?: number;
    /**
     * 实付金额。精确到2位小数，单位：元
     */
    payment?: string;
    /**
     * 交易明细内的优惠金额。精确到2位小数，单位：元
     */
    discount_fee?: string;
    /**
     * 商品退款状态
     */
    item_refund_state?: string;
    /**
     * 卖家昵称
     */
    seller_nick?: string;
    /**
     * 商品数字编号
     */
    num_iid?: number;
    /**
     * 商品状态
     */
    state_str?: string;
    /**
     * 1 赠品商品 0 普通商品
     */
    is_present?: number;
    /**
     * 商品主图片缩略图地址
     */
    pic_thumb_path?: string;
    /**
     * 商品类型。<br>0：普通商品；<br>10：分销商品;
     */
    item_type?: number;
    /**
     * 应付金额（商品价格乘以数量的总金额）
     */
    total_fee?: string;
    /**
     * 商品主图片地址
     */
    pic_path?: string;
  }

  /**
   * 交易明细中的优惠信息的数据结构
   */
  export interface TradeOrderPromotion {
    /**
     * 优惠的名称
     */
    promotion_name?: string;
    /**
     * 优惠的类型。可选值：<br>MEMBER_CARD_DISCOUNT（会员卡折扣）
  *             <br>SCAN_DISCOUNT（扫码折扣）
  *             <br>SCAN_DECREASE（扫码减额优惠）
  *             <br>TIMELIMITED_DISCOUNT（限时折扣）
     */
    promotion_type?: string;
    /**
     * 应用优惠的时间
     */
    apply_at?: Date;
    /**
     * 优惠的金额，单位：元，精确到小数点后两位
     */
    discount_fee?: string;
  }

  /**
   * 交易明细中买家留言的数据结构
   */
  export interface TradeBuyerMessage {
    /**
     * 留言的标题
     */
    title?: string;
    /**
     * 留言的内容
     */
    content?: string;
  }

  /**
   * 用户信息
   */
  export interface FansInfo {
    /**
     * 粉丝昵称 订单信息中存在三方(例如微信)粉丝昵称则取粉丝昵称;取不到粉丝昵称时则使用买家手机号;以上两点未满足时取买家收货人信息;无收货人信息时返回[匿名]
     */
    fans_nickname?: string;
    /**
     * 粉丝id
     */
    fans_id?: number;
    /**
     * 有赞买家ID
     */
    buyer_id?: number;
    /**
     * 0:未知、1:微信自有粉丝
     */
    fans_type?: number;
    /**
     * 微信openid
     */
    fans_weixin_openid?: string;
  }

  /**
   * 到店自提详情
   */
  export interface TradeFetch {
    /**
     * 领取人（即：预约人）的姓名
     */
    fetcher_name?: string;
    /**
     * 领取人的手机号
     */
    fetcher_mobile?: string;
    /**
     * 预约的领取时间。新版到店自提的数据格式:<br>
  * 1: 2016-04-18 17:00-17:15<br>
  * 2: 尽快到店提货
     */
    fetch_time?: string;
    /**
     * 自提点id
     */
    shop_id?: number;
    /**
     * 自提点名称
     */
    shop_name?: string;
    /**
     * 自提点联系方式
     */
    shop_mobile?: string;
    /**
     * 自提点所在省份
     */
    shop_state?: string;
    /**
     * 自提点所在城市
     */
    shop_city?: string;
    /**
     * 自提点所在地区
     */
    shop_district?: string;
    /**
     * 自提点详细地址
     */
    shop_address?: string;
  }

  /**
   * 酒店入住信息
   */
  export interface HotelInfo {
    /**
     * 入住时间
     */
    check_in_time?: string;
    /**
     * 退房时间
     */
    check_out_time?: string;
    /**
     * 入住人信息
     */
    accommodates?: string[];
  }

  /**
   * 改价信息
   */
  export interface AdjustFee {
    /**
     * 总改价金额
     */
    change?: string;
    /**
     * 订单改价
     */
    pay_change?: string;
    /**
     * 邮费改价
     */
    post_change?: string;
  }

  /**
   * 订单中使用到的卡券的数据结构
   */
  export interface UmpTradeCoupon {
    /**
     * 该组卡券的ID
     */
    coupon_id?: number;
    /**
     * 该组卡券的名称
     */
    coupon_name?: string;
    /**
     * 卡券的类型。可选值：PROMOCARD（优惠券）、PROMOCODE（优惠码）
     */
    coupon_type?: string;
    /**
     * 卡券内容。当卡券类型为优惠码时，值为优惠码字符串
     */
    coupon_content?: string;
    /**
     * 卡券的说明
     */
    coupon_description?: string;
    /**
     * 卡券使用条件说明
     */
    coupon_condition?: string;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 优惠的金额，单位：元，精确到小数点后两位
     */
    discount_fee?: string;
  }

  /**
   * 订单中使用到的优惠活动的数据结构
   */
  export interface TradePromotion {
    /**
     * 该优惠活动的ID
     */
    promotion_id?: number;
    /**
     * 该优惠活动的名称
     */
    promotion_name?: string;
    /**
     * 优惠的类型。可选值：<br> FULLREDUCE（满减满送）<br> ORDERCASHBACK（订单返现）<br> GROUPBUYING（商品团购）<br> GROUPON（多人拼团）<br> SECKILL（秒杀）<br> AUCTION（降价拍）
     */
    promotion_type?: string;
    /**
     * 优惠使用条件说明
     */
    promotion_condition?: string;
    /**
     * 使用时间
     */
    used_at?: Date;
    /**
     * 优惠的金额，单位：元，精确到小数点后两位
     */
    discount_fee?: string;
  }

  /**
   * 交易明细数据结构
   */
  export interface TradeOrder {
    /**
     * Sku的ID，sku_id 在系统里<span style="color: #ff0000;">并不是唯一的</span>，结合商品ID一起使用才是唯一的。
     */
    sku_id?: number;
    /**
     * 商品在分销商那边的实付金额。精确到2位小数；单位：元。如果是采购单才有值，否则值为 0
     */
    fenxiao_payment?: string;
    /**
     * 商品购买数量
     */
    num?: number;
    /**
     * 商家编码（商家为Sku设置的外部编号）
     */
    outer_sku_id?: string;
    /**
     * 交易明细中的优惠信息的数据结构
     */
    order_promotion_details?: TradeOrderPromotion[];
    /**
     * SKU的值，即：商品的规格。如：机身颜色:黑色;手机套餐:官方标配
     */
    sku_properties_name?: string;
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品在分销商那边的出售价格。精确到2位小数；单位：元。如果是采购单才有值，否则值为 0
     */
    fenxiao_price?: string;
    /**
     * 1 虚拟商品 0 非虚拟商品
     */
    is_virtual?: number;
    /**
     * 退款金额
     */
    refunded_fee?: string;
    /**
     * 商品货号（商家为商品设置的外部编号）
     */
    outer_item_id?: string;
    /**
     * 商品价格。精确到2位小数；单位：元
     */
    price?: string;
    /**
     * 交易明细编号。该编号并不唯一，只用于区分交易内的多条明细记录
     */
    oid?: number;
    /**
     * 交易明细中买家留言的数据结构
     */
    buyer_messages?: TradeBuyerMessage[];
    /**
     * Sku在系统中的唯一编号，可以在开发者的系统中用作 Sku 的唯一ID，但不能用于调用接口
     */
    sku_unique_code?: string;
    /**
     * 是否允许发货  1 可以发货 0 不能发货
     */
    allow_send?: number;
    /**
     * 实付金额。精确到2位小数，单位：元
     */
    payment?: string;
    /**
     * 交易明细内的优惠金额。精确到2位小数，单位：元
     */
    discount_fee?: string;
    /**
     * 商品退款状态
     */
    item_refund_state?: string;
    /**
     * 卖家昵称
     */
    seller_nick?: string;
    /**
     * 商品数字编号
     */
    num_iid?: number;
    /**
     * 商品状态
     */
    state_str?: string;
    /**
     * 1 赠品商品 0 普通商品
     */
    is_present?: number;
    /**
     * 商品主图片缩略图地址
     */
    pic_thumb_path?: string;
    /**
     * 商品类型。<br>0：普通商品；<br>10：分销商品;
     */
    item_type?: number;
    /**
     * 应付金额（商品价格乘以数量的总金额）
     */
    total_fee?: string;
    /**
     * 商品主图片地址
     */
    pic_path?: string;
  }

  /**
   * 交易明细中的优惠信息的数据结构
   */
  export interface TradeOrderPromotion {
    /**
     * 优惠的名称
     */
    promotion_name?: string;
    /**
     * 优惠的类型。可选值：<br>MEMBER_CARD_DISCOUNT（会员卡折扣）
  *             <br>SCAN_DISCOUNT（扫码折扣）
  *             <br>SCAN_DECREASE（扫码减额优惠）
  *             <br>TIMELIMITED_DISCOUNT（限时折扣）
     */
    promotion_type?: string;
    /**
     * 应用优惠的时间
     */
    apply_at?: Date;
    /**
     * 优惠的金额，单位：元，精确到小数点后两位
     */
    discount_fee?: string;
  }

  /**
   * 交易明细中买家留言的数据结构
   */
  export interface TradeBuyerMessage {
    /**
     * 留言的标题
     */
    title?: string;
    /**
     * 留言的内容
     */
    content?: string;
  }

  /**
   * 用户信息
   */
  export interface FansInfo {
    /**
     * 粉丝昵称 订单信息中存在三方(例如微信)粉丝昵称则取粉丝昵称;取不到粉丝昵称时则使用买家手机号;以上两点未满足时取买家收货人信息;无收货人信息时返回[匿名]
     */
    fans_nickname?: string;
    /**
     * 粉丝id
     */
    fans_id?: number;
    /**
     * 有赞买家ID
     */
    buyer_id?: number;
    /**
     * 0:未知、1:微信自有粉丝
     */
    fans_type?: number;
    /**
     * 微信openid
     */
    fans_weixin_openid?: string;
  }

  /**
   * 到店自提详情
   */
  export interface TradeFetch {
    /**
     * 领取人（即：预约人）的姓名
     */
    fetcher_name?: string;
    /**
     * 领取人的手机号
     */
    fetcher_mobile?: string;
    /**
     * 预约的领取时间。新版到店自提的数据格式:<br>
  * 1: 2016-04-18 17:00-17:15<br>
  * 2: 尽快到店提货
     */
    fetch_time?: string;
    /**
     * 自提点id
     */
    shop_id?: number;
    /**
     * 自提点名称
     */
    shop_name?: string;
    /**
     * 自提点联系方式
     */
    shop_mobile?: string;
    /**
     * 自提点所在省份
     */
    shop_state?: string;
    /**
     * 自提点所在城市
     */
    shop_city?: string;
    /**
     * 自提点所在地区
     */
    shop_district?: string;
    /**
     * 自提点详细地址
     */
    shop_address?: string;
  }

  /**
   * 酒店入住信息
   */
  export interface HotelInfo {
    /**
     * 入住时间
     */
    check_in_time?: string;
    /**
     * 退房时间
     */
    check_out_time?: string;
    /**
     * 入住人信息
     */
    accommodates?: string[];
  }

  /**
   * 改价信息
   */
  export interface AdjustFee {
    /**
     * 总改价金额
     */
    change?: string;
    /**
     * 订单改价
     */
    pay_change?: string;
    /**
     * 邮费改价
     */
    post_change?: string;
  }

}
