export namespace BeautyShopMeiDeptGet {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 要查询的分店id
     */
    dept_id: number;
    /**
     * 美业token
     */
    m_token: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 分店url短连接
     */
    dept_short_url?: string;
    /**
     * 主体认证状态
     */
    principal_cert_status?: number;
    /**
     * 创建时间
     */
    create_time?: number;
    /**
     * 客服电话区号
     */
    pre_code?: string;
    /**
     * 主体认证类型
     */
    principal_cert_type?: number;
    /**
     * 客服电话
     */
    telephone_number?: string;
    /**
     * 分店名称
     */
    dept_name?: string;
    /**
     * 简介
     */
    description?: string;
    /**
     * 主体认证名称
     */
    principal_cert_name?: string;
    /**
     * 营业时间
     */
    business_hour?: MeiBusinessHour;
    /**
     * 分店url
     */
    dept_url?: string;
    /**
     * 分店地址
     */
    shop_address?: MeiShopAddress;
    /**
     * 店铺id
     */
    kdt_id?: number;
    /**
     * 分店logo
     */
    logo?: string;
    /**
     * 可预约时间
     */
    reserve_hour?: MeiBusinessHour;
  }

  /**
   * 营业时间
   */
  export interface MeiBusinessHour {
    /**
     * HourTime结构
     */
    time?: MeiHourTime;
    /**
     * 是否7*24小时营业
     */
    allWeek?: boolean;
    /**
     * 工作的的日期
     */
    date?: number[];
    /**
     * 判断businessHour是否有效
     */
    valid?: boolean;
  }

  /**
   * HourTime结构
   */
  export interface MeiHourTime {
    /**
     * 开始的分钟数
     */
    start?: number;
    /**
     * 结束的分钟数
     */
    end?: number;
  }

  /**
   * 分店地址
   */
  export interface MeiShopAddress {
    /**
     * 详细地址
     */
    detailed_address?: string;
    /**
     * 省份
     */
    province?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 区域编码
     */
    area_code?: number;
    /**
     * 区
     */
    district?: string;
    /**
     * 维度
     */
    latitude?: number;
    /**
     * 精度
     */
    longitude?: number;
  }

  /**
   * 可预约时间
   */
  export interface MeiBusinessHour {
    /**
     * HourTime结构
     */
    time?: MeiHourTime;
    /**
     * 是否7*24小时营业
     */
    allWeek?: boolean;
    /**
     * 工作的的日期
     */
    date?: number[];
    /**
     * 判断businessHour是否有效
     */
    valid?: boolean;
  }

  /**
   * HourTime结构
   */
  export interface MeiHourTime {
    /**
     * 开始的分钟数
     */
    start?: number;
    /**
     * 结束的分钟数
     */
    end?: number;
  }

}
