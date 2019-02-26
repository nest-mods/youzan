export namespace ExtensionAnalysisDatacenterPsstockFetch {
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
     * 该店铺剩余的监控条数，如果该条数为0则不能创建推广分析
     */
    response?: YunPsStockModel;
  }

  /**
   * 该店铺剩余的监控条数，如果该条数为0则不能创建推广分析
   */
  export interface YunPsStockModel {
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 剩余可用监控链接数
     */
    rest_stock?: number;
  }

}
