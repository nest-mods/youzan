// tslint:disable:max-line-length variable-name
export namespace KaCustomizationCardvoucherGiftcardGroupQueryno {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 订单号
     */
    order_no: string;
    /**
     * 卡模板别名，选填
     */
    template_alias?: string;
    /**
     * 有赞账号，选填
     */
    yz_uid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 卡号列表
     */
    data?: string[];
  }

}
