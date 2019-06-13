export namespace RetailGoodsRetailProductUnitsDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 待删除商品单位列表
     */
    unit_ids: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 删除是否成功
     */
    delete_result?: boolean;
  }

}
