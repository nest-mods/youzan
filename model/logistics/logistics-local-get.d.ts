export namespace LogisticsLogisticsLocalGet {
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
     * 最多提前几天下订单, 类型, 默认 DAY
     */
    aheadMaxType?: string;
    /**
     * 径度
     */
    lng?: number;
    /**
     * 店铺id
     */
    kdtId?: number;
    /**
     * 订单开始的偏移量
     */
    aheadMin?: number;
    /**
     * 配送费用
     */
    deliveryFee?: number;
    /**
     * 开启定时达功能
     */
    isOpen?: boolean;
    /**
     * 订单结束的偏移量   目前默认单位：DAY 日；HOUR 小时；HALFHOUR分钟
     */
    aheadMinType?: string;
    /**
     * 多边形区域配置
     */
    polygon?: string;
    /**
     * 0：简单 1：半径 2：自定义
     */
    scopeType?: number;
    /**
     * 本地配送范围(里）
     */
    scope?: number;
    /**
     * 配送区域图片
     */
    attachPic?: string;
    /**
     * 订单起送金额
     */
    startFee?: number;
    /**
     * 最多提前几天下订单, 仅限当天：0
     */
    aheadMax?: number;
    /**
     * 送达时间细分 DAY 天；MEAL 上午下午晚上； HOUR 小时；HALFHOUR 半小时
     */
    timeSpan?: string;
    /**
     * 营业时间周期，2进制表示7天的开关，第一位是周一
     */
    timeBucket?: LogisticsLocalDeliveryTimeBucketParam[];
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 配送区域介绍
     */
    desc?: string;
  }

  /**
   * 营业时间周期，2进制表示7天的开关，第一位是周一
   */
  export interface LogisticsLocalDeliveryTimeBucketParam {
  }

}
