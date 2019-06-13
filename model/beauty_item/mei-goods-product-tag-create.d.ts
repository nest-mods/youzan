export namespace BeautyItemMeiGoodsProductTagCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 标签名称
     */
    name: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 标签id
     */
    tag_id?: number;
  }

}
