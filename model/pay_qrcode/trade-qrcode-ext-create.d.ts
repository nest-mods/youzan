export namespace PayQrcodeTradeQrcodeExtCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 外部订单号（不超过30个字符）
     */
    out_id?: string;
    /**
     * 外部来源（由有赞分配）
     */
    out_source?: string;
    /**
     * 二维码名称
     */
    qr_name?: string;
    /**
     * 分为单位
     */
    qr_price?: number;
    /**
     * 网点编号
     */
    shop_id?: string;
    /**
     * 网点类型（预留信息，外部可以不传）
     */
    shop_type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 二维码id
     */
    qr_id?: number;
    /**
     * 二维码名称
     */
    qr_name?: string;
    /**
     * 二维码金额(单位/分)
     */
    qr_price?: number;
    /**
     * 二维码图片data
     */
    qr_code?: string;
    /**
     * 扫码连接
     */
    qr_url?: string;
  }

}
