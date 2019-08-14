// tslint:disable:max-line-length variable-name
export namespace BeautyItemMeiGoodsServingSkuItemCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 规格项名称
     */
    name: string;
    /**
     * 规格ID
     */
    parent_dict_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 规格项ID
     */
    data?: number;
    /**
     * 错误描述信息
     */
    msg?: string;
  }

}
