export namespace RetailGoodsRetailStockWarehouseUpdate {
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
         * 客服联系人姓名
         */
        contact_name?: string;
        /**
         * 客服联系人电话区号
         */
        contact_phone_code?: string;
        /**
         * 客服联系人电话
         */
        contact_phone_num?: string;
        /**
         * 区
         */
        county?: string;
        /**
         * 区id
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
        /**
         * 要修改的仓库id
         */
        warehouse_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否修改成功
         */
        response?: boolean;
    }

}
