// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailStockVendorsSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 供应商名称
     */
    name?: string;
    /**
     * 名称or手机
     */
    name_or_phone?: string;
    /**
     * 是否仅启用
     */
    only_enable?: boolean;
    /**
     * 分页index
     */
    page_no?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 调用来源
     */
    source: string;
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
     * 供应商详情
     */
    items?: VendorVO[];
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
   * 供应商详情
   */
  export interface VendorVO {
    /**
     * qq
     */
    qq?: string;
    /**
     * 联系人电话
     */
    contacts_phone?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 微信
     */
    wei_xin?: string;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 更新时间
     */
    updated_at?: number;
    /**
     * 供应商编码
     */
    sno?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 供应商id
     */
    vendor_id?: number;
    /**
     * 供应商名称
     */
    name?: string;
    /**
     * 传真
     */
    fax?: string;
    /**
     * 联系人名称
     */
    contacts?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 状态
     */
    status?: number;
  }

}
