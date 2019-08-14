// tslint:disable:max-line-length variable-name
export namespace ItemItemTemplateListSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页大小
     */
    page_size?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品详情模板
     */
    temps?: ItemDetailTempOpenModel;
  }

  /**
   * 商品详情模板
   */
  export interface ItemDetailTempOpenModel {
    /**
     * 模板Id
     */
    detailTempId?: number;
    /**
     * 标题
     */
    title?: string;
    /**
     * 短地址
     */
    alias?: string;
    /**
     *
     */
    components?: string;
    /**
     * 创建时间
     */
    createdTime?: string;
  }

}
