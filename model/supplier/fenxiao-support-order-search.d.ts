export namespace SupplierFenxiaoSupportOrderSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 关闭时间范围（yyyy-MM-dd HH:dd:ss）
     */
    close_time_begin?: string;
    /**
     * 关闭时间范围（yyyy-MM-dd HH:dd:ss）
     */
    close_time_end?: string;
    /**
     * 是否加星
     */
    is_star?: boolean;
    /**
     * 供货商店铺id
     */
    kdt_id?: number;
    /**
     * 排序key（默认按下单时间排序）
     */
    order_by_key?: string;
    /**
     * desc: 降序，asc: 升序
     */
    order_by_order?: string;
    /**
     * 查询的订单号
     */
    order_no?: string;
    /**
     * 下单时间范围（yyyy-MM-dd HH:dd:ss）
     */
    order_time_begin?: string;
    /**
     * 下单时间范围（yyyy-MM-dd HH:dd:ss）
     */
    order_time_end?: string;
    /**
     * 页码
     */
    page?: number;
    /**
     * 每页大小
     */
    page_size?: number;
    /**
     * 支付时间范围（yyyy-MM-dd HH:dd:ss）
     */
    pay_time_begin?: string;
    /**
     * 支付时间范围（yyyy-MM-dd HH:dd:ss）
     */
    pay_time_end?: string;
    /**
     * 收货人姓名
     */
    receiver_name?: string;
    /**
     * 收货人手机号
     */
    receiver_phone?: string;
    /**
     * 维权状态
  * 0:没有维权, 1:维权申请中,2:等待精选供货商收货中,3:退货退款完成,4:仅退款完成
     */
    refund_status?: number;
    /**
     * 订单状态
  * 10:待支付, 50:待发货, 60:已发货, 80:已收货, 99:已关闭,100:已完成
     */
    status?: number;
    /**
     * 完成时间范围（yyyy-MM-dd HH:dd:ss）
     */
    success_time_begin?: string;
    /**
     * 完成时间范围（yyyy-MM-dd HH:dd:ss）
     */
    success_time_end?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单总数
     */
    total?: number;
    /**
     * 10
     */
    page_size?: number;
    /**
     * 2
     */
    page?: number;
    /**
     * 订单列表
     */
    data_list?: OrderSimpleResponseDTO;
  }

  /**
   * 订单列表
   */
  export interface OrderSimpleResponseDTO {
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 下单时间
     */
    book_time?: Date;
    /**
     * 邮费（分）
     */
    postage?: number;
    /**
     * 订单状态(10：待支付，50：待发货，60：已发货，80：已收货，99：已关闭，100：已完成）
     */
    status?: number;
    /**
     * 实付金额（分）
     */
    real_price?: number;
    /**
     * 订单价格（分）
     */
    current_price?: number;
    /**
     * 退款状态（0：没有维权，1：维权中，2：维权中-等待精选供货商收货，3：退货退款维权完成，4：仅退款维权完成）
     */
    refund_status?: number;
    /**
     * 订单加星（0-5）
     */
    star?: number;
    /**
     * 卖家留言
     */
    seller_memo?: string;
    /**
     * 收货人基本信息
     */
    receiver?: ReceiverSimpleDTO;
    /**
     * 商品基本信息
     */
    itemList?: ItemSimpleDTO;
  }

  /**
   * 收货人基本信息
   */
  export interface ReceiverSimpleDTO {
    /**
     * 收货人手机号
     */
    receiver_phone?: string;
    /**
     * 收货人姓名
     */
    receiver_name?: string;
  }

  /**
   * 商品基本信息
   */
  export interface ItemSimpleDTO {
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品sku json信息
     */
    sku?: string;
    /**
     * 商品url
     */
    url?: string;
    /**
     * 商品图片信息
     */
    picture?: string;
    /**
     * 商品价格（分）
     */
    price?: number;
    /**
     * 商品数量
     */
    num?: number;
    /**
     * 商品编码
     */
    code?: string;
  }

}
