export namespace PayQrcodePayQrcodeCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 标签 json格式字符串,例如:[1,2],表示有两个标签
     */
    label_ids?: string;
    /**
     * 收款理由
     */
    qr_name?: string;
    /**
     * 价格（单位 分）。qr_type 为 QR_TYPE_FIXED 时，价格可为空。
     */
    qr_price?: string;
    /**
     * 二维码创建类型标记
     */
    qr_source?: string;
    /**
     * 二维码类型.
  * QR_TYPE_FIXED_BY_PERSON ：无金额二维码，扫码后用户需自己输入金额；
  * QR_TYPE_NOLIMIT ： 确定金额二维码，可以重复支付;
  * QR_TYPE_DYNAMIC：确定金额二维码，只能被支付一次
     */
    qr_type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 二维码收银台Url
     */
    qr_url?: string;
    /**
     * 二维码图标
     */
    qr_code?: string;
    /**
     * 二维码标识
     */
    qr_id?: number;
  }

}
