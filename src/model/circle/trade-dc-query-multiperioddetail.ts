export namespace CircleTradeDcQueryMultiperioddetail {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 子订单ID
         */
        oid?: string;
        /**
         * 主订单ID
         */
        tid?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 周期购多期发货明细
         */
        multiPeriodDetailOpenDTO?: MultiPeriodDetailOpenDTO;
    }

    /**
     * 周期购多期发货明细
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
