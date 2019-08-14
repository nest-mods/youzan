// tslint:disable:max-line-length variable-name
export namespace KaCustomizationCardvoucherGiftcardAmountQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 卡类型（101：礼品卡，102：储值卡），该接口只支持礼品卡查询
     */
    card_type: number;
    /**
     * 查询店铺id，非必传，为了以后兼容
     */
    search_kdt_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 礼品卡汇总数据实体
     */
    data?: GiftCardAmoutDTO;
  }

  /**
   * 礼品卡汇总数据实体
   */
  export interface GiftCardAmoutDTO {
    /**
     * 卡激活的数量
     */
    cardActiveTotal?: number;
    /**
     * 卡激活的金额
     */
    cardActiveAmout?: number;
    /**
     * 卡剩余的金额
     */
    cardRemainingmount?: number;
  }

}
