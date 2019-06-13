export namespace StoredValueCardCardvoucherValuecardFundAdjust {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 调整赠送金金额
     */
    adjust_bonus?: number;
    /**
     * 调整本金金额
     */
    adjust_principal?: number;
    /**
     * 调账类型(1调增 2调减)
     */
    adjust_type: number;
    /**
     * buyerId，手机号码或者buyerId二选一
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no: string;
    /**
     * 手机号码，手机号码或者buyerId二选一
     */
    mobile?: string;
    /**
     * 操作员手机号
     */
    operator_mobile: string;
    /**
     * 操作员姓名
     */
    operator_name: string;
    /**
     * 描述
     */
    remark?: string;
    /**
     * 请求号（请确保唯一）
     */
    request_no: string;
  }

  export type Response = void;

}
