export namespace RetailProductRetailOpenCategoryDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 类目ID
     */
    category_id: number;
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
     * 删除结果
     */
    response?: boolean;
  }

}
