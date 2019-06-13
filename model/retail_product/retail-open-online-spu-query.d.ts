export namespace RetailProductRetailOpenOnlineSpuQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分组查询
     */
    group_ids?: number[];
    /**
     * 上下架状态 取值范围 0:下架 1:上架 不传，默认是上架
     */
    is_displays?: number[];
    /**
     * 商品名称或条码
     */
    name_or_sku_no?: string;
    /**
     * 升序或降序，只能用两个值，"DESC" "ASC"，不传默认是DESC
     */
    order?: string;
    /**
     * 排序字段，不传默认按照创建时间排序  sold_num:总销量 sell_stock_count：可售库存 created_at：创建日期 num：序号
     */
    order_by?: string;
    /**
     * 页数(至少从第一页开始)
     */
    page_no?: number;
    /**
     * 每页条数(最大值为每页20条数据)
     */
    page_size?: number;
    /**
     * 零售调用来源(调用方和有赞约定的值)
     */
    retail_source: string;
    /**
     * 销售类型：1单个销售、2组合销售
     */
    sell_type?: number;
    /**
     * 售罄状态（需配合isDisplays使用）  0：在售  5：售罄
     */
    show_sold_out?: number;
    /**
     * 连锁多网店下查指定网店商品用
     */
    sub_kdt_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 零售店铺网店商品分页返回对象
     */
    response?: OpenOnlineSpuQueryResponse;
  }

  /**
   * 零售店铺网店商品分页返回对象
   */
  export interface OpenOnlineSpuQueryResponse {
    /**
     * 零售网店商品分页查询返回对象
     */
    online_spus?: OpenOnlineSpuSearchDTO[];
    /**
     * 分页信息
     */
    paginator?: OpenPaginatorDTO;
  }

  /**
   * 零售网店商品分页查询返回对象
   */
  export interface OpenOnlineSpuSearchDTO {
    /**
     * 网店商品id
     */
    item_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 标题
     */
    title?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 图片
     */
    picture?: string;
    /**
     * 价格（元）
     */
    price?: string;
    /**
     * 商品条码
     */
    item_no?: string;
    /**
     * 创建时间
     */
    create_time?: string;
    /**
     * 更新时间
     */
    update_time?: string;
    /**
     * 销售库存
     */
    sell_stock_count?: string;
    /**
     * 商品类型 0：普通商品 3：UMP降价拍 5：外卖商品 10：分销商品 20：会员卡商品 21：礼品卡商品 22：团购券 25：批发商品 30：收银台商品 31：知识付费商品 35：酒店商品 40：美业商品 60：虚拟商品 61：电子卡券
     */
    item_type?: number;
    /**
     * 销售类型：1单个销售、2组合销售
     */
    sell_type?: number;
    /**
     * 总销量
     */
    total_sold_num?: string;
    /**
     * 商品标编码
     */
    biz_mark_code?: string;
    /**
     * 商品标名称
     */
    biz_mark_name?: string;
    /**
     * 税务编码
     */
    tax_code?: string;
    /**
     * 是否无规格
     */
    is_non_spec?: boolean;
    /**
     * 分组名称列表
     */
    groups?: number[];
    /**
     * 供应商店铺id
     */
    supplier_kdt_id?: number;
    /**
     * 供货商商品id
     */
    supplier_item_id?: number;
    /**
     * 1,发售中 2,已售罄 3,部分售罄
     */
    sold_status?: number;
    /**
     * 是否上架 1：上架状态 0:未上架
     */
    is_display?: number;
    /**
     * 是否开启多单位商品 0 非多单位 1 多单位
     */
    multi_unit_product?: number;
    /**
     * 购买地址
     */
    buy_url?: string;
    /**
     * 商家排序字段
     */
    num?: number;
    /**
     * 是否虚拟商品，0否, 2 虚拟商品， 3 电子卡券
     */
    is_virtual?: number;
  }

  /**
   * 分页信息
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
