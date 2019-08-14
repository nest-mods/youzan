// tslint:disable:max-line-length variable-name
export namespace BeautyItemMeiGoodsProductUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分组ID
     */
    category: number;
    /**
     * 成本价，单位：分
     */
    cost_price?: number;
    /**
     * 商品ID
     */
    goods_id: number;
    /**
     * 商品编号/条形码
     */
    goods_no: string;
    /**
     * 商品图片列表
     */
    goods_pictures?: MeiGoodsPictureInfo[];
    /**
     * 服务规格信息列表
     */
    goods_skus?: MeiGoodsSkuInfo[];
    /**
     * 产品ID
     */
    item_id: number;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 服务详情 支持富文本
     */
    memo?: string;
    /**
     * 服务名称
     */
    name: string;
    /**
     * 是否上架 1 是 0 否
     */
    on_shelve?: number;
    /**
     * 运费，单位：分
     */
    postage?: number;
    /**
     * 价格，有规格时不需要传这个参数
     */
    price?: number;
    /**
     * 服务简介 支持富文本
     */
    short_memo?: string;
    /**
     * 商品Sku图片信息列表，当规格需要设置图片时 需要传此参数
     */
    sku_images?: MeiSkuTreeImageInfo[];
    /**
     * 商品标签ID列表
     */
    tags?: number[];
  }

  /**
   *
   */
  export interface MeiGoodsPictureInfo {
    /**
     * 图片URL
     */
    image_url?: string;
  }

  /**
   *
   */
  export interface MeiGoodsSkuInfo {
    /**
     * 规格项编码
     */
    code?: string;
    /**
     *
     */
    goods_stock_sku_param_list?: MeiGoodsCreateSkuLeafReq[];
    /**
     * 价格
     */
    price?: number;
    /**
     * 规格项Id
     */
    sku_id?: number;
  }

  /**
   *
   */
  export interface MeiGoodsCreateSkuLeafReq {
    /**
     * 规格项目Id
     */
    key_id?: number;
    /**
     * 规格项目名称
     */
    key_name?: string;
    /**
     * 规格Id
     */
    value_id?: number;
    /**
     * 规格名称
     */
    value_name?: string;
  }

  /**
   *
   */
  export interface MeiSkuTreeImageInfo {
    /**
     * 服务规格ID
     */
    id?: number;
    /**
     * 服务规格名称
     */
    name?: string;
    /**
     *
     */
    skuLeafList?: MeiSkuLeafImage[];
  }

  /**
   *
   */
  export interface MeiSkuLeafImage {
    /**
     * 规格项ID
     */
    id?: number;
    /**
     * 规格图片URL
     */
    image_url?: string;
    /**
     * 规格项名称
     */
    name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 更新的商品ID
     */
    goods_id?: number;
  }

}
