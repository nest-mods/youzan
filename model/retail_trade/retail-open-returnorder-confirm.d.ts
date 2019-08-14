// tslint:disable:max-line-length variable-name
export namespace RetailTradeRetailOpenReturnorderConfirm {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source: string;
    /**
     * 退货单号
     */
    return_order_no: string;
    /**
     * 退货单版本
     */
    version: number;
    /**
     * 仓库编码
     */
    warehouse_code: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
