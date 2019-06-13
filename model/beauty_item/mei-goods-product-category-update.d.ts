export namespace BeautyItemMeiGoodsProductCategoryUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分组ID
     */
    category_id: number;
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
     * 返回值 0代表成功
     */
    data?: number;
    /**
     * 失败提示信息
     */
    msg?: string;
  }

}
