// tslint:disable:max-line-length variable-name
export namespace MultiStoreMultistoreOfflineCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 详细地址
     */
    address: string;
    /**
     * 区
     */
    area: string;
    /**
     * 营业时间,按天设置,一天只支持设置一个连续的时间段。
     */
    business_hours_advanced: string;
    /**
     * 1 营业、2 休息
     */
    bussiness_hours_type?: number;
    /**
     * 市
     */
    city: string;
    /**
     * 行政区划代码。参考高德城市编码表 http://lbs.amap.com/api/webservice/download
     */
    county_id: string;
    /**
     * 描述
     */
    description: string;
    /**
     * 图片地址，逗号分隔。注：图片需要先上传到有赞平台
     */
    image: string;
    /**
     * 是否需要买家选择自提时间。1表示需要，0表示不需要
     */
    is_optional_self_fetch_time?: number;
    /**
     * 是否是自提点。1表示是，0表示否
     */
    is_self_fetch: number;
    /**
     * 是否是门店。1表示是，0表示否
     */
    is_store: number;
    /**
     * 纬度（百度坐标系）
     */
    lat: string;
    /**
     * 经度（百度坐标系）
     */
    lng: string;
    /**
     * 固定配送费
     */
    local_delivery_fee?: number;
    /**
     * 同城配送范围多边形,只有当local_delivery_scope_type=2时生效。格式如：点1经度,点1纬度|点2经度,点2纬度|点3经度，点3纬度|点4经度，点4纬度...（百度坐标系）
     */
    local_delivery_polygon?: string;
    /**
     * 配送范围，单位米。只有当local_delivery_scope_type=1时生效。
     */
    local_delivery_scope?: string;
    /**
     * 同城配送范围划分方式：1半径 2多边形
     */
    local_delivery_scope_type?: number;
    /**
     * 起送金额。单位分
     */
    local_delivery_start_amount?: string;
    /**
     * 网点名称
     */
    name: string;
    /**
     * 线下自提时间。格式同business_hours_advanced
     */
    offline_business_hours?: string;
    /**
     * 0 否， 1 只允许营业时间下单
     */
    only_bussiness_hours_open?: number;
    /**
     * 区号
     */
    phone1: string;
    /**
     * 电话或者手机号
     */
    phone2: string;
    /**
     * 省
     */
    province: string;
    /**
     * 是否支持本地配送。1表示支持，0表示不支持
     */
    support_local_delivery?: number;
    /**
     * 标签id列表，逗号分隔。需要先创建网点分组
     */
    tag_ids?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作成功为true
     */
    is_success?: boolean;
    /**
     * 成功时返回新增的网点id
     */
    id?: number;
  }

}
