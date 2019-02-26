export namespace TradeAdvancedTradeRefundGet {
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
     * 订单号
     */
    tid?: string;
    /**
     * 已废弃，请使用下文中 oid 字段（订单明细字段，对应 youzan.trade.get 3.0接口中的oid ）
     */
    item_id?: number;
    /**
     * 退款id
     */
    refund_id?: string;
    /**
     * 退款状态:
  * WAIT_SELLER_AGREE(买家已经申请退款，等待卖家同意)，
  * WAIT_BUYER_RETURN_GOODS(卖家已经同意退款，等待买家退货)，
  * WAIT_SELLER_CONFIRM_GOODS(买家已经退货，等待卖家确认收货)，
  * SELLER_REFUSE_BUYER(卖家拒绝退款)，
  * SELLER_REFUSE_BUYER_RETURN_GOODS(卖家未收到货,拒绝退款) ，
  * CLOSED(退款关闭)，
  * SUCCESS(退款成功)。
     */
    status?: string;
    /**
     * 客满介入状态：
  * 1（客满未介入），2（客满介入中）。
     */
    cs_status?: number;
    /**
     * 是否退货:
  * false（仅退款），true（退货退款）。
     */
    return_goods?: boolean;
    /**
     * 退款申请说明
     */
    desc?: string;
    /**
     * 退款申请时间
     */
    created?: Date;
    /**
     * 退款申请修改时间
     */
    modified?: Date;
    /**
     * 退款版本号，用于退款的相关操作。
     */
    version?: number;
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
     * 申请退款的金额
     */
    refund_fee?: string;
    /**
     * 退货物流信息
     */
    logistics?: TradeRefundLogistics;
    /**
     * 退款类型：
  * BUYER_APPLY_REFUND(买家申请退款)，SELLER_REFUND（商家主动退款），SYSTEM_REFUND（一键退款，特殊类型退款）
     */
    refund_type?: string;
    /**
     * 订单明细id
     */
    oid?: string;
  }

  /**
   * 退货物流信息
   */
  export interface TradeRefundLogistics {
    /**
     * 物流单号
     */
    logistics_no?: string;
    /**
     * 物流公司编号
     */
    company_code?: string;
    /**
     * 收件人
     */
    receiver?: string;
    /**
     * 收件人手机号
     */
    mobile?: string;
    /**
     * 收件人座机
     */
    telephone?: string;
    /**
     * 收货地址
     */
    address?: string;
  }

}
