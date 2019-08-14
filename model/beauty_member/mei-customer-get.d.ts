// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiCustomerGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 会员id
     */
    yz_uid: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 生日，例如1989-12-21
     */
    birthday?: string;
    /**
     * 性别
     * 0 未知
     * 1 男
     * 2 女
     */
    gender?: number;
    /**
     * 会员编号
     */
    member_no?: string;
    /**
     * 等级别名
     */
    level_alias?: string;
    /**
     * 创建时间
     */
    created_at?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 附属门店id。如果是0 则表示不属于任何门店
     */
    belong_dept_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 更新时间
     */
    updated_at?: number;
    /**
     * 是否是会员。1表示是会员
     */
    member?: number;
    /**
     * 来源id
     */
    customer_source?: number;
    /**
     * 等级id
     */
    level?: number;
    /**
     * 地区编码
     */
    area_code?: number;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 会员备注姓名，商家对会员的备注名称。例如张总
     */
    memo_name?: string;
    /**
     * 营销顾问id列表
     */
    consultant_ids?: number[];
    /**
     * 头像url
     */
    avatar?: string;
    /**
     * 会员名称，例如张三
     */
    member_name?: string;
    /**
     * 会员id
     */
    yz_uid?: number;
    /**
     * 联系电话
     */
    contact_number?: string;
    /**
     * 等级名称
     */
    level_name?: string;
    /**
     * 微信账号
     */
    wx_account?: string;
    /**
     * 会员名称。买家自己写的名字，例如如花
     */
    name?: string;
    /**
     * 成长值
     */
    growth?: number;
    /**
     * 用户来源id
     */
    source_id?: number;
    /**
     * 来源名称
     */
    customer_source_name?: string;
  }

}
