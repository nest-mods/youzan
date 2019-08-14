// tslint:disable:max-line-length variable-name
export namespace SupplierFenxiaoSupportOrderDeliver {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 操作人id
     */
    admin_id?: number;
    /**
     * 物流公司id
     */
    express_id: number;
    /**
     * 物流公司名称
     */
    express_name?: string;
    /**
     * 物流单号
     */
    express_no: string;
    /**
     * 店铺kdtid
     */
    kdt_id?: number;
    /**
     * 操作人姓名
     */
    operator_name?: string;
    /**
     * 操作人角色(seller| buyer | admin)
     */
    operator_role?: string;
    /**
     * 订单发货商品id列表（不填则订单所有商品发货）
     */
    order_item_ids?: number[];
    /**
     * 精选订单号
     */
    order_no: string;
    /**
     * 请求来源ip
     */
    request_ip?: string;
    /**
     * 请求来源
     */
    source_from?: string;
    /**
     * 请求来源说明
     */
    source_remark?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 发货包裹id
     */
    response?: number;
  }

}
