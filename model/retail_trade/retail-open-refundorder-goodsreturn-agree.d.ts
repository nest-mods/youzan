export namespace RetailTradeRetailOpenRefundorderGoodsreturnAgree {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退货地址
     */
    address: string;
    /**
     * 收件人手机号
     */
    mobile: string;
    /**
     * 邮编
     */
    postcode?: number;
    /**
     * 收件人
     */
    receiver: string;
    /**
     * 退款单号
     */
    refund_order_no: string;
    /**
     * 卖家退货留言
     */
    remark?: string;
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source: string;
    /**
     * 座机
     */
    telephone?: string;
    /**
     * 退款单版本号
     */
    version: number;
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
