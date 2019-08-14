// tslint:disable:max-line-length variable-name
export namespace BuyerCartTradeCartCount {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * kdt_id
     */
    kdt_id: number;
    /**
     * nobody
     */
    nobody?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 查询是否成功，true为成功，false为失败
     */
    is_success?: boolean;
    /**
     * 购物车中商品个数
     */
    data?: number;
  }

}
