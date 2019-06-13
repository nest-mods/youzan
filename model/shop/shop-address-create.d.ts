export namespace ShopShopAddressCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 详细地址
     */
    address: string;
    /**
     * 区
     */
    area: string;
    /**
     * 市
     */
    city: string;
    /**
     * 联系人
     */
    contact_name: string;
    /**
     * 是否发票地址
     */
    is_invoice?: number;
    /**
     * 是否默认发票地址
     */
    is_invoice_default?: number;
    /**
     * 是否退货地址
     */
    is_return?: number;
    /**
     * 是否默认退货地址
     */
    is_return_default?: number;
    /**
     * 手机号
     */
    mobile: string;
    /**
     * 省
     */
    province: string;
    /**
     * 地区id
     */
    region_id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
    /**
     * 新增的地址id
     */
    id?: number;
  }

}
