export namespace TradeAdvancedTradeRefundMessagesGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 退款ID
     */
    refund_id?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 退款记录
     */
    refund_messages?: RefundMessages;
  }

  /**
   * 退款记录
   */
  export interface RefundMessages {
    /**
     * 角色 2买家 3卖家
     */
    owner_role?: number;
    /**
     * 退款时间
     */
    created?: Date;
    /**
     * 退款id
     */
    refund_id?: string;
    /**
     * 描述
     */
    content?: string;
  }

}
