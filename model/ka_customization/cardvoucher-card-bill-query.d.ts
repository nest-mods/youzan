// tslint:disable:max-line-length variable-name
export namespace KaCustomizationCardvoucherCardBillQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 查询类型
     */
    biz_type: string;
    /**
     * 用户id
     */
    buyer_id: number;
    /**
     * 用户卡号
     */
    card_no: string;
    /**
     * 结束时间
     */
    end_time?: Date;
    /**
     * 店铺id
     */
    kdt_id: number;
    /**
     * 页数
     */
    page: number;
    /**
     * 每页条数
     */
    page_size: number;
    /**
     * 开始时间
     */
    start_time?: Date;
  }

  export type Response = void;

}
