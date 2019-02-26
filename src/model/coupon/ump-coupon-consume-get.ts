export namespace CouponUmpCouponConsumeGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 买家端的优惠券/优惠码核销码
         */
        code?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 核销码
         */
        code?: string;
        /**
         * 核销状态，0表示未核销，1表示已核销
         */
        status?: number;
        /**
         * 核销时间，格式，如果未核销，则为空
         */
        consume_at?: Date;
        /**
         * 核销编号。如果卡券已被独立核销，值为核销编号；如果卡券在商城的交易中被核销、或者未核销，值为空
         */
        consume_id?: string;
        /**
         * 优惠券/优惠码信息
         */
        coupon?: UmpCoupon;
        /**
         * 优惠码ID
         */
        promocode_id?: number;
        /**
         * 优惠码。如果卡券是优惠码类型展示优惠码。
         */
        promocode?: string;
        /**
         * 优惠券ID
         */
        promocard_id?: number;
        /**
         * 实际核销金额,单位为分
         */
        used_value?: number;
    }

    /**
     * 优惠券/优惠码信息
     */
    export interface UmpCoupon {
        /**
         * 优惠的ID
         */
        group_id?: number;
        /**
         * 优惠的类型。可选值：PROMOCARD（优惠券）、PROMOCODE（优惠码）
         */
        coupon_type?: string;
        /**
         * 可用范围的类型，可选值：
         *             <br>PART（部分商品可用，或指定商品可用）
         *             <br>ALL（全部商品可用）
         */
        range_type?: string;
        /**
         * 优惠标题
         */
        title?: string;
        /**
         * 优惠面额。如果 is_random 为 1，则该字段表示随机金额的下限。单位：元，精确到分
         */
        value?: string;
        /**
         * 是否是随机优惠，0 表示不随机，1 表示随机
         */
        is_random?: number;
        /**
         * 如果 is_random 为 1，则该字段表示随机金额的上限。单位：元，精确到分
         */
        value_random_to?: string;
        /**
         * 是否限制领用者的等级，0 表示不限制，大于 0 表示领用者必须是这个等级ID
         */
        need_user_level?: number;
        /**
         * 限制领用者等级的名称
         */
        user_level_name?: string;
        /**
         * 每人限领个数，为 0 则表示不限制
         */
        quota?: number;
        /**
         * 是否设置满多少元可用，0 表示不限制，1 表示限制
         */
        is_at_least?: number;
        /**
         * 如果 is_at_least 为 1，该字段表示订单必须满这个价格，优惠才可用。单位：元，精确到分
         */
        at_least?: string;
        /**
         * 总库存
         */
        total?: number;
        /**
         * 剩余可用库存
         */
        stock?: number;
        /**
         * 优惠生效时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        start_at?: Date;
        /**
         * 优惠结束时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        end_at?: Date;
        /**
         * 是否到期前4天发送提醒，0 表示不发送，1 表示发送
         */
        expire_notice?: number;
        /**
         * 使用说明
         */
        description?: string;
        /**
         * 是否仅原价购买商品时可用，0 表示否，1 表示是
         */
        is_forbid_preference?: number;
        /**
         * 是否同步微信卡券，0 表示否，1 表示是
         */
        is_sync_weixin?: number;
        /**
         * 微信卡券ID
         */
        weixin_card_id?: string;
        /**
         * 优惠状态，0 表示有效，1 表示失效，2 表示微信卡券审核中
         */
        status?: number;
        /**
         * 是否可分享领取链接，0 表示否，1 表示是
         */
        is_share?: number;
        /**
         * 优惠领取链接
         */
        fetch_url?: string;
        /**
         * 领取优惠的人数
         */
        stat_fetch_user_num?: number;
        /**
         * 领取优惠的次数
         */
        stat_fetch_num?: number;
        /**
         * 使用优惠的次数
         */
        stat_use_num?: number;
        /**
         * 优惠创建时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        created?: Date;
        /**
         * 优惠券更新时间，时间格式：yyyy-MM-dd HH:mm:ss
         */
        updated?: Date;
        /**
         * 1表示优惠,2表示折扣
         */
        preferential_type?: number;
        /**
         * 领取到的折扣值
         */
        discount?: number;
        /**
         * 优惠使用时间类型, 1表示固定活动时间，2表示动态类型,几天后几天内有效
         */
        date_type?: number;
        /**
         * 优惠有效固定时长
         */
        fixed_term?: number;
        /**
         * 延迟开始的时间, 延迟几天生效
         */
        fixed_begin_term?: number;
    }

}
