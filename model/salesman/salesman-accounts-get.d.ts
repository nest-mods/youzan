// tslint:disable:max-line-length variable-name
export namespace SalesmanSalesmanAccountsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码
     */
    page_no: number;
    /**
     * 每页记录数，最大不超过100，建议使用默认值20
     */
    page_size: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 记录总数
     */
    total_results?: number;
    /**
     * 分销员列表
     */
    accounts?: SalesmanAccountDetail[];
  }

  /**
   * 分销员列表
   */
  export interface SalesmanAccountDetail {
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 销售员昵称
     */
    nickname?: string;
    /**
     * 销售员标识码
     */
    seller?: string;
    /**
     * 累计成交笔数
     */
    order_num?: number;
    /**
     * 累计成交金额
     */
    money?: string;
    /**
     * 创建时间
     */
    created_at?: string;
  }

}
