export namespace ItemItemSkuGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * skuID； 无规格skuID不传，有规格必传，可通过详情接口 youzan.item.get获得
     */
    sku_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 返回sku对象
     */
    sku?: ItemSku;
  }

  /**
   * 返回sku对象
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
