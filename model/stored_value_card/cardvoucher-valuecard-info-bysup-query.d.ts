export namespace StoredValueCardCardvoucherValuecardInfoBysupQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 用户Id，和mobile二选一
     */
    buyer_id?: number;
    /**
     * 用户手机号码，和buyerId 二选一
     */
    mobile?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * buyerId
     */
    buyer_id?: number;
    /**
     * 店铺号
     */
    kdt_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 余额
     */
    denomination?: number;
    /**
     * 本金余额
     */
    principal_denomination?: number;
    /**
     * 赠送金余额
     */
    bonus_denomination?: number;
  }

}
