// tslint:disable:max-line-length variable-name
export namespace LogisticsLogisticsOrderQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 接入来源 餐饮：1001 其他：1002
     */
    source_id: number;
    /**
     * 订单id
     */
    tid: string;
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
     * 物流平台运单号
     */
    delivery_order?: string;
    /**
     * 订单Id
     */
    order_id?: string;
    /**
     * 包裹订单
     */
    pack_id?: string;
    /**
     * 快递方式
     */
    delivery_yype?: number;
    /**
     * 配送方式
     */
    send_type?: number;
    /**
     * 物流快递订单详情
     */
    express_detail_model?: ExpressDetailModel;
    /**
     * 同城送订单详情
     */
    takeout_detail_model?: TakeoutDetailModel;
  }

  /**
   * 物流快递订单详情
   */
  export interface ExpressDetailModel {
    /**
     * 电子面单状态
     */
    waybill_state?: number;
    /**
     * 面单状态99失败时返回
     */
    waybill_fail_msg?: string;
    /**
     * 物流状态
     */
    express_state?: number;
    /**
     * 收货人姓名
     */
    buyer_name?: string;
    /**
     * 收货人手机号码
     */
    buyer_phone?: string;
    /**
     * 收货人详细地址
     */
    buyer_detail_address?: string;
    /**
     * 发货人姓名
     */
    seller_name?: string;
    /**
     * 发货人联系方式
     */
    seller_phone?: string;
    /**
     * 发货人详细地址
     */
    seller_detail_address?: string;
    /**
     * 下单时间
     */
    order_date?: string;
    /**
     * 预扣运费
     */
    pre_pay_amount?: number;
    /**
     * 商家输入重量
     */
    weight?: number;
    /**
     * 第三方重量
     */
    third_weight?: number;
    /**
     * 实际运费
     */
    actual_amount?: number;
    /**
     * 支付状态
     */
    pay_state?: number;
    /**
     * 发货类型  1：电子面单  2：电子面单+上门取件
     */
    type?: number;
    /**
     * 网点名称
     */
    lattice_point_name?: string;
    /**
     * 预约时间
     */
    appointment_date?: Date;
    /**
     * 客户号
     */
    way_bill_user?: string;
    /**
     * 物流平台内部订单号
     */
    delivery_no?: string;
    /**
     * 物流单号
     */
    express_no?: string;
    /**
     * 物流公司id
     */
    express_id?: number;
    /**
     * 系统来源id， 1001有赞餐饮，1002有赞微商城
     */
    source_id?: number;
    /**
     * 0：在途 1：揽件 2：疑难 3：签收 4：退签 5：派件 6：退回
     */
    state?: number;
    /**
     * 物流信息
     */
    message?: string;
    /**
     * 物流公司名称
     */
    express_name?: string;
    /**
     * 物流公司编号
     */
    com?: string;
    /**
     * 物流详情信息，返回json字符串，例如：[
     *     {
     *         "context": "已签收,签收人是:【邮件签收章】", 
     *         "time": "2018-11-21 10:25:48", 
     *         "status": "签收"
     *     }, 
     *     {
     *         "context": "【浙江杭州康桥公司】的【xxx 手机(13811112222)】正在派件,扫描员是【xxx】", 
     *         "time": "2018-11-21 01:43:00", 
     *         "status": "派送"
     *     }
     * ]
     */
    data?: string;
  }

  /**
   * 同城送订单详情
   */
  export interface TakeoutDetailModel {
    /**
     * 物流平台包裹单
     */
    delivery_no?: string;
    /**
     * 状态编码
     */
    status_code?: number;
    /**
     * 订单状态
     */
    status_msg?: number;
    /**
     * 第三方 1：达达 2：蜂鸟
     */
    delivery_channel?: number;
    /**
     * 订单取消原因
     */
    cancel_reason?: string;
    /**
     * 骑手姓名
     */
    transporter_name?: string;
    /**
     * 骑手电话
     */
    transporter_phone?: string;
    /**
     * 骑手经度
     */
    transporter_lng?: string;
    /**
     * 骑手纬度
     */
    transporter_lat?: string;
    /**
     * 小费,单位为分
     */
    tip_fee?: number;
    /**
     * 配送费,单位为分
     */
    delivery_fee?: number;
    /**
     * 配送距离,单位为米
     */
    distance?: number;
    /**
     * 发单时间
     */
    create_time?: string;
    /**
     * 接单时间,若未接单,则为空
     */
    accept_time?: string;
    /**
     * 取货时间,若未取货,则为空
     */
    fetch_time?: string;
    /**
     * 送达时间,若未送达,则为空
     */
    finish_time?: string;
    /**
     * 取消时间,若未取消,则为空
     */
    cancel_time?: string;
    /**
     * 过期时间,若未过期,则为空
     */
    expire_time?: string;
    /**
     * 退款违约金，单位为分
     */
    deduct_fee?: number;
  }

}
