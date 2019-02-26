export namespace BeautyMemberMeiCustomerSettingUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 具体设置内容。
  * 当type=1时，key值为dept，value：
  * 0 可以查看店铺中所有会员
  * 1 可以不能查看其它分店会员
  * 2 仅可以查看本店铺创建的会员
     */
    settings?: Map<string, Object>;
    /**
     * 配置类型。
  * 1 会员查看权限配置
     */
    type?: number;
  }

  /**
   * 
   */
  export interface MapStringObject {
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
