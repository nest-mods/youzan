// tslint:disable:max-line-length variable-name
export namespace MeiPromoterMeiPromoterCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 要创建的推广员列表
     */
    promoters: MeiPromoter[];
  }

  /**
   *
   */
  export interface MeiPromoter {
    /**
     * 推广员手机号
     */
    mobile?: string;
    /**
     * 推广员名字
     */
    name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 创建结果
     */
    is_success?: boolean;
  }

}
