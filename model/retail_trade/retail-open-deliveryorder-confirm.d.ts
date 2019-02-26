export namespace RetailTradeRetailOpenDeliveryorderConfirm {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 销售发货单号
     */
    delivery_order_no?: string;
    /**
     * 运单号
     */
    express_code?: string;
    /**
     * 物流公司编号，可以通过请求 youzan.logistics.express.get 该接口获得
     */
    logistics_id?: string;
    /**
     * 操作人
     */
    operator_name?: string;
    /**
     * 发货的商品明细ID
  * 如果需要拆单发货，使用该字段指定要发货的商品明细ID，不需要拆单发货，则该字段不传或值为空。
     */
    order_item_nos?: string[];
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 执行结果描述
     */
    response?: boolean;
  }

}
