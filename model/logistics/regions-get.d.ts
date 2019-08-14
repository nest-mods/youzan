// tslint:disable:max-line-length variable-name
export namespace LogisticsRegionsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 需要返回的区域地名对象字段
     */
    fields?: string;
    /**
     * 区域ID
     */
    id?: number;
    /**
     * 要获取的区域等级
     */
    level: number;
    /**
     * 区域父级ID
     */
    parent_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 区域地名列表信息
     */
    regions?: CommonRegion[];
  }

  /**
   * 区域地名列表信息
   */
  export interface CommonRegion {
    /**
     * 上级区域ID
     */
    parent_id?: number;
    /**
     * 区域ID
     */
    id?: number;
    /**
     * 区域全称
     */
    name?: string;
  }

}
