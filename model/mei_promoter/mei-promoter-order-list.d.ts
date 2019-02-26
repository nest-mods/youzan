export namespace MeiPromoterMeiPromoterOrderList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 订单完成时间的搜索终止时间
     */
    end_time?: number;
    /**
     * 搜索的关键词，可以是手机号或者是订单号
     */
    keyword?: string;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 要查询的页码
     */
    page?: number;
    /**
     * 每页显示的条目数量，最大200条
     */
    page_size?: number;
    /**
     * 订单状态
     */
    settle_status?: number;
    /**
     * 订单完成时间的搜索起始时间
     */
    start_time?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: MeiPaginator;
    /**
     * 推广原产的订单列表
     */
    items?: MeiPromoterOrder;
  }

  /**
   * 分页信息
   */
  export interface MeiPaginator {
    /**
     * 总记录数
     */
    total_count?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页显示的记录数
     */
    page_size?: number;
  }

  /**
   * 推广原产的订单列表
   */
  export interface MeiPromoterOrder {
    /**
     * 交易订单号
     */
    order_no?: string;
    /**
     * 分润支付单号
     */
    settle_no?: string;
    /**
     * 订单总付款金额
     */
    total_pay?: number;
    /**
     * 订单完成时间
     */
    order_finished_at?: number;
    /**
     * 顾客名
     */
    guest_name?: string;
    /**
     * 错误信息，当分润支付失败的时候会出现，例如“余额不足无法分润”
     */
    err_msg?: string;
    /**
     * 订单所处的部门的名称
     */
    dept_name?: string;
    /**
     * 推广员简要信息
     */
    promoter?: MeiPromoter;
    /**
     * 推广员简要信息
     */
    parent_promoter?: MeiPromoter;
    /**
     * 分润状态
  * 5  人工结算
  * 10 待结算
  * 40 已结算
  * 95 结算失败
     */
    settle_status?: number;
    /**
     * 推广员订单条目信息
     */
    items?: MeiPromoterOrderItem;
    /**
     * 结算类型
  * 1 人工结算
  * 2 自动结算
     */
    settlement_type?: number;
  }

  /**
   * 推广员简要信息
   */
  export interface MeiPromoter {
    /**
     * 联系电话
     */
    phone?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 推广员id
     */
    pid?: number;
    /**
     * 获得的利润
     */
    profit?: number;
  }

  /**
   * 推广员简要信息
   */
  export interface MeiPromoter {
    /**
     * 联系电话
     */
    phone?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 推广员id
     */
    pid?: number;
    /**
     * 获得的利润
     */
    profit?: number;
  }

  /**
   * 推广员订单条目信息
   */
  export interface MeiPromoterOrderItem {
    /**
     * 商品名称，例如剪发服务
     */
    goods_name?: string;
    /**
     * 推广收益
     */
    promoter_profit?: number;
    /**
     * 上线获得的收益
     */
    parent_profit?: number;
    /**
     * 商品图片
     */
    goods_pic?: string;
    /**
     * 购买的商品数量
     */
    num?: number;
    /**
     * 实际支付的金额
     */
    effective_pay?: number;
    /**
     * 推广提成比例
     */
    promotion_ratio?: number;
    /**
     * 商品价格
     */
    origin_price?: number;
    /**
     * 商品类型。（当商品不是卡时存在）
  * 1  服务
  * 2  实物商品
     */
    goods_type?: number;
    /**
     * 上线的推广提成比例
     */
    parent_ratio?: number;
    /**
     * 卡类型（当商品是卡时存在）
  * 1 次卡
  * 2 折扣卡
  * 3 充值卡
     */
    card_type?: number;
  }

}
