export namespace BeautyMemberMeiMemberlevelList {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 美业token
     */
    m_token?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 等级列表
     */
    item?: MeiMemberLevelSetting;
  }

  /**
   * 等级列表
   */
  export interface MeiMemberLevelSetting {
    /**
     * 店铺Id
     */
    kdt_id?: number;
    /**
     * 等级名称
     */
    level_name?: string;
    /**
     * 等级id
     */
    level_id?: number;
    /**
     * 等级别名
     */
    level_alias?: string;
    /**
     * 等级权限配置
     */
    level_right_settings?: MeiLevelRightSetting;
  }

  /**
   * 等级权限配置
   */
  export interface MeiLevelRightSetting {
    /**
     * 是否启用
     */
    enable?: number;
    /**
     * 权限项的具体值，比如折扣值
     */
    value?: number;
    /**
     * 名称，在自定义权限中使用
     */
    name?: string;
    /**
     * 权益分类。1 通用类权益；2 折扣权益；3 自定义权益
     */
    level_right_type?: number;
    /**
     * 会员权益分类。200 "等级商品折扣"；201 "等级服务折扣"；202  "等级产品包邮"；203  "等级生日祝福"；204 "等级自定义权限"
     */
    member_right_type?: number;
  }

}
