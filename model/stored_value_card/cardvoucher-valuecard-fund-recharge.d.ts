// tslint:disable:max-line-length variable-name
export namespace StoredValueCardCardvoucherValuecardFundRecharge {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 充值金额（单位：分）
     */
    amount: number;
    /**
     * 用户buyerId，与手机号码二选一
     */
    buyer_id?: number;
    /**
     * 用户手机号码，与buyerId 二选一
     */
    mobile?: string;
    /**
     * 操作人手机号码
     */
    operator_mobile: string;
    /**
     * 操作人姓名。如果是商家发起充值，请填写商家操作人姓名。如果是用户发起，请填写用户姓名（长度必须小于24）
     */
    operator_name: string;
    /**
     * 充值请求号，唯一标识一次充值请求，调用方自定义，请确保唯一（长度必须小于24）
     */
    recharge_request_no: string;
    /**
     * 描述（长度必须小于100）
     */
    remark?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 充值请求号
     */
    recharge_request_no?: string;
    /**
     * 充值订单号
     */
    recharge_order_no?: string;
    /**
     * 充值受理状态(SUCCESS:受理成功,FAIL:受理失败,UNKNOWN:未知状态)
     */
    status?: string;
    /**
     * 储值充值金额
     */
    amount?: number;
    /**
     * 结果码
     * 200：充值受理成功
     * 1001：充值受理失败
     * 1002：充值受理失败，店铺未签约或签约已过期
     * 1003：充值受理失败，储值卡状态异常
     */
    code?: string;
    /**
     * 状态描述
     */
    msg?: string;
  }

}
