export namespace BeautyAppointmentMeiReservationTimeRangeGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要查询的日期
     */
    date?: number;
    /**
     * 分店id
     */
    dept_id?: number;
    /**
     * 美业token
     */
    m_token?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 可预约开始时间
     */
    reservation_start_time?: number;
    /**
     * 可预约结束时间
     */
    reservation_end_time?: number;
    /**
     * 不可预约时间段列表
     */
    unreservable_time?: MeiUnreservableTime[];
  }

  /**
   * 不可预约时间段列表
   */
  export interface MeiUnreservableTime {
    /**
     * 不可预约开始时间
     */
    start_time?: number;
    /**
     * 不可预约结束时间
     */
    end_time?: number;
    /**
     * 不可预约原因
  * 101 已经被预约满的不可预约时间
  * 102 商家定义的不可预约时间
     */
    status?: number;
  }

}
