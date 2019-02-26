export namespace RetailProductRetailOpenSpuQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 截止时间(小于等于)
     */
    create_time_end?: string;
    /**
     * 起始时间(大于等于)
     */
    create_time_start?: string;
    /**
     * 页码信息
     */
    page_no?: number;
    /**
     * 每页数量
     */
    page_size?: number;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source?: string;
    /**
     * 销售渠道
  * 2=门店
  * 4=网店
     */
    sell_channels?: number[];
    /**
     * spu编码列表[SPUxxx1,SPUxxx2]
     */
    spu_codes?: string[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品spu信息列表
     */
    spus?: OpenSpuDTO;
    /**
     * 分页结果信息
     */
    paginator?: OpenPaginatorDTO;
  }

  /**
   * 商品spu信息列表
   */
  export interface OpenSpuDTO {
    /**
     * 类目ID
     */
    category_id?: string;
    /**
     * 类目名称
     */
    category_name?: string;
    /**
     * 商品名称
     */
    product_name?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * spu条码
     */
    spu_no?: string;
    /**
     * 一品多码
     */
    bar_codes?: string[];
    /**
     * 销售渠道
  * 2=门店,4=网店
     */
    sell_channels?: number[];
    /**
     * 创建时间
     */
    create_time?: string;
    /**
     * 修改时间
     */
    update_time?: string;
    /**
     * 商品SKU基础数据
     */
    skus?: OpenBaseSkuDTO;
    /**
     * spu编码
     */
    spu_code?: string;
    /**
     * 图片地址
     */
    photo_url?: string;
  }

  /**
   * 商品SKU基础数据
   */
  export interface OpenBaseSkuDTO {
    /**
     * 类目id
     */
    category_id?: string;
    /**
     * 类目名称
     */
    category_name?: string;
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
     * 创建日期
     */
    create_time?: string;
    /**
     * 更新日期
     */
    update_time?: string;
  }

  /**
   * 分页结果信息
   */
  export interface OpenPaginatorDTO {
    /**
     * 页码
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 总数
     */
    total_count?: number;
  }

}
