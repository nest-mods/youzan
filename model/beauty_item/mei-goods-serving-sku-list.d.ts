export namespace BeautyItemMeiGoodsServingSkuList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * sku列表
     */
    skus?: MeiGoodsSkuInfo[];
  }

  /**
   * sku列表
   */
  export interface MeiGoodsSkuInfo {
    /**
     * 规格ID
     */
    dict_id?: number;
    /**
     * 规格名称
     */
    text?: string;
  }

}
