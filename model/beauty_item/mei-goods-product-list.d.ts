export namespace BeautyItemMeiGoodsProductList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分类Id
     */
    category_id?: number;
    /**
     * 是否包含分类信息
     */
    contain_category_info?: number;
    /**
     * 是否包含规格信息
     */
    contain_sku_info?: number;
    /**
     * 是否售罄
     */
    contain_sold_out?: number;
    /**
     * 是否包含规格项信息
     */
    contain_spec_tree?: number;
    /**
     * 是否包含库存
     */
    contain_stock?: number;
    /**
     * 是否包含分类信息
     */
    contain_tag_info?: number;
    /**
     * 商品名称
     */
    goods_name?: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页数目
     */
    page_size?: number;
    /**
     * 售卖属性 1, "销售" 2, "售罄" 3, "部分售罄"
     */
    sold_out?: number;
    /**
     * 上下架 1, "上架" 2, "下架"
     */
    status?: number;
    /**
     * 标签id
     */
    tag_id?: number;
  }

  export type Response = void;

}
