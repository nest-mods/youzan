// tslint:disable:max-line-length variable-name
export namespace StoredValueCardCardvoucherValuecardAdjRcdByacpSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 调账时间范围 ，查询beginTime之后发生的记录，格式yyyy-MM-dd HH:mm:ss
     */
    begin_time?: string;
    /**
     * 客户Id
     */
    buyer_id?: number;
    /**
     * 卡号（目前该字段不生效）
     */
    card_no?: string;
    /**
     * 调账时间范围 ，查询endTime之前发生的记录，格式yyyy-MM-dd HH:mm:ss
     */
    end_time?: string;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 操作员姓名
     */
    operator_name?: string;
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
    items?: PageQueryAdjustLogByAcceptKdtIdDTO[];
    /**
     * 分页信息
     */
    paginator?: LongPaginator;
  }

  /**
   * 实体信息
   */
  export interface PageQueryAdjustLogByAcceptKdtIdDTO {
    /**
     * 受理店铺Id
     */
    kdtId?: number;
    /**
     * 客户Id
     */
    buyerId?: number;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 卡号
     */
    cardNo?: string;
    /**
     * 调账单号
     */
    adjustNo?: string;
    /**
     * 调账时间，格式yyyy-MM-dd HH:mm:ss
     */
    adjustTime?: string;
    /**
     * 调账本金金额
     */
    adjustmentPrincipal?: string;
    /**
     * 调账赠送金金额
     */
    adjustmentBonus?: string;
    /**
     * 调账类型(1 调增 2 调减)
     */
    adjustType?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 操作员姓名
     */
    operatorName?: string;
    /**
     * 调账状态(
     * INIT: 未处理,
     * ACCEPT_SUCCESS:处理中,
     * SUCCESS:成功,
     * FAIL:失败
     * )
     */
    status?: string;
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
