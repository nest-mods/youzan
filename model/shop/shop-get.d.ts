// tslint:disable:max-line-length variable-name
export namespace ShopShopGet {
  /**
   * 请求参数
   */
  export interface Request {
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 店铺名字
     */
    name?: string;
    /**
     * 店铺LOGO
     */
    logo?: string;
    /**
     * 店铺简介
     */
    intro?: string;
    /**
     * 店铺类型：0微商城，7零售，...
     */
    type?: string;
  }

}
