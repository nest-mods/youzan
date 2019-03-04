export namespace BeautyStaffMeiStaffDetailQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 部门ID
     */
    dept_id?: number;
    /**
     * 美业Token
     */
    m_token?: string;
    /**
     * 员工ID
     */
    yz_uid?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 员工信息
     */
    staffInfo?: MeiStaffInfo;
  }

  /**
   * 员工信息
   */
  export interface MeiStaffInfo {
    /**
     * 角色信息
     */
    roles?: MeiRole[];
    /**
     * 联系电话
     */
    mobile?: string;
    /**
     * 分店名称
     */
    dept_name?: string;
    /**
     * 备注信息
     */
    remark?: string;
    /**
     * 员工姓名
     */
    real_name?: string;
    /**
     * 账号id
     */
    yz_uid?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 分店id
     */
    dept_id?: number;
    /**
     * 创建时间，是从1970年开始的毫秒值
     */
    created_at?: number;
    /**
     * 更新时间，是从1970年开始的毫秒值
     */
    updated_at?: number;
    /**
     * 员工账号
     */
    account?: string;
    /**
     * 员工状态
     */
    status?: number;
  }

  /**
   * 角色信息
   */
  export interface MeiRole {
    /**
     * 角色id
     */
    role_id?: number;
    /**
     * 角色名称
     */
    role_name?: string;
  }

}
