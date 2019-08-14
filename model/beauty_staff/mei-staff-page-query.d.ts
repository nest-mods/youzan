// tslint:disable:max-line-length variable-name
export namespace BeautyStaffMeiStaffPageQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 部门ID
     */
    dept_id?: number;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 页数，默认查询第一页
     */
    page?: number;
    /**
     * 每页数据量，默认每页20条
     */
    page_size?: number;
    /**
     * 员工状态，0:正常 1:已删除，默认是0
     */
    status?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: MeiPaginator;
    /**
     * 员工信息
     */
    items?: MeiStaffInfo;
  }

  /**
   * 分页信息
   */
  export interface MeiPaginator {
    /**
     * 总记录数
     */
    total_count?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页显示的记录数
     */
    page_size?: number;
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
