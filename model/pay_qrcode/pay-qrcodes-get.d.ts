// tslint:disable:max-line-length variable-name
export namespace PayQrcodePayQrcodesGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否不返回二维码图片，1即不返回qr_code数据
     */
    ignore_qrcode?: string;
    /**
     * 标签 json格式字符串,例如:[1,2],表示有两个标签
     */
    label_ids?: string;
    /**
     * 当前页码
     */
    page_no?: number;
    /**
     * 每页条数
     */
    page_size?: number;
    /**
     * 二维码类型，不指定类型则全部返回
     */
    qr_type?: string;
    /**
     * 网点编号
     */
    shop_id?: string;
    /**
     * 网点类型
     */
    shop_type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 搜索到符合条件的结果总数
     */
    total_results?: QrTotalResult;
    /**
     * 二维码生成记录,包含is_discount(是否有折扣)、activityInfo(折扣详情)，如果没有折扣则is_discount、activityInfo两个字段不返回
     */
    qrcodes?: TradeCashierQrcode[];
  }

  /**
   * 搜索到符合条件的结果总数
   */
  export interface QrTotalResult {
    /**
     * 结果总数
     */
    total?: number;
  }

  /**
   * 二维码生成记录,包含is_discount(是否有折扣)、activityInfo(折扣详情)，如果没有折扣则is_discount、activityInfo两个字段不返回
   */
  export interface TradeCashierQrcode {
    /**
     * 收款名称
     */
    qr_name?: string;
    /**
     * 收款金额。精确到2位小数；单位：元。
     */
    qr_price?: string;
    /**
     * 收款码编码
     */
    qr_code?: string;
    /**
     * 收款码当前关联优惠信息。
     */
    activityInfo?: string;
    /**
     * 收款码创建类型标记。<br>类型有：<br>INSIDE（内部创建）<br>OUTSIDE（外部创建）
     */
    qr_source?: string;
    /**
     * 收款码类型。<br>类型有：<br>QR_TYPE_FIXED（收款码和店铺绑定并且可多次支付）<br>QR_TYPE_NOLIMIT（收款码可多次支付）<br>QR_TYPE_DYNAMIC（收款码只能被支付一次）
     */
    qr_type?: string;
    /**
     * 收款码编号
     */
    qr_id?: string;
    /**
     * 可以访问的支付页URL
     */
    qr_url?: string;
    /**
     * 收款码创建日期
     */
    qr_created_time?: string;
  }

}
