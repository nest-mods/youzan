// tslint:disable:max-line-length variable-name
export namespace PayCustomsDeclarationPayCustomsDeclarationReportpaymentQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 子订单号
     */
    sub_order_no?: string;
    /**
     * 交易订单号
     */
    tid: string;
    /**
     * 有赞支付流水号
     */
    transaction: string;
  }

  /**
   *
   */
  export interface Long {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 有赞支付流水号
     */
    transaction?: string;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 报关状态  1：电子口岸申报中 2：发送海关成功 3：发送海关失败 4：海关退单 5：海关入库 6：处理异常，请稍后重试
     */
    customs_status?: number;
    /**
     * 最后更新时间，随着报关状态变化而变化；时间戳(毫秒)
     */
    customs_time?: number;
    /**
     * 申报结果说明,如果状态是失败或异常,显示失败原因
     */
    customs_info?: string;
    /**
     * 子订单号
     */
    sub_order_no?: string;
    /**
     * 支付报关单号
     */
    declare_customs_no?: string;
  }

}
