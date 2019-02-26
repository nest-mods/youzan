export namespace BeautyShopMeiDeptAvailableQuery {
    /**
     * 请求参数
     */
    export interface Request {
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 门店列表
         */
        depts?: MeiDeptInfo;
    }

    /**
     * 门店列表
     */
    export interface MeiDeptInfo {
        /**
         * 门店名字
         */
        dept_name?: string;
        /**
         * 店铺ID
         */
        kdt_id?: number;
        /**
         * 角色ID
         */
        role_id?: number;
        /**
         * 门店ID
         */
        dept_id?: number;
        /**
         * 角色名字
         */
        role_name?: string;
        /**
         * 门店logo
         */
        logo?: string;
        /**
         * 店铺名称
         */
        shop_name?: string;
        /**
         * 店铺状态
         */
        status?: number;
        /**
         * 店铺地址
         */
        shop_address?: MeiShopAddress;
    }

    /**
     * 店铺地址
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

}
