// tslint:disable:max-line-length variable-name
export namespace ExtensionAnalysisDatacenterPssourceFetch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 查询一段时间内推广渠道列表的 查询结束时间 格式yyyy-MM-dd
     */
    end_day?: string;
    /**
     * 当前第几页 默认第1页
     */
    page?: number;
    /**
     * 页面条数 默认 20条 最大200
     */
    page_size?: number;
    /**
     * 渠道ID集合，最大200个，用来查询特定渠道的信息，可以从 推广监控列表基本数据的source_id获取
     */
    source_ids?: number[];
    /**
     * 推广分析中所使用的渠道名称
     */
    source_name?: string;
    /**
     * 查询一段时间内推广渠道列表的 查询开始时间 格式yyyy-MM-dd
     */
    start_day?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 渠道列表分页信息
     */
    paginator?: DataCenterPsPaginator;
    /**
     * 渠道详细信息
     */
    items?: YunPsSourceModel[];
  }

  /**
   * 渠道列表分页信息
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

  /**
   * 渠道详细信息
   */
  export interface YunPsSourceModel {
    /**
     * 渠道Id
     */
    id?: number;
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 渠道名称
     */
    source_name?: string;
    /**
     * 渠道来源
     */
    origin?: string;
    /**
     * 0:默认渠道;1:自定义渠道
     */
    default_tag?: number;
    /**
     * 创建时间
     */
    create_at?: string;
  }

}
