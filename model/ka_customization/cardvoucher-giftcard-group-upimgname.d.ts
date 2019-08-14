// tslint:disable:max-line-length variable-name
export namespace KaCustomizationCardvoucherGiftcardGroupUpimgname {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 卡片图片链接，与卡片名称字段二选一必传
     */
    cover_url?: string;
    /**
     * 卡号
     */
    group_no: string;
    /**
     * 卡片名称，与卡片图片链接字段二选一必传
     */
    name?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否修改成功
     */
    data?: boolean;
  }

}
