export namespace BeautyMemberMeiCustomerFileinfoGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 要获取档案的会员id
     */
    yz_uid: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 会员档案值
     */
    file_infos?: MeiCustomerFileInfo[];
  }

  /**
   * 会员档案值
   */
  export interface MeiCustomerFileInfo {
    /**
     * 档案名称
     */
    name?: string;
    /**
     * 档案id
     */
    id?: number;
    /**
     * 档案类型。
  * 1 文本 
  * 2 日期
  * 3 图片
     */
    type?: number;
    /**
     * 档案值，单值档案有此条目
     */
    value?: string;
    /**
     * 会员档案条目
     */
    value_list?: MeiCustomerFileInfoItem[];
  }

  /**
   * 会员档案条目
   */
  export interface MeiCustomerFileInfoItem {
    /**
     * 条目的key值
     */
    key?: string;
    /**
     * 条目的具体值
     */
    value?: string;
  }

}
