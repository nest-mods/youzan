export namespace BuyerBillTradeBillGoodsUrlGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 商品信息,item_id，sku_id,num,price都为必填项 item_message为选填。[{"item_id":"413325328","sku_id":"36203790","num"：“12132414”}]
         */
        item_list?: string;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 是否来自购物车
         * 如果是来自购物车 填cart
         * 如果非购物车则不需要填写
         */
        order_from?: string;
        /**
         * 订单类型，0表示普通订单，还有其他类型类似赠品、酒店、拼团等类型
         * 赠品：1
         * 拼团：10
         * 酒店：35
         */
        order_type?: number;
        /**
         * 订单来源：购物车，卡门等
         * 购物车：cart
         * 卡门：open
         */
        source?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 操作是否成功，true为成功，false为失败
         */
        is_success?: boolean;
        /**
         * 操作key
         */
        book_key?: string;
        /**
         * 多商品下单结算页url
         */
        url?: string;
    }

}
