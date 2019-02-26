export namespace RetailGoodsRetailStockVendorGet {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 调用来源
         */
        source?: string;
        /**
         * 供应商ID
         */
        vendor_id?: number;
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
         * 供应商VO
         */
        vendor_vo?: VendorVO;
    }

    /**
     * 供应商VO
     */
    export interface VendorVO {
        /**
         * qq
         */
        qq?: string;
        /**
         * 联系人电话
         */
        contacts_phone?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 创建时间
         */
        created_at?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 微信
         */
        wei_xin?: string;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 更新时间
         */
        updated_at?: number;
        /**
         * 供应商编码
         */
        sno?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 供应商id
         */
        vendor_id?: number;
        /**
         * 供应商名称
         */
        name?: string;
        /**
         * 传真
         */
        fax?: string;
        /**
         * 联系人名称
         */
        contacts?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 状态
         */
        status?: number;
    }

}
