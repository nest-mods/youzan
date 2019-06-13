export namespace RetailGoodsRetailProductSkuCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品库商品所属分类id
     */
    category_id: number;
    /**
     * 成本价（成本价最大为9999999元。单位：分）
     */
    cost_price?: number;
    /**
     * 商品库商品名称（名称最多100个字）
     */
    name: string;
    /**
     * 外部id 用于第三方关联商品库商品（最长64个字符）
     */
    out_id?: string;
    /**
     * 图片地址
     */
    photo_url?: string;
    /**
     * 商品库商品编码（最多20个字符，仅限英文字符与数据组合。如果为空，系统自动生成）
     */
    sku_no?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 商品库商品规格（规格最多100个字）
     */
    specifications?: string;
    /**
     * 库存数量（初始库存量最大为100000）
     */
    stock_num?: number;
    /**
     * 单位，如：克、千克
     */
    unit: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 创建成功的商品库商品id
     */
    sku_id?: number;
  }

}
