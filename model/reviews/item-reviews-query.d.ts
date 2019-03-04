export namespace ReviewsItemReviewsQuery {
  /**
   * 请求参数
   */
  export interface Request {
    /**
     * alias，短url，唯一字符串
     */
    alias?: string;
    /**
     * 是否获取头像的信息，（注：1是；0否）,必填项
     */
    avatar?: number;
    /**
     * 买家id
     */
    buyer_id?: number;
    /**
     * 粉丝id
     */
    fans_id?: number;
    /**
     * 粉丝类型
     */
    fans_type?: number;
    /**
     * 商品id
     */
    item_id?: number;
    /**
     * 最新的评价id
     */
    last_review_id?: number;
    /**
     * 页数
     */
    page?: number;
    /**
     * 每页大小
     */
    page_size?: number;
    /**
     * 图片
     */
    picture?: string;
    /**
     * 评价的数值
     */
    rate?: number;
    /**
     * 评价内容
     */
    review?: string;
    /**
     * 供货商采购订单编号
     */
    seller_tid?: string;
    /**
     * skuId
     */
    sku_id?: number;
    /**
     * 供应商的店铺goodsId，必填，如果是分销商品，则supplierGoodsId为供应商的goodsId，如是普通商品则supplierGoodsId为当前的goodsId
     */
    supplier_item_id?: number;
    /**
     * 供应商的店铺kdtId，必填，如果是分销商品，则supplierKdtId为供应商的kdtId，如是普通商品则supplierKdtId为自己店铺kdtId
     */
    supplier_kdt_id?: number;
    /**
     * 供应商skuId
     */
    supplier_sku_id?: number;
    /**
     * 订单号
     */
    tid?: string;
  }

  /**
   * 响应参数
   */
  export interface Response {
    /**
     * data里包含的是list对象，即多条商品评价记录，可以参考正确结果里面的例子，里面有评价模型的各个字段
     */
    item_reviews_models?: ItemReviewsOpenVOPaginatorResult;
    /**
     * 评价用户头像url
     */
    with_avatar_list?: WithAvatarList;
  }

  /**
   * data里包含的是list对象，即多条商品评价记录，可以参考正确结果里面的例子，里面有评价模型的各个字段
   */
  export interface ItemReviewsOpenVOPaginatorResult {
    /**
     * code
     */
    code?: number;
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 错误msg
     */
    message?: string;
    /**
     * 
     */
    data?: ItemReviewsModelExtListWithPaginatorVOPaginator;
  }

  /**
   * 
   */
  export interface ItemReviewsModelExtListWithPaginatorVOPaginator {
    /**
     * 页数
     */
    page?: number;
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 总数
     */
    totalCount?: number;
    /**
     * 
     */
    items?: ItemReviewsModel[];
  }

  /**
   * 
   */
  export interface ItemReviewsModel {
    /**
     * 订单号
     */
    order_no?: string;
    /**
     * 粉丝类型
     */
    fans_type?: number;
    /**
     * 商品评价等级 30 好评 20 中评 10 差评
     */
    rate?: number;
    /**
     * 评论
     */
    review?: string;
    /**
     * 评价图片
     */
    picture?: string[];
    /**
     * 商品描述相符等级 1~5
     */
    desc_rate?: number;
    /**
     * 卖家服务态度等级 1~5
     */
    serv_rate?: number;
    /**
     * 物流发货速度等级 1~5
     */
    logi_rate?: number;
    /**
     * 卖家回复
     */
    seller_comment?: string;
    /**
     * 卖家回复图片
     */
    seller_picture?: string[];
    /**
     * 点赞数量
     */
    like_num?: number;
    /**
     * 创建时间
     */
    created_time?: string;
    /**
     * 更新时间
     */
    update_time?: string;
    /**
     * 评价别名
     */
    alias?: string;
    /**
     * 粉丝头像
     */
    fans_picture?: string;
    /**
     * 粉丝昵称
     */
    fans_nickname?: string;
    /**
     * 用户姓名
     */
    user_name?: string;
    /**
     * 是否其他店铺
     */
    other_shop?: boolean;
    /**
     * 是否点赞
     */
    ilike?: boolean;
  }

  /**
   * 评价用户头像url
   */
  export interface WithAvatarList {
    /**
     * 评价用户的头像url
     */
    fans_picture?: string;
  }

}
