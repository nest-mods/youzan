export namespace BeautyOrderMeiOrderUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 买家性别
     */
    buyer_gender?: number;
    /**
     * 买家手机号
     */
    buyer_mobile?: string;
    /**
     * 买家姓名
     */
    buyer_name?: string;
    /**
     * 买家id
     */
    buyer_yz_uid?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 赠送列表
     */
    order_gift_items?: OrderGiftItem[];
    /**
     * 订单项列表
     */
    order_items?: OrderItemRequest[];
    /**
     * 订单编号，修改订单时填写
     */
    order_no?: string;
    /**
     * 优惠列表
     */
    promotions?: Promotion[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 订单类型。0:"普通",1,:"开卡购卡",2,:"充值",3,:"直接收款",4:"台卡",8:"产品订单"。默认是0.
     */
    type?: number;
  }

  /**
   * 
   */
  export interface OrderGiftItem {
    /**
     * 权益有效期时间（giftItemTermTime，xxxx前有效），0-永久有效, 单位毫秒
     */
    gift_item_term_time?: number;
    /**
     * 赠送项目唯一值, 如：商品id
     */
    gift_item_unique?: string;
    /**
     * 赠送权益值（giftItemValue, 赠送次数/数量）
     */
    gift_item_value?: number;
    /**
     * 赠送类型（giftType,1-次数/2-折扣/3-余额/4-积分/5-券/6-会员卡/7-服务/8-产品）
     */
    gift_type?: number;
  }

  /**
   * 
   */
  export interface OrderItemRequest {
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 订单项位置，更新订单项时需传入
     */
    index?: number;
    /**
     * 是否已支付
     */
    is_pay?: number;
    /**
     * 订单项别名
     */
    item_alias?: string;
    /**
     * 订单项id
     */
    item_id?: number;
    /**
     * 订单项类型。1, "服务"  2, "次卡"  3, "折扣卡"  4, "充值卡"  5, "充值"  6, "台卡二维码收款"  7, "直接收款"  8, "实物商品"  9, "余额充值"
     */
    item_type?: number;
    /**
     * 数量
     */
    num?: number;
    /**
     * 原始价格
     */
    origin_price?: number;
    /**
     * 优惠卡号
     */
    promotion_card_no?: string;
    /**
     * 优惠id
     */
    promotion_id?: number;
    /**
     * 优惠名称
     */
    promotion_name?: string;
    /**
     * 优惠的价格
     */
    promotion_price?: number;
    /**
     * 0, "无优惠" 1, "次卡" 2, "折扣值" 3, "预付已付款" 5, "导入权益次数" 6, "赠送权益次数" 7, "导入权益折扣" 8, "赠送权益折扣" 11, "产品折扣（会员特权）" 21, "服务折扣（会员特权）" 30, "包邮", "等级权益包邮" 31, "抹零", "抹零" 40, "手动减价", "手动减价" 51, "减价优惠券", "优惠券" 52, "折扣优惠券", "优惠券" 100, "体验价", "体验价优惠" 101, "拼团", "拼团" 103, "同行打折", "同行优惠" 104, "同行免单", "同行优惠"
     */
    promotion_type?: number;
    /**
     * 优惠卡面值
     */
    promotion_value?: number;
    /**
     * 实际支付价格
     */
    real_pay?: number;
    /**
     * 预约价格
     */
    reserve_price?: number;
    /**
     * 
     */
    salesmen?: Salesman[];
    /**
     * sku id
     */
    sku_id?: number;
    /**
     * 0 预约，1 订单
     */
    stage?: number;
    /**
     * 
     */
    technicians?: Technician[];
  }

  /**
   * 
   */
  export interface Salesman {
    /**
     * 销售人员id
     */
    id?: number;
  }

  /**
   * 
   */
  export interface Technician {
    /**
     * 是不是客户指定的技师
     */
    assigned?: number;
    /**
     * 技师id
     */
    id?: number;
  }

  /**
   * 
   */
  export interface Promotion {
    /**
     * 优惠id
     */
    id?: number;
    /**
     * 优惠名称
     */
    name?: string;
    /**
     * 0 预约 1订单
     */
    stage?: number;
    /**
     * 优惠类型。0, "无优惠" 1, "次卡" 2, "折扣值" 3, "预付已付款" 5, "导入权益次数" 6, "赠送权益次数" 7, "导入权益折扣" 8, "赠送权益折扣" 11, "产品折扣（会员特权）" 21, "服务折扣（会员特权）" 30, "包邮", "等级权益包邮" 31, "抹零", "抹零" 40, "手动减价", "手动减价" 51, "减价优惠券", "优惠券" 52, "折扣优惠券", "优惠券" 100, "体验价", "体验价优惠" 101, "拼团", "拼团" 103, "同行打折", "同行优惠" 104, "同行免单", "同行优惠"
     */
    type?: number;
    /**
     * 优惠面值
     */
    value?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单保存响应体
     */
    resp?: OrderSaveResp;
  }

  /**
   * 订单保存响应体
   */
  export interface OrderSaveResp {
    /**
     * 订单创建者id
     */
    yz_uid?: number;
    /**
     * 订单编号
     */
    order_no?: string;
  }

}
