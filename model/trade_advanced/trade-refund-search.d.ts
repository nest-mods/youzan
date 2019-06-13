export namespace TradeAdvancedTradeRefundSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 时间范围查询 退款创建截止时间时间戳 (单位为秒) 例如:1513868400
     */
    create_time_end?: number;
    /**
     * 时间范围查询 退款创建起始时间时间戳 (单位为秒) 例如:1513785600
     */
    create_time_start?: number;
    /**
     * 分页数
     */
    page_no?: number;
    /**
     * 每页显示个数
     */
    page_size?: number;
    /**
     * 退款号
     */
    refund_id?: string;
    /**
     * 退款类型：
  * BUYER_APPLY_REFUND(买家申请退款)
  * SELLER_REFUND(商家主动退款)
  * SYSTEM_REFUND(系统退款)
  * 注：默认不填写，返回除"系统退款"以外的退款信息
     */
    refund_type?: string;
    /**
     * 退款状态:
  * WAIT_SELLER_AGREE(买家已经申请退款，等待卖家同意)，
  * WAIT_BUYER_RETURN_GOODS(卖家已经同意退款，等待买家退货)，
  * WAIT_SELLER_CONFIRM_GOODS(买家已经退货，等待卖家确认收货)，
  * SELLER_REFUSE_BUYER(卖家拒绝退款)，
  * CLOSED(退款关闭)，
  * SUCCESS(退款成功)。
     */
    status?: string;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 时间范围查询 退款更新截止时间时间戳 （单位为秒）例如:1513868400
     */
    update_time_end?: number;
    /**
     * 时间范围查询 退款更新起始时间时间戳 （单位为秒）例如:1513785600
     */
    update_time_start?: number;
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
     * 总数
     */
    total?: number;
    /**
     * 退款列表
     */
    refunds?: OpenSafeEsDTO[];
  }

  /**
   * 退款列表
   */
  export interface OpenSafeEsDTO {
    /**
     * 退款ID
     */
    refund_id?: string;
    /**
     * 退款状态:
  * WAIT_SELLER_AGREE(买家已经申请退款，等待卖家同意)，
  * WAIT_BUYER_RETURN_GOODS(卖家已经同意退款，等待买家退货)，
  * WAIT_SELLER_CONFIRM_GOODS(买家已经退货，等待卖家确认收货)，
  * SELLER_REFUSE_BUYER(卖家拒绝退款)，
  * CLOSED(退款关闭)，
  * SUCCESS(退款成功)。
     */
    status?: string;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 是否退货:
  * false（仅退款），true（退货退款）。
     */
    return_goods?: boolean;
    /**
     * 退款原因，原因列表地址：https://www.youzanyun.com/docs/guide/faq/699
     */
    reason?: number;
    /**
     * 申请退款的金额 如:0.01元
     */
    refund_fee?: string;
    /**
     * 退款申请时间 如 2017-01-01 00:00:01
     */
    created?: Date;
    /**
     * 退款申请修改时间 如 2017-01-01 00:00:01
     */
    modified?: Date;
    /**
     * 客满介入状态：
  * 1（客满未介入），2（客满介入中）。
     */
    cs_status?: number;
    /**
     * 退款类型：
  * BUYER_APPLY_REFUND(买家申请退款)
  * SELLER_REFUND(商家主动退款)
  * SYSTEM_REFUND(系统退款)
     */
    refund_type?: string;
  }

}
