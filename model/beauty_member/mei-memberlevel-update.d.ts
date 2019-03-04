export namespace BeautyMemberMeiMemberlevelUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要更新的等级的等级id
     */
    level_id?: number;
    /**
     * 等级名称
     */
    level_name?: string;
    /**
     * 权益列表
     */
    level_right_settings?: MeiLevelRightSetting[];
    /**
     * 成长值
     */
    level_value?: number;
    /**
     * 美业token
     */
    m_token?: string;
  }

  /**
   * 
   */
  export interface MeiLevelRightSetting {
    /**
     * 是否启用。0 不启用 1启用
     */
    enable?: number;
    /**
     * 权益分类。1 通用类权益；2 折扣权益；3 自定义权益
     */
    level_right_type?: number;
    /**
     * 会员权益分类。200 "等级商品折扣"；201 "等级服务折扣"；202  "等级产品包邮"；203  "等级生日祝福"；204 "等级自定义权限"
     */
    member_right_type?: number;
    /**
     * 权益名称，只有自定义权益需要使用
     */
    name?: string;
    /**
     * 权益的值，如果权益有变化的值，可以通过这个字段指定，比如折扣
     */
    value?: number;
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
