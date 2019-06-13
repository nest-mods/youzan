export namespace BeautyMemberMeiCardCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 是否启用全店折扣。
  * 0 不启用
  * 1 启用
     */
    all_discount?: number;
    /**
     * 全店折扣值，当时启用全店折扣时才生效。
  * 例如9折，则写90
     */
    all_discount_value?: number;
    /**
     * 卡片背景图
     */
    background_img: string;
    /**
     * 会员卡名称
     */
    card_name: string;
    /**
     * 会员卡售价，单位是分
     */
    card_price: number;
    /**
     * 会员卡权益列表
     */
    card_rights: MeiCardRight[];
    /**
     * 会员卡类型。
  * 1 次卡
  * 2 折扣卡
  * 3 充值卡
     */
    card_type: number;
    /**
     * 卡片描述信息
     */
    description?: string;
    /**
     * 美业token
     */
    m_token: string;
    /**
     * 充值赠送金额，单位是分。只有充值卡的时候才有效。
     */
    prepaid_gift_price?: number;
    /**
     * 是否同步微信卡包
  * 0 不同步
  * 1 同步
     */
    sync_wx?: number;
    /**
     * 有效期。
  * 0 表示永久有效
  * 其他数字表示有效天数
     */
    term_days?: number;
    /**
     * 是否显示在网店
  * 0 不显示 
  * 1 显示
     */
    wap_show?: number;
  }

  /**
   * 
   */
  export interface MeiCardRight {
    /**
     * 是否是赠送。0 不是赠送；1 是赠送
     */
    gift?: number;
    /**
     * 商品的id
     */
    goods_id?: number;
    /**
     * 权益id,更新的时候才需要，创建时不需要
     */
    rights_id?: number;
    /**
     * 权益类型：1，折扣；2，次数
     */
    rights_type?: number;
    /**
     * 权益值，例如次卡中某项服务10次
     */
    value?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 卡标识
     */
    card_alias?: string;
  }

}
