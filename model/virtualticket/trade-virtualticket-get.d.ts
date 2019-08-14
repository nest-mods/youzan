// tslint:disable:max-line-length variable-name
export namespace VirtualticketTradeVirtualticketGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 电子卡券二维码的码号(扫用户核销的二维码)
     */
    code: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 虚拟号
     */
    code?: string;
    /**
     * 电子卡券列表
     */
    tickets?: Tickets[];
    /**
     * 创建时间
     */
    create_time?: Date;
    /**
     * 状态值； NOT_VERIFIED：未核销 VERIFIED：已核销 EXPIRED：已过期(ps.业务含义已过期,未核销的卡券且过了有效期的结束时间) REFUNDING：退款中
     */
    state?: string;
    /**
     * 订单号
     */
    tid?: string;
  }

  /**
   * 电子卡券列表
   */
  export interface Tickets {
    /**
     * 卡券状态
     */
    ticket_state?: string;
    /**
     * 电子卡券编码
     */
    ticket_code?: string;
    /**
     * 核销时间
     */
    verify_time?: Date;
  }

}
