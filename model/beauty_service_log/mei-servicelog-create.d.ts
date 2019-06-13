export namespace BeautyServiceLogMeiServicelogCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 日志内容
     */
    content?: string;
    /**
     * 日志中上传的图片附件
     */
    imgs?: string[];
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 顾客的yzUid
     */
    member_id: number;
    /**
     * 关联的订单号
     */
    source_no?: string;
    /**
     * 关联的工单号
     */
    work_order_no?: string;
  }

  export type Response = void;

}
