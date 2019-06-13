export namespace LogisticsLogisticsLocalMultipleUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商家最长预约时间，和ahead_max_type配对使用，默认0
     */
    ahead_max?: number;
    /**
     * 商家最长预约时间类型   目前默认单位：day 日，目前只支持day
     */
    ahead_max_type?: string;
    /**
     * 商家预约下单提前时间，和ahead_min_type配对使用，默认0
     */
    ahead_min?: number;
    /**
     * 商家预约下单提前时间类型   目前默认单位：day 日；hour 小时；minute分钟
     */
    ahead_min_type?: string;
    /**
     * 多区域对象信息，参数为list对象的json字符串
     */
    area_param_list: string;
    /**
     * 是否开启定时达功能，true:开启，false:关闭
     */
    is_open: boolean;
    /**
     * 多网点id，单门店不填，该值默认就是0
     */
    offline_id?: number;
    /**
     * 买家配送时段，定时达不开启可以不传，参数为list对象的json字符串
     */
    time_bucket?: string;
    /**
     * 买家可选的送达时间细分 day 天；meal 上午下午晚上； hour 小时；halfhour 半小时
     */
    time_span: string;
  }

  /**
   * 
   */
  export interface Long {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 返回成功或失败
     */
    isSucess?: boolean;
  }

}
