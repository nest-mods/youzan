// tslint:disable:max-line-length variable-name
export namespace BeautyAppointmentMeiReservationCancel {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 预约单所在的分店id
     */
    dept_id: number;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 要取消的预约单单号
     */
    order_no: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 预约取消结果
     */
    is_success?: boolean;
  }

}
