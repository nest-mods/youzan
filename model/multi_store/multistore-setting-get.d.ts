// tslint:disable:max-line-length variable-name
export namespace MultiStoreMultistoreSettingGet {
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
     * 0表示关闭多门店，1表示开启多门店
     */
    status?: number;
    /**
     * 设为总店的网点id
     */
    default_offline_id?: number;
    /**
     * 1表示开启独立库存，0表示关闭。（注意：独立价格和独立库存必须同时开启，同时关闭）
     */
    separate_stock?: number;
    /**
     * 1表示开启独立价格，0表示关闭。（注意：独立价格和独立库存必须同时开启，同时关闭）
     */
    separate_price?: number;
    /**
     * 1表示开启商品售罄时推荐可售网点，0表示关闭
     */
    sold_out_recommend?: number;
  }

}
