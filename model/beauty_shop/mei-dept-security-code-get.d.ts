export namespace BeautyShopMeiDeptSecurityCodeGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 安全码
     */
    code?: string;
    /**
     * 规则列表
  * 1 顾客的私密档案
  * 2 顾客的手机号
  * 3 顾客的微信号
     */
    rules?: number[];
    /**
     * 安全码id
     */
    code_id?: number;
    /**
     * 状态
  * 1 开启
  * 2 关闭
     */
    status?: number;
  }

}
