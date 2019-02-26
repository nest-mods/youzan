export namespace RetailProductRetailOpenSkuGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source?: string;
    /**
     * 商品SKU编码
     */
    sku_code?: string;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品库存信息
     */
    response?: OpenSkuDTO;
  }

  /**
   * 商品库存信息
   */
  export interface OpenSkuDTO {
    /**
     * 仓库编码
     */
    warehouse_code?: string;
    /**
     * 类目id
     */
    category_id?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * sku条码
     */
    sku_no?: string;
    /**
     * sku编码
     */
    sku_code?: string;
    /**
     * 一品多码
     */
    bar_codes?: string[];
    /**
     * 建议零售价
     */
    retail_price?: string;
    /**
     * 销项税率
     */
    output_tax_rate?: string;
    /**
     * 进项税率
     */
    input_tax_tate?: string;
    /**
     * 库存
     */
    stock_num?: string;
    /**
     * 占用库存
     */
    order_num?: string;
    /**
     * 创建日期
     */
    create_time?: string;
    /**
     * 更新日期
     */
    update_time?: string;
    /**
     * 销售库存
     */
    sell_stock_num?: string;
    /**
     * 最后一次入库成本价
     */
    last_stock_in_cost?: string;
    /**
     * 平均入库成本
     */
    avg_stock_in_cost?: string;
    /**
     * 图片地址
     */
    photo_url?: string;
  }

}
