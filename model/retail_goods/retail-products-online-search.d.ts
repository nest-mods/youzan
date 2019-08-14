// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductsOnlineSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分组查询
     */
    group_ids?: number[];
    /**
     * 上下架状态（0:下架 1:上架）
     */
    is_displays?: number[];
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
     * 售罄状态售罄状态
     *  (
     * 0: 在售, 对内表示sold_status in (0, 1, 3)
     *  1: 售罄或部分售罄,对内表示 sold_status in (2, 3)
     *  2： 全部，等同于不填
     *  3: 有赞出售中，对内表示 1 出售中, 3 部分售罄
     *  4. 有赞全部，对内表示：1, 2 全部售罄, 3
     *  5. 全部售罄：对内: sold_status = 2
     *  6. 部分售罄：对内： sold_status = 3）
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
     * 网店商品搜索结果实体信息
     */
    items?: OnlineProductSearchVO[];
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
   * 网店商品搜索结果实体信息
   */
  export interface OnlineProductSearchVO {
    /**
     * 网店商品id
     */
    item_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 商品名称
     */
    title?: string;
    /**
     * 商品图片url（多图片返回首图）
     */
    photo_url?: string;
    /**
     * 零售价，单位：分
     */
    price?: number;
    /**
     * 商品创建时间
     */
    created_at?: Date;
    /**
     * 商品更新时间
     */
    updated_at?: Date;
    /**
     * 销售库存
     */
    sell_stock_count?: number;
    /**
     * 商品h5页面url
     */
    display_url?: string;
    /**
     * 是否为虚拟商品
     */
    is_virtual?: number;
  }

}
