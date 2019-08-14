// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductSkusSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 返回属性（1, "商品基础信息"，3, "库存"）
     */
    attributes?: number[];
    /**
     * 批量筛选子类目id
     */
    category_ids?: number[];
    /**
     * 类目筛选的时候是否包括子类目
     */
    child_category?: boolean;
    /**
     * 库存低值预警
     */
    is_low_warning?: boolean;
    /**
     * 商品名称或商品编码
     */
    name_or_sku_no?: string;
    /**
     * 查询页面
     */
    page_no?: number;
    /**
     * 一页数量（最大为50）
     */
    page_size?: number;
    /**
     * 销售渠道过滤
     */
    selling_channel?: number;
    /**
     * 排序字段
     */
    sort_name?: string;
    /**
     * 排序顺序  1 升序 2 降序
     */
    sort_type?: number;
    /**
     * 来源
     */
    source?: string;
    /**
     * 仓库id(目前仅支持查询单仓)
     */
    warehouse_ids?: number[];
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
     * 实体对象
     */
    items?: SkuCenterSearchVO[];
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
   * 实体对象
   */
  export interface SkuCenterSearchVO {
    /**
     * 商品id
     */
    skuId?: number;
    /**
     * 关联的商户id
     */
    kdtId?: number;
    /**
     * 分类id
     */
    categoryId?: number;
    /**
     * 分类名称
     */
    categoryName?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 规格
     */
    specifications?: string;
    /**
     * 状态
     */
    status?: number;
    /**
     * 图片地址
     */
    photoUrl?: string;
    /**
     * 单位
     */
    unit?: string;
    /**
     * 编码
     */
    skuNo?: string;
    /**
     * 最后一次入库成本价
     */
    lastCostPrice?: number;
    /**
     * 平均成本价
     */
    avgCostPrice?: number;
    /**
     * 创建时间
     */
    createdAt?: Date;
    /**
     * 更新时间
     */
    updatedAt?: Date;
    /**
     * 销售渠道：1 未设置，2门店 4 网店 6 门店+网店
     */
    sellChannel?: number;
    /**
     * 库存数量
     */
    stockNum?: number;
    /**
     * 超卖数量
     */
    overSoldNum?: number;
    /**
     * 销售库存
     */
    sellStockCount?: number;
  }

}
