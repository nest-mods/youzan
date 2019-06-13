export namespace StoredValueCardCardvoucherValuecardRechgRcdByacpSearch {
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
    items?: PageQueryRechargeLogByAcceptKdtIdDTO[];
    /**
     * 分页信息
     */
    paginator?: LongPaginator;
  }

  /**
   * 实体信息
   */
  export interface PageQueryRechargeLogByAcceptKdtIdDTO {
    /**
     * 受理机构的店铺id
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
     * 充值单号
     */
    recharge_no?: string;
    /**
     * 充值时间，格式yyyy-MM-dd HH:mm:ss
     */
    recharge_time?: string;
    /**
     * 充值金额
     */
    recharge_amount?: number;
    /**
     * 充值方式(wx：微信 alipay：支付宝 card：银行卡 cash：现金 tag：标记支付 other：其他)
     */
    recharge_channel?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 操作员姓名
     */
    operator_name?: string;
    /**
     * 操作员手机号
     */
    operator_mobile?: string;
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
