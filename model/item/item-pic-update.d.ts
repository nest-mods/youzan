export namespace ItemItemPicUpdate {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * 图片id，图片上传经过有赞素材中心返回的id，可通过该图片id查得图片的详情，如下接口获取youzan.materials.storage.platform.img.upload
     */
    image_id?: number;
    /**
     * 商品ID，可以通过列表接口如youzan.items.onsale.get （查询出售中商品）和 youzan.items.inventory.get （查询仓库中商品）获取到
     */
    item_id?: number;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * 商品ID
     */
    item_id?: number;
    /**
     * 操作是否成功
     */
    is_success?: boolean;
  }

}
