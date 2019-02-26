export namespace CircleLogisticsOnlineDelay {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 延期数
     */
    delay_issue?: number;
    /**
     * 待配送期次
     */
    issue?: number;
    /**
     * 交易编号
     */
    tid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作是否成功
     */
    is_success?: boolean;
  }

}
