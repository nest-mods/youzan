export namespace CouponAdvancedUmpMemberpriceQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id数组，一次最多50个
     */
    item_ids: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 自定义会员价
     */
    response?: ItemMemberPrice[];
  }

  /**
   * 自定义会员价
   */
  export interface ItemMemberPrice {
    /**
     * 商品id
     */
    itemId?: number;
    /**
     * sku自定义会员价信息
     */
    skus?: SkuMemberPrice[];
  }

  /**
   * sku自定义会员价信息
   */
  export interface SkuMemberPrice {
    /**
     * skuId
     */
    skuId?: number;
    /**
     * 原价，单位分
     */
    price?: number;
    /**
     * 自定义会员价信息
     */
    cards?: MemberPrice[];
  }

  /**
   * 自定义会员价信息
   */
  export interface MemberPrice {
    /**
     * 会员卡id
     */
    cardId?: number;
    /**
     * 优惠类型 1：减钱 2：指定价格
     */
    discountType?: number;
    /**
     * 优惠值
     */
    discountValue?: number;
  }

}
