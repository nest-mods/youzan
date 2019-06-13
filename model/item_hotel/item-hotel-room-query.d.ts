export namespace ItemHotelItemHotelRoomQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 房态开始时间
     */
    begin_date: string;
    /**
     * 房态结束时间
     */
    end_date: string;
    /**
     * 商品Id
     */
    item_id: number;
    /**
     * skuIds, 多个id用,隔开
     */
    sku_ids: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 房态列表
     */
    hotel_skus?: HotelSkuModel[];
  }

  /**
   * 房态列表
   */
  export interface HotelSkuModel {
    /**
     * 酒店库存ID
     */
    hotelSkuId?: number;
    /**
     * 商品ID
     */
    itemId?: number;
    /**
     * 店铺ID
     */
    kdtId?: number;
    /**
     * 酒店库存日期
     */
    stockDate?: string;
    /**
     * goods_sku 表的id
     */
    itemSkuId?: number;
    /**
     * 房间状态: 0 关闭, 1 开启
     */
    status?: number;
    /**
     * 库存数量
     */
    stockNum?: number;
    /**
     * 房间价格（分）
     */
    price?: number;
  }

}
