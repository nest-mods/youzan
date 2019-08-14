// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductSpusBatchUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 待更新的分类
     */
    category_id?: number;
    /**
     * 请求来源
     * 如：OPEN—XXX
     */
    retail_source?: string;
    /**
     * 商品id列表
     */
    spu_ids?: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 批量操作结果
     */
    result?: Map;
  }

  /**
   * 批量操作结果
   */
  export interface Map {
    /**
     * 待更新商品id
     */
    skuId?: number;
    /**
     * 是否更新成功
     */
    result?: boolean;
  }

}
