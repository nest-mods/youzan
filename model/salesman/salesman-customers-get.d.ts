export namespace SalesmanSalesmanCustomersGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 粉丝id（mobile 或 fans_id选其一，另者置为0，都填以mobile为准）
     */
    fans_id: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1）
     */
    fans_type: number;
    /**
     * 手机号（mobile 或 fans_id选其一，另者置为0，都填以mobile为准）
     */
    mobile: string;
    /**
     * 页码
     */
    page_no: number;
    /**
     * 每页记录数
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
     * 客户列表
     */
    customers?: SalesmanCustomerDetail[];
  }

  /**
   * 客户列表
   */
  export interface SalesmanCustomerDetail {
    /**
     * 客户昵称
     */
    nickname?: string;
    /**
     * 客户头像
     */
    avatar?: string;
    /**
     * 粉丝类型
     */
    fans_type?: number;
    /**
     * 粉丝Id
     */
    fans_id?: number;
  }

}
