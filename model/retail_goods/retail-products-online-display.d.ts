export namespace RetailGoodsRetailProductsOnlineDisplay {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 上下架状态（0为下架， 1为上架）
     */
    display: number;
    /**
     * 批量更新的网店商品id列表
     */
    item_ids: number[];
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 上下架成功商品数量
     */
    display_result?: number;
  }

}
