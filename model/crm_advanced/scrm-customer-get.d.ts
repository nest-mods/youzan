export namespace CrmAdvancedScrmCustomerGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 粉丝id，如果没有写0
     */
    fans_id: number;
    /**
     * fansType，与fansId成对出现，目前只支持=1
     */
    fans_type: number;
    /**
     * 手机号，与fansId两者二选一，如果没有则写''
     */
    mobile: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 性别 1:男 2:女 0:未知
     */
    gender?: number;
    /**
     * 生日
     */
    birthday?: string;
    /**
     * 地域
     */
    area?: ScrmUserArea;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 来源: 0:未知 100:关注公众号 200:普通下单 201:收银台下单 202 : 有赞买家版下单 300:外部导入 301: 开放接口导入 400: 网店客户登记 401: 门店版客户登记 500: 批发客户 600:储值充值客户
     */
    source_type?: number;
    /**
     * 标签，以“，”分隔
     */
    tag_names?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 当前可用积分
     */
    current_points?: number;
    /**
     * 购次
     */
    trade_count?: number;
    /**
     * 最后购买时间
     */
    last_trade_time?: string;
    /**
     * 首次成为会员的时间
     */
    first_time?: string;
  }

  /**
   * 地域
   */
  export interface ScrmUserArea {
    /**
     * 城市名
     */
    city_name?: string;
    /**
     * 城市id
     */
    city_id?: number;
    /**
     * 城区名
     */
    county_name?: string;
    /**
     * 城区id
     */
    county_id?: number;
    /**
     * 省名
     */
    province_name?: string;
    /**
     * 省id
     */
    province_id?: number;
  }

}
