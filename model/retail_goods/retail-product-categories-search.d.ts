// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductCategoriesSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品分类id列表（根据分类id查询时要传）
     */
    category_ids?: number[];
    /**
     * 商品分类层级(0代表所有子分类，1表示不需求子分类，2表示获取单层子分类)
     */
    level: number;
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
     * 分类详情列表
     */
    category_vo?: CategoryVO[];
  }

  /**
   * 分类详情列表
   */
  export interface CategoryVO {
    /**
     * 唯一性序列号
     */
    id?: number;
    /**
     * 关联的商户id
     */
    kdt_id?: number;
    /**
     * 父级节点的id
     */
    parent_id?: number;
    /**
     * 类目名称
     */
    name?: string;
    /**
     * 类型：1 根节点 ，2树枝节点 3叶子节点
     */
    type?: number;
    /**
     * 创建时间
     */
    created_at?: Date;
    /**
     * 更新时间
     */
    updated_at?: Date;
  }

}
