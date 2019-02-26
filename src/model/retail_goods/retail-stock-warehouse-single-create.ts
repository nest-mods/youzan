export namespace RetailGoodsRetailStockWarehouseSingleCreate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 详细地址
         */
        address?: string;
        /**
         * 城市
         */
        city?: string;
        /**
         * 联系人姓名
         */
        contact_name?: string;
        /**
         * 联系电话区号
         */
        contact_phone_code?: string;
        /**
         * 联系电话号码
         */
        contact_phone_num?: string;
        /**
         * 区域
         */
        county?: string;
        /**
         * 区域变慢
         */
        county_id?: number;
        /**
         * 经度
         */
        lat?: string;
        /**
         * 纬度
         */
        lng?: string;
        /**
         * 仓库名称
         */
        name?: string;
        /**
         * 省份
         */
        province?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 来源
         */
        retail_source?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 创建仓库的kdtid
         */
        response?: number;
    }

}
