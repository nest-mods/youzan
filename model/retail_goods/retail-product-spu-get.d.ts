export namespace RetailGoodsRetailProductSpuGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 查询参数
  * 1：库存信息
     */
    attributes?: number[];
    /**
     * 请求来源
  * 例如：OPEN—XXX
     */
    retail_source?: string;
    /**
     * 商品 spuId（与spu_no必须传一个）
     */
    spu_id?: string;
    /**
     * 商品编码（与spu_id必须传一个）
     */
    spu_no?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品详情
     */
    spu_vo?: SpuVO;
  }

  /**
   * 商品详情
   */
  export interface SpuVO {
    /**
     * 商品 id
     */
    spu_id?: number;
    /**
     * spu对应的sku_id
     */
    sku_id?: number;
    /**
     * 关联的商户id
     */
    kdt_id?: number;
    /**
     * 分类Id
     */
    category_id?: number;
    /**
     * 分类名称
     */
    category_name?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 规格定义
     */
    specifications?: string;
    /**
     * 图片地址
     */
    photo_url?: string;
    /**
     * 编码
     */
    spu_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 最后一次入库成本价（无规格时返回）
     */
    last_cost_price?: number;
    /**
     * 平均入库成本价 （无规格时返回）
     */
    avg_cost_price?: number;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
    /**
     * 实物库存量（无规格时返回）
     */
    stock_num?: number;
    /**
     * 可售库存量（无规格时返回）
     */
    sell_stock_count?: number;
    /**
     * 默认供应商ID
     */
    default_vendor_id?: number;
    /**
     * 外部编码
     */
    bar_codes?: string[];
    /**
     * 规格定义组
     */
    spec_define_tuple?: string;
    /**
     * 商品建议零售价
     */
    retail_price?: number;
    /**
     * sku详情
     */
    skus?: SkuVO;
  }

  /**
   * sku详情
   */
  export interface SkuVO {
    /**
     * 商品规格id
     */
    sku_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * spu id
     */
    spu_id?: number;
    /**
     * 商品建议零售价
     */
    retail_price?: number;
    /**
     * 商品实物库存
     */
    stock_num?: number;
    /**
     * 商品销售库存
     */
    sell_stock_count?: number;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 规格创建时间
     */
    created_at?: Date;
    /**
     * 规格更新时间
     */
    updated_at?: Date;
    /**
     * 最后一次入库成本价
     */
    last_cost_price?: number;
    /**
     * 平均入库成本价
     */
    avg_cost_price?: number;
    /**
     * 一品多码
     */
    bar_codes?: string[];
    /**
     * 规格定义
     */
    specs?: SpecKeyValue;
  }

  /**
   * 规格定义
   */
  export interface SpecKeyValue {
    /**
     * 规格项id
     */
    kId?: number;
    /**
     * 规格项名称
     */
    k?: string;
    /**
     * 规格值id
     */
    vId?: number;
    /**
     * 规格值名称
     */
    v?: string;
  }

}
