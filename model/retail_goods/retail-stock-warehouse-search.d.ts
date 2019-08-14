// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailStockWarehouseSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 分页时的页码
     */
    page_no?: number;
    /**
     * 一页展示的数量
     */
    page_size?: number;
    /**
     * 查询可以设置期初库存的仓库列表，该参数为true时，分页参数不生效
     */
    query_can_init?: boolean;
    /**
     * 是否为门店场景要查询总部仓库信息，query_can_init,warehouse_ids时该参数不生效
     */
    query_group?: boolean;
    /**
     * 查询类型，
     * 1:只查询基础信息（不包含仓库名称，地址）单次插询数量无限制
     * 2:查询仓库名称地址信息。单次查询最大100.
     * 3.查询包含仓库名称地址及物流供货相关信息，单次数量最大20
     */
    query_type?: number;
    /**
     * 来源
     */
    retail_source: string;
    /**
     * 仓库状态 0:启用 1:停用
     */
    status?: number;
    /**
     * 仓库类型 1:独立仓  2:门店仓
     */
    type?: number;
    /**
     * 仓库ID列表，传递该参数时，分页参数不生效
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
     * 仓库信息列表
     */
    items?: WarehouseDetailVO[];
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
   * 仓库信息列表
   */
  export interface WarehouseDetailVO {
    /**
     * 仓库kdtId
     */
    warehouse_id?: number;
    /**
     * 总部kdtId
     */
    group_id?: number;
    /**
     * 仓库状态  0:启用   1:停用
     */
    status?: number;
    /**
     * 仓库类型  1:独立仓  2:门店仓  3:虚拟仓
     */
    type?: number;
    /**
     * 仓库备注
     */
    remark?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 省份
     */
    province?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 区域
     */
    county?: string;
    /**
     * 区域id
     */
    county_id?: number;
    /**
     * 详细地址
     */
    address?: string;
    /**
     * 联系人姓名
     */
    contact_name?: string;
    /**
     * 手机号
     */
    contact_phone_num?: string;
    /**
     * 手机区号
     */
    contact_phone_code?: string;
    /**
     * 经度
     */
    lng?: string;
    /**
     * 纬度
     */
    lat?: string;
  }

}
