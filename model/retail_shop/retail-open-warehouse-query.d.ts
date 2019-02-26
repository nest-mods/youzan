export namespace RetailShopRetailOpenWarehouseQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页条数
     */
    page_size?: number;
    /**
     * 零售调用来源（调用方和有赞约定的值）
     */
    retail_source?: string;
    /**
     * 1=独立仓, 2=门店
     */
    type?: number;
    /**
     * 仓库编码列表（该参数传值时，分页入参不生效）
     */
    warehouse_codes?: string[];
    /**
     * 仓库id列表（该参数传值时，分页入参不生效）
     */
    warehouse_ids?: number[];
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 仓库列表
     */
    warehouses?: Warehouses;
    /**
     * 分页信息
     */
    paginator?: Paginator;
  }

  /**
   * 仓库列表
   */
  export interface Warehouses {
    /**
     * 仓库唯一ID
     */
    warehouses_id?: string;
    /**
     * 仓库地址
     */
    address?: string;
    /**
     * 联系人姓名
     */
    contact_name?: string;
    /**
     * 联系人电话
     */
    contact_phone?: string;
    /**
     * 维度
     */
    lat?: string;
    /**
     * 经度
     */
    lng?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 仓库状态 0：启用 1：停用
     */
    status?: number;
    /**
     * 仓库类型 1：独立仓 2：门店仓
     */
    type?: number;
    /**
     * 仓库编码
     */
    warehouse_code?: string;
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

}
