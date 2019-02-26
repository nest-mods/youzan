export namespace RetailGoodsRetailStockVendorUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 地址
         */
        address?: string;
        /**
         * 联系人名称
         */
        contacts?: string;
        /**
         * 联系人电话
         */
        contacts_phone?: string;
        /**
         * 邮件
         */
        email?: string;
        /**
         * 传真
         */
        fax?: string;
        /**
         * 供应商名称
         */
        name?: string;
        /**
         * 公司电话
         */
        phone?: string;
        /**
         * qq号码
         */
        qq?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 供应商编码
         */
        sno?: string;
        /**
         * 调用来源
         */
        source?: string;
        /**
         * 启用or停用
         */
        status?: number;
        /**
         * 供应商ID
         */
        vendor_id?: number;
        /**
         * 微信号码
         */
        wei_xin?: string;
    }

    /**
     *
     */
    export interface Long {
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 更新结果
         */
        update_result?: boolean;
    }

}
