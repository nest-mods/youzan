export namespace LogisticsLogisticsTemplateCreate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 模板名称
         */
        name?: string;
        /**
         * 付费类型：1，买家付费
         */
        pay_type?: number;
        /**
         * 运费规则 json格式，转换成 List<ValuationRule>
         */
        valuation_rules?: string;
        /**
         * 计算类型：1，按件，2，按重量
         */
        valuation_type?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 运费模板id
         */
        templateId?: number;
    }

}
