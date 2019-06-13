export namespace VirtualticketTradeVirtualticketVerifycode {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 电子卡券二维码的码号(扫用户核销的二维码)
     */
    code: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 结果码
     */
    code?: number;
    /**
     * 是否成功
     */
    successful?: boolean;
    /**
     * 结果信息
     */
    msg?: string;
  }

}
