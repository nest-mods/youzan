export namespace BeautyMemberMeiCardGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 要查询的会员卡标识
         */
        card_alias?: string;
        /**
         * 分店信息
         */
        dept_id?: number;
        /**
         * 美业token
         */
        m_token?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否在网店销售
         */
        wap_show?: number;
        /**
         * 背景图片url
         */
        backgroud_img?: string;
        /**
         * 权益列表
         */
        card_rights?: MeiCardRight;
        /**
         * 有效期
         */
        term_days?: number;
        /**
         * 上架门店列表
         */
        select_dept_ids?: number[];
        /**
         * 是否同步微信
         */
        sync_wx?: number;
        /**
         * 是否上架销售
         */
        on_shelve?: number;
        /**
         * 描述
         */
        description?: string;
        /**
         * 是否开启了全店折扣
         */
        all_discount?: number;
        /**
         * 卡类型
         */
        card_type?: number;
        /**
         * 卡标识
         */
        card_alias?: string;
        /**
         * 全店折扣的折扣值
         */
        all_discount_value?: number;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 是否删除
         */
        deleted?: number;
        /**
         * 卡名称
         */
        card_name?: string;
        /**
         * 赠送金额
         */
        prepaid_gift_price?: number;
        /**
         * 卡售价
         */
        card_price?: number;
        /**
         * 同步微信状态
         */
        sync_wx_status?: number;
        /**
         * 创建时间
         */
        created_at?: number;
        /**
         * 更新时间
         */
        updated_at?: number;
        /**
         * 分店id
         */
        dept_id?: number;
    }

    /**
     * 权益列表
     */
    export interface MeiCardRight {
        /**
         * 是否是赠送的权益
         */
        gift?: number;
        /**
         * 权益Id
         */
        rights_id?: number;
        /**
         * 权益类型：
         * 1 折扣；
         * 2 次数
         */
        rights_type?: number;
        /**
         * 商品id
         */
        goods_id?: number;
        /**
         * 权益值
         */
        value?: number;
    }

}
