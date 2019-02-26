export namespace ItemCategoryItemcategoriesTagAdd {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品分组的名称
     */
    name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品标签的描述
     */
    tag?: GoodsTag;
  }

  /**
   * 商品标签的描述
   */
  export interface GoodsTag {
    /**
     * 商品标签的ID
     */
    id?: number;
    /**
     * 商品标签的名称
     */
    name?: string;
    /**
     * 商品标签类型，0 自定义，1 未分类，2 最新，3 最热，4 隐藏
     */
    type?: number;
    /**
     * 商品标签创建时间
     */
    created?: string;
    /**
     * 商品标签内的商品数量
     */
    item_num?: number;
    /**
     * 商品标签的展示的URL地址
     */
    tag_url?: string;
    /**
     * 分享出去的商品标签展示地址
     */
    share_url?: string;
    /**
     * 商品标签描述
     */
    desc?: string;
  }

}
