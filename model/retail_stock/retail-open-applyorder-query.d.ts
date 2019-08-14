// tslint:disable:max-line-length variable-name
export namespace RetailStockRetailOpenApplyorderQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 截止创建时间
     */
    create_time_end: string;
    /**
     * 单据开始创建时间
     */
    create_time_start: string;
    /**
     * 调出仓库编码
     */
    from_warehouse_code?: string;
    /**
     * 分页页号
     */
    page_no?: number;
    /**
     * 分页数量
     */
    page_size?: number;
    /**
     * 系统来源
     */
    retail_source: string;
    /**
     * 调入门店编码
     */
    to_warehouse_code?: string;
  }

  export type Response = void;

}
