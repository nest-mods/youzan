export namespace PayQrcodeTradesQrGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 交易创建结束时间
     */
    end_created?: Date;
    /**
     * 需要返回的交易对象字段，如tid,qr_url,qr_name等
     */
    fields?: string;
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页条数
     */
    page_size?: number;
    /**
     * 二维码编号
     */
    qr_id?: string;
    /**
     * 网点编号
     */
    shop_id?: string;
    /**
     * 网点类型(预留字段，可不填写)
     */
    shop_type?: string;
    /**
     * 交易创建开始时间
     */
    start_created?: Date;
    /**
     * 状态
     */
    status?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 搜索到的交易列表
     */
    qr_trades?: TradePayQrcode[];
    /**
     * 搜索到的交易总数
     */
    total_results?: number;
  }

  /**
   * 搜索到的交易列表
   */
  export interface TradePayQrcode {
    /**
     * 交易编号
     */
    tid?: string;
    /**
     * 二维码编号
     */
    qr_id?: string;
    /**
     * 可以访问的支付页URL
     */
    qr_url?: string;
    /**
     * 收款理由
     */
    qr_name?: string;
    /**
     * 收款金额。精确到2位小数；单位：元。
     */
    qr_price?: string;
    /**
     * 实际收款金额。精确到2位小数；单位：元。
     */
    real_price?: string;
    /**
     * 付款者昵称
     */
    payer_nick?: string;
    /**
     * 外部交易编号。比如，如果支付方式是微信支付，就是财付通的交易单号
     */
    outer_tid?: string;
    /**
     * 交易状态。取值范围：<br>WAIT_RECEIVED（待收款）<br>TRADE_RECEIVED（已收款）<br>TRADE_EXPIRED（已过期，即：48小时内未付款）
     */
    status?: string;
    /**
     * 支付类型。取值范围：<br>WXPAY (微信支付)<br>ALIWAP (支付宝付款)<br>ALIPAY (支付宝pc付款)<br>UNIONPAY (银行卡付款)<br>TENPAY (财付通付款)<br>UNIONWAP (银行卡付款)<br>PEERPAY (找人代付)<br>UMPAY (信用卡付款)<br>CODPAY (货到付款)<br>WXPAY_BIGUNSIGN (微信支付)<br>WXPAY_BIGSIGN (微信支付)<br>BAIDUWAP (储蓄卡付款)<br>WXAPPPAY (微信支付)<br>MERGED_PAY (分销采购单合并付款)<br>PRESENT
     */
    pay_type?: string;
    /**
     * 预定时间
     */
    book_date?: Date;
    /**
     * 支付时间
     */
    pay_date?: Date;
    /**
     * 交易创建时间
     */
    created_date?: Date;
  }

}
