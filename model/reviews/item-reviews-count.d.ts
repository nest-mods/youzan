export namespace ReviewsItemReviewsCount {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id
     */
    item_id: number;
    /**
     * 供货商店铺id
     */
    supplier_kdt_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 差评数量
     */
    bad_num?: number;
    /**
     * 中评数量
     */
    common_num?: number;
    /**
     * 好评数量
     */
    best_num?: number;
  }

}
