// tslint:disable:max-line-length variable-name
export namespace SupplierFenxiaoSupportOrderDetailGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 店铺kdtid
     */
    kdt_id?: number;
    /**
     * 精选供货订单号
     */
    order_no: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单详情
     */
    response?: OrderResponseDTO;
  }

  /**
   * 订单详情
   */
  export interface OrderResponseDTO {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 邮费（分)
     */
    postage?: number;
    /**
     * 买家id
     */
    buyer_id?: number;
    /**
     * 订单状态(10：待支付，50：待发货，60：已发货，80：已收货，99：已关闭，100：已完成）
     */
    status?: number;
    /**
     * 退款状态（0：没有维权，1：维权中，2：维权中-等待精选供货商收货，3：退货退款维权完成，4：仅退款维权完成）
     */
    refund_status?: number;
    /**
     * 订单原价
     */
    origin_price?: number;
    /**
     * 订单现价
     */
    current_price?: number;
    /**
     * 商品总价（不包括邮费）
     */
    item_total_price?: number;
    /**
     * 实付价格
     */
    real_price?: number;
    /**
     * 下单时间
     */
    book_time?: Date;
    /**
     * 支付时间
     */
    pay_time?: Date;
    /**
     * 发货时间
     */
    ship_time?: Date;
    /**
     * 收货时间
     */
    receive_time?: Date;
    /**
     * 完成时间
     */
    success_time?: Date;
    /**
     * 关闭时间
     */
    close_time?: Date;
    /**
     * 订单关闭原因类型
     */
    close_type?: number;
    /**
     * 订单关闭原因
     */
    close_reason?: string;
    /**
     * 订单来源
     */
    source?: string;
    /**
     * 买家留言
     */
    memo?: string;
    /**
     * 订单加星数
     */
    star?: number;
    /**
     * 商家留言
     */
    seller_memo?: string;
    /**
     * 订单商品信息
     */
    item_list?: ItemDTO[];
    /**
     * 收货人信息
     */
    receiver?: ReceiverDTO;
    /**
     * 物流包裹信息
     */
    package_list?: PackageInfo[];
  }

  /**
   * 订单商品信息
   */
  export interface ItemDTO {
    /**
     * 订单商品id
     */
    order_item_id?: number;
    /**
     * 商品标题
     */
    title?: string;
    /**
     * sku信息
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
     * 商品数量
     */
    num?: number;
    /**
     * 商品code
     */
    code?: string;
    /**
     * 买家留言
     */
    memo?: string;
    /**
     * 商品价格
     */
    price?: number;
    /**
     * 发货状态（0：已发货，1：已发货）
     */
    delivery_status?: number;
    /**
     * 商品退款状态（0：没有维权，1：维权中，2：维权中-等待精选供货商收货，3：退货退款维权完成，4：仅退款维权完成）
     */
    refund_status?: number;
    /**
     * 退款包裹信息
     */
    refund_package_info?: RefundPackageInfo;
  }

  /**
   * 退款包裹信息
   */
  export interface RefundPackageInfo {
    /**
     * 物流公司
     */
    express_name?: string;
    /**
     * 物流单号
     */
    express_no?: string;
  }

  /**
   * 收货人信息
   */
  export interface ReceiverDTO {
    /**
     * 收货人手机号
     */
    receiver_phone?: string;
    /**
     * 收货人姓名
     */
    receiver_name?: string;
    /**
     * 收货人地址信息
     */
    receiver_address?: AddressDTO;
  }

  /**
   * 收货人地址信息
   */
  export interface AddressDTO {
    /**
     * 国家
     */
    country?: string;
    /**
     * 省
     */
    province?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 区县
     */
    district?: string;
    /**
     * 街道
     */
    street?: string;
    /**
     * 详细地址
     */
    detail?: string;
    /**
     * 邮编
     */
    postal_code?: string;
  }

  /**
   * 物流包裹信息
   */
  export interface PackageInfo {
    /**
     * 包裹号
     */
    package_id?: number;
    /**
     * 发货类型（默认为快递）
     */
    delivery_type?: string;
    /**
     * 发货时间
     */
    express_time?: Date;
    /**
     * 物流公司
     */
    express_name?: string;
    /**
     * 物流单号
     */
    express_no?: string;
    /**
     * 发货人
     */
    operator_name?: string;
    /**
     * 包裹商品信息
     */
    package_item_list?: PackageItem[];
    /**
     * 物流信息
     */
    express_info?: SptExpressInfo;
  }

  /**
   * 包裹商品信息
   */
  export interface PackageItem {
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品图片信息
     */
    picture?: string;
    /**
     * 商品数量
     */
    num?: number;
  }

  /**
   * 物流信息
   */
  export interface SptExpressInfo {
    /**
     * 状态：0：在途 1：揽件 2：疑难 3：签收 4：退签 5：派件 6：退回
     */
    state?: number;
    /**
     * 物流详情json
     */
    data?: string;
  }

}
