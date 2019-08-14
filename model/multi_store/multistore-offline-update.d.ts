// tslint:disable:max-line-length variable-name
export namespace MultiStoreMultistoreOfflineUpdate {
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
     * 营业时间,按天设置,每天只允许设置一个连续的时间段。示例：[{"open_time":"00:10","close_time":"16:00","weekdays":["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94"]},{"open_time":"00:10","close_time":"20:00","weekdays":["\u5468\u516d","\u5468\u65e5"]}]
     */
    business_hours_advanced?: string;
    /**
     * 营业时间类型 1 营业、2 休息
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
     * 网点id
     */
    id: number;
    /**
     * 图片地址列表，逗号分隔
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
     * 配送费，单位分
     */
    local_delivery_fee?: number;
    /**
     * 同城配送范围多边形,只有当local_delivery_scope_type=2时生效。格式如：点1经度,点1纬度|点2经度,点2纬度|点3经度，点3纬度|点4经度，点4纬度...。示例：119.912149,80.571455|120.122463,80.573706|120.132076,80.548051|119.9918,80.5476
     */
    local_delivery_polygon?: string;
    /**
     * 配送范围
     */
    local_delivery_scope?: number;
    /**
     * 同城配送范围划分方式：1半径 2多边形
     */
    local_delivery_scope_type?: number;
    /**
     * 起送金额
     */
    local_delivery_start_amount?: number;
    /**
     * 网点名称
     */
    name: string;
    /**
     * 线下自提时间，格式同business_hours_advanced。示例：[{"open_time":"00:10","close_time":"16:00","weekdays":["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94"]},{"open_time":"00:10","close_time":"20:00","weekdays":["\u5468\u516d","\u5468\u65e5"]}]
     */
    offline_business_hours?: string;
    /**
     * 0 否， 1 只允许营业时间下单
     */
    only_bussiness_hours_open?: number;
    /**
     * 外部编码
     */
    outer_id?: string;
    /**
     * 区号
     */
    phone1: string;
    /**
     * 电话或者手机号码
     */
    phone2: string;
    /**
     * 省
     */
    province: string;
    /**
     * 是否支持本地配送
     */
    support_local_delivery?: number;
    /**
     * 标签列表，逗号分隔。需要先创建网点分组
     */
    tag_ids?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 成功时返回true
     */
    is_success?: boolean;
  }

}
