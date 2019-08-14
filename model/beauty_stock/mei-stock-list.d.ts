// tslint:disable:max-line-length variable-name
export namespace BeautyStockMeiStockList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分类ID
     */
    category_id?: number;
    /**
     * 商品名称
     */
    item_title?: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页数量
     */
    page_size?: number;
    /**
     * 仓库ID
     */
    ware_house_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: MeiPaginator;
    /**
     * 商品库存信息列表
     */
    items?: MeiItemSkuStockResponseDTOV2[];
  }

  /**
   * 分页信息
   */
  export interface MeiPaginator {
    /**
     * 总记录数
     */
    total_count?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页显示的记录数
     */
    page_size?: number;
  }

  /**
   * 商品库存信息列表
   */
  export interface MeiItemSkuStockResponseDTOV2 {
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * 商品类型
     */
    item_type?: number;
    /**
     * 商品图片
     */
    image_url?: string;
    /**
     * 规格ID
     */
    sku_id?: number;
    /**
     * 可用库存
     */
    available_quantity?: number;
    /**
     * 物理库存
     */
    physical_quantity?: number;
    /**
     * 规格名称
     */
    sku_name?: string;
    /**
     * 商品名称
     */
    item_title?: string;
    /**
     * 负库存
     */
    negative_quantity?: number;
    /**
     * 规格码
     */
    sku_code?: string;
    /**
     * 锁定库存
     */
    locked_quantity?: number;
    /**
     * 状态
     */
    status?: number;
    /**
     * 商品分类信息
     */
    category?: MeiCategoryResponseDTO;
  }

  /**
   * 商品分类信息
   */
  export interface MeiCategoryResponseDTO {
    /**
     * 分类ID
     */
    id?: number;
    /**
     * 分类名称
     */
    name?: string;
  }

}
