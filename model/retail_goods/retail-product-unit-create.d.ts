export namespace RetailGoodsRetailProductUnitCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
    /**
     * 状态（0表示禁用，1表示启用）
     */
    status?: number;
    /**
     * 单位名称
     */
    unit_name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 保存成功的单位id
     */
    unit_id?: number;
  }

}
