export namespace BuyerRefundTradeRefundClose {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 退款ID
         */
        refund_id?: string;
        /**
         * 退款版本号
         */
        version?: number;
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
