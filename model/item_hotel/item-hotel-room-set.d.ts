export namespace ItemHotelItemHotelRoomSet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 开始日期,格式 yyyy-mm-dd
     */
    begin_date?: string;
    /**
     * 结束日期,格式 yyyy-mm-dd
     */
    end_date?: string;
    /**
     * 商品Id
     */
    item_id?: number;
    /**
     * 价格;单位元,精确到小数后2位
     */
    price?: string;
    /**
     * 规格ID,无规格商品不用填写
     */
    sku_id?: number;
    /**
     * 一段时间内指定某几天设置,不填写默认全设置，多个逗号分隔；周一:1,周二:2,周三:3,周四:4,周五:5,周六:6,周日:7
     */
    special_weeks?: string;
    /**
     * 开关房: 1开启 0关闭
     */
    status?: number;
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
     * 是否成功
     */
    is_success?: boolean;
  }

}
