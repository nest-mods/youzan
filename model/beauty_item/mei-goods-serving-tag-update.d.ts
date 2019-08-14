// tslint:disable:max-line-length variable-name
export namespace BeautyItemMeiGoodsServingTagUpdate {
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
    /**
     * 标签ID
     */
    tag_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 更新结果  0代表成功 否则失败
     */
    data?: number;
    /**
     * 失败提示信息
     */
    message?: string;
  }

}
