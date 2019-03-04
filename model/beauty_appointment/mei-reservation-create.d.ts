export namespace BeautyAppointmentMeiReservationCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 预约到店时间
     */
    arrive_at?: number;
    /**
     * 顾客姓名
     */
    customer_name?: string;
    /**
     * 预约的分店id
     */
    dept_id?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 顾客手机号
     */
    mobile?: string;
    /**
     * 备注信息
     */
    remark?: string;
    /**
     * 预约的服务项目
     */
    reservation_items?: MeiReservationItemEntity[];
  }

  /**
   * 
   */
  export interface MeiReservationItemEntity {
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 商品skuid
     */
    sku_id?: number;
    /**
     * 技师id
     */
    technician_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 预约单单号
     */
    order_no?: string;
  }

}
