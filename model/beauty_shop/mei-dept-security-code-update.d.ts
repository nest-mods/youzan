export namespace BeautyShopMeiDeptSecurityCodeUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 更新后的安全码
     */
    code: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 更新的安全规则。传入值代表开启，不传入代表去掉。比如要开启顾客手机号保护，则传入2；如果要全部开启，则传入 1，2，3
  * 1 顾客的私密档案
  * 2 顾客的手机号
  * 3 顾客的微信号
     */
    rules: number[];
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
