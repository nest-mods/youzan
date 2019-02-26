export namespace VirtualticketTradeVirtualticketVerifyticket {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 电子卡券码券号（每个电子卡券下的12位的码券号）
     */
    ticket_code?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 核销是否成功，true 为成功
     */
    is_success?: boolean;
  }

}
