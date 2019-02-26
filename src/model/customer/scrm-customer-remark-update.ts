export namespace CustomerScrmCustomerRemarkUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 用户帐号信息
         */
        account?: Account;
        /**
         * 更新备注信息
         */
        remark?: string;
    }

    /**
     *
     */
    export interface Account {
        /**
         * 帐号ID
         */
        account_id?: string;
        /**
         * 帐号类型。目前支持以下选项（只支持传一种）： FansID：自有粉丝ID， Mobile：手机号， YouZanAccount：有赞账号
         */
        account_type?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 更新是否成功
         */
        response?: boolean;
    }

}
