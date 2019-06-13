export namespace SupplierFenxiaoSupportOrderDeliveritemGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 精选供货商店铺id
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
     * 发货商品信息
     */
    response?: SptDeliverItemDTO;
  }

  /**
   * 发货商品信息
   */
  export interface SptDeliverItemDTO {
    /**
     * 已发货商品数
     */
    delivered_num?: number;
    /**
     * 未发货商品数
     */
    undelivered_num?: number;
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 收货人信息
     */
    receiver_d_t_o?: ReceiverDTO;
    /**
     * 发货商品信息
     */
    item_list?: SptItemDTO[];
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
   * 发货商品信息
   */
  export interface SptItemDTO {
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品sku详情
     */
    sku?: string;
    /**
     * 商品url
     */
    url?: string;
    /**
     * 商品图片详情
     */
    picture?: string;
    /**
     * 商品数量
     */
    num?: number;
    /**
     * 发货状态，0：未发货，1：已发货
     */
    delivery_status?: number;
    /**
     * 商品编码
     */
    code?: string;
    /**
     * 订单商品id
     */
    order_item_id?: number;
    /**
     * 商品运单号信息
     */
    express_info?: string;
    /**
     * 商品维权状态
     */
    feedback_status?: number;
  }

}
