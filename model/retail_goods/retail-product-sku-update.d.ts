// tslint:disable:max-line-length variable-name
export namespace RetailGoodsRetailProductSkuUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 目录id
     */
    category_id: number;
    /**
     * 名称
     */
    name?: string;
    /**
     * 图片地址(例如：https://img.yzcdn.cn/public_files/2017/08/30/63a8d)
     */
    photo_url?: string;
    /**
     * 商品Id
     */
    sku_id: string;
    /**
     * 商品编码（最多20个字符，仅限英文字符与数据组合。如果为空，系统自动生成）
     */
    sku_no?: string;
    /**
     * 请求来源（需调用方自定义标识：OPEN_XXXX）
     */
    source: string;
    /**
     * 商品库商品规格（规格最多100个字）
     */
    specifications?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否成功
     */
    update_result?: boolean;
  }

}
