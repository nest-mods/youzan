// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiCustomerFiletemplateUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 基础档案信息，不传入的条目将会被删除
     */
    base_file_template: MeiMemberFileTemplateItem[];
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 私密档案信息，不传入的条目将会被删除
     */
    secret_file_template: MeiMemberFileTemplateItem[];
  }

  /**
   *
   */
  export interface MeiMemberFileTemplateItem {
    /**
     * 条目id，更新时必须填写，新建条目不用填写
     */
    id?: number;
    /**
     * 条目名称
     */
    name?: string;
    /**
     * 条目类型。1 文本类型；2 日期类型；3 图片类型
     */
    type?: number;
  }

  /**
   *
   */
  export interface MeiMemberFileTemplateItem {
    /**
     * 条目id，更新时必须填写，新建条目不用填写
     */
    id?: number;
    /**
     * 条目名称
     */
    name?: string;
    /**
     * 条目类型。1 文本类型；2 日期类型；3 图片类型
     */
    type?: number;
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
