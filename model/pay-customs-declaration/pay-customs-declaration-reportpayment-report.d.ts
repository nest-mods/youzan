// tslint:disable:max-line-length variable-name
export namespace PayCustomsDeclarationPayCustomsDeclarationReportpaymentReport {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 报关类型  默认值：1，当前进支持传值1，重推也是使用1
     */
    action_type: number;
    /**
     * 报关金额（拆单必传）
     */
    amount?: number;
    /**
     * 币种（拆单必传）CNY：人民币(目前仅支持人民币)
     */
    currency?: string;
    /**
     * 海关编号  ZZ:郑州新郑综合保税区；GZ：广州海关；HZ：杭州海关；SH：上海海关
     */
    customs_code: string;
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 子订单号（拆单必传）
     */
    sub_order_no?: string;
    /**
     * 订单号
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
   *
   */
  export interface Long {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 报关状态  1：电子口岸申报中 2：发送海关成功 3：发送海关失败 4：海关退单 5：海关入库 6：处理异常，请稍后重试
     */
    customs_status?: number;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 子订单号
     */
    sub_order_no?: string;
    /**
     * 有赞支付流水号
     */
    transaction?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 支付报关单号
     */
    declare_customs_no?: string;
  }

}
