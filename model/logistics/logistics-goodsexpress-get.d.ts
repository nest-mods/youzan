export namespace LogisticsLogisticsGoodsexpressGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 快递公司id
     */
    express_id?: number;
    /**
     * 物流单号
     */
    express_no?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 物流公司编号
     */
    com?: string;
    /**
     * 每条跟踪信息的时间
     */
    created_time?: number;
    /**
     * 物流id
     */
    express_id?: number;
    /**
     * 店铺Id
     */
    kdt_id?: number;
    /**
     * 投递的数据
     */
    data?: string;
    /**
     * 物流单号
     */
    nu?: string;
    /**
     * 条件
     */
    ep_condition?: string;
    /**
     * 编号id
     */
    id?: number;
    /**
     * 0：在途 1：揽件 2：疑难 3：签收 4：退签 5：派件 6：退回
     */
    state?: number;
    /**
     * 信息
     */
    message?: string;
    /**
     * 订单id
     */
    order_id?: number;
    /**
     * 查询结果状态:0：物流单暂无结果，1：查询成功，2：接口出现异常
     */
    status?: string;
    /**
     * 物流公司名称
     */
    name?: string;
  }

}
