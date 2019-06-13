export namespace RetailProductRetailOpenCategoryCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 类目名称
     */
    name: string;
    /**
     * 父级类目ID
     */
    parent_id?: number;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分类ID
     */
    response?: number;
  }

}
