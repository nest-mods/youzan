export namespace CouponAdvancedUmpMemberpriceUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 会员折扣定义
     */
    discounts?: GoodsCustomerDiscountDefinitionDTO;
    /**
     * 商品 ID
     */
    item_id?: number;
  }

  /**
   * 
   */
  export interface GoodsCustomerDiscountDefinitionDTO {
    /**
     * 会员标识别名，当 bind_type 为1时，表示会员卡的别名
     */
    bind_alias?: string;
    /**
     * 绑定的会员标识的别名，目前仅支持 1-会员卡
     */
    bind_type?: number;
    /**
     * 优惠类型 1：减钱 2：指定价格
     */
    discount_type?: number;
    /**
     * 优惠值，由discount_type决定
     */
    discount_value?: number;
    /**
     * 
     */
    sku_id?: number;
  }

  /**
   * 
   */
  export interface Long {
  }

  /**
   * 
   */
  export interface Long {
  }

  export type Response = void;

}
