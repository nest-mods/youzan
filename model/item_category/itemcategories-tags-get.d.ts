// tslint:disable:max-line-length variable-name
export namespace ItemCategoryItemcategoriesTagsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否排序
     */
    is_sort?: boolean;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分组返回信息
     */
    tags?: ItemGroupOpenModel[];
  }

  /**
   * 分组返回信息
   */
  export interface ItemGroupOpenModel {
    /**
     * id
     */
    id?: number;
    /**
     * 分组类型
     */
    type?: number;
    /**
     * 别名
     */
    alias?: string;
    /**
     * 分组链接
     */
    tag_url?: string;
    /**
     * 分享链接
     */
    share_url?: string;
    /**
     * 商品数量
     */
    item_num?: number;
    /**
     * 创建时间
     */
    created?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 分组名称
     */
    name?: string;
  }

}
