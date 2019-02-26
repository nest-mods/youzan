export namespace ItemCategoryItemcategoriesTagUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品分组的名称
     */
    name?: string;
    /**
     * 商品分组ID
     */
    tag_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否更新成功
     */
    is_success?: boolean;
  }

}
