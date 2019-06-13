export namespace BeautyStockMeiStockCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 入库时间
     */
    io_time: number;
    /**
     * 入库商品信息
     */
    items: MeiCreateInventoryIoBillDetailDTO[];
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 操作人id 可空
     */
    operator_id?: number;
    /**
     * 操作人 可空
     */
    operator_name?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 仓库ID
     */
    ware_house_id: number;
  }

  /**
   * 
   */
  export interface MeiCreateInventoryIoBillDetailDTO {
    /**
     * 
     */
    before_negative_quantity?: number;
    /**
     * 
     */
    before_physical_quantity?: number;
    /**
     * 
     */
    image_url?: string;
    /**
     * 
     */
    input_price?: number;
    /**
     * 
     */
    input_total_pay?: number;
    /**
     * 
     */
    io_quantity?: number;
    /**
     * 
     */
    item_id?: number;
    /**
     * 
     */
    item_title?: string;
    /**
     * 
     */
    sku_code?: string;
    /**
     * 
     */
    sku_id?: number;
    /**
     * 
     */
    sku_name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 订单号
     */
    response?: string;
  }

}
