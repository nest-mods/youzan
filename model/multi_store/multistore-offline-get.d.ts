export namespace MultiStoreMultistoreOfflineGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 网点id
     */
    id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 网点id
     */
    id?: number;
    /**
     * 网点名称
     */
    name?: string;
    /**
     * 是否是门店。只有是门店才能设置同城配送
     */
    is_store?: number;
    /**
     * 是否是自提点。只有是自提点才能设置到店自提
     */
    is_self_fetch?: number;
    /**
     * 是否支持同城配送
     */
    support_local_delivery?: number;
    /**
     * 同城配送范围，单位米。
     */
    local_delivery_scope?: number;
    /**
     * 同城配送起送金额，单位分
     */
    local_delivery_start_amount?: number;
    /**
     * 同城配送费，单位分
     */
    local_delivery_fee?: number;
    /**
     * 电话区号
     */
    phone1?: string;
    /**
     * 电话号码
     */
    phone2?: string;
    /**
     * 省
     */
    province?: string;
    /**
     * 市
     */
    city?: string;
    /**
     * 区
     */
    area?: string;
    /**
     * 详细地址
     */
    address?: string;
    /**
     * 省市区编码
     */
    county_id?: number;
    /**
     * 经度
     */
    lng?: string;
    /**
     * 纬度
     */
    lat?: string;
    /**
     * 营业时间设置数组
     */
    business_hours_advanced?: string;
    /**
     * 图片链接数组
     */
    image?: string[];
    /**
     * 网点描述
     */
    description?: string;
    /**
     * 网点标签集合
     */
    tag_ids?: OfflineTagIdAndNameDTO;
  }

  /**
   * 网点标签集合
   */
  export interface OfflineTagIdAndNameDTO {
    /**
     * 标签id
     */
    id?: number;
    /**
     * 标签名称
     */
    name?: string;
  }

}
