// tslint:disable:max-line-length variable-name
export namespace LogisticsLogisticsExpressbyordernoSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 订单号
     */
    tid: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 物流详情列表
     */
    orderExpressList?: LogisticsGoodsOrderExpressModel[];
  }

  /**
   * 物流详情列表
   */
  export interface LogisticsGoodsOrderExpressModel {
    /**
     * id
     */
    id?: number;
    /**
     * 物流单号
     */
    nu?: string;
    /**
     * 物流公司编号
     */
    com?: string;
    /**
     * 无意义，请忽略
     */
    message?: string;
    /**
     * 无意义，请忽略
     */
    ep_condition?: string;
    /**
     * 查询结果状态
     */
    status?: string;
    /**
     * 0：在途 1：揽件 2：疑难 3：签收 4：退签 5：派件 6：退回
     */
    state?: number;
    /**
     * 投递的数据
     */
    data?: string;
    /**
     * 每条跟踪信息的时间
     */
    created_time?: number;
    /**
     * 物流id
     */
    express_id?: number;
  }

}
