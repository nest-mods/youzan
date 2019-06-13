export namespace BeautyWorkOrderMeiWorkorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业登陆token
     */
    m_token: string;
    /**
     * 工单号
     */
    work_no: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 工单结束时间戳
     */
    finish_at?: number;
    /**
     * 预约人手机号
     */
    reserve_guest_mobile?: string;
    /**
     * 预约人名称
     */
    reserve_guest_name?: string;
    /**
     * 商品名称
     */
    item_name?: string;
    /**
     * 工单号
     */
    work_no?: string;
    /**
     * sku规格id
     */
    sku_id?: number;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 商品id
     */
    goods_id?: number;
    /**
     * 工单创建时间
     */
    created_at?: number;
    /**
     * 工单服务开始时间
     */
    start_at?: number;
    /**
     * 是否删除
     */
    is_delete?: number;
    /**
     * 商品在订单中的序号
     */
    item_index?: number;
    /**
     * 员工id
     */
    staff_id?: number;
    /**
     * 工单状态：99： "取消"，0： "待服务"，30,："服务中"，40,："收款完成"，44,："技师操作完成"
     */
    state?: number;
  }

}
