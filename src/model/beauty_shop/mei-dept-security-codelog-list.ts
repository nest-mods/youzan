export namespace BeautyShopMeiDeptSecurityCodelogList {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 安全码id
         */
        code_id?: number;
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 页码，要查询的页数
         */
        page?: number;
        /**
         * 每页数量，最大200
         */
        page_size?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 分页信息
         */
        paginator?: MeiPaginator;
        /**
         * 操作记录列表
         */
        items?: MeiSecurityCodeLogItem;
    }

    /**
     * 分页信息
     */
    export interface MeiPaginator {
        /**
         * 总记录数
         */
        total_count?: number;
        /**
         * 第几页
         */
        page?: number;
        /**
         * 每页显示的记录数
         */
        page_size?: number;
    }

    /**
     * 操作记录列表
     */
    export interface MeiSecurityCodeLogItem {
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 安全码id
         */
        code_id?: number;
        /**
         * 操作者账号id
         */
        yz_uid?: number;
        /**
         * 操作者姓名
         */
        user_name?: string;
        /**
         * 操作者所在店铺
         */
        dept_name?: string;
        /**
         * 操作者角色
         */
        role?: string;
        /**
         * 操作时间
         */
        updated_at?: number;
    }

}
