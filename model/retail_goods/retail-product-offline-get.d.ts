// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductOfflineGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 门店商品id
     */
    item_id: number;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 门店商品详情
     */
    offline_vo?: OfflineProductVO;
  }

  /**
   * 门店商品详情
   */
  export interface OfflineProductVO {
    /**
     * ic中的商品id
     */
    id?: number;
    /**
     * 商品库中的商品id（废弃）
     */
    sku_center_id?: number;
    /**
     * 关联商户id
     */
    kdt_id?: number;
    /**
     * 分类id
     */
    category_id?: number;
    /**
     * 名称
     */
    name?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 图片地址
     */
    photo_url?: string;
    /**
     * 编码（废弃）
     */
    sku_no?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 计量方式
     */
    measurement?: number;
    /**
     * 最后一次入库成本价(保留两位小数，实际传参*100后传入，如实际最后一次入库成本价2.22，实际传参为222)
     */
    last_cost_price?: number;
    /**
     * 平均成本价零售价(保留两位小数，实际传参*100后传入，如实际平均成本价2.22，实际传参为222)
     */
    avg_cost_price?: number;
    /**
     * 零售价(保留两位小数，实际传参*100后传入，如实际零售价2.22，实际传参为222)
     */
    retail_price?: number;
    /**
     * 可售库存(保留三位小数，实际传参*1000后传入，如实际库存1.111，实际传参为1111)
     */
    sell_stock_count?: number;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
    /**
     * 商品库商品id
     */
    spu_id?: number;
    /**
     * 商品编码
     */
    goods_no?: string;
    /**
     * 在售门店列表
     */
    on_sale_kdt_ids?: number[];
    /**
     * 是否上架 1：上架状态 0:未上架
     */
    is_display?: number;
    /**
     * 组合商品关联关系详情
     */
    combine_models?: OfflineCombineVO[];
    /**
     * 门店商品规格明细
     */
    item_sku_models?: OfflineSkuModel[];
  }

  /**
   * 组合商品关联关系详情
   */
  export interface OfflineCombineVO {
    /**
     * 组合商品关联的商品库商品skuId
     */
    related_combine_sku_id?: number;
    /**
     * 组合商品关联的商品库商品spuId
     */
    related_combine_item_id?: number;
    /**
     * 组合数量
     */
    related_combine_num?: number;
    /**
     * 组合商品关联的商品库商品编码
     */
    sku_no?: string;
    /**
     * 组合商品名称
     */
    name?: string;
    /**
     * 分摊价格
     */
    related_combine_price?: number;
  }

  /**
   * 门店商品规格明细
   */
  export interface OfflineSkuModel {
    /**
     * 商品规格id
     */
    sku_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 售价
     */
    price?: number;
    /**
     * 第一个规格值id
     */
    s1?: number;
    /**
     * 第二个规格值id
     */
    s2?: number;
    /**
     * 第三个规格值id
     */
    s3?: number;
    /**
     * 第四个规格值id
     */
    s4?: number;
    /**
     * 第五个规格值id
     */
    s5?: number;
    /**
     * 规格名称（组合商品有效）
     */
    name?: string;
    /**
     * 关联的商品库商品skuid
     */
    related_sku_id?: number;
    /**
     * 关联的商品库商品spuid
     */
    related_item_id?: number;
    /**
     * 关联的商品库商品最后一次入库价
     */
    last_cost_price?: number;
    /**
     * 关联的商品库商品平均成本价
     */
    avg_cost_price?: number;
  }

}
