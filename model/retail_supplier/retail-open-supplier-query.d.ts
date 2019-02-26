export namespace RetailSupplierRetailOpenSupplierQuery {
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
     * 零售来源
     */
    retail_source?: string;
    /**
     * 供应商名称
     */
    supplier_name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 供应商信息列表
     */
    suppliers?: OpenVendorDTO;
    /**
     * 分页信息
     */
    paginator?: OpenPaginatorDTO;
  }

  /**
   * 供应商信息列表
   */
  export interface OpenVendorDTO {
    /**
     * 供应商名称
     */
    supplier_name?: string;
    /**
     * 供应商编码
     */
    supplier_code?: string;
    /**
     * 公司电话
     */
    phone?: string;
    /**
     * 联系人
     */
    contacts?: string;
    /**
     * 联系人电话
     */
    contacts_phone?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * qq号
     */
    qq?: string;
    /**
     * 微信号
     */
    wei_xin?: string;
    /**
     * 传真
     */
    fax?: string;
    /**
     * 邮箱
     */
    email?: string;
  }

  /**
   * 分页信息
   */
  export interface OpenPaginatorDTO {
    /**
     * 页码
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 总数
     */
    total_count?: number;
  }

}
