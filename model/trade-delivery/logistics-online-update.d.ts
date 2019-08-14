// tslint:disable:max-line-length variable-name
export namespace TradeDeliveryLogisticsOnlineUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 订单号
     */
    tid: string;
    /**
     * 修改物流信息
     */
    trade_express_modify: TradeExpressModify[];
  }

  /**
   *
   */
  export interface TradeExpressModify {
    /**
     * 配送单号
     */
    dist_id?: string;
    /**
     * 物流公司id
     */
    express_id?: string;
    /**
     * 物流单号
     */
    express_no?: string;
    /**
     * 版本号
     */
    version?: number;
  }

  export type Response = void;

}
