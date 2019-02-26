export namespace BeautyOrderMeiOrderCancel {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 订单编号
     */
    order_no?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    response?: boolean;
  }

}
