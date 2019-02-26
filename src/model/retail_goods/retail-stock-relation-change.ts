export namespace RetailGoodsRetailStockRelationChange {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 来源
         */
        retail_source?: string;
        /**
         * 欲修改的状态，1:绑定 0:解绑
         */
        status?: number;
        /**
         * 对应关系的店铺kdtId
         */
        store_id?: number;
        /**
         * 仓库id
         */
        warehouse_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 是否成功
         */
        response?: boolean;
    }

}
