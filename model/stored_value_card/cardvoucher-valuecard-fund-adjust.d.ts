// tslint:disable:max-line-length variable-name
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

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 请求号
     */
    request_no?: string;
    /**
     * 调账单号
     */
    adjust_no?: string;
    /**
     * 调账状态
     * SUCCESS:成功
     * FAIL:失败
     * ING:处理中
     */
    status?: string;
    /**
     * 结果码
     * 200：调账成功
     * 1001：调账处理失败
     * 1002：调账失败，卡号不存在
     * 1003：调账失败，本金余额不足
     * 1004：调账失败，赠送金余额不足
     */
    code?: string;
    /**
     * 状态描述
     */
    msg?: string;
  }

}
