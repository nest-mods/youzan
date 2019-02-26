export namespace MeiPromoterMeiPromoterCustomerBind {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要绑定的顾客手机号列表
     */
    customer_mobiles?: string[];
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 被绑定的推广员id
     */
    pid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 绑定结果
     */
    is_success?: boolean;
  }

}
