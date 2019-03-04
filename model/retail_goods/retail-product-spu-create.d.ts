export namespace RetailGoodsRetailProductSpuCreate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 更多编码(最多10个编码，仅限英文字符与数据组合)
     */
    bar_codes?: string[];
    /**
     * 商品所属分类id
     */
    category_id?: number;
    /**
     * 默认供应商id
     */
    default_vendor_id?: number;
    /**
     * 成本价（单店版使用）
     */
    last_cost_price?: number;
    /**
     * 商品名称
     */
    name?: string;
    /**
     * 图片地址 
  * [{"url":"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg"}]
     */
    photo_url?: string;
    /**
     * 建议零售价 无规格商品时传输
  * 最大为9999999元
  * 最小为0.01元
     */
    retail_price?: number;
    /**
     * 调用来源（例如：OPEN-XXX）
     */
    retail_source?: string;
    /**
     * sku定义
     */
    skus?: SkuSaveRequest[];
    /**
     * 规格定义组
  * [{"key":{"k":"颜色","kId":1},"values":[{"v":"蓝色 ","vId":3},{"v":"红色 ","vId":10}]}]
     */
    spec_define_tuple?: string;
    /**
     * 规格型号（规格最多100个字）
     */
    specifications?: string;
    /**
     * 商品编码（最多20个字符，仅限英文字符与数据组合。如果为空，系统自动生成）
     */
    spu_no?: string;
    /**
     * 初始库存（单店版使用,初始库存量最大为100000）
     */
    stock_num?: number;
    /**
     * 单位，如：克、千克
     */
    unit?: string;
  }

  /**
   * 
   */
  export interface SkuSaveRequest {
    /**
     * 更多编码
     */
    bar_codes?: string[];
    /**
     * 配送价
     */
    delivery_price?: number;
    /**
     * 成本价（单店版生效）
     */
    last_cost_price?: number;
    /**
     * 建议零售价 建议零售价最大为9999999元 建议零售价最小为0.01元
     */
    retail_price?: number;
    /**
     * skuId    更新时规格组成没有变化传输
     */
    sku_id?: number;
    /**
     * 商品编码
     */
    sku_no?: string;
    /**
     * 
     */
    specs?: SpecKeyValue[];
    /**
     * 初始库存（单店版生效）
     */
    stock_num?: number;
  }

  /**
   * 
   */
  export interface SpecKeyValue {
    /**
     * 规格属性名称
     */
    k?: string;
    /**
     * 规格属性id
     */
    kId?: number;
    /**
     * 规格值名称
     */
    v?: string;
    /**
     * 规格值id
     */
    vId?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 保存成功的商品库商品spuId
     */
    result?: number;
  }

}
