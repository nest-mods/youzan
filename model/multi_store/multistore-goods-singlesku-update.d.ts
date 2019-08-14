// tslint:disable:max-line-length variable-name
export namespace MultiStoreMultistoreGoodsSingleskuUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品编码
     */
    code?: string;
    /**
     * 商品id
     */
    item_id: number;
    /**
     * 网点id
     */
    offline_id: number;
    /**
     * 商品价格 单位：元
     */
    price?: string;
    /**
     * 商品无sku的时候，这个值不填
     * 商品有sku的时候，需要填写sku_id
     */
    sku_id?: number;
    /**
     * 库存
     */
    stock_num?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否处理成功
     */
    is_success?: boolean;
  }

}
