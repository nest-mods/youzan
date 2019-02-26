export namespace ItemCategoryItemcategoriesTaglistSearch {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 排序方式。格式为column:asc/desc，column可选值：created 创建时间
         */
        order_by?: string;
        /**
         * 页码
         */
        page_no?: number;
        /**
         * 每页条数
         */
        page_size?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 商品自定义标签列表
         */
        tags?: GoodsTag;
        /**
         * 结果总数
         */
        total_results?: number;
    }

    /**
     * 商品自定义标签列表
     */
    export interface GoodsTag {
        /**
         * 商品标签的ID
         */
        id?: number;
        /**
         * 商品标签的名称
         */
        name?: string;
        /**
         * 商品标签类型，0 自定义，1 未分类，2 最新，3 最热，4 隐藏
         */
        type?: number;
        /**
         * 商品标签创建时间
         */
        created?: string;
        /**
         * 商品标签内的商品数量
         */
        item_num?: number;
        /**
         * 商品标签的展示的URL地址
         */
        tag_url?: string;
        /**
         * 分享出去的商品标签展示地址
         */
        share_url?: string;
        /**
         * 商品标签描述
         */
        desc?: string;
    }

}
