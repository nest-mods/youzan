// tslint:disable:max-line-length variable-name
export namespace SalesmanSalesmanAccountGet {
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
     * 手机号（mobile 或 fans_id 选其一，另者置为0，都有值以mobile为准）
     */
    mobile: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分销员信息
     */
    response?: AccountItemDTO;
  }

  /**
   * 分销员信息
   */
  export interface AccountItemDTO {
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 标识码
     */
    seller?: string;
    /**
     * 累计成交笔数
     */
    order_num?: number;
    /**
     * 累计成交金额(元)
     */
    money?: string;
    /**
     * 创建时间
     */
    created_at?: string;
    /**
     * 邀请方手机号
     */
    from_buyer_mobile?: string;
    /**
     * 店铺自有粉丝id，绑定认证服务号的店铺才有
     */
    fans_id?: number;
    /**
     * 分销员等级
     */
    level?: number;
  }

}
