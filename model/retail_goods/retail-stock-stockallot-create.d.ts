export namespace RetailGoodsRetailStockStockallotCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 调拨单商品明细
     */
    business_order_items?: OutStockAllotItem;
    /**
     * 调拨类型（11.店间调拨; 12.店内调拨）
     */
    business_type?: number;
    /**
     * 调拨出库仓库Id
     */
    from_kdt_id?: number;
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
    /**
     * 调拨入库仓库Id
     */
    to_kdt_id?: number;
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
     * 创建成功后的单据编号
     */
    response?: string;
  }

}
