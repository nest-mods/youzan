export namespace BeautyMemberMeiCustomerCreate {
  /**
   * 请求参数
   */
  export interface Request {
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
     * 客户来源
  * 0 无来源
  * 700 线上顾客
  * 701 线下预约
  * 702 手工录入
  * 703 外部导入
     */
    customer_source: number;
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
    level_alias: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 会员名称
     */
    member_name: string;
    /**
     * 会员编号
     */
    member_no: string;
    /**
     * 会员备注姓名
     */
    memo_name?: string;
    /**
     * 手机号码
     */
    mobile: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 微信账号
     */
    wx_account?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 会员id
     */
    yz_uid?: number;
  }

}
