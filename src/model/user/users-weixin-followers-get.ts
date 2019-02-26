export namespace UserUsersWeixinFollowersGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 关注的结束时间。查询在该时间之前关注的粉丝，不能为空，查询时间间隔不能超过一天，格式同start_follow
         */
        end_follow?: Date;
        /**
         * 需要返回的微信粉丝对象字段，如nick,avatar等。可选值：CrmWeixinFans微信粉丝结构体中所有字段均可返回；多个字段用“,”分隔。如果为空则返回所有
         */
        fields?: string;
        /**
         * 是否仅拉取关注的粉丝。1:仅拉取已关注的粉丝 0:拉取已关注和已跑路粉丝
         */
        only_follow?: number;
        /**
         * 页码，page_no * page_size参数不超过10000。若备选数据多于10000条，请通过调整start_follow/end_follow来缩小时间范围。
         */
        page_no?: number;
        /**
         * 每页条数，最大值：50
         */
        page_size?: number;
        /**
         * 关注的起始时间。查询在该时间之后（包含该时间）关注的粉丝，不能为空。格式可为“20170101”或“2017-01-01 12:00:00"
         */
        start_follow?: Date;
    }

    export type Response = void;

}
