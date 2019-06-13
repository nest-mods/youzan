export namespace MultiStoreMultistoreGoodsSkuUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品id
     */
    num_iid: number;
    /**
     * 网点id
     */
    offline_id: number;
    /**
     * 商品货号（商家为商品设置的外部编号）
     */
    outer_id?: string;
    /**
     * 商品价格,更新的商品为无规格商品的时候必填，多规格商品非必填
     */
    price?: string;
    /**
     * 商品总库存。当商品没有SKU的时候有效，当商品有SKU时，总库存会自动按所有SKU库存之和计算
  * 
  * 不传skus_with_json ，也即商品无sku时，quantily、price、outer_id 需一起传入，不传系统自动置0
     */
    quantity?: string;
    /**
     * 商品Sku信息的Json字符串，示例 [{"sku_property":{"颜色":"白色","尺寸":"M"},"sku_price":1.0,"sku_quantity":16,"sku_outer_id":"1702210201","sku_id":36149753},{"sku_property":{"颜色":"白色","尺寸":"S"},"sku_price":1.0,"sku_quantity":18,"sku_outer_id":"1702210202","sku_id":36149754}] 其中sku_property是k:v;k:v组合；
  * 
  * 以下字段都必传：
  * sku_quantity是sku库存数量；
  * sku_price是sku价格；
  * sku_outer_id是sku商家编码；
  * sku_id是sku的id
     */
    skus_with_json?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否处理成功
     */
    is_success?: boolean;
  }

}
