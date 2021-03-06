// tslint:disable:max-line-length variable-name
export namespace RetailProductRetailOpenSpuCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 类目ID
     */
    category_id?: number;
    /**
     * 进项税率
     */
    input_tax_rate?: string;
    /**
     * 商品名称
     */
    name: string;
    /**
     * 销项税率
     */
    output_tax_rate?: string;
    /**
     * 图片地址
     */
    photo_url?: string;
    /**
     * 建议零售价（单位：元）
     */
    retail_price?: string;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
    /**
     * 商品规格列表
     */
    skus?: OpenSkuCreate[];
    /**
     * 规格定义
     */
    spec_define_tuple?: SpecDefineTuple[];
    /**
     * 商品编码
     */
    spu_code?: string;
    /**
     * 商品条码
     */
    spu_no?: string;
    /**
     * 单位
     */
    unit: string;
  }

  /**
   *
   */
  export interface Long {
  }

  /**
   *
   */
  export interface OpenSkuCreate {
    /**
     * 建议零售价（单位：元）
     */
    retail_price?: string;
    /**
     * sku编码
     */
    sku_code?: string;
    /**
     *
     */
    sku_id?: number;
    /**
     * sku条码
     */
    sku_no?: string;
    /**
     *
     */
    specs?: OpenSpec[];
  }

  /**
   *
   */
  export interface Long {
  }

  /**
   *
   */
  export interface OpenSpec {
    /**
     * 规格名称
     */
    name?: string;
    /**
     * 规格值
     */
    value?: string;
  }

  /**
   *
   */
  export interface SpecDefineTuple {
    /**
     *
     */
    key?: Keys;
    /**
     *
     */
    values?: Values[];
  }

  /**
   *
   */
  export interface Keys {
    /**
     * 规格名称
     */
    k?: string;
    /**
     * 规格ID
     */
    kId?: number;
  }

  /**
   *
   */
  export interface Values {
    /**
     * 规格值
     */
    v?: string;
    /**
     * 规格值对应ID
     */
    vId?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * spu编码
     */
    response?: string;
  }

}
