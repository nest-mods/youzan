export namespace CircleTradeDcQueryMultiperiodQuerylatestplan {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 子订单id
         */
        oid?: number;
        /**
         * 订单号
         */
        tid?: string;
    }

    /**
     *
     */
    export interface Long {
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 订单id
         */
        tid?: string;
        /**
         * 子订单id
         */
        oid?: number;
        /**
         * 最新一期多期发货计划
         */
        multiPeriodPlan?: MultiPeriodPlanOpenDTO;
        /**
         * 多期发货明细
         */
        multiPeriodDetail?: MultiPeriodDetailOpenDTO;
    }

    /**
     * 最新一期多期发货计划
     */
    export interface MultiPeriodPlanOpenDTO {
        /**
         * 订单号
         */
        tid?: string;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 子订单id
         */
        oid?: number;
        /**
         * 货单号
         */
        delivery_no?: string;
        /**
         * 当前期数
         */
        issue?: number;
        /**
         * 预计送达时间
         */
        estimated_delivery_time?: Date;
        /**
         * 配送状态
         */
        delivery_state?: number;
    }

    /**
     * 多期发货明细
     */
    export interface MultiPeriodDetailOpenDTO {
        /**
         * 主订单ID
         */
        tid?: string;
        /**
         * 店铺ID
         */
        kdt_id?: number;
        /**
         * 子订单ID
         */
        oid?: number;
        /**
         * 总期数
         */
        total_issue?: number;
        /**
         * 配送时间维度
         */
        dist_time_dim?: number;
        /**
         * 配送时间维度描述
         */
        dist_time_dim_str?: string;
        /**
         * 配送时间模式
         */
        dist_time_mode?: number;
        /**
         * 配送时间模式描述
         */
        dist_time_mode_str?: string;
        /**
         * 买家下单时选择的送达时间
         */
        delivery_time?: Date;
        /**
         * 扩展信息
         */
        extend?: string;
        /**
         * 最大顺延次数
         */
        max_postpone_sum?: number;
        /**
         * 配送提前期
         */
        lead_time?: LeadTimeDTO;
    }

    /**
     * 配送提前期
     */
    export interface LeadTimeDTO {
        /**
         * 提前天数
         */
        lead_day?: number;
        /**
         * 截止几点之前下单
         */
        lead_hour?: number;
    }

}
