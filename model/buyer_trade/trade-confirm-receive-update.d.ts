// tslint:disable:max-line-length variable-name
export namespace BuyerTradeTradeConfirmReceiveUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 交易编号
     */
    tid: string;
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
