// tslint:disable:max-line-length variable-name
export namespace TradeDeliveryTradeDcDeliveryDelivermultiissue {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 发货信息
     * deliveryType：发货方式 
     * 枚举如下:
     *  EXPRESS_SYSTEM_CALL(11, "快递 - 系统呼叫快递"),
     *   EXPRESS_MERCHANT_CALL(12, "快递 - 商家呼叫快递"),
     *   EXPRESS_NO_EXPRESS(13, "快递 - 无需物流"),
     *   EXPRESS_WAY_BILL(14, "快递 - 电子面单"),
     *
     *   LOCAL_DELIVERY_MERCHANT_CALL(21, "同城送 - 商家呼叫三方配送"),
     *   LOCAL_DELIVERY_MERCHANT_DIST(22, "同城送 - 商家自主配送"),
     *   LOCAL_DELIVERY_SYSTEM_CALL(23, "同城送 - 系统呼叫三方配送"),
     *
     *   SELF_FETCH(24, "自提 - 核销提货"),
     *   SELF_FETCH_VERIFY(92, "自提 - 无码提货"),
     *   SELF_FETCH_WITH_CODE(91, "自提 - 有码提货");
     *
     * 周期购一次性发多期目前仅支持:
     * 12
     * 13
     * 22
     * expressNo:快递单号
     * expressId:物流公司id
     * （当发货方式为13和22时expressNo和expressId可为空)
     */
    delivery_infos: string;
    /**
     * 要发多少期。
     * 该期次要与发货信息里面的list长度一致
     */
    delivery_issue: number;
    /**
     * 商品id
     */
    item_id: number;
    /**
     * 请求的唯一标识
     */
    request_id: string;
    /**
     * 订单号
     */
    tid: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作是否成功
     */
    is_success?: boolean;
  }

}
