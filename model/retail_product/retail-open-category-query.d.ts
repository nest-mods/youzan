export namespace RetailProductRetailOpenCategoryQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页数(至少从第一页开始)
     */
    page_no?: number;
    /**
     * 每页条数(最大值为每页20条数据)
     */
    page_size?: number;
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
     * 类目信息
     */
    categorys?: Category[];
    /**
     * 分页信息
     */
    paginator?: OpenPaginatorDTO;
  }

  /**
   * 类目信息
   */
  export interface Category {
    /**
     * 类目名称
     */
    name?: string;
    /**
     * 类目id
     */
    category_id?: number;
    /**
     * 父级分类id
     */
    parent_id?: number;
  }

  /**
   * 分页信息
   */
  export interface OpenPaginatorDTO {
    /**
     * 页码
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 总数
     */
    total_count?: number;
  }

}
