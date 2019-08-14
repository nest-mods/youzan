// tslint:disable:max-line-length variable-name
export namespace MultiStoreMultistoreOfflineSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 搜索字段。搜索网点名称
     */
    keyword?: string;
    /**
     * 当前页码
     */
    page_no?: number;
    /**
     * 每页条数
     */
    page_size?: number;
    /**
     * 网点类型，self_fetch或store
     */
    type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 网点信息列表
     */
    list?: AccountShopOffline[];
    /**
     * 总数
     */
    count?: number;
  }

  /**
   * 网点信息列表
   */
  export interface AccountShopOffline {
    /**
     * 网点编号
     */
    id?: number;
    /**
     * 店铺编号（推荐使用sid）
     */
    kdt_id?: number;
    /**
     * 店铺编号
     */
    sid?: number;
    /**
     * 网点名
     */
    name?: string;
    /**
     * 是否是门店
     */
    is_store?: number;
    /**
     * 是否是自提点
     */
    is_self_fetch?: number;
    /**
     * 区号
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
     * 地址
     */
    address?: string;
    /**
     * 邮编
     */
    county_id?: string;
    /**
     * 经度
     */
    lng?: string;
    /**
     * 纬度
     */
    lat?: string;
    /**
     * 营业时间,不推荐使用
     */
    business_hours?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 创建时间
     */
    created_time?: Date;
    /**
     * 创建时间
     */
    updated_time?: Date;
  }

}
