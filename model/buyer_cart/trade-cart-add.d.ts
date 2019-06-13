export namespace BuyerCartTradeCartAdd {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品活动别名
     */
    activity_alias?: string;
    /**
     * 商品营销活动id
     */
    activity_id?: number;
    /**
     * 商品营销活动类型
     */
    activity_type?: number;
    /**
     * 扩展字段
     */
    biz_trace_point_ext?: string;
    /**
     * 商品id
     */
    item_id: number;
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 商品留言
     */
    message?: string;
    /**
     * 商品数量
     */
    num: number;
    /**
     * 商品skuid
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
