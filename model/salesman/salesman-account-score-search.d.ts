export namespace SalesmanSalesmanAccountScoreSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 结束时间（时间戳，单位秒，如1540867540）
     */
    end_time?: number;
    /**
     * 粉丝id（mobile或fans_id选其一，另者置为0，都填以mobile为准）
     */
    fans_id?: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1）
     */
    fans_type?: number;
    /**
     * 手机号（mobile或fans_id选其一，另者置为0，都填以mobile为准）
     */
    mobile?: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页记录数
     */
    page_size?: number;
    /**
     * 开始时间（时间戳，单位秒，如1535597140）
     */
    start_time?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 业绩统计列表
     */
    accumulations?: AccumulationsItemDTO;
    /**
     * 记录总数
     */
    total_results?: number;
  }

  /**
   * 业绩统计列表
   */
  export interface AccumulationsItemDTO {
    /**
     * 人工结算订单金额
     */
    manual_settle_order_amount?: string;
    /**
     * 人工结算订单数
     */
    manual_settle_order_num?: string;
    /**
     * 自动结算订单金额
     */
    auto_settle_order_amount?: string;
    /**
     * 自动结算订单数
     */
    auto_settle_order_num?: string;
    /**
     * 待结算佣金
     */
    wait_settle_money?: string;
    /**
     * 已结算佣金
     */
    settle_money?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 昵称
     */
    nickname?: string;
  }

}
