export namespace SelffetchcodeTradeSelffetchcodeApply {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 消费者端的到店自提订单提货码
     */
    code: string;
    /**
     * 核销人（开发者根据自己业务规则传，一般为网点号或手机号）
     */
    extra_info?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
