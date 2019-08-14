// tslint:disable:max-line-length variable-name
export namespace ItemSkusCustomGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品数字编号
     */
    item_id?: number;
    /**
     * 商品规格编码
     */
    item_no: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * sku列表
     */
    skus?: ItemSku[];
  }

  /**
   * sku列表
   */
  export interface ItemSku {
    /**
     * 库存唯一编码
     */
    sku_unique_code?: string;
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * SKU ID
     */
    sku_id?: number;
    /**
     * 规格属性
     */
    properties_name?: string;
    /**
     * 规格属性json串
     */
    properties_name_json?: string;
    /**
     * 下单数量 - 销售数量
     */
    with_hold_quantity?: number;
    /**
     * 价格, 单位元,精确到小数点后两位
     */
    price?: string;
    /**
     * 创建时间, 格式:yyyy-MM-dd HH:mm:ss
     */
    created?: string;
    /**
     * 修改时间,格式:yyyy-MM-dd HH:mm:ss
     */
    modified?: string;
    /**
     * 库存数量
     */
    quantity?: number;
    /**
     * 商品编码
     */
    item_no?: string;
    /**
     * 重量
     */
    weight?: string;
  }

}
