// tslint:disable:max-line-length variable-name
export namespace CustomerScrmCustomerSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 成为客户的时间，截止值，时间戳格式，单位是秒
     */
    created_at_end?: number;
    /**
     * 成为客户的时间，起始值，时间戳格式，单位是秒
     */
    created_at_start?: number;
    /**
     * 是否为会员，0表示非会员，1表示会员
     */
    is_member?: number;
    /**
     * 页码，最多支持500页(500页是以每页默认值20为单位，客户查询最大为10000)
     */
    page_no?: number;
    /**
     * 每页数量，最多支持50个
     */
    page_size?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 列表总数
     */
    total?: number;
    /**
     * 客户列表返回对象列表
     */
    record_list?: CustomerResultDTO[];
  }

  /**
   * 客户列表返回对象列表
   */
  export interface CustomerResultDTO {
    /**
     * 姓名
     */
    name?: string;
    /**
     * 性别
     */
    gender?: number;
    /**
     * 用户ID,即buyer_id
     */
    yz_uid?: number;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 微信粉丝ID，预留字段，同fans_id,建议使用下面的fans_id字段
     */
    weixin_fans_id?: number;
    /**
     * 是否是会员
     */
    is_member?: number;
    /**
     * 购次
     */
    trade_count?: number;
    /**
     * 积分
     */
    points?: number;
    /**
     * 会员卡ID
     */
    card_ids?: number[];
    /**
     * 成为客户的时间，时间戳格式，单位秒
     */
    created_at?: number;
    /**
     * 成为会员的时间，时间戳格式，单位秒
     */
    member_created_at?: number;
    /**
     * 粉丝ID
     */
    fans_id?: number;
    /**
     * 推荐展示姓名(showname可以等于name、可以等于mobile、可以等于nickname，取值顺序为手机-姓名-昵称)
     */
    show_name?: string;
  }

}
