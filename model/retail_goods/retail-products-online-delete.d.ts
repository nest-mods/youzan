export namespace RetailGoodsRetailProductsOnlineDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 批量删除网店商品列表
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
     * 删除网店商品是否成功
     */
    delete_result?: boolean;
  }

}
