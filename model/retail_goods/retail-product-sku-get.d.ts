export namespace RetailGoodsRetailProductSkuGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品 skuId
     */
    sku_id?: string;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品库商品实体类
     */
    sku_center_vo?: SkuCenterVO;
  }

  /**
   * 商品库商品实体类
   */
  export interface SkuCenterVO {
    /**
     * 销售渠道
     */
    sell_channel?: number;
    /**
     * 商品id
     */
    sku_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 分类id
     */
    category_id?: number;
    /**
     * 商品名称
     */
    name?: string;
    /**
     * 商品规格
     */
    specifications?: string;
    /**
     * 商品图片
     */
    photo_url?: string;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 单位名称
     */
    unit?: string;
    /**
     * 商品状态
     */
    status?: number;
    /**
     * 最后一次入库成本价
     */
    last_cost_price?: number;
    /**
     * 平均成本价
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
     * 实物库存
     */
    stock_num?: number;
    /**
     * 可售库存
     */
    sell_stock_count?: number;
    /**
     * 版本号
     */
    version?: number;
    /**
     * 商品库商品spuid
     */
    spu_id?: number;
  }

}
