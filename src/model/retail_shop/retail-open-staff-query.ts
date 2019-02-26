export namespace RetailShopRetailOpenStaffQuery {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 员工id列表
         */
        admin_ids?: number[];
        /**
         * 调用来源标识
         */
        retail_source?: string;
        /**
         * 是否包含删除员工
         */
        with_delete?: boolean;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 员工信息列表
         */
        response?: OpenStaffDTO;
    }

    /**
     * 员工信息列表
     */
    export interface OpenStaffDTO {
        /**
         * 员工id
         */
        admin_id?: number;
        /**
         * 员工账号，此处指手机号
         */
        account?: string;
        /**
         * 员工姓名
         */
        name?: string;
        /**
         * 员工状态 DELETE(-1),ON(0),EXCEPTION(1),LOCK(2),OFF(3)
         */
        status?: number;
        /**
         * 创建时间
         */
        create_time?: Date;
        /**
         * 更新时间
         */
        update_time?: Date;
    }

}
