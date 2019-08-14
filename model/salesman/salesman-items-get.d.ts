// tslint:disable:max-line-length variable-name
export namespace SalesmanSalesmanItemsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id列表，逗号分隔
     */
    item_ids: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品设置信息
     */
    items?: SalesmanTradeGoods[];
  }

  /**
   * 商品设置信息
   */
  export interface SalesmanTradeGoods {
    /**
     * 商品ID
     */
    num_iid?: string;
    /**
     * 商品是否参与推广0:不参与1参与
     */
    is_join?: number;
    /**
     * 商品提成比例(%)
     */
    i_rate?: string;
    /**
     * 商品邀请奖励提成比例(%)
     */
    ii_rate?: string;
  }

}
