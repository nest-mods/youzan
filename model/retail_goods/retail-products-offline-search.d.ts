export namespace RetailGoodsRetailProductsOfflineSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 批量筛选类目id
     */
    category_ids?: number[];
    /**
     * 类目筛选的时候是否包括子类目
     */
    child_category?: boolean;
    /**
     * 销售端产品状态（0:下架 1:上架）
     */
    is_displays?: number[];
    /**
     * 称重类型（0计量, 10称重）
     */
    measurement?: number;
    /**
     * 商品名称或商品编码
     */
    name_or_sku_no?: string;
    /**
     * 查询页面
     */
    page_no?: number;
    /**
     * 一页数量（最大50）
     */
    page_size?: number;
    /**
     * 售罄状态（  
  *   * 0: 在售, 对内表示sold_status in (0, 1, 3)
  *    * 1: 售罄或部分售罄,对内表示 sold_status in (2, 3)
  *    * 2： 全部，等同于不填
  *    * 3: 有赞出售中，对内表示 1 出售中, 3 部分售罄
  *    * 4. 有赞全部，对内表示：1, 2 全部售罄, 3
  *    * 5. 全部售罄：对内: sold_status = 2
  *    * 6. 部分售罄：对内： sold_status = 3）
     */
    show_sold_out?: number;
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
     * 分页信息
     */
    paginator?: Paginator;
    /**
     * 门店商品搜索结果实体信息
     */
    items?: OfflineProductSearchVO[];
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

  /**
   * 门店商品搜索结果实体信息
   */
  export interface OfflineProductSearchVO {
    /**
     * 分类id
     */
    category_id?: number;
    /**
     * 分类名称
     */
    category_name?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 门店商品编码（废弃）
     */
    sku_no?: string;
    /**
     * 计量方式（0：计数，10：计重）
     */
    measurement?: number;
    /**
     * 门店商品id
     */
    item_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 门店商品名称
     */
    title?: number;
    /**
     * 门店商品单位
     */
    unit?: string;
    /**
     * 门店商品图片
     */
    photo_url?: string;
    /**
     * 零售价，单位：分
     */
    price?: number;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
    /**
     * 销售库存（实际库存量*1000返回）
     */
    sell_stock_count?: number;
    /**
     * 商品编码
     */
    spu_no?: string;
    /**
     * 销售类型（0:单个销售 ，1:组合销售）
     */
    Sell_type?: number;
    /**
     * 是否多规格
     */
    has_multi_sku?: boolean;
    /**
     * 门店、网店规格信息
     */
    item_sku_models?: ItemSkuModelVO[];
  }

  /**
   * 门店、网店规格信息
   */
  export interface ItemSkuModelVO {
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * skuId
     */
    sku_id?: number;
    /**
     * 规格描述 JSON
     */
    specs?: string;
    /**
     * 价格 单位：分
     */
    price?: number;
    /**
     * 关联商品库商品spuId
     */
    related_item_id?: number;
    /**
     * 关联商品库商品skuId
     */
    related_sku_id?: number;
  }

}
