// tslint:disable:max-line-length variable-name
export namespace ExtensionAnalysisDatacenterPspagesourceOrderFetch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 推广分析dcps信息，该dcps在创建推广链接时会生成一个唯一追踪号，不能为空
     */
    dcps: string;
    /**
     * 查询订单结束时间 格式yyyy-MM-dd
     */
    end_day?: string;
    /**
     * 当前第几页 默认1
     */
    page?: number;
    /**
     * 页面条数 最小1 最大200， 默认20
     */
    page_size?: number;
    /**
     * 查询订单开始时间 格式yyyy-MM-dd
     */
    start_day?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单分页信息
     */
    paginator?: DataCenterPsPaginator;
    /**
     * 订单号列表
     */
    items?: string[];
  }

  /**
   * 订单分页信息
   */
  export interface DataCenterPsPaginator {
    /**
     * 总条数
     */
    total_count?: number;
    /**
     * 一页多少条
     */
    page_size?: number;
    /**
     * 第几页
     */
    page?: number;
  }

}
