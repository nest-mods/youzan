export namespace RetailRetailConsoleLogAdd {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 账号名称
     */
    account?: string;
    /**
     * 下载链接
     */
    download_link?: string;
    /**
     * 店铺Id
     */
    kdtid?: string;
    /**
     * 包名
     */
    package_name: string;
    /**
     * 平台
     */
    platform: string;
  }

  export type Response = void;

}
