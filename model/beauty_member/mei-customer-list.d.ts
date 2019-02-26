export namespace BeautyMemberMeiCustomerList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 按照归属门店进行过滤
  * 0 表示不归属任何门店的会员
  * 其他数字表示门店id
     */
    belong_dept_ids?: number[];
    /**
     * 按照生日过滤
     */
    birthday_number_max?: number;
    /**
     * 按照生日过滤
     */
    birthday_number_min?: number;
    /**
     * 按照持有的卡id过滤。
  * 需要拉取到所有的卡列表后的，使用里面的卡id
     */
    card_id?: number;
    /**
     * 按照营销顾问id过滤
     */
    consultant_id?: number;
    /**
     * 按照积分范围过滤
     */
    current_points_max?: number;
    /**
     * 按照积分范围过滤
     */
    current_points_min?: number;
    /**
     * 1 表示按照降序排列
  * 2 表示按照升序排列
     */
    desc?: number;
    /**
     * 过滤的关键词
     */
    keyword?: string;
    /**
     * 关键词过滤的类型
  * 1 表示关键词是手机号
  * 2 表示关键词是会员名称
     */
    keyword_type?: number;
    /**
     * 过滤消费频次。
  * d 表示天
  * w 表示周
  * m 表示月
  * y 表示年
  * 例如1d 表示1天内没有消费；1w 表示一周内没有消费；1m 表示一个月内没有消费；1y 表示一年内没有消费
     */
    last_trade?: string;
    /**
     * 过滤等级。需要拉取到等级列表后使用获取到的对应等级的id
     */
    level_id?: number;
    /**
     * 美业token
     */
    m_token?: string;
    /**
     * 排序字段
  * 0 对创建时间排序
  * 1 对购次排序
  * 2 对购买均价排序
  * 3 对最后购买时间排序
  * 4 对总价排序
     */
    order_by_type?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页的显示条目，最大200
     */
    page_size?: number;
    /**
     * 按照来源过滤。
  * 需要先拉取来源列表后，在使用里面的来源id
     */
    source?: number;
    /**
     * 按照标签过滤，需要拉取到标签列表后使用其中的id进行过滤
     */
    tag_ids?: number[];
    /**
     * 过滤交易次数。
  * 例如 3 表示消费3次以内
     */
    trade_count?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分页信息
     */
    paginator?: MeiPaginator;
    /**
     * 列表条目信息
     */
    items?: MeiCustomerInfoListSummary;
  }

  /**
   * 分页信息
   */
  export interface MeiPaginator {
    /**
     * 总记录数
     */
    total_count?: number;
    /**
     * 第几页
     */
    page?: number;
    /**
     * 每页显示的记录数
     */
    page_size?: number;
  }

  /**
   * 列表条目信息
   */
  export interface MeiCustomerInfoListSummary {
    /**
     * 平均消费金额
     */
    average_amount?: number;
    /**
     * 性别
     */
    gender?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 编号
     */
    member_no?: string;
    /**
     * 交易次数
     */
    trade_count?: number;
    /**
     * 等级别名
     */
    level_alias?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 商家写的备注姓名
     */
    memo_name?: string;
    /**
     * 营销顾问id列表
     */
    consultant_ids?: number[];
    /**
     * 用户来源类别
     */
    source_type?: number;
    /**
     * 头像url
     */
    avatar?: string;
    /**
     * 商家写的会员名
     */
    member_name?: string;
    /**
     * 上次交易时间
     */
    last_trade_time?: number;
    /**
     * 附属门店id
     */
    belong_dept_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 等级名称
     */
    level_name?: string;
    /**
     * 更新时间
     */
    updated_at?: number;
    /**
     * 是否是会员。1表示是会员
     */
    member?: number;
    /**
     * 买家自己写的名称
     */
    name?: string;
    /**
     * 总交易金额
     */
    total_trade_amount?: number;
    /**
     * 会员来源id
     */
    customer_source?: number;
    /**
     * 用户源ID
     */
    source_id?: number;
  }

}
