export namespace PayQrcodePayQrcodeGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 二维码标识
     */
    qr_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 二维码图片id
     */
    qr_id?: number;
    /**
     * 二维码名称
     */
    qr_name?: string;
    /**
     * 二维码金额，以分为单位
     */
    qr_price?: number;
    /**
     * 图片源信息
     */
    qr_code?: string;
    /**
     * 二维码关联URL
     */
    qr_url?: string;
    /**
     * 二维码类型
     */
    qr_type?: string;
    /**
     * 二维码生成来源
     */
    qr_source?: string;
    /**
     * 优惠信息
     */
    activityInfo?: string;
    /**
     * 生成时间
     */
    qr_created_time?: string;
  }

}
