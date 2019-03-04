export namespace RetailGoodsRetailStockGoodsapplyCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据明细
     */
    business_order_items?: OutStockAllotItem[];
    /**
     * 幂等单号
     */
    idempotent_no?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 请求来源
     */
    retail_source?: string;
  }

  /**
   * 
   */
  export interface OutStockAllotItem {
    /**
     * 申请数量
     */
    apply_num?: number;
    /**
     * 商品名称
     */
    picture_name?: string;
    /**
     * 商品图片
     */
    picture_url?: string;
    /**
     * 商品id
     */
    sku_id?: number;
    /**
     * 商品条码
     */
    sku_no?: string;
    /**
     * 规格信息
     */
    specifications?: string;
    /**
     * 单位
     */
    unit?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 成功创建的单据号
     */
    response?: string;
  }

}
