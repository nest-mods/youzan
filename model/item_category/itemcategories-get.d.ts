export namespace ItemCategoryItemcategoriesGet {
  /**
   * 请求参数
   */
  export interface Request {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品自定义标签列表
     */
    categories?: Categories[];
  }

  /**
   * 商品自定义标签列表
   */
  export interface Categories {
    /**
     * 节点
     */
    cid?: number;
    /**
     * 父节点
     */
    parent_cid?: number;
    /**
     * 名称
     */
    name?: string;
    /**
     * 是否为父节点
     */
    is_parent?: boolean;
    /**
     * 分类
     */
    sub_categories?: SubCategories[];
  }

  /**
   * 分类
   */
  export interface SubCategories {
    /**
     * 节点id
     */
    cid?: number;
    /**
     * 父节点id
     */
    parent_cid?: number;
    /**
     * 名称
     */
    name?: string;
    /**
     * 是否为父节点
     */
    is_parent?: boolean;
  }

}
