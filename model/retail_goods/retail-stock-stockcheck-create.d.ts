// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailStockStockcheckCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 盘点时间
     */
    business_time?: string;
    /**
     * 幂等单号（请求唯一标识）
     */
    idempotent_no?: string;
    /**
     * 是否完成盘点（默认false）
     */
    is_finish?: boolean;
    /**
     * 操作人名称
     */
    operator_name?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 盘点明细
     */
    stock_check_create_items?: StockCheckItemCreateRequest[];
    /**
     * 门店或独立仓id   注意：连锁版必填
     */
    warehouse_id?: number;
  }

  /**
   *
   */
  export interface StockCheckItemCreateRequest {
    /**
     * 商品名称
     */
    productName?: string;
    /**
     * 系统实际库存
     */
    realAmount?: number;
    /**
     * 实际库存str类型
     */
    realAmountStr?: string;
    /**
     *
     */
    skuId?: number;
    /**
     * sku编码
     */
    skuNo?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 单位
     */
    unit?: string;
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
     * 盘点单号
     */
    business_order_no?: string;
  }

}
