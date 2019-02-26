export namespace StoredValueCardCardvoucherValuecardFundRechargeGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 充值订单号,和recharge_request_no二选一
         */
        recharge_order_no?: string;
        /**
         * 充值请求号,和recharge_order_no二选一
         */
        recharge_request_no?: string;
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
         * 充值结果状态
         * SUCCESS:充值成功,
         * FAIL:充值失败,
         * ING:充值中
         */
        status?: string;
        /**
         * 储值充值金额
         */
        amount?: number;
        /**
         * 结果码
         * 200：充值成功、充值中
         * 1001：充值失败
         * 1002：充值失败，店铺未签约或签约已过期
         * 1003：充值失败，储值卡状态异常
         */
        code?: string;
        /**
         * 状态描述
         */
        msg?: string;
    }

}
