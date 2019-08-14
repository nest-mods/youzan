// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductUnitsSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单位名称（模糊搜索）
     */
    name_part?: string;
    /**
     * 页数
     */
    page_no?: number;
    /**
     * 页大小
     */
    page_size?: number;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 根据状态筛选，不传则查询出所有（0表示禁用，1表示启用）
     */
    status?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: Paginator;
    /**
     * 单位实体信息
     */
    items?: UnitDictVO[];
  }

  /**
   * 分页信息
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
   * 单位实体信息
   */
  export interface UnitDictVO {
    /**
     * 单位id
     */
    id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 单位名称
     */
    name?: string;
    /**
     * 单位是否启用状态。
     * 1表示启用，0表示禁用
     */
    status?: number;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
  }

}
