export namespace MultiStoreMultistoreOfflineDelete {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 网点id
     */
    id: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 是否保存成功，保存成功为true
     */
    is_success?: boolean;
  }

}
