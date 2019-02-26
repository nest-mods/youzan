export namespace CircleLogisticsOnlineCanceldelay {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 待取消顺延期次
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
