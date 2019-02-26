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
    refunds?: OpenSafeEsDTO;
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
     * (仅退款-已收到货申请原因)
  * 1: 买/卖双方协商一致;2: 买错/多买/不想要;3: 商品质量问题;4: 未收到货品';5: 其他;11: 质量问题;12: 拍错/多拍/不喜欢;13: 商品描述不符;14: 假货;15: 商家发错货;16: 商品破损/少件;17: 其他;18: 退运费;19: 协商一致退款;20: 快递一直未送达;21: 未按约定时间发货;22: 拍错/不想要;23: 计划有变无法使用;24: 商家降价;
  * (仅退款-未收到货申请原因)
  * 51: 买错/多买/不想要;52: 快递无记录;53: 少货/空包裹;54: 未按约定时间发货;55: 快递一直未送达;56: 其他;57: 拍错/多拍/不喜欢;58: 
  * (退货退款-申请原因)
  * 协商一致退款;101: 商品破损/少件;102: 商家发错货;103: 商品描述不符;104: 拍错/多拍/不喜欢;105: 质量问题;106: 假货;107: 其他;108: 做工粗糙/有瑕疵;109: 非正品;110: 
  * (系统退款原因)
  * 未按约定时间发货;201: 返现退款;202: 酒店拒单退款;204: 订单关闭退款;205: 代付过期退款;206: 超付退款;207: 外卖拒单退款;208: 拼团未成团退款;209: 团购返现退款;211: 订单少付退款;212: 小程序拼团退款;
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
  }

}
