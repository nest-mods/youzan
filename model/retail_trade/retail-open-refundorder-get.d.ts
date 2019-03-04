export namespace RetailTradeRetailOpenRefundorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款单号
     */
    refund_no?: string;
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 退款单号
     */
    refund_no?: string;
    /**
     * 销售库存：
  * ONLINE=网店
  * OFFLINE=门店
     */
    sale_way?: string;
    /**
     * 退款申请时间
     */
    create_time?: string;
    /**
     * 退款类型：
  * BUYER_APPLY_REFUND=买家申请退款
  * SELLER_REFUND=商家主动退款
  * SYSTEM_REFUND=一键退款，特殊类型退款
     */
    refund_type?: string;
    /**
     * 退货诉求：
  * REFUND_ONLY=仅退款
  * REFUND_RETURN_GOODS=退货退款
     */
    refund_demand?: string;
    /**
     * 退款金额
     */
    refund_fee?: string;
    /**
     * 退款状态：
  * REFUND_WAIT_SELLER_AGREE=买家已经申请退款，等待卖家同意
  * REFUND_SELLER_REFUSE_BUYER=卖家拒绝退款
  * REFUND_WAIT_BUYER_RETURN_GOODS=卖家已经同意退货，等待买家退货
  * REFUND_WAIT_SELLER_CONFIRM_GOODS=买家已经退货，等待卖家确认收货
  * REFUND_SELLER_REFUSE_RETURN_GOODS=卖家未收到货,拒绝退款
  * REFUND_CLOSED=退款关闭
  * REFUND_SUCCESS=退款成功
     */
    refund_status?: string;
    /**
     * 退款明细
     */
    refund_items?: OpenOrderItemDTO[];
    /**
     * 退款单版本号
     */
    version?: number;
    /**
     * 退款原因
     */
    reason_desc?: string;
    /**
     * 退款模式： TRACK_BACK_MODE 原路退款，CASH_MODE 现金退款，MARK_MODE  标记退款
     */
    refund_mode?: string;
    /**
     * 退款主体
     */
    refund_principal?: string;
    /**
     * 支付方式:
  * 0:默认值 1:微信自有支付 2:支付宝 3:银联银行卡 4:财付通银行卡 5:银行卡 6:找人代付 7:联动U付银行卡 8:货到付款 9:微信安全支付-代销 10:百度支付银行卡 11:合并付货款 12:领取赠品 13:优惠兑换 14:自动付货款 15:爱学贷 16:微信红包支付 17:返利 18:ump红包 19:payza支付 20:易宝支付银行卡 21:paypal 22:qq支付 23:有赞E卡-代销 24:储值余额付款 25:礼品卡支付 26:分销商余额支付 27:信用卡银联支付 28:储蓄卡银联支付 29:代收账户 30:储值账户 31:保证金账户 32:收款码 33:微信 34:刷卡 35:二维码台卡 36:储值卡 37:有赞E卡 38:标记收款-自有微信支付 39:标记收款-自有支付宝 40:标记收款-自有POS刷卡 41:通联刷卡支付 42:记账账户 43:现金支付 44:组合支付 114:自定义标记付款(具体名称见pay_way_desc);
     */
    pay_way?: string;
    /**
     * 支付方式的描述
     */
    pay_way_desc?: string;
  }

  /**
   * 退款明细
   */
  export interface OpenOrderItemDTO {
    /**
     * 发货单号
     */
    delivery_order_no?: string;
    /**
     * 商品明细ID
     */
    order_item_no?: string;
    /**
     * 商品编码
     */
    sku_code?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 商品条码
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 出库数量
     */
    quantity?: string;
    /**
     * 销项税率
     */
    output_tax_rate?: string;
    /**
     * 含税销售单价（定价，直接销售的价格）
     */
    sales_price?: string;
    /**
     * 单个商品实付金额，已减去均摊的订单优惠
     */
    real_sales_price?: string;
    /**
     * 商品类型  
  * 0:普通类型商品; 1:拍卖商品; 5:餐饮商品; 10:分销商品; 20:会员卡商品; 21:礼品卡商品; 23:有赞会议商品; 24:周期购; 30:收银台商品; 31:知识付费商品; 35:酒店商品; 40:普通服务类商品; 182:普通虚拟商品; 183:电子卡券商品; 201:外部会员卡商品; 202:外部直接收款商品; 203:外部普通商品; 205:mock不存在商品; 206:小程序二维码
     */
    item_type?: number;
  }

}
