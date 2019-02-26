export namespace ShopShopAddressList {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 地址类型 return(退货地址) | invoice(发票地址)
         */
        type?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 地址总数
         */
        total?: number;
        /**
         * 地址列表
         */
        list?: ShopAddress;
    }

    /**
     * 地址列表
     */
    export interface ShopAddress {
        /**
         * 地址id
         */
        id?: number;
        /**
         * 联系人
         */
        contact_name?: string;
        /**
         * 联系手机号
         */
        mobile?: string;
        /**
         * 地区类型
         */
        region_type?: string;
        /**
         * 地区id
         */
        region_id?: number;
        /**
         * 省市区
         */
        area?: string;
        /**
         * 详细地址
         */
        address?: string;
        /**
         * 手机区号
         */
        country_code?: string;
        /**
         * 是否是默认地址
         */
        is_default?: number;
        /**
         * 创建时间
         */
        created_at?: string;
        /**
         * 更新时间
         */
        updated_at?: string;
    }

}
