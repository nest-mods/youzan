export namespace BeautyItemMeiGoodsShelveUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺ID列表
     */
    dept_ids: number[];
    /**
     * 商品ID列表
     */
    goods_ids: number[];
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 1上架 2下架
     */
    shelve_type: number;
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
