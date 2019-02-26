export namespace BuyerAddressUserAddressGet {
  /**
   * 请求参数
   */
  export interface Request {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 地址
     */
    userAddressModels?: UserAddressModel;
  }

  /**
   * 地址
   */
  export interface UserAddressModel {
    /**
     * 国家
     */
    country?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 收货人
     */
    user_name?: string;
    /**
     * 区域码
     */
    area_code?: string;
    /**
     * 区
     */
    county?: string;
    /**
     * 经度
     */
    lon?: string;
    /**
     * 维度
     */
    lat?: string;
    /**
     * 社区
     */
    community?: string;
    /**
     * 是否默认地址
     */
    is_default?: number;
    /**
     * 地址详情
     */
    address_detail?: string;
    /**
     * 省
     */
    province?: string;
    /**
     * 帐号id
     */
    userId?: number;
    /**
     * 联系人电话
     */
    tel?: string;
    /**
     * 邮政编码
     */
    postal_code?: string;
  }

}
