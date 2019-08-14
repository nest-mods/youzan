// tslint:disable:max-line-length variable-name
export namespace MeiPromoterMeiPromoterCustomerBindUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要绑定的顾客手机号列表
     */
    customer_mobiles: string[];
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 被绑定的推广员id
     */
    pid: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * true
     */
    is_success?: boolean;
  }

}
