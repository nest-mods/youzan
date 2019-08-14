// tslint:disable:max-line-length variable-name
export namespace SalesmanSalesmanAccountAdd {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 粉丝id（mobile 或 fans_id 选其一，另者置为0，都有值以mobile为准）
     */
    fans_id: number;
    /**
     * 粉丝类型（自有粉丝: fans_type = 1）
     */
    fans_type: number;
    /**
     * 上级分销员的手机号
     */
    from_mobile?: string;
    /**
     * 需要设置的等级
     */
    level?: number;
    /**
     * 手机号（mobile 或 fans_id 选其一，另者置为0，都有值以mobile为准）
     */
    mobile: string;
  }

  export type Response = void;

}
