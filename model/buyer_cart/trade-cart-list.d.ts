export namespace BuyerCartTradeCartList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 会话key,如果没有该值填
     */
    nobody?: string;
    /**
     * 门店id,多门店时才会涉及到，不是多门店的情况填0
     */
    store_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作是否成功，true为成功，false为失败
     */
    is_success?: boolean;
    /**
     * 购物车中商品列表信息
     */
    data?: CartFormat[];
  }

  /**
   * 购物车中商品列表信息
   */
  export interface CartFormat {
    /**
     * 门店id
     */
    kdt_id?: number;
    /**
     * 购物车显示商品信息列表中的goodsList
     */
    unavailable_goods_list?: CartGoodsListFormat[];
    /**
     * 购物车显示商品信息列表中的goodsList
     */
    goods_list?: CartGoodsListFormat[];
  }

  /**
   * 购物车显示商品信息列表中的goodsList
   */
  export interface CartGoodsListFormat {
    /**
     * 附件url
     */
    attachment_url?: string;
    /**
     * 商品sku id
     */
    sku_id?: number;
    /**
     * 门店id
     */
    store_id?: number;
    /**
     * 折扣名称
     */
    discount_price?: number;
    /**
     * 商品购买数量
     */
    num?: number;
    /**
     * 买家购买附言
     */
    message?: string;
    /**
     * 商品支付价格
     */
    pay_price?: number;
    /**
     * 商品类型
     */
    goods_type?: number;
    /**
     * 商品sku信息
     */
    sku?: string;
    /**
     * 库存数量
     */
    stock_num?: number;
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 商品别名
     */
    alias?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品优惠信息
     */
    ext?: string;
    /**
     * 错误信息
     */
    error_msg?: string;
    /**
     * 商品来源
     */
    platform?: string;
    /**
     * 服务类型
     */
    service_type?: number;
    /**
     * 商品在购物车中的更新时间
     */
    updated?: number;
    /**
     * 商品优惠活动名称
     */
    activity_alias?: string;
    /**
     * 会话key
     */
    nobody?: string;
    /**
     * 支持的快递类型
     */
    support_express_type?: string;
    /**
     * 商品折扣
     */
    discount?: number;
    /**
     * 
     */
    thumb_url?: string;
    /**
     * 
     */
    sub_type?: number;
    /**
     * 限购数量
     */
    limit_num?: number;
    /**
     * 商品名
     */
    title?: string;
    /**
     * 
     */
    channel_id?: number;
    /**
     * 
     */
    direct_seller?: number;
    /**
     * 商品放入购物车时间
     */
    create_time?: number;
  }

  /**
   * 购物车显示商品信息列表中的goodsList
   */
  export interface CartGoodsListFormat {
    /**
     * 附件url
     */
    attachment_url?: string;
    /**
     * 商品sku id
     */
    sku_id?: number;
    /**
     * 门店id
     */
    store_id?: number;
    /**
     * 折扣名称
     */
    discount_price?: number;
    /**
     * 商品购买数量
     */
    num?: number;
    /**
     * 买家购买附言
     */
    message?: string;
    /**
     * 商品支付价格
     */
    pay_price?: number;
    /**
     * 商品类型
     */
    goods_type?: number;
    /**
     * 商品sku信息
     */
    sku?: string;
    /**
     * 库存数量
     */
    stock_num?: number;
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 商品别名
     */
    alias?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品优惠信息
     */
    ext?: string;
    /**
     * 错误信息
     */
    error_msg?: string;
    /**
     * 商品来源
     */
    platform?: string;
    /**
     * 服务类型
     */
    service_type?: number;
    /**
     * 商品在购物车中的更新时间
     */
    updated?: number;
    /**
     * 商品优惠活动名称
     */
    activity_alias?: string;
    /**
     * 会话key
     */
    nobody?: string;
    /**
     * 支持的快递类型
     */
    support_express_type?: string;
    /**
     * 商品折扣
     */
    discount?: number;
    /**
     * 
     */
    thumb_url?: string;
    /**
     * 
     */
    sub_type?: number;
    /**
     * 限购数量
     */
    limit_num?: number;
    /**
     * 商品名
     */
    title?: string;
    /**
     * 
     */
    channel_id?: number;
    /**
     * 
     */
    direct_seller?: number;
    /**
     * 商品放入购物车时间
     */
    create_time?: number;
  }

}
