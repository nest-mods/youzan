export namespace BeautyMemberMeiCustomerFileinfoUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 基础档案信息
     */
    file_infos?: MeiMemberFileInfo;
    /**
     * 没有token
     */
    m_token?: string;
    /**
     * 会员id
     */
    yz_uid?: number;
  }

  /**
   * 
   */
  export interface MeiMemberFileInfo {
    /**
     * 档案项的id
     */
    id?: number;
    /**
     * 档案项的值，单值档案使用此字段。例如日期档案、文本档案
     */
    value?: string;
    /**
     * 
     */
    value_list?: MeiMemberFileInfoItem;
  }

  /**
   * 
   */
  export interface MeiMemberFileInfoItem {
    /**
     * 档案项
     */
    key?: string;
    /**
     * 档案名
     */
    name?: string;
    /**
     * 档案值
     */
    value?: string;
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
