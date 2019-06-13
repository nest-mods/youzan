export namespace MultiStoreMultistoreGoodsDeliveryGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id
     */
    num_iid: number;
    /**
     * 网点id
     */
    offline_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否支持快递
     */
    express?: number;
    /**
     * 是否支持同城配送
     */
    local_delivery?: number;
    /**
     * 是否支持到店自提
     */
    self_fetch?: number;
  }

}
