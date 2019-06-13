export namespace BeautyItemMeiGoodsProductSkuItemList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 规格ID
     */
    parent_dict_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 规格项列表
     */
    sku_items?: MeiGoodsSkuItem[];
  }

  /**
   * 规格项列表
   */
  export interface MeiGoodsSkuItem {
    /**
     * 订单项ID
     */
    dict_id?: number;
    /**
     * 订单项名称
     */
    text?: string;
  }

}
