// tslint:disable:max-line-length variable-name
export namespace ItemHotelItemHotelRoomUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 商品Id
     */
    item_id: number;
    /**
     * 房态详情列表，一次最多30条数据
     * [{stock_date:"2017-10-31",status:1,price:322.01,stock_num:65}]
     */
    room_stock: RoomStock[];
    /**
     * 规格Id，无规格商品不用填写
     */
    sku_id?: number;
  }

  /**
   *
   */
  export interface RoomStock {
    /**
     * 价格（元），精确到小数点后2位
     */
    price?: string;
    /**
     * 开关房: 1开启 0关闭
     */
    status?: number;
    /**
     * 日期
     */
    stock_date?: string;
    /**
     * 库存数量
     */
    stock_num?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 操作是否成功
     */
    is_success?: boolean;
  }

}
