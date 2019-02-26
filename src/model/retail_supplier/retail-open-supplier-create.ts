export namespace RetailSupplierRetailOpenSupplierCreate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 地址
         */
        address?: string;
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人电话
         */
        contacts_phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 传真
         */
        fax?: string;
        /**
         * 公司电话
         */
        phone?: string;
        /**
         * qq号
         */
        qq?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 零售调用来源(调用方和有赞约定的值)
         */
        retail_source?: string;
        /**
         * 供应商名称
         */
        supplier_name?: string;
        /**
         * 微信号
         */
        wei_xin?: string;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 供应商名称
         */
        supplier_name?: string;
        /**
         * 供应商编码
         */
        supplier_code?: string;
        /**
         * 公司电话
         */
        phone?: string;
        /**
         * 联系人
         */
        contacts?: string;
        /**
         * 联系人电话
         */
        contacts_phone?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * qq号
         */
        qq?: string;
        /**
         * 微信号
         */
        wei_xin?: string;
        /**
         * 传真
         */
        fax?: string;
        /**
         * 邮箱
         */
        email?: string;
    }

}
