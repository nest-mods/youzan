export namespace BuyerAddressUserAddressAdd {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 详细地址
         */
        address_detail?: string;
        /**
         * 区号
         */
        area_code?: string;
        /**
         * 市
         */
        city?: string;
        /**
         * 社区
         */
        community?: string;
        /**
         * 县
         */
        county?: string;
        /**
         * 纬度
         */
        lat?: string;
        /**
         * 经度
         */
        lon?: string;
        /**
         * 邮政编码
         */
        postal_code?: string;
        /**
         * 省
         */
        province?: string;
        /**
         * 手机号码
         */
        tel?: string;
        /**
         * 用户名称
         */
        user_name?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 地址id
         */
        response?: number;
    }

}
