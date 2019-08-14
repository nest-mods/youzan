// tslint:disable:max-line-length variable-name
export namespace CouponUmpCouponConsumeVerify {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 买家端的优惠券/优惠码核销码
     */
    code: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    is_success?: boolean;
  }

}
