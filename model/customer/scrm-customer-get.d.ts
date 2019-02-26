export namespace CustomerScrmCustomerGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 用户帐号信息（{"account_type":"Mobile", "account_id":"1385716120"}）
     */
    account?: Account;
  }

  /**
   * 
   */
  export interface Account {
    /**
     * 帐号ID
     */
    account_id?: string;
    /**
     * 帐号类型。目前支持以下选项（只支持传一种）： FansID：自有粉丝ID， Mobile：手机号， YouZanAccount：有赞账号
     */
    account_type?: string;
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
     * 性别。0:未知；1:男；2:女
     */
    gender?: number;
    /**
     * 生日
     */
    birthday?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 是否为会员
     */
    is_member?: boolean;
    /**
     * 联系地址
     */
    contact_address?: ContactAddress;
  }

  /**
   * 联系地址
   */
  export interface ContactAddress {
    /**
     * 地域编码
     */
    areaCode?: number;
    /**
     * 省份
     */
    province?: string;
    /**
     * 地级市
     */
    city?: string;
    /**
     * 县级市、区
     */
    county?: string;
    /**
     * 详细地址
     */
    address?: string;
  }

}
