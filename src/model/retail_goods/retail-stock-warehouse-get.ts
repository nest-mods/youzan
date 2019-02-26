export namespace RetailGoodsRetailStockWarehouseGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 查询类型，1:只查询内部简单信息，不包含仓库名称地址等。2:包含仓库名称地址信息。
         */
        query_type?: number;
        /**
         * 来源
         */
        retail_source?: string;
        /**
         * 仓库kdtId
         */
        warehouse_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 仓库信息
         */
        response?: WarehouseDetailVO;
    }

    /**
     * 仓库信息
     */
    export interface WarehouseDetailVO {
        /**
         * 仓库kdtId
         */
        warehouse_id?: number;
        /**
         * 总部kdtId
         */
        group_id?: number;
        /**
         * 仓库状态  0:启用   1:停用
         */
        status?: number;
        /**
         * 仓库类型  1:独立仓  2:门店仓  3:虚拟仓
         */
        type?: number;
        /**
         * 仓库备注
         */
        remark?: string;
        /**
         * 仓库名称
         */
        name?: string;
        /**
         * 省份
         */
        province?: string;
        /**
         * 城市
         */
        city?: string;
        /**
         * 区域
         */
        county?: string;
        /**
         * 区域id
         */
        county_id?: number;
        /**
         * 详细地址
         */
        address?: string;
        /**
         * 联系人姓名
         */
        contact_name?: string;
        /**
         * 手机号
         */
        contact_phone_num?: string;
        /**
         * 手机区号
         */
        contact_phone_code?: string;
        /**
         * 经度
         */
        lng?: string;
        /**
         * 纬度
         */
        lat?: string;
    }

}
