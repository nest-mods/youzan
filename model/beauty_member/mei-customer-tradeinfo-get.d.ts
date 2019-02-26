export namespace BeautyMemberMeiCustomerTradeinfoGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 会员的id
     */
    yz_uid?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 平均消费金额
     */
    average_amount?: number;
    /**
     * 消费次数
     */
    trade_count?: number;
    /**
     * 总消费金额
     */
    total_trade_amount?: number;
    /**
     * 用户id
     */
    yz_uid?: number;
    /**
     * 最近消费时间
     */
    last_trade_time?: number;
  }

}
