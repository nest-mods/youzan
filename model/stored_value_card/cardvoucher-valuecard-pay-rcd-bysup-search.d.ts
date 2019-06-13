export namespace StoredValueCardCardvoucherValuecardPayRcdBysupSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 充值时间范围 ，查询beginTime之后发生的记录，格式yyyy-MM-dd HH:mm:ss
     */
    begin_time?: string;
    /**
     * 客户Id
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 充值时间范围 ，查询endTime之前发生的记录，格式yyyy-MM-dd HH:mm:ss
     */
    end_time?: string;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 查询第几页
     */
    page: number;
    /**
     * 分页大小 ，目前最大支持50
     */
    page_size: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 实体信息
     */
    items?: PageQueryPayLogBySupportKdtIdDTO[];
    /**
     * 分页信息
     */
    paginator?: LongPaginator;
  }

  /**
   * 实体信息
   */
  export interface PageQueryPayLogBySupportKdtIdDTO {
    /**
     * 特约商户的店铺Id
     */
    kdt_id?: number;
    /**
     * 客户Id
     */
    buyer_id?: number;
    /**
     * 卡号
     */
    card_no?: string;
    /**
     * 支付时间，格式yyyy-MM-dd HH:mm:ss
     */
    pay_time?: string;
    /**
     * 支付总金额
     */
    pay_amount?: number;
    /**
     * 支付本金金额
     */
    principal_pay_amount?: number;
    /**
     * 支付赠送金金额
     */
    bonus_pay_amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 交易单号
     */
    trade_no?: string;
    /**
     * 储值支付流水号
     */
    pay_no?: string;
  }

  /**
   * 分页信息
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
