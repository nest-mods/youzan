export namespace BeautyShopMeiDeptSecurityCodeSwitch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 开启关闭状态
  * 1 开启
  * 2 关闭
     */
    status?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 更新结果
     */
    is_success?: boolean;
  }

}
