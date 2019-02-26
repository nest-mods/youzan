export namespace TradeDeliveryLogisticsOnlineConfirm {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 发货是否无需物流  如果为 0 则必须传递物流参数，如果为 1 则无需传递物流参数（out_stype和out_sid），默认为 0
     */
    is_no_express?: number;
    /**
     * 配送期次，周期购订单专用，例如：1，表示配送第1期
     */
    issue?: number;
    /**
     * 如果需要拆单发货，使用该字段指定要发货的商品交易明细编号，多个明细编号用半角逗号“,”分隔；  不需要拆单发货，则该字段不传或值为空；
     */
    oids?: string;
    /**
     * 快递单号（具体一个物流公司的真实快递单号）
     */
    out_sid?: string;
    /**
     * 物流公司编号，可以通过请求 youzan.logistics.express.get 该接口获得
     */
    out_stype?: string;
    /**
     * 外部交易编号
     */
    outer_tid?: string;
    /**
     * 交易订单号
     */
    tid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 发货是否成功
     */
    is_success?: boolean;
  }

}
