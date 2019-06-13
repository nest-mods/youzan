export namespace BeautyStaffMeiStaffRecover {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 部门ID
     */
    dept_id: number;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 员工ID
     */
    yz_uid: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作成功
     */
    is_success?: boolean;
  }

}
