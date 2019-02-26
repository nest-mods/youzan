export namespace ExtensionAnalysisDatacenterPspagesourceFetch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 推广分析监控追踪ID集合最多200个， 可以查询指定dcps的推广基本信息，为空是查询所有。dcps即是监控链接url后面的dc_ps 参数
     */
    dcps_list?: string[];
    /**
     * 查询一段时间内的推广分析列表的查询结束时间 格式yyyy-MM-dd
     */
    end_day?: string;
    /**
     * 当前页 默认 1
     */
    page?: number;
    /**
     * 页面条数 默认20 最大200
     */
    page_size?: number;
    /**
     * 推广分析名称，可以模糊匹配
     */
    ps_name?: string;
    /**
     * 推广分析状态1:推广中;2:推广结束
     */
    ps_status?: number;
    /**
     * 查询一段时间内的推广分析列表 的查询开始时间 格式yyyy-MM-dd
     */
    start_day?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 推广链接数据分页信息
     */
    paginator?: DataCenterPsPaginator;
    /**
     * 推广链接数据详细信息
     */
    items?: YunPsPageSourceModel;
  }

  /**
   * 推广链接数据分页信息
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
   * 推广链接数据详细信息
   */
  export interface YunPsPageSourceModel {
    /**
     * 监控链接ID
     */
    id?: number;
    /**
     * 店铺ID
     */
    kdt_id?: number;
    /**
     * 追踪ID
     */
    dcps?: string;
    /**
     * 监控链接名称
     */
    ps_name?: string;
    /**
     * 渠道ID
     */
    source_id?: number;
    /**
     * 微页面ID
     */
    page_id?: number;
    /**
     * 微页面名称
     */
    page_name?: string;
    /**
     * 微页面类型
     */
    page_type?: string;
    /**
     * 微页面别名
     */
    page_alias?: string;
    /**
     * 推广位置
     */
    ps_location?: string;
    /**
     * 推广花费
     */
    ps_cost?: number;
    /**
     * 标签ID
     */
    tag_id?: number;
    /**
     * 推广开始时间
     */
    start_date?: string;
    /**
     * 推广结束时间
     */
    end_date?: string;
    /**
     * 备注
     */
    ps_note?: string;
    /**
     * 推广状态1:推广中;2:推广结束
     */
    ps_status?: number;
    /**
     * 粉丝标签名称
     */
    fans_tag_name?: string;
    /**
     * 创建时间
     */
    create_at?: string;
  }

}
