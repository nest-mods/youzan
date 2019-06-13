export namespace TradeDeliveryTradeDcDeliveryOrdersingleitemsend {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 包裹信息
     */
    ex_packages: ExPackage[];
    /**
     * 待发货的商品交易明细编号
     */
    oid: number;
    /**
     * 请求唯一标识
     */
    request_id: string;
    /**
     * 订单号
     */
    tid: string;
    /**
     * 商品总数量
     */
    total_num: number;
  }

  /**
   * 
   */
  export interface ExPackage {
    /**
     * 
     */
    express?: Express;
    /**
     * 该包裹内商品数量
     */
    num?: number;
    /**
     * 该包裹内商品重量
     */
    weight?: number;
  }

  /**
   * 
   */
  export interface Express {
    /**
     * 快递公司id
     */
    express_id?: number;
    /**
     * 快递公司名称
     */
    express_name?: string;
    /**
     * 快递单号
     */
    express_no?: string;
  }

  /**
   * 
   */
  export interface Long {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 单品多运单发货是否成功
     */
    is_success?: boolean;
  }

}
