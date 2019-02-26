export namespace SalesmanSalesmanItemShareGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 粉丝id （mobile或fans_id选其一，另者置为0，都填以mobile为准）
     */
    fans_id?: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1）
     */
    fans_type?: number;
    /**
     * 商品别名（item_id或item_alias选其一，另者置为0，都填以item_alias为准）
     */
    item_alias?: string;
    /**
     * 商品id（item_id或item_alias选其一，另者置为0，都填以item_alias为准）
     */
    item_id?: number;
    /**
     * 手机号（mobile或fans_id选其一，另者置为0，都填以mobile为准）
     */
    mobile?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品推广地址
     */
    link?: string;
  }

}
