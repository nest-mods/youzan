// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductCategoryUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 待更新商品分类id
     */
    category_id: number;
    /**
     * 商品分类名称
     */
    category_name?: string;
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
     * 编辑是否成功
     */
    update_result?: boolean;
  }

}
