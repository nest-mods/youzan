export namespace CouponAdvancedUmpPromotionGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 有赞手机注册账号id
     */
    buyer_id?: string;
    /**
     * 粉丝id
     */
    fans_id?: string;
    /**
     * 粉丝类型
     */
    fans_type?: string;
    /**
     * 商品别名。item_id和item_alias两者必须传一个
     */
    item_alias?: string;
    /**
     * 商品id。item_id和item_alias两者必须传一个
     */
    item_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品级优惠信息，没有优惠则为null
     */
    item_promotion?: UmpPromotionItem;
    /**
     * 订单级优惠信息，没有优惠则为空数组
     */
    order_promotions?: UmpPromotionOrder[];
    /**
     * 商品参与积分抵扣活动优惠信息，没有参与则为null
     */
    goods_points?: UmpPromotionPointsexchange;
    /**
     * 商品参与的优惠套餐活动优惠信息，没有参与则为null
     */
    package_buy?: UmpPromotionPackagebuyDetail;
  }

  /**
   * 商品级优惠信息，没有优惠则为null
   */
  export interface UmpPromotionItem {
    /**
     * 优惠活动类型编码：
  *             <br>2：团购
  *             <br>3：降价拍
  *             <br>4：多人拼团
  *             <br>6：秒杀
  *             <br>10：会员折扣
  *             <br>11：限时折扣
     */
    promotion_type_id?: number;
    /**
     * 优惠活动编码
     */
    promotion_id?: number;
    /**
     * 优惠活动别名
     */
    promotion_alias?: string;
    /**
     * 优惠活动名称
     */
    promotion_name?: string;
    /**
     * 优惠活动描述
     */
    desc?: string;
    /**
     * 优惠活动开始时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_date?: Date;
    /**
     * 优惠活动结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_date?: Date;
    /**
     * sku的id，以半角“,”号分隔（同sku_price_list的顺序保持一一对应关系）
     */
    sku_id_list?: string;
    /**
     * sku优惠后的价格，原位元，精确到分，以半角“,”号分隔（同sku_id_list的顺序保持一一对应关系）
     */
    sku_price_list?: string;
    /**
     * 优惠活动独立库存，为-1表示没有独立库存。如秒杀、降价拍，都有各自的独立库存
     */
    stock?: number;
    /**
     * 该优惠活动商品是否能够加购物车
     */
    can_join_cart?: boolean;
  }

  /**
   * 订单级优惠信息，没有优惠则为空数组
   */
  export interface UmpPromotionOrder {
    /**
     * 优惠活动类型编码：
  *             <br>101：满减送
  *             <br>102：订单返现
     */
    promotion_type_id?: number;
    /**
     * 优惠活动编码
     */
    promotion_id?: number;
    /**
     * 优惠活动名称
     */
    promotion_name?: string;
    /**
     * 优惠活动描述
     */
    desc?: string;
    /**
     * 优惠活动开始时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_date?: Date;
    /**
     * 优惠活动结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_date?: Date;
  }

  /**
   * 商品参与积分抵扣活动优惠信息，没有参与则为null
   */
  export interface UmpPromotionPointsexchange {
    /**
     * 积分兑换活动类型编码
     */
    promotion_type_id?: number;
    /**
     * 优惠活动编码
     */
    promotion_id?: number;
    /**
     * 优惠活动名称
     */
    promotion_name?: string;
    /**
     * 兑换所需积分
     */
    exchange_points?: number;
    /**
     * 兑换所需价格，格式：5.00；单位：元；精确到：分
     */
    exchange_price?: string;
    /**
     * 优惠活动开始时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_date?: Date;
    /**
     * 优惠活动结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_date?: Date;
  }

  /**
   * 商品参与的优惠套餐活动优惠信息，没有参与则为null
   */
  export interface UmpPromotionPackagebuyDetail {
    /**
     * 优惠套餐活动类型编码
     */
    promotion_type_id?: number;
    /**
     * 优惠活动编码
     */
    promotion_id?: number;
    /**
     * 优惠活动名称
     */
    promotion_name?: string;
    /**
     * 优惠活动描述
     */
    desc?: string;
    /**
     * 优惠活动开始时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    start_date?: Date;
    /**
     * 优惠活动结束时间，时间格式：yyyy-MM-dd HH:mm:ss
     */
    end_date?: Date;
    /**
     * 优惠套餐商品数据结构
     */
    goods_list?: UmpPromotionPackagebuyGoods[];
  }

  /**
   * 优惠套餐商品数据结构
   */
  export interface UmpPromotionPackagebuyGoods {
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品价格，格式：5.00；单位：元；精确到：分
     */
    price?: string;
    /**
     * 商品主图片地址
     */
    pic_url?: string;
    /**
     * 商品主图片缩略图地址
     */
    pic_thumb_url?: string;
  }

}
