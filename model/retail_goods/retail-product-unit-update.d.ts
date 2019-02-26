export namespace RetailGoodsRetailProductUnitUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
    /**
     * 待更新的状态(0表示禁用，1表示启用)
     */
    status?: number;
    /**
     * 待更新单位id
     */
    unit_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 单位是否更新成功
     */
    update_result?: boolean;
  }

}
