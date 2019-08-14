// tslint:disable:max-line-length variable-name
export namespace BeautyMemberMeiCustomerUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 地区编码
     */
    area_code?: number;
    /**
     * 头像链接
     */
    avatar?: string;
    /**
     * 会员归属的门店id，如果不属于任何门店，则填写0
     */
    belong_dept_id?: number;
    /**
     * 会员生日
     */
    birthday?: string;
    /**
     * 营销顾问列表
     */
    consultant_ids?: number[];
    /**
     * 联系电话
     */
    contact_number?: string;
    /**
     * 性别
     * 0 未知
     * 1 男
     * 2 女
     */
    gender?: number;
    /**
     * 会员等级的别称，需要从等级列表中获取
     */
    level_alias?: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 会员名称
     */
    member_name?: string;
    /**
     * 会员编号
     */
    member_no?: string;
    /**
     * 会员备注姓名
     */
    memo_name?: string;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 微信账号
     */
    wx_account?: string;
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
     * 更新结果
     */
    is_success?: boolean;
  }

}
