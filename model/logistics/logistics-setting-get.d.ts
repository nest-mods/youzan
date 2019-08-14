// tslint:disable:max-line-length variable-name
export namespace LogisticsLogisticsSettingGet {
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
     * 店铺Id
     */
    kdtId?: number;
    /**
     * 门店id
     */
    offlineId?: number;
    /**
     * 是否支持同城定时达
     */
    isLocalInTime?: boolean;
    /**
     * 是否支持快递
     */
    isExpress?: boolean;
    /**
     * 是否支持自提
     */
    isSelf?: boolean;
    /**
     * 是否支持同城
     */
    isLocal?: boolean;
  }

}
