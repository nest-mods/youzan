export namespace BeautyShopMeiDeptBrandinfoGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 联系人
     */
    contact_name?: string;
    /**
     * 主体认证状态。
  * 10:"成功",
  *  20:"未认证",
  *  30:"认证中",
  *  40:"认证失败"
     */
    principal_cert_status?: number;
    /**
     * 客服电话区号
     */
    pre_code?: string;
    /**
     * 品牌认证状态 10:"成功", 
  * 20:"未认证", 
  * 30:"认证中", 
  * 40:"认证失败"
     */
    brand_cert_status?: number;
    /**
     * 主体认证类型。
  * 2: 企业
  *  3:个人 
  * 4:个人快捷
  *  10:社会团体 
  * 12:个体工商户
     */
    principal_cert_type?: number;
    /**
     * 客服电话
     */
    telephone_number?: string;
    /**
     * 联系qq
     */
    contact_qq?: string;
    /**
     * 主体认证名称
     */
    principal_cert_name?: string;
    /**
     * 类目id
     */
    cate_id?: number;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 店铺短连接
     */
    shop_short_url?: string;
    /**
     * 店铺链接
     */
    shop_url?: string;
    /**
     * 类目名称
     */
    cate_name?: string;
    /**
     * 店铺名称
     */
    name?: string;
    /**
     * 联系人电话
     */
    contact_mobile?: string;
    /**
     * 店铺logo
     */
    logo?: string;
  }

}
