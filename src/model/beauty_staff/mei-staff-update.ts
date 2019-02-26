export namespace BeautyStaffMeiStaffUpdate {
    /**
     * 请求参数
     */
    export interface Request {
        /**
         * 账号
         */
        account?: string;
        /**
         * 部门ID
         */
        dept_id?: number;
        /**
         * 美业token
         */
        m_token?: string;
        /**
         * 手机
         */
        mobile?: string;
        /**
         * 旧部门ID
         */
        old_dept_id?: number;
        /**
         * 职位ID 2 高级管理员 3 店长 4 普通职员 5 手艺人 7 总部财务 8 驻店财务 9 营销顾问  总店的员工只能选择2 分店员工除了2其他都可以选
         */
        position_id?: number;
        /**
         * 真实姓名
         */
        real_name?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 角色ID列表
         */
        roles?: MeiBeautyStoreRoleDTO;
        /**
         * 员工ID
         */
        yz_uid?: number;
    }

    /**
     *
     */
    export interface MeiBeautyStoreRoleDTO {
        /**
         * 角色ID
         */
        role_id?: number;
    }

    /**
     * 响应参数
     */
    export interface Response {
        /**
         * 员工姓名
         */
        real_name?: string;
        /**
         * 店铺id
         */
        kdt_id?: number;
        /**
         * 分店id
         */
        dept_id?: number;
        /**
         * 联系电话
         */
        mobile?: string;
        /**
         * 员工的有赞账号id
         */
        yz_uid?: number;
        /**
         * 有赞账号
         */
        account?: string;
        /**
         * 员工角色信息
         */
        roles?: MeiRole;
        /**
         * 职位ID
         */
        position_id?: number;
    }

    /**
     * 员工角色信息
     */
    export interface MeiRole {
        /**
         * 角色id
         */
        role_id?: number;
        /**
         * 角色名称
         */
        role_name?: string;
    }

}
