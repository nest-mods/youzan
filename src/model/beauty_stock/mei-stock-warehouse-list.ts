export namespace BeautyStockMeiStockWarehouseList {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 美业token
         */
        m_token?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 仓库列表
         */
        response?: MeiWareHouseInfo;
    }

    /**
     * 仓库列表
     */
    export interface MeiWareHouseInfo {
        /**
         * 仓库id
         */
        ware_house_id?: number;
        /**
         * 仓库名称
         */
        ware_house_name?: string;
        /**
         * 店铺ID
         */
        kdt_id?: number;
        /**
         * 分店ID
         */
        dept_id?: number;
        /**
         * 地址
         */
        adrress?: string;
    }

}
