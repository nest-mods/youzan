export namespace PayQrcodeTradeQrlabelSearch {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 页码
     */
    page_no?: number;
    /**
     * 每页数量
     */
    page_size?: number;
    /**
     * 网点编号
     */
    shop_id?: string;
    /**
     * 网点类型
     */
    shop_type?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 返回记录总数
     */
    total_results?: QrTotalResult;
    /**
     * 二维码标签列表
     */
    qrlabels?: TradeCashierQrLabel[];
  }

  /**
   * 返回记录总数
   */
  export interface QrTotalResult {
    /**
     * 结果总数
     */
    total?: number;
  }

  /**
   * 二维码标签列表
   */
  export interface TradeCashierQrLabel {
    /**
     * 标签编号
     */
    id?: string;
    /**
     * 标签名称
     */
    label_name?: string;
    /**
     * 关联的定额二维码数量
     */
    quota_count?: number;
    /**
     * 关联的自助二维码数量
     */
    nou_quota_count?: number;
    /**
     * 标签创建日期
     */
    create_time?: string;
    /**
     * 标签修改日期
     */
    modify_time?: string;
  }

}
