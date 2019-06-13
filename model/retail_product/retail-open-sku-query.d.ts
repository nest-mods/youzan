export namespace RetailProductRetailOpenSkuQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码，page_no从1开始
     */
    page_no?: number;
    /**
     * 每页记录数，page_size默认20，最大也是20
     */
    page_size?: number;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
    /**
     * sku_code列表
     */
    sku_codes?: string[];
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
     * 分页商品信息
     */
    skus?: OpenSkuDTO[];
    /**
     * 分页信息
     */
    paginator?: Paginator;
  }

  /**
   * 分页商品信息
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

  /**
   * 分页信息
   */
  export interface Paginator {
    /**
     * 页码
     */
    page?: number;
    /**
     * 数量
     */
    size?: number;
    /**
     * 总条数
     */
    totalCount?: number;
  }

}
