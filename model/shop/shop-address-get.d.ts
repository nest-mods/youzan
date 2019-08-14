// tslint:disable:max-line-length variable-name
export namespace ShopShopAddressGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 地址id
     */
    id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 地址id
     */
    id?: number;
    /**
     * 联系人
     */
    contact_name?: string;
    /**
     * 联系手机号
     */
    mobile?: string;
    /**
     * 地区类型
     */
    region_type?: string;
    /**
     * 地区id
     */
    region_id?: number;
    /**
     * 省市区
     */
    area?: string;
    /**
     * 详细地址
     */
    address?: string;
    /**
     * 是否是退货地址
     */
    is_return?: number;
    /**
     * 是否是发票地址
     */
    is_invoice?: number;
    /**
     * 是否是默认退货地址
     */
    is_return_default?: number;
    /**
     * 是否是默认发票地址
     */
    is_invoice_default?: number;
    /**
     * 手机区号
     */
    country_code?: string;
    /**
     * 创建时间
     */
    created_at?: string;
    /**
     * 更新时间
     */
    updated_at?: string;
  }

}
