export namespace BuyerTradeTradeLaterReceiveUpdate {
  /**
   * 请求参数
   */
  export interface Request {
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
