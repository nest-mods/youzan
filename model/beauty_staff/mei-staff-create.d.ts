export namespace BeautyStaffMeiStaffCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 账号
     */
    account: string;
    /**
     * 部门ID 1代表总店
     */
    dept_id: number;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 手机
     */
    mobile: string;
    /**
     * 职位ID 2 高级管理员 3 店长 4 普通职员 5 手艺人 7 总部财务 8 驻店财务 9 营销顾问  总店的员工只能选择2 分店员工除了2其他都可以选
     */
    position_id: number;
    /**
     * 真实姓名
     */
    real_name: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 角色ID列表
     */
    roles: MeiBeautyStoreRoleDTO[];
  }

  /**
   * 
   */
  export interface MeiBeautyStoreRoleDTO {
    /**
     * 角色ID
     */
    role_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 员工姓名
     */
    real_name?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 分店id
     */
    dept_id?: number;
    /**
     * 员工账号id
     */
    yz_uid?: number;
    /**
     * 员工账号
     */
    account?: string;
    /**
     * 联系电话
     */
    mobile?: string;
    /**
     * 角色列表
     */
    roles?: MeiRole[];
    /**
     * 职位ID
     */
    position_id?: number;
  }

  /**
   * 角色列表
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
