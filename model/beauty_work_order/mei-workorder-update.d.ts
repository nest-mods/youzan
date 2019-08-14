// tslint:disable:max-line-length variable-name
export namespace BeautyWorkOrderMeiWorkorderUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业登陆token
     */
    m_token: string;
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 目标状态：99： "取消"，0： "待服务"，30,："服务中"，40,："收款完成"，44,："技师操作完成"
     */
    to_state: number;
    /**
     * 工单号
     */
    work_no?: string;
  }

  export type Response = void;

}
