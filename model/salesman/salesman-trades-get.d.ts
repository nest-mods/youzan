export namespace SalesmanSalesmanTradesGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 结束时间（时间戳）
     */
    end_time?: number;
    /**
     * 粉丝id（mobile或fans_id选其一，另者置为0，都填以mobile为准）
     */
    fans_id?: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1；当传mobile时，和fans_id一样传0）
     */
    fans_type?: number;
    /**
     * 手机号（mobile或fans_id选其一，另者置为0，都填以mobile为准）
     */
    mobile?: string;
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页记录数（最大100）
     */
    page_size?: number;
    /**
     * 开始时间 （时间戳）
     */
    start_time?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 记录总数
     */
    total?: number;
    /**
     * 推广订单列表
     */
    list?: SalesmanTradeDetail;
  }

  /**
   * 推广订单列表
   */
  export interface SalesmanTradeDetail {
    /**
     * 销售员标记
     */
    seller?: string;
    /**
     * 推广订单号
     */
    order_no?: string;
    /**
     * 订单总额(元),扣除运费
     */
    money?: string;
    /**
     * 下单时间
     */
    created_at?: string;
    /**
     * 提成金额(元)
     */
    cps_money?: string;
    /**
     * 订单状态:3:待付款，5:已付款，6:已发货，100:交易完成
     */
    state?: number;
    /**
     * 销售员手机号
     */
    phone?: string;
    /**
     * 销售员推广订单详细商品提成信息数据结构
     */
    items?: SalesmanTradeItem;
    /**
     * 结算状态1:待结算 2:已结算 3:余额不足 4:结算异常，等待重试 5:货到付款
     */
    settle_state?: number;
    /**
     * 是否自动结算0:人工结算1:自动结算
     */
    auto_settle?: number;
    /**
     * 结算时间:如果未结算、人工结算返回空
     */
    settled_at?: string;
  }

  /**
   * 销售员推广订单详细商品提成信息数据结构
   */
  export interface SalesmanTradeItem {
    /**
     * 商品价格(元)
     */
    price?: string;
    /**
     * 商品数量
     */
    num?: number;
    /**
     * 商品名称
     */
    title?: string;
    /**
     * 商品是否参与推广0:不参与1参与
     */
    is_join?: number;
    /**
     * 商品ID
     */
    num_iid?: string;
    /**
     * 商品提成比例(%)
     */
    i_rate?: string;
    /**
     * 商品邀请奖励提成比例(%)
     */
    ii_rate?: string;
    /**
     * 商品提成奖励(元)
     */
    i_cps_money?: string;
    /**
     * 商品邀请奖励提成奖励(元)
     */
    ii_cps_money?: string;
  }

}
