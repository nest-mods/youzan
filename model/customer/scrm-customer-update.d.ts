export namespace CustomerScrmCustomerUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 用户帐号信息
     */
    account?: Account;
    /**
     * 更新客户所需信息
     */
    customer_update?: CustomerUpdate;
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
   * 
   */
  export interface CustomerUpdate {
    /**
     * 生日
     */
    birthday?: string;
    /**
     * 
     */
    contact_address?: ContactAddressUpdate;
    /**
     * 性别，0：未知；1：男；2：女
     */
    gender?: number;
    /**
     * 姓名
     */
    name?: string;
  }

  /**
   * 
   */
  export interface ContactAddressUpdate {
    /**
     * 详细地址
     */
    address?: string;
    /**
     * 地域编码
     */
    area_code?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 更新是否成功
     */
    response?: boolean;
  }

}
