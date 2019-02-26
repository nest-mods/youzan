export namespace BeautyMemberMeiCardUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 卡片背景图
         */
        background_img?: string;
        /**
         * 要更新的会员卡标识
         */
        card_alias?: string;
        /**
         * 会员卡售价，单位是分
         */
        card_price?: number;
        /**
         * 会员卡权益列表
         */
        card_rights?: MeiCardRight;
        /**
         * 卡片描述信息
         */
        description?: string;
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 是否显示在网店
         * 0 不显示
         * 1 显示
         */
        wap_show?: number;
    }

    /**
     *
     */
    export interface MeiCardRight {
        /**
         * 是否是赠送。0 不是赠送；1 是赠送
         */
        gift?: number;
        /**
         * 商品的id
         */
        goods_id?: number;
        /**
         * 权益id,更新的时候才需要，创建时不需要
         */
        rights_id?: number;
        /**
         * 权益类型：1，折扣；2，次数
         */
        rights_type?: number;
        /**
         * 权益值，例如次卡中某项服务10次
         */
        value?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 更新结果
         */
        is_success?: boolean;
    }

}
