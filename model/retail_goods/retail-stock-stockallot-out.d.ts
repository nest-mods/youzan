export namespace RetailGoodsRetailStockStockallotOut {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 单据编号
     */
    biz_bill_no?: string;
    /**
     * 出库仓库kdtId
     */
    from_kdt_id?: number;
    /**
     * 具体来源
     */
    retail_source?: string;
    /**
     * 具体出库商品信息
     */
    stock_allot_out_items?: OutAllotOutItem;
  }

  /**
   * 
   */
  export interface OutAllotOutItem {
    /**
     * 实际出库数量
     */
    out_num?: number;
    /**
     * 商品skuId
     */
    sku_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 成功的单据号
     */
    response?: string;
  }

}
