// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductCategoryCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 类目名称（分类名称字符数在1-20之间）
     */
    name: string;
    /**
     * 父级节点id（默认0，表示第一层分类）
     */
    parent_id: number;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 创建成功分类id
     */
    create_result?: number;
  }

}
