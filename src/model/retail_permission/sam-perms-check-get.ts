export namespace RetailPermissionSamPermsCheckGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 默认查改价权限
         */
        permission_type?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * true: 有权限 false: 无权限
         */
        has_permission?: boolean;
    }

}
