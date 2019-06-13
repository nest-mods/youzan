export namespace BuyerCartTradeCartUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id
     */
    item_id: number;
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 会话key,如果没有该值填
     */
    nobody?: string;
    /**
     * 数量
     */
    num: number;
    /**
     * 商品sku id
     */
    sku_id: number;
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
  }

}
