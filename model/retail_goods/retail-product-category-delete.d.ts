// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductCategoryDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品分类ID
     */
    category_id: number;
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
     * 是否成功删除分类
     */
    delete_result?: boolean;
  }

}
