// tslint:disable:max-line-length variable-name
export namespace BuyerBillTradeBillGoodUrlGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品活动别名,如果没有该值，填''
     */
    activity_alias?: string;
    /**
     * 商品营销活动id,如果没有该值，填0
     */
    activity_id?: number;
    /**
     * 商品应用营销活动类型,如果没有该值，填0
     */
    activity_type?: number;
    /**
     * 商品id
     */
    item_id: number;
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 商品留言，按商品设置的留言顺序将留言内容传入即可，图片留言请传入图片url。示例["文本测试", "123", "moyu@youzan.com", "2017-07-11", "16:08", "123456789012345678", "https://img.yzcdn.cn/upload_files/2017/02/22/148775750218475652.png"]
     */
    message?: string;
    /**
     * 商品数量
     */
    num: number;
    /**
     * 是否来自购物车
     */
    order_from?: string;
    /**
     * 订单类型，0表示普通订单，还有其他类型类似赠品、酒店、拼团等类型
     */
    order_type: number;
    /**
     * 价格，单位分
     */
    price?: number;
    /**
     * 规格id 无规格商品无需填写，多规格商品必须传
     */
    sku_id?: number;
    /**
     * 订单来源：购物车，卡门等
     */
    source: string;
    /**
     * 是否支持微信支付；1 支持、0 不支持；
     */
    use_wxpay?: number;
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
     * 下单跳转url
     */
    url?: string;
  }

}
