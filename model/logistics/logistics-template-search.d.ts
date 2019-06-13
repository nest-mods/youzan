export namespace LogisticsLogisticsTemplateSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码
     */
    page_no: number;
    /**
     * 分页值，默认20
     */
    page_size: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 店铺全部物流模板
     */
    object?: DeliveryTemplateModelPaginatorResult;
  }

  /**
   * 店铺全部物流模板
   */
  export interface DeliveryTemplateModelPaginatorResult {
    /**
     * 运费模板分页数据
     */
    data?: DeliveryTemplateModelListWithPaginatorVO;
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 本次调用返回code，一般为错误代码
     */
    code?: number;
    /**
     * 本次调用返回的消息，一般为错误消息
     */
    message?: string;
    /**
     * 请求Id
     */
    requestId?: string;
  }

  /**
   * 运费模板分页数据
   */
  export interface DeliveryTemplateModelListWithPaginatorVO {
    /**
     * 
     */
    paginator?: Paginator;
    /**
     * 
     */
    items?: LogisticsDeliveryTemplateModel[];
  }

  /**
   * 
   */
  export interface Paginator {
    /**
     * 页码
     */
    page?: number;
    /**
     * 数量
     */
    size?: number;
    /**
     * 总条数
     */
    totalCount?: number;
  }

  /**
   * 
   */
  export interface LogisticsDeliveryTemplateModel {
    /**
     * 运费模板id
     */
    id?: number;
    /**
     * 店铺id
     */
    kdtId?: number;
    /**
     * 运费模板名称
     */
    name?: string;
    /**
     * 付费类型，1 买家付费 2 卖家付费
     */
    payType?: number;
    /**
     * 计算类型，1 按件 2 按重量 3 按体积
     */
    valuationType?: number;
    /**
     * 使用次数
     */
    useCount?: number;
    /**
     * 复制于哪个模板
     */
    isCopyOf?: number;
    /**
     * 是否包邮 0 否 1 全部 2 部分
     */
    isFreeDelivery?: number;
    /**
     * 运费规则
     */
    valuationRules?: ValuationRuleModel[];
    /**
     * 地区规则
     */
    openRegionRules?: RegionRuleOpenApiModel[];
    /**
     * 创建时间
     */
    createdAt?: number;
    /**
     * 更新时间
     */
    updatedAt?: number;
    /**
     * 删除时间
     */
    deletedAt?: number;
  }

  /**
   * 运费规则
   */
  export interface ValuationRuleModel {
    /**
     * 区域id列表
     */
    regions?: number[];
    /**
     * 首件个数
     */
    firstAmount?: number;
    /**
     * 首件费用
     */
    firstFee?: number;
    /**
     * 续件个数
     */
    additionalAmount?: number;
    /**
     * 续件费用
     */
    additionalFee?: number;
  }

  /**
   * 地区规则
   */
  export interface RegionRuleOpenApiModel {
    /**
     * 市
     */
    city?: CityOpenApiModel[];
    /**
     * 区
     */
    country?: CountryOpenApiModel[];
    /**
     * 省
     */
    province?: ProvinceOpenApiModel[];
  }

  /**
   * 市
   */
  export interface CityOpenApiModel {
    /**
     * 城市id
     */
    cityId?: number;
    /**
     * 规则id
     */
    ruleId?: number;
  }

  /**
   * 区
   */
  export interface CountryOpenApiModel {
    /**
     * 区县id
     */
    countryId?: number;
    /**
     * 规则id
     */
    ruleId?: number;
  }

  /**
   * 省
   */
  export interface ProvinceOpenApiModel {
    /**
     * 省级id
     */
    provinceId?: number;
    /**
     * 规则id
     */
    ruleId?: number;
  }

}
