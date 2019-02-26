export namespace StoredValueCardCardvoucherValuecardInfoQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 用户buyer_id（mobile、 buyer_id 不能同时为空）
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 用户mobile（mobile、 buyer_id 不能同时为空）
     */
    mobile?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * buyer_id
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 赠送金余额
     */
    bonus_denomination?: number;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 本金余额
     */
    principal_denomination?: number;
    /**
     * 余额
     */
    denomination?: number;
    /**
     * 发卡店铺号
     */
    kdt_id?: number;
  }

}
