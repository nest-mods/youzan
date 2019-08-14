// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductOfflineCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否全量上下架状态(连锁版生效)
     * -1 未选择 默认
     *  0 下架
     * 1 上架
     */
    all_batch_operate?: number;
    /**
     * 分类id：单个销售商品使用关联的商品库商品的分类 组合销售 用户自己选择关联的分类
     */
    category_id?: number;
    /**
     * 组合商品关联关系
     * 例如：[{"related_combine_num":2000,"related_combine_price":1200,"related_combine_sku_id":7046628},{"related_combine_num":23000,"related_combine_price":1000,"related_combine_sku_id":7049994}]
     */
    combine_params?: OfflineCombineParam[];
    /**
     * 是否上架（0下架1上架）
     */
    display: number;
    /**
     * 商品编码
     * 组合商品生效  单个销售商品使用关联的商品库商品 spuNo
     */
    goods_no?: string;
    /**
     * 计量方式（0表示非称重，10表示称重）
     */
    measurement: number;
    /**
     * 门店商品名称（名称最多100个字）
     */
    name: string;
    /**
     * 图片地址（例如：[{"url":"upload_files/2016/05/16/FjvGju7UwGfol_yAXK3RzxOGelt0.png","id":"642430978","width":"300","height":"299"},{"url":"upload_files/2016/05/20/FgNkCcgqoGd_fMDPPCas1UIX3aCM.jpg","id":"644360875","width":"640","height":"379"}]）
     */
    photo_url?: string;
    /**
     * 商品库商品ID
     * 只支持 无规格商品关联
     * 后面会废弃掉该字段
     * 统一使用spu_id
     */
    relate_sku_id?: number;
    /**
     * 零售价(零售价最大为999999900分，零售价最小为1分)，单位：分
     */
    retail_price: number;
    /**
     * 下架分店id(连锁版生效)
     */
    sale_down_kdt_ids?: number[];
    /**
     * 上架分店id(连锁版生效)
     */
    sale_up_kdt_ids?: number[];
    /**
     * 销售库存
     * 组合商品需要传计算后的可售库存
     */
    sell_stock_count?: number;
    /**
     * 销售类型：1单个销售，2组合销售
     */
    sell_type?: number;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 规格定义 组合商品需要用户自己填写
     */
    specifications?: string;
    /**
     * 关联商品库商品spuId
     */
    spu_id?: number;
    /**
     * 门店商品sku定义
     */
    stocks?: OfflineStock[];
    /**
     * 商品单位
     * 组合商品生效  单个销售商品使用关联的商品库商品的单位
     */
    unit?: string;
  }

  /**
   *
   */
  export interface OfflineCombineParam {
    /**
     * 子商品 捆绑数量 (最大为100000,最少为0.1,支持两位小数,实际传输值*100)
     */
    related_combine_num?: number;
    /**
     * 子商品分摊价格 （范围：0-9999999元 单位：分）
     */
    related_combine_price?: number;
    /**
     * 组合商品子商品商品库商品id
     */
    related_combine_sku_id?: number;
  }

  /**
   *
   */
  export interface OfflineStock {
    /**
     * 建议指导价上限
     */
    max_guide_price?: number;
    /**
     * 建议指导价下限
     */
    min_guide_price?: number;
    /**
     * 零售价(零售价最大为999999900分，零售价最小为1分)，单位：分
     */
    price?: number;
    /**
     * 关联的商品库商品spuId
     */
    related_item_id?: number;
    /**
     * 关联的商品库商品skuId
     */
    related_sku_id?: number;
    /**
     * 可售库存
     */
    sell_stock_count?: number;
    /**
     * 门店商品规格id 更新时回传
     */
    sku_id?: number;
    /**
     *
     */
    specs?: SpecKeyValue[];
    /**
     * 组合商品Id
     */
    spu_combine_id?: number;
  }

  /**
   *
   */
  export interface SpecKeyValue {
    /**
     * 规格属性名称
     */
    k?: string;
    /**
     * 规格属性id
     */
    kId?: number;
    /**
     * 规格值名称
     */
    v?: string;
    /**
     * 规格值id
     */
    vId?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 门店商品id
     */
    item_id?: number;
    /**
     * 门店规格id列表
     */
    sku_ids?: number[];
  }

}
