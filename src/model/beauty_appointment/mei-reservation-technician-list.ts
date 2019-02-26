export namespace BeautyAppointmentMeiReservationTechnicianList {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 分店id
         */
        dept_id?: number;
        /**
         * 要查询的服务id
         */
        goods_id?: number;
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 要查询的服务的skuid
         */
        sku_id?: number;
        /**
         * 要查询的日期
         */
        time?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 技师信息
         */
        resources?: MeiResource;
    }

    /**
     * 技师信息
     */
    export interface MeiResource {
        /**
         * 资源名称
         */
        name?: string;
        /**
         * 资源类型
         * 1 技师（目前只有这一种类型）
         */
        resource_type?: number;
        /**
         * 资源id
         */
        resource_id?: number;
        /**
         * 资源标签，可以用来表示分组
         */
        tags?: string[];
    }

}
