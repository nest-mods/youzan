// tslint:disable:max-line-length variable-name
export namespace RetailTradeRetailOpenReturnorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source: string;
    /**
     * 退货单号
     */
    return_order_no: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 退货单号
     */
    return_order_no?: string;
    /**
     * 销售渠道:
     * ONLINE=网店
     * OFFLINE=门店
     */
    sale_way?: string;
    /**
     * 退货仓库编码
     */
    warehouse_code?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 退货单状态:
     * WAIT_RECEIVED=卖家待收货
     * RECEIVED=卖家已收货
     * SELLER_REFUSE=卖家未收到货，拒绝退款
     * RETURN_STOCK_SUCCESS=已入库
     */
    status?: string;
    /**
     * 退款申请时间
     */
    create_time?: string;
    /**
     * 退款金额
     */
    refund_amount?: string;
    /**
     * 退货原因
     */
    reason?: string;
    /**
     * 退货单版本
     */
    version?: number;
    /**
     * 商品信息
     */
    return_items?: OpenOrderItemDTO[];
    /**
     * 物流信息
     */
    logistics_info?: OpenLogisticsDTO;
    /**
     * 退款模式： TRACK_BACK_MODE 原路退款，CASH_MODE 现金退款，MARK_MODE  标记退款
     */
    refund_mode?: string;
    /**
     * 支付方式(无法识别的情况下返回0):
     * 0:默认值 1:微信自有支付 2:支付宝 3:银联银行卡 4:财付通银行卡 5:银行卡 6:找人代付 7:联动U付银行卡 8:货到付款 9:微信安全支付-代销 10:百度支付银行卡 11:合并付货款 12:领取赠品 13:优惠兑换 14:自动付货款 15:爱学贷 16:微信红包支付 17:返利 18:ump红包 19:payza支付 20:易宝支付银行卡 21:paypal 22:qq支付 23:有赞E卡-代销 24:储值余额付款 25:礼品卡支付 26:分销商余额支付 27:信用卡银联支付 28:储蓄卡银联支付 29:代收账户 30:储值账户 31:保证金账户 32:收款码 33:微信 34:刷卡 35:二维码台卡 36:储值卡 37:有赞E卡 38:标记收款-自有微信支付 39:标记收款-自有支付宝 40:标记收款-自有POS刷卡 41:通联刷卡支付 42:记账账户 43:现金支付 44:组合支付 114:自定义标记付款(具体名称见pay_way_desc);
     */
    pay_way?: string;
    /**
     * 支付方式的描述
     */
    pay_way_desc?: string;
  }

  /**
   * 商品信息
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
     * 单位(如果是称重商品,表示称重商品的单位)
     */
    unit?: string;
    /**
     * 出库数量（如果是称重商品，该字段无需关心）
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
     * 名称有歧义，准备废弃（单个商品类目实付金额，已减去均摊的订单优惠）
     */
    real_sales_price?: string;
    /**
     * 商品类型  
     * 0:普通类型商品; 1:拍卖商品; 5:餐饮商品; 10:分销商品; 20:会员卡商品; 21:礼品卡商品; 23:有赞会议商品; 24:周期购; 30:收银台商品; 31:知识付费商品; 35:酒店商品; 40:普通服务类商品; 182:普通虚拟商品; 183:电子卡券商品; 201:外部会员卡商品; 202:外部直接收款商品; 203:外部普通商品; 205:mock不存在商品; 206:小程序二维码
     */
    item_type?: number;
    /**
     * 单个商品类目的实付金额, 已减去均摊的订单优惠，值和realSalesPrice一致
     */
    real_sales_amount?: string;
    /**
     * 计价方式 为空或者为0: 计件  10: 称重
     */
    pricing_strategy?: number;
    /**
     * 称重商品重量(pricingStrategy=10时有效)
     */
    weight?: string;
  }

  /**
   * 物流信息
   */
  export interface OpenLogisticsDTO {
    /**
     * 物流单号
     */
    logistics_no?: string;
    /**
     * 物流公司编号
     */
    company_code?: string;
    /**
     * 收件人
     */
    receiver?: string;
    /**
     * 收件人电话
     */
    mobile?: string;
    /**
     * 区号
     */
    area_code?: string;
    /**
     * 座机
     */
    telephone?: string;
    /**
     * 分机号
     */
    extension_number?: string;
    /**
     * 收件人地址
     */
    address?: string;
    /**
     * 邮编
     */
    postcode?: string;
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
    region?: string;
    /**
     * 详细地址
     */
    create_time?: string;
    /**
     * 移动电话
     */
    update_time?: string;
  }

}
