export namespace BeautyStockMeiStockGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品ID
     */
    item_id?: number;
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
     * 规格ID
     */
    sku_id?: number;
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
     * 库存信息列表
     */
    items?: MeiInventoryInfoDTO[];
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
   * 库存信息列表
   */
  export interface MeiInventoryInfoDTO {
    /**
     * 可用库存
     */
    available_delivery_quantity?: number;
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * 物理库存
     */
    physical_quantity?: number;
    /**
     * 仓库名称
     */
    ware_house_name?: string;
    /**
     * 仓库ID
     */
    ware_house_id?: number;
    /**
     * 规格ID
     */
    sku_id?: number;
    /**
     * 店铺ID
     */
    dept_id?: number;
    /**
     * 锁定库存
     */
    to_delivery_quantity?: number;
    /**
     * 负库存
     */
    negative_quantity?: number;
  }

}
