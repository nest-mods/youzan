export namespace BeautyAppointmentMeiReservationUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 预约时间
     */
    arrive_at?: number;
    /**
     * 预约的分店id
     */
    dept_id?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 预约的服务项目
     */
    reservation_items?: MeiReservationItemUpdateEntity[];
    /**
     * 预约单单号
     */
    reservation_order_no?: string;
  }

  /**
   * 
   */
  export interface MeiReservationItemUpdateEntity {
    /**
     * 预约的服务id
     */
    goods_id?: number;
    /**
     * 预约项id
     */
    reserve_item_id?: number;
    /**
     * 预约的服务的skuid
     */
    sku_id?: number;
    /**
     * 预约的技师id
     */
    technician_id?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 更新结果
     */
    is_success?: boolean;
  }

}
