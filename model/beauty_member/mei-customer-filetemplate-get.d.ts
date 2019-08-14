// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiCustomerFiletemplateGet {
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
     * 店铺Id
     */
    kdt_id?: number;
    /**
     * 私密档案模板
     */
    secret_file_template?: MeiMemberFileTemplateItem[];
    /**
     * 基础档案模板
     */
    base_file_template?: MeiMemberFileTemplateItem[];
  }

  /**
   * 私密档案模板
   */
  export interface MeiMemberFileTemplateItem {
    /**
     * 档案条目id
     */
    id?: number;
    /**
     * 档案条目名称
     */
    name?: string;
    /**
     * 档案条目类型
     * 1 文本
     * 2 日期
     * 3 图片
     */
    type?: number;
  }

  /**
   * 基础档案模板
   */
  export interface MeiMemberFileTemplateItem {
    /**
     * 档案条目id
     */
    id?: number;
    /**
     * 档案条目名称
     */
    name?: string;
    /**
     * 档案条目类型
     * 1 文本
     * 2 日期
     * 3 图片
     */
    type?: number;
  }

}
