// tslint:disable:max-line-length variable-name
export namespace ItemItemQuantityUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品数字编号
     */
    item_id: number;
    /**
     * sku库存数量
     */
    quantity: number;
    /**
     * sku id如果商品为无规格商品是可以不传，否则必传
     */
    sku_id?: number;
    /**
     * 库存更新方式：0为全量更新，1为增量更新(默认为0)
     */
    type?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功; 成功:true
     */
    is_success?: boolean;
  }

}
