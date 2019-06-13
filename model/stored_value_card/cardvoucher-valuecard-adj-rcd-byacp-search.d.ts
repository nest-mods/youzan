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
     * 卡号
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

  export type Response = void;

}
