export namespace BeautyShopMeiDeptBind {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺ID
     */
    dept_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 访问分店用的m_token信息
     */
    m_token?: string;
  }

}
