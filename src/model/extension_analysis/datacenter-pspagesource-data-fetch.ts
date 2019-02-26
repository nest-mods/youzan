export namespace ExtensionAnalysisDatacenterPspagesourceDataFetch {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 追踪信息集合, 最大200个, 查找特定链接的信息时可以指定相应的dcps追踪号；
         * 该追踪号在创建追踪链接时生成，也可以根据推广名称在获取推广信息接口中获取。
         * 不传可以分页获取店铺下所有推广链接的数据
         */
        dcps_list?: string[];
        /**
         * 查询结束时间 格式为yyyy-MM-dd
         */
        end_day?: string;
        /**
         * 当前第几页 默认1
         */
        page?: number;
        /**
         * 页面条数 默认20 最大200
         */
        page_size?: number;
        /**
         * 查询开始时间 格式为yyyy-MM-dd
         */
        start_day?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 推广效果数据分页信息
         */
        paginator?: DataCenterPsPaginator;
        /**
         * 推广效果数据详细信息列表
         */
        items?: YunPsMonitorDataModel;
    }

    /**
     * 推广效果数据分页信息
     */
    export interface DataCenterPsPaginator {
        /**
         * 总条数
         */
        total_count?: number;
        /**
         * 一页多少条
         */
        page_size?: number;
        /**
         * 第几页
         */
        page?: number;
    }

    /**
     * 推广效果数据详细信息列表
     */
    export interface YunPsMonitorDataModel {
        /**
         * 店铺ID
         */
        kdt_id?: number;
        /**
         * 追踪ID
         */
        dcps?: string;
        /**
         * 浏览量，筛选时间内，通过推广链接带来的浏览量
         */
        pv?: number;
        /**
         * 访客数，筛选时间内，通过本次推广带来的访客数
         */
        uv?: number;
        /**
         * 到达浏览量，筛选时间内，通过推广链接访问推广页面的浏览量
         */
        landing_pv?: number;
        /**
         * 到达访客数，筛选时间内，通过推广链接访问推广页面的访客数
         */
        landing_uv?: number;
        /**
         * 新访客数，最近1年内没有访问过店铺，筛选时间内，通过推广访问推广页面的新访客数
         */
        new_uv?: number;
        /**
         * 分享浏览量，筛选时间内，通过该推广的分享进入店铺的浏览量
         */
        share_pv?: number;
        /**
         * 分享访客数，筛选时间内，通过该推广的分享进入店铺的访客数
         */
        share_uv?: number;
        /**
         * 二跳浏览量，筛选时间内用户访问推广页面后，在页面中发生点击行为进入更多店铺内页面的点击次数
         */
        click_pv?: number;
        /**
         * 二跳访客数，筛选时间内用户访问推广页面后，在页面中发生点击行为进入更多店铺内页面的用户数
         */
        click_uv?: number;
        /**
         * 粉丝增加量，筛选时间内，访问了推广链接，且在当天成为公众号粉丝的客户数
         */
        add_fans?: number;
        /**
         * 转化下单数，筛选时间内用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）的数量
         */
        to_order_count?: number;
        /**
         * 转化下单人数，筛选时间内，用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）的用户数
         */
        to_order_uv?: number;
        /**
         * 转化下单金额，筛选时间内用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）的订单金额
         */
        to_order_amount?: number;
        /**
         * 转化付款单数，筛选时间内用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）并且付款成功的订单数量
         */
        to_pay_count?: number;
        /**
         * 转化付款人数，筛选时间内，用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）并且付款成功的用户数
         */
        to_pay_uv?: number;
        /**
         * 转化付款金额，筛选时间内用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）并且付款成功的订单金额
         */
        to_pay_amount?: number;
        /**
         * 新成交客户数，筛选时间内，用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）并且付款成功的在店铺首次购买的客户数
         */
        new_customer_order_uv?: number;
        /**
         * 老成交客户数，筛选时间内，用户访问落地页面后，24小时内在店铺中进行下单（包括本页面商品订单和连带销售商品订单）并且付款成功的老客户数
         */
        old_customer_order_uv?: number;
        /**
         * 7日下单数，统计流量发生日期的后续7天内，产生下单的订单数。
         */
        in7_order_count?: number;
        /**
         * 7日下单人数，统计流量发生日期的后续7天内，产生下单的客户数。同一时段，同一客户多次下单记为1人。
         */
        in7_order_uv?: number;
        /**
         * 7日下单金额，统计流量发生日期的后续7天内，产生下单的订单金额
         */
        in7_order_amount?: number;
        /**
         * 7日付款单数，统计流量发生日期的后续7天内，产生下单且付款成功的订单数。
         */
        in7_pay_count?: number;
        /**
         * 7日付款人数，统计流量发生日期的后续7天内，产生下单且付款成功的客户数。同一时段，同一客户多次下单记为1人。
         */
        in7_pay_uv?: number;
        /**
         * 7日付款金额，统计流量发生日期的后续7天内，产生下单且付款成功的订单金额
         */
        in7_pay_amount?: number;
        /**
         * 15日下单数，同7天定义
         */
        in15_order_count?: number;
        /**
         * 15日下单人数，同7天定义
         */
        in15_order_uv?: number;
        /**
         * 15日下单金额，同7天定义
         */
        in15_order_amount?: number;
        /**
         * 15日付款单数，同7天定义
         */
        in15_pay_count?: number;
        /**
         * 15日付款人数，同7天定义
         */
        in15_pay_uv?: number;
        /**
         * 15日付款金额，同7天定义
         */
        in15_pay_amount?: number;
        /**
         * 30日下单数，同7天定义
         */
        in30_order_count?: number;
        /**
         * 30日下单人数，同7天定义
         */
        in30_order_uv?: number;
        /**
         * 30日下单金额，同7天定义
         */
        in30_order_amount?: number;
        /**
         * 30日付款单数，同7天定义
         */
        in30_pay_count?: number;
        /**
         * 30日付款人数，同7天定义
         */
        in30_pay_uv?: number;
        /**
         * 30日付款金额，同7天定义
         */
        in30_pay_amount?: number;
    }

}
