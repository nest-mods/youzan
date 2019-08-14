// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiCustomerSecretfileinfoUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 安全码，如果开启了则需要填写，如果没有开启则不用填写
     */
    code?: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 更新的档案信息
     */
    secret_file_infos: MeiMemberFileInfo[];
    /**
     * 会员的id
     */
    yz_uid: number;
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
    value_list?: MeiMemberFileInfoItem[];
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
