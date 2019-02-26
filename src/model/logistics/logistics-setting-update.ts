export namespace LogisticsLogisticsSettingUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 计费类型
         */
        calc_type?: number;
        /**
         * 是否支持快递
         */
        is_express?: boolean;
        /**
         * 是否支持同城
         */
        is_local?: boolean;
        /**
         * 是否支持自提
         */
        is_self?: boolean;
        /**
         * 门店id 可不传，预留字段
         */
        offline_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否成功
         */
        isSucess?: boolean;
    }

}
