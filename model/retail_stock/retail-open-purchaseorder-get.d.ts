// tslint:disable:max-line-length variable-name
export namespace RetailStockRetailOpenPurchaseorderGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 采购单号
     */
    purchase_order_no: string;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 采购单
     */
    response?: OpenPurchaseOrderDTO;
  }

  /**
   * 采购单
   */
  export interface OpenPurchaseOrderDTO {
    /**
     * 采购单号
     */
    purchase_order_no?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
    /**
     * 仓库名称
     */
    warehouse_name?: string;
    /**
     * 供应商编码
     */
    supplier_code?: string;
    /**
     * 供应商名称
     */
    supplier_name?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 含税成本价总价
     */
    with_tax_total_cost?: string;
    /**
     * 不含税成本价总价
     */
    without_tax_total_cost?: string;
    /**
     * 采购申请单明细
     */
    order_items?: OpenPurchaseOrderItemDTO[];
  }

  /**
   * 采购申请单明细
   */
  export interface OpenPurchaseOrderItemDTO {
    /**
     * sku编码
     */
    sku_code?: string;
    /**
     * sku条码
     */
    sku_no?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 申请数量
     */
    apply_num?: string;
    /**
     * 实际入库数量
     */
    actual_in_num?: string;
    /**
     * 含税成本价
     */
    with_tax_unit_cost?: string;
    /**
     * 含税成本价总价
     */
    with_tax_total_cost?: string;
    /**
     * 不含税成本价
     */
    without_tax_unit_cost?: string;
    /**
     * 不含税成本价总价
     */
    without_tax_total_cost?: string;
    /**
     * 销项税率
     */
    output_tax_rate?: string;
    /**
     * 进项税率
     */
    input_tax_rate?: string;
  }

}
