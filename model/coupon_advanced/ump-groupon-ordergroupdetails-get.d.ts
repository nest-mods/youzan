// tslint:disable:max-line-length variable-name
export namespace CouponAdvancedUmpGrouponOrdergroupdetailsGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 订单号List
     */
    tids: string[];
  }

  /**
   *
   */
  export interface ListString {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单拼团详情
     */
    order_group_detail?: OrderGroupDetail[];
  }

  /**
   * 订单拼团详情
   */
  export interface OrderGroupDetail {
    /**
     * 拼团团信息
     */
    group?: GroupOnGroup;
    /**
     * 参团订单信息
     */
    group_join?: GroupOnGroupJoin;
  }

  /**
   * 拼团团信息
   */
  export interface GroupOnGroup {
    /**
     * 团ID，唯一标示
     */
    id?: number;
    /**
     * 团编号，唯一
     */
    group_no?: string;
    /**
     * 成团订单编号，即团长订单号
     */
    tid?: string;
    /**
     * 店铺ID
     */
    sid?: number;
    /**
     * 商家创建的拼团活动ID
     */
    activity_id?: number;
    /**
     * 拼团状态：0-进行中、1-满员成团、2-拼团失败、3-模拟成团
     */
    state?: number;
    /**
     * 成团别名，即邀请码
     */
    alias?: string;
    /**
     * 已参团的人数
     */
    join_num?: number;
    /**
     * 成团开始时间戳
     */
    start_time?: Date;
    /**
     * 团代收状态。0：不代收；1：可选代收；2：强制代收
     */
    receive_state?: number;
    /**
     * 拼团成功剩余的人数
     */
    remain_join_num?: number;
    /**
     * 创建时间
     */
    created_time?: Date;
  }

  /**
   * 参团订单信息
   */
  export interface GroupOnGroupJoin {
    /**
     * 唯一标示
     */
    id?: number;
    /**
     * 订单号
     */
    tid?: string;
    /**
     * 店铺ID
     */
    sid?: number;
    /**
     * 拼团活动ID
     */
    activity_id?: number;
    /**
     * 成团活动ID
     */
    group_id?: number;
    /**
     * 粉丝ID
     */
    fans_id?: number;
    /**
     * 买家ID
     */
    buyer_id?: number;
    /**
     * 退款状态；0：没有退款、1：退款成功、2：退款失败
     */
    refund_state?: number;
    /**
     * 退款原因
     */
    refund_reason?: string;
    /**
     * 退款失败原因
     */
    refund_fail_msg?: string;
    /**
     * 支付状态；0：未支付；1：支付成功
     */
    pay_state?: number;
    /**
     * 支付成功时间
     */
    pay_time?: Date;
    /**
     * 商品编码
     */
    item_id?: number;
    /**
     * SKU编码
     */
    sku_id?: number;
    /**
     * 拼团优惠金额，单位：分
     */
    discount_fee?: number;
    /**
     * 团长额外优惠金额，单位：分
     */
    head_extra_discount_fee?: number;
    /**
     * 是否代收
     */
    is_agency_receive?: boolean;
    /**
     * 创建时间
     */
    created_time?: Date;
    /**
     * 是否团长
     */
    is_head?: boolean;
  }

}
