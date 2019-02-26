export namespace LogisticsLogisticsExpressGet {
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
         * 所有物流公司地址
         */
        allExpress?: LogisticsExpressOpenApiModel;
    }

    /**
     * 所有物流公司地址
     */
    export interface LogisticsExpressOpenApiModel {
        /**
         * 物流公司编号
         */
        id?: number;
        /**
         * 物流公司名称
         */
        name?: string;
        /**
         * 是否显示 0显示 1不显示
         */
        display?: number;
    }

}
