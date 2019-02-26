export namespace BeautyMemberMeiCustomerSettingGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 要查询的配置类型，目前只有 1
     */
    type?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 配置类型。
  * 1 会员可见范围
     */
    type?: number;
    /**
     * 具体设置内容。
  * 当type=1时，key值为dept，value：
  * 0 可以查看店铺中所有会员
  * 1 可以不能查看其它分店会员
  * 2 仅可以查看本店铺创建的会员
     */
    settings?: Map;
  }

  /**
   * 具体设置内容。
  * 当type=1时，key值为dept，value：
  * 0 可以查看店铺中所有会员
  * 1 可以不能查看其它分店会员
  * 2 仅可以查看本店铺创建的会员
   */
  export interface Map {
    /**
     * 待更新商品id
     */
    skuId?: number;
    /**
     * 是否更新成功
     */
    result?: boolean;
  }

}
