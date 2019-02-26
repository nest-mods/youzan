export namespace RetailGoodsRetailProductsOfflineDisplay {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否全量上下架状态 默认false
  *    * false 非全量 
  *    * true   全量
     */
    all_batch_operate?: boolean;
    /**
     * 取消选择店铺id（全量上下架 ，取消选择的店铺）
     */
    cancel_kdt_ids?: number[];
    /**
     * 更新商品状态上架或下架（1下架，0上架）
     */
    display?: number;
    /**
     * 批量更新门店商品列表
     */
    item_ids?: number[];
    /**
     * 请求来源
     */
    source?: string;
    /**
     * 待处理分店kdtId列表（未全量上下架生效）
     */
    sub_kdt_ids?: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 批量上下架成功商品个数
     */
    isdisplay_num?: number;
  }

}
