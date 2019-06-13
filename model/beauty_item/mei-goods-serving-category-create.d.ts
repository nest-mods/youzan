export namespace BeautyItemMeiGoodsServingCategoryCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 分组名称
     */
    name: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分组ID
     */
    category_id?: number;
  }

}
