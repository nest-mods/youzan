// tslint:disable:max-line-length variable-name
export namespace ExtensionAnalysisDatacenterPspagesourceCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 推广花费，只能是正整数 单位为分
     */
    ps_cost?: number;
    /**
     * 推广位置
     */
    ps_location?: string;
    /**
     * 推广分析名称
     */
    ps_name: string;
    /**
     * 渠道名称，系统中名称不存在的自动创建 ，存在的使用已有的
     */
    source_name: string;
    /**
     * 该推广监控的标签。使用推广标签，商家可以便捷查找、导出及对比同一标签下的不同推广监控的数据。名称不存在的自动创建 ，存在的使用已有的
     */
    tag_name?: string;
    /**
     * 推广链接，目前支持 微页面，商品页面，商品分组页 ，店铺主页，优惠券，拼团，付费会员卡
     */
    url: string;
    /**
     * 访问客户打标签，给通过该推广链接访问页面的客户打上标签，可持续跟进该类客户与区分运营。该标签有上限1000，名称不存在的自动创建 ，存在的使用已有的
     */
    visit_fans_tag_name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 推广分析响应结果
     */
    response?: YunCreatePsResultModel;
  }

  /**
   * 推广分析响应结果
   */
  export interface YunCreatePsResultModel {
    /**
     * 推广分析生成链接的主键Id
     */
    id?: number;
    /**
     * 推广分析生成链接的追踪号,如示例的ps_code
     */
    dcps?: string;
    /**
     * 推广分析的名称
     */
    psName?: string;
  }

}
