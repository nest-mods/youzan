export namespace RetailGoodsRetailStockWarehouseStatusUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 来源
     */
    retail_source?: string;
    /**
     * 仓库欲变更的状态 0:启用 1:停用
     */
    status?: number;
    /**
     * 仓库id
     */
    warehouse_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 修改是否成功
     */
    response?: boolean;
  }

}
