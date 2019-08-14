// tslint:disable:max-line-length variable-name
export namespace KaCustomizationCardvoucherGiftcardDetailQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 查询第几页，默认1
     */
    page: number;
    /**
     * 分页大小，默认20
     */
    page_size: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 礼品卡明细数据列表
     */
    items?: GiftCardInfoDTO[];
    /**
     * 分页实体
     */
    paginator?: LongPaginator;
  }

  /**
   * 礼品卡明细数据列表
   */
  export interface GiftCardInfoDTO {
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 卡号
     */
    cardNo?: string;
    /**
     * 卡状态{init:初始化,normal:正常,freeze:冻结,close:注销,receded:已退卡,receding:退卡中}
     */
    status?: string;
    /**
     * 卡余额：sumDnom=principalDnom+bonusDnom
     */
    sumDnom?: number;
    /**
     * 本金余额
     */
    principalDnom?: number;
    /**
     * 赠送金余额
     */
    bonusDnom?: number;
    /**
     * 被冻结的金额
     */
    freezingSumDnom?: number;
    /**
     * 被冻结的本金金额
     */
    freezingPrincipalDnom?: number;
    /**
     * 被冻结的赠送金金额
     */
    freezingBonusDnom?: number;
  }

  /**
   * 分页实体
   */
  export interface LongPaginator {
    /**
     * 查询第几页
     */
    page?: number;
    /**
     * 分页大小
     */
    page_size?: number;
    /**
     * 查询获得数据总条数
     */
    total_count?: number;
  }

}
