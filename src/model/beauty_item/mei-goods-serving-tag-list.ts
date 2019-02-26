export namespace BeautyItemMeiGoodsServingTagList {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 页码
         */
        page_no?: number;
        /**
         * 每页数目
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
         * 标签列表
         */
        items?: MeiGoodsTagResp;
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
     * 标签列表
     */
    export interface MeiGoodsTagResp {
        /**
         * 标签名称
         */
        name?: string;
        /**
         * 标签id
         */
        tag_id?: number;
    }

}
