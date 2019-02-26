export namespace BeautyShopMeiDeptStatusGet {
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
         * 过期时间
         */
        expire_time?: number;
        /**
         * 剩余时间
         */
        remain_time?: number;
        /**
         * 店铺状态
         * 10, "试用期"
         * 20, "保护期"
         * 20, "保护期"
         * 40, "试用期打烊"
         * 50, "服务期打烊"
         */
        valid_status?: number;
    }

}
