export namespace CircleTradeDcQueryMultiperiodQuerydeliveryrecords {
    /**
     * 请求参数
     */
    export interface Request {
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
         * 多期发货记录响应体
         */
        deliveryRecords?: MultiPeriodDeliveryRecordOpenDTO;
    }

    /**
     * 多期发货记录响应体
     */
    export interface MultiPeriodDeliveryRecordOpenDTO {
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 主订单ID
         */
        tid?: string;
        /**
         * 子订单ID
         */
        oid?: string;
        /**
         * 期数
         */
        issue?: number;
        /**
         * 多期发货记录配送信息
         */
        multi_period_dist_info?: MultiPeriodDistInfoDTO;
    }

    /**
     * 多期发货记录配送信息
     */
    export interface MultiPeriodDistInfoDTO {
        /**
         * 配送单
         */
        dist_order?: DistOrderDTO;
        /**
         * 是否允许修改物流
         */
        allow_modify_express?: boolean;
    }

    /**
     * 配送单
     */
    export interface DistOrderDTO {
        /**
         * 主订单ID
         */
        orderNo?: string;
        /**
         * 配送单id
         */
        distId?: string;
        /**
         * 店铺id
         */
        kdtId?: number;
        /**
         * 发货类型
         */
        deliveryType?: number;
        /**
         * 发货单号
         */
        deliveryNo?: string;
        /**
         * 出货点id
         */
        deliveryPointId?: number;
        /**
         * 扩展字段
         */
        extend?: string;
        /**
         * 配送单版本号
         */
        version?: string;
        /**
         * 配送单状态
         * 0 未发货
         * 1 发货中
         * 2 已发货
         * 3 已取消
         */
        status?: number;
        /**
         * 配送方式
         * 1 快递
         * 2 同城送
         * 3 自提
         */
        distType?: number;
        /**
         * 物流快递信息
         */
        expressInfo?: ExpressInfo;
        /**
         * 同城送配送信息详情
         */
        localDeliveryDetail?: LocalDeliveryDetail;
    }

    /**
     * 物流快递信息
     */
    export interface ExpressInfo {
        /**
         * 物流状态 0：在途 1：揽件 2：疑难 3：签收 4：退签 5：派件 6：退回
         */
        state?: number;
        /**
         * 物流信息json
         */
        data?: string;
        /**
         * 物流单号
         */
        expressNo?: string;
        /**
         * 物流公司id
         */
        expressId?: number;
        /**
         * 快递发货->物流详情
         */
        expressDetail?: ExpressDetail;
    }

    /**
     * 快递发货->物流详情
     */
    export interface ExpressDetail {
        /**
         * 物流公司名称
         */
        expressCompanyName?: string;
        /**
         * 物流进度详情
         */
        expressProgressInfo?: string;
        /**
         * 物流状态
         * 0 待发货
         * 1 已发货
         * 2 已签收
         * 6 待取货
         * 7 已取消
         * 8 已过期
         */
        expressStatus?: string;
        /**
         * 物流公司编码
         */
        com?: string;
    }

    /**
     * 同城送配送信息详情
     */
    export interface LocalDeliveryDetail {
        /**
         * 货单号
         */
        deliveryNo?: string;
        /**
         * 违约金
         */
        deductFee?: number;
        /**
         * 同城送状态描述
         *   STATUS_NONE(Integer.valueOf(-1), "初始状态", false),
         *   STATUS_NORMAL(Integer.valueOf(0), "初始状态", false),
         *   STATUS_ORDERING(Integer.valueOf(1), "待接单", false),
         *   STATUS_TAKING(Integer.valueOf(2), "待取货", false),
         *   STATUS_SENDING(Integer.valueOf(3), "配送中", false),
         *   STATUS_DONE(Integer.valueOf(4), "已完成", true),
         *   STATUS_CANCEL(Integer.valueOf(5), "已取消", true),
         *   STATUS_CANCEL_EXCEPTION(Integer.valueOf(6), "取消异常", false),
         *   STATUS_OVERDUE(Integer.valueOf(7), "已过期", true);
         */
        distStatus?: string;
        /**
         * 同城送状态码
         *   STATUS_NONE(Integer.valueOf(-1), "初始状态", false),
         *   STATUS_NORMAL(Integer.valueOf(0), "初始状态", false),
         *   STATUS_ORDERING(Integer.valueOf(1), "待接单", false),
         *   STATUS_TAKING(Integer.valueOf(2), "待取货", false),
         *   STATUS_SENDING(Integer.valueOf(3), "配送中", false),
         *   STATUS_DONE(Integer.valueOf(4), "已完成", true),
         *   STATUS_CANCEL(Integer.valueOf(5), "已取消", true),
         *   STATUS_CANCEL_EXCEPTION(Integer.valueOf(6), "取消异常", false),
         *   STATUS_OVERDUE(Integer.valueOf(7), "已过期", true);
         */
        distStatusCode?: number;
        /**
         * 配送员经度
         */
        distLng?: string;
        /**
         * 配送员纬度
         */
        distLat?: string;
        /**
         * 配送员小费
         */
        tip?: number;
        /**
         * 配送费
         */
        deliveryFee?: number;
        /**
         * 配送员距离
         */
        distance?: string;
        /**
         * 发单时间
         */
        createTime?: string;
        /**
         * 接单时间
         */
        acceptTime?: string;
        /**
         * 取货时间
         */
        fetchTime?: string;
        /**
         * 送达时间
         */
        finishTime?: string;
        /**
         * 取消时间
         */
        cancelTime?: string;
        /**
         * 取消原因
         */
        cancelReason?: string;
        /**
         * 过期时间
         */
        expireTime?: string;
    }

}
