import { YouzanOptions } from '../interfaces';
import { RequestService } from './request.service';
import { ShopShopGet, ShopShopBasicGet, ShopShopStatusGet, ShopShopAddressList, ShopShopAddressGet, ShopShopAddressCreate, ShopShopAddressDelete, ShopShopAddressUpdate, ItemItemDelete, ItemItemGet, ItemItemsCustomGet, ItemItemsInventoryGet, ItemItemUpdateListing, ItemItemUpdateDelisting, ItemSkusCustomGet, ItemItemSkuGet, ItemItemSkuUpdate, ItemItemQuantityUpdate, ItemItemTemplateListSearch, ItemItemCreate, ItemItemUpdate, ItemItemSearch, ItemItemsOnsaleGet, ItemItemPicUpdate, ItemCategoryItemcategoriesTagAdd, ItemCategoryItemcategoriesTagDelete, ItemCategoryItemcategoriesTagUpdate, ItemCategoryItemcategoriesTagsGet, ItemCategoryItemcategoriesTaglistSearch, ItemCategoryItemcategoriesGet, ReviewsItemReviewsQuery, ReviewsItemReviewsCount, TradeTradesSoldOuterGet, TradeTradeStarUpdate, TradeTradeMemoUpdate, TradeTradePriceUpdate, TradeTradesSoldGet, TradeTradeGet, TradeAdvancedTradeRefundGet, TradeAdvancedTradeRefundMessagesGet, TradeAdvancedTradeRefundSearch, LogisticsLogisticsTemplateCreate, LogisticsLogisticsTemplateSearch, LogisticsRegionsGet, LogisticsLogisticsExpressGet, LogisticsLogisticsFeeGet, LogisticsLogisticsExpressbyordernoGet, LogisticsLogisticsExpressbyordernoSearch, LogisticsLogisticsGoodsexpressGet, LogisticsLogisticsSettingUpdate, LogisticsLogisticsLocalGet, LogisticsLogisticsSettingGet, LogisticsLogisticsOnlineMarksign, LogisticsLogisticsOrderBatchQuery, LogisticsLogisticsOrderQuery, LogisticsLogisticsLocalMultipleUpdate, TradeVirtualTradeVirtualcodeApply, TradeVirtualTradeVirtualcodeGet, PayQrcodePayQrcodeCreate, PayQrcodePayQrcodesGet, PayQrcodePayQrcodeGet, PayQrcodeTradeQrcodeHasoutidGet, PayQrcodeTradeQrlabelSearch, PayQrcodeTradesQrGet, CouponAdvancedUmpPresentGive, CouponAdvancedUmpPresentsOngoingAll, CouponAdvancedUmpPromotionGet, CouponAdvancedUmpMemberpriceQuery, CouponAdvancedUmpGrouponOrdergroupdetailsGet, CouponAdvancedUmpLimitdiscountGet, CouponAdvancedUmpLimitdiscountDetailSearch, CouponAdvancedUmpMemberpriceUpdate, CouponAdvancedUmpLimitdiscountDetailQuery, CouponAdvancedUmpLimitdiscountSearch, CouponUmpPromocodeAdd, CouponUmpPromocodeDetailGet, CouponUmpPromocodeBuyerSearch, CouponUmpPromocardAdd, CouponUmpCouponConsumeVerify, CouponUmpCouponConsumeVerifylogsGet, CouponUmpCouponConsumeGet, CouponUmpCouponTake, CouponUmpCouponConsumeFetchlogsGet, CouponUmpCouponSearch, CouponUmpCouponDetailGet, CouponUmpCouponsUnfinishedSearch, CouponUmpPromocardDetailGet, CouponUmpPromocardBuyerSearch, SalesmanSalesmanCustomersGet, SalesmanSalesmanAccountScoreSearch, SalesmanSalesmanAccountsGet, SalesmanSalesmanTradesAccountGet, SalesmanSalesmanItemShareGet, SalesmanSalesmanItemsGet, SalesmanSalesmanAccountUpdate, SalesmanSalesmanAccountAdd, SalesmanSalesmanAccountGet, SalesmanSalesmanTradesGet, MultiStoreMultistoreOfflineCreate, MultiStoreMultistoreOfflineDelete, MultiStoreMultistoreOfflineUpdate, MultiStoreMultistoreOfflineSearch, MultiStoreMultistoreSettingGet, MultiStoreMultistoreGoodsDeliveryUpdate, MultiStoreMultistoreGoodsSingleskuUpdate, MultiStoreMultistoreGoodsDeliveryList, MultiStoreMultistoreGoodsDeliveryGet, MultiStoreMultistoreGoodsSkuGet, MultiStoreMultistoreGoodsSkuUpdate, MultiStoreMultistoreOfflineGet, UserUserBasicGet, UserUsersWeixinFollowersInfoPull, UserUsersWeixinFollowerGet, UserUsersWeixinFollowerGets, UserUsersWeixinFollowersInfoSearch, UserUsersWeixinFollowersPull, UserUsersWeixinFollowersGet, UserUserWeixinOpenidGet, UserUsersAccountCheck, CrmAdvancedScrmCardCreate, CrmAdvancedScrmCardEnable, CrmAdvancedScrmCardDelete, CrmAdvancedScrmCardDisable, CrmAdvancedScrmCardUpdate, CrmAdvancedScrmCardList, CrmAdvancedScrmCustomerSearch, CrmAdvancedScrmCustomerGet, CrmAdvancedScrmCardGet, CrmAdvancedScrmCustomerCardDelete, CrmAdvancedScrmCustomerInfoGet, CrmAdvancedScrmCardUrlGet, CrmAdvancedScrmCustomerCardList, CrmAdvancedScrmCustomerCardGrant, PointsCrmFansPointsGet, PointsCrmCustomerPointsChangelogSearch, PointsCrmCustomerPointsChangelogGet, PointsCrmCustomerPointsIncrease, PointsCrmCustomerPointsDecrease, PointsCrmCustomerPointsSync, BuyerCartTradeCartCount, BuyerCartTradeCartUpdate, BuyerCartTradeCartEmpty, BuyerCartTradeCartList, BuyerCartTradeCartDelete, BuyerCartTradeCartAdd, BuyerBillTradeBillGoodUrlGet, BuyerBillTradeBillGoodsUrlGet, BuyerTradeTradeLaterReceiveUpdate, BuyerTradeTradeConfirmReceiveUpdate, BuyerTradeTradeBillCancelGet, BuyerRefundTradeRefundModify, BuyerRefundTradeRefundIntervene, BuyerRefundTradeRefundApply, BuyerRefundTradeRefundClose, BuyerRefundTradeReturngoodsFill, BuyerRefundTradeRefundConditionGet, ItemHotelItemHotelRoomSet, ItemHotelItemHotelRoomUpdate, ItemHotelItemHotelRoomQuery, RetailProductRetailOpenSpuGet, RetailProductRetailOpenSkuQuery, RetailProductRetailOpenCategoryUpdate, RetailProductRetailOpenOnlineSpuRelease, RetailProductRetailOpenOfflineSpuRelease, RetailProductRetailOpenOnlineSpuGet, RetailProductRetailOpenOfflineSpuQuery, RetailProductRetailOpenCategoryCreate, RetailProductRetailOpenSpuDelete, RetailProductRetailOpenCategoryQuery, RetailProductRetailOpenSpuQuery, RetailProductRetailOpenOnlineSpuQuery, RetailProductRetailOpenCategoryDelete, RetailProductRetailOpenSpuCreate, RetailProductRetailOpenSpuUpdate, RetailProductRetailOpenSkuGet, BeautyAppointmentMeiReservationTimeRangeGet, BeautyAppointmentMeiReservationCancel, BeautyAppointmentMeiReservationTechnicianList, BeautyAppointmentMeiReservationGet, BeautyAppointmentMeiReservationList, BeautyAppointmentMeiReservationUpdate, BeautyAppointmentMeiReservationCreate, LevelMembershipCrmCustomerGrowthIncrease, LevelMembershipCrmCustomerGrowthGet, LevelMembershipCrmCustomerGrowthDecrease, LevelMembershipCrmCustomerGrowthList, BeautyStaffMeiStaffDelete, BeautyStaffMeiStaffRecover, BeautyStaffMeiStaffDetailQuery, BeautyStaffMeiStaffCreate, BeautyStaffMeiStaffPageQuery, BeautyStaffMeiStaffUpdate, AccountImportUserPlatformImport, RetailTradeRetailOpenRefundorderRefuse, RetailTradeRetailOpenReturnorderGet, RetailTradeRetailOpenRefundorderGoodsreturnAgree, RetailTradeRetailOpenRefundorderQuery, RetailTradeRetailOpenRefundorderGet, RetailTradeRetailOpenReturnorderConfirm, RetailTradeRetailOpenDeliveryorderGet, RetailTradeRetailOpenReturnorderRefuse, RetailTradeRetailOpenReturnorderQuery, RetailTradeRetailOpenRefundorderConfirm, RetailTradeRetailOpenDeliveryorderConfirm, RetailTradeRetailOpenDeliveryorderQuery, SupplierFenxiaoSupportOrderDeliveritemGet, SupplierFenxiaoSupportOrderSearch, SupplierFenxiaoSupportOrderDeliver, SupplierFenxiaoSupportOrderDetailGet, RetailGoodsRetailProductUnitsDelete, RetailGoodsRetailProductUnitUpdate, RetailGoodsRetailProductUnitCreate, RetailGoodsRetailProductUnitsSearch, RetailGoodsRetailProductCategorySearch, RetailGoodsRetailProductCategoryDelete, RetailGoodsRetailProductCategoryUpdate, RetailGoodsRetailProductCategoryCreate, RetailGoodsRetailProductSkuGet, RetailGoodsRetailProductSkusSearch, RetailGoodsRetailProductSkuUpdate, RetailGoodsRetailProductSkusDelete, RetailGoodsRetailProductSkucategoriesUpdate, RetailGoodsRetailProductSkuCreate, RetailGoodsRetailProductSpusSearch, RetailGoodsRetailProductSpuCreate, RetailGoodsRetailProductSpuUpdate, RetailGoodsRetailProductSpuGet, RetailGoodsRetailProductSpusBatchUpdate, RetailGoodsRetailProductSpusBatchDelete, RetailGoodsRetailProductOfflineCreate, RetailGoodsRetailProductOfflineUpdate, RetailGoodsRetailProductOfflineGet, RetailGoodsRetailProductsOfflineDisplay, RetailGoodsRetailProductsOfflineDelete, RetailGoodsRetailProductsOfflineSearch, RetailGoodsRetailStockBizorderSearch, RetailGoodsRetailStocksStockinSearch, RetailGoodsRetailStockStockinGet, RetailGoodsRetailStockStockinCreate, RetailGoodsRetailStocksStockcheckSearch, RetailGoodsRetailStockStockcheckGet, RetailGoodsRetailStockStockcheckUpdate, RetailGoodsRetailStockStockcheckCreate, RetailGoodsRetailStocksStockoutSearch, RetailGoodsRetailStockStockoutGet, RetailGoodsRetailStockStockoutCreate, RetailGoodsRetailStockStockreturnChainCreate, RetailGoodsRetailStockStockreturnCreate, RetailGoodsRetailStockStockreturnGet, RetailGoodsRetailStockCostchangeGet, RetailGoodsRetailStockCostchangeCreate, RetailGoodsRetailStockVendorsSearch, RetailGoodsRetailStockVendorGet, RetailGoodsRetailStockVendorUpdate, RetailGoodsRetailStockVendorCreate, RetailGoodsRetailProductCategoriesSearch, RetailGoodsRetailProductSkusConfirmationDelete, RetailGoodsRetailProductSellSkuUpdate, RetailGoodsRetailProductOnlineUpdate, RetailGoodsRetailProductsOnlineDelete, RetailGoodsRetailProductsOnlineDisplay, RetailGoodsRetailProductOnlineGet, RetailGoodsRetailStockWarehouseSingleCreate, RetailGoodsRetailStockRelationChange, RetailGoodsRetailStockStockallotCreate, RetailGoodsRetailStockStockallotCheck, RetailGoodsRetailStockStockallotUpdate, RetailGoodsRetailStockStockallotOut, RetailGoodsRetailStockStockallotIn, RetailGoodsRetailStockStockallotGet, RetailGoodsRetailStockStockallotSearch, RetailGoodsRetailStockWarehouseConfigGet, RetailGoodsRetailStockWarehouseConfigSet, RetailGoodsRetailStockGoodsapplyUpdate, RetailGoodsRetailStockDeliveryOut, RetailGoodsRetailStockDeliveryIn, RetailGoodsRetailStockGoodsapplyClose, RetailGoodsRetailStockGoodsapplySearch, RetailGoodsRetailStockDeliverySearch, RetailGoodsRetailStockDeliveryGet, RetailGoodsRetailProductsOnlineSearch, RetailGoodsRetailStockWarehouseUpdate, RetailGoodsRetailStockGoodsapplyGet, RetailGoodsRetailStockWarehouseSearch, RetailGoodsRetailStockWarehouseGet, RetailGoodsRetailStockStockallotClose, RetailGoodsRetailStockGoodsapplyCheck, RetailGoodsRetailStockWarehouseStatusUpdate, RetailGoodsRetailStockGoodsapplyCreate, RetailGoodsRetailProductOnlineCreate, TagScrmTagRelationDelete, TagScrmTagRelationGet, TagScrmTagRelationAdd, BeautyServiceLogMeiServicelogGet, BeautyServiceLogMeiServicelogList, BeautyServiceLogMeiServicelogCreate, BeautyServiceLogMeiServicelogDelete, RetailUmpRetailSalesShoprelationSave, BeautyMemberMeiCustomerPointsDecrease, BeautyMemberMeiCustomerRightsList, BeautyMemberMeiCustomerSecretfileinfoUpdate, BeautyMemberMeiCustomerSettingGet, BeautyMemberMeiCustomerSecretfileinfoGet, BeautyMemberMeiCardOffsale, BeautyMemberMeiCustomerFileinfoUpdate, BeautyMemberMeiCustomerGet, BeautyMemberMeiCustomerFiletemplateUpdate, BeautyMemberMeiCardCreate, BeautyMemberMeiMemberlevelCreate, BeautyMemberMeiMemberlevelList, BeautyMemberMeiCardUpdate, BeautyMemberMeiCustomerPointsIncrease, BeautyMemberMeiCardDelete, BeautyMemberMeiCustomerTradeinfoGet, BeautyMemberMeiCardGet, BeautyMemberMeiCardOnsale, BeautyMemberMeiCustomerFileinfoGet, BeautyMemberMeiCustomerCreate, BeautyMemberMeiCustomerAssetsinfoGet, BeautyMemberMeiCustomerUpdate, BeautyMemberMeiCardList, BeautyMemberMeiCardCustomerList, BeautyMemberMeiCustomerFiletemplateGet, BeautyMemberMeiCustomerList, BeautyMemberMeiMemberlevelUpdate, BeautyMemberMeiCustomerSettingUpdate, BeautyMemberMeiCustomerTagList, BeautyMemberMeiMemberlevelGet, BeautyMemberMeiMemberlevelDelete, SelffetchcodeTradeSelffetchcodeGet, SelffetchcodeTradeSelffetchcodeApply, TradeDeliveryLogisticsOnlineUpdate, TradeDeliveryTradeDcDeliveryDelivermultiissue, TradeDeliveryTradeDcDeliveryOrdersingleitemsend, TradeDeliveryLogisticsOnlineConfirm, TradeDeliveryTradeDcQueryQuerybyorderno, TagsUsersWeixinFollowerTagsAdd, TagsUsersWeixinFollowerTagsDelete, TagsUsersWeixinFollowerTagsGet, BeautyCashierMeiCashierRechargeGet, BeautyCashierMeiCashierPay, BeautyCashierMeiCashierPayGet, BeautyCashierMeiCashierRecharge, ExtensionAnalysisDatacenterPspagesourceDataFetch, ExtensionAnalysisDatacenterPspagesourceCreate, ExtensionAnalysisDatacenterPsstockFetch, ExtensionAnalysisDatacenterPspagesourceFetch, ExtensionAnalysisDatacenterPspagesourceOrderFetch, ExtensionAnalysisDatacenterPssourceFetch, ItemStandardItemStandardGet, ItemStandardItemStandardGetbycode, ItemStandardItemStandardCreate, ItemStandardItemStandardSearch, CircleLogisticsOnlineDelay, CircleLogisticsOnlineCanceldelay, CircleTradeDcQueryMultiperiodQuerydeliveryrecords, CircleTradeDcQueryMultiperiodQuerylatestplan, CircleTradeDcQueryMultiperioddetail, StoredValueCardCardvoucherValuecardFundPay, StoredValueCardCardvoucherValuecardRfndRcdBypubSearch, StoredValueCardCardvoucherValuecardRfndRcdBysupSearch, StoredValueCardCardvoucherValuecardFundRefund, StoredValueCardCardvoucherValuecardInfoBypubSearch, StoredValueCardCardvoucherValuecardFundRechargeGet, StoredValueCardCardvoucherValuecardInfoBysupQuery, StoredValueCardCardvoucherValuecardRechgRcdByacpSearch, StoredValueCardCardvoucherValuecardFundRecharge, StoredValueCardCardvoucherValuecardRechgRcdBypubSearch, StoredValueCardCardvoucherValuecardPayRcdBysupSearch, StoredValueCardCardvoucherValuecardPayRcdBypubSearch, StoredValueCardCardvoucherValuecardFundAdjust, StoredValueCardCardvoucherValuecardAdjRcdByacpSearch, StoredValueCardCardvoucherValuecardInfoQuery, BeautyShopMeiDeptSecurityCodeSwitch, BeautyShopMeiDeptBrandinfoGet, BeautyShopMeiDeptSecurityCodeUpdate, BeautyShopMeiDeptSecurityCodeGet, BeautyShopMeiDeptSecurityCodelogList, BeautyShopMeiDeptGet, BeautyShopMeiDeptAvailableQuery, BeautyShopMeiDeptBind, BeautyShopMeiDeptStatusGet, BeautyWorkOrderMeiWorkorderList, BeautyWorkOrderMeiWorkorderOrdergroup, BeautyWorkOrderMeiWorkorderGet, BeautyWorkOrderMeiWorkorderUpdate, BeautyStockMeiStockGet, BeautyStockMeiStockWarehouseList, BeautyStockMeiStockCreate, BeautyStockMeiStockList, RetailRetailConsoleLogAdd, RetailPermissionSamPermsCheckGet, BeautyOrderMeiOrderUpdate, BeautyOrderMeiOrderQuery, BeautyOrderMeiOrderRefund, BeautyOrderMeiOrderList, BeautyOrderMeiOrderCancel, BeautyOrderMeiOrderCreate, VirtualticketTradeVirtualticketVerifycode, VirtualticketTradeVirtualticketGet, VirtualticketTradeVirtualticketVerifyticket, SellerRefundTradeRefundAgree, SellerRefundTradeRefundRefuse, SellerRefundTradeReturngoodsRefuse, SellerRefundTradeReturngoodsAgree, SellerRefundTradeRefundSellerActive, BeautyItemMeiGoodsProductCategoryList, BeautyItemMeiGoodsServingCategoryCreate, BeautyItemMeiGoodsServingUpdate, BeautyItemMeiGoodsProductCreate, BeautyItemMeiGoodsProductCategoryDelete, BeautyItemMeiGoodsServingSkuList, BeautyItemMeiGoodsServingCreate, BeautyItemMeiGoodsProductTagUpdate, BeautyItemMeiGoodsProductTagDelete, BeautyItemMeiGoodsProductSkuList, BeautyItemMeiGoodsServingTagCreate, BeautyItemMeiGoodsProductUpdate, BeautyItemMeiGoodsProductSkuItemList, BeautyItemMeiGoodsProductCategoryCreate, BeautyItemMeiGoodsProductTagCreate, BeautyItemMeiGoodsServingCategoryList, BeautyItemMeiGoodsServingTagDelete, BeautyItemMeiGoodsServingSkuCreate, BeautyItemMeiGoodsShelveUpdate, BeautyItemMeiGoodsServingGet, BeautyItemMeiGoodsProductGet, BeautyItemMeiGoodsServingList, BeautyItemMeiGoodsServingTagList, BeautyItemMeiGoodsServingTagUpdate, BeautyItemMeiGoodsProductTagList, BeautyItemMeiGoodsProductList, BeautyItemMeiGoodsServingCategoryDelete, BeautyItemMeiGoodsProductSkuItemCreate, BeautyItemMeiGoodsProductCategoryUpdate, BeautyItemMeiGoodsProductSkuCreate, BeautyItemMeiGoodsServingCategoryUpdate, BeautyItemMeiGoodsServingSkuItemList, BeautyItemMeiGoodsServingSkuItemCreate, BuyerAddressUserAddressAdd, BuyerAddressUserAddressUpdate, BuyerAddressUserAddressGet, RetailSupplierRetailOpenSupplierUpdate, RetailSupplierRetailOpenSupplierDelete, RetailSupplierRetailOpenSupplierQuery, RetailSupplierRetailOpenSupplierCreate, MeiPromoterMeiPromoterList, MeiPromoterMeiPromoterCustomerBindUpdate, MeiPromoterMeiPromoterCustomerList, MeiPromoterMeiPromoterCustomerBind, MeiPromoterMeiPromoterGet, MeiPromoterMeiPromoterOrderList, MeiPromoterMeiPromoterCreate, MeiPromoterMeiPromoterInviteeList, RetailStockRetailOpenStockcheckorderGet, RetailStockRetailOpenStockinorderQuery, RetailStockRetailOpenApplyorderCheck, RetailStockRetailOpenDistributionorderGet, RetailStockRetailOpenStockAdjust, RetailStockRetailOpenStockoutorderGet, RetailStockRetailOpenStockcheckCreate, RetailStockRetailOpenStockoutorderQuery, RetailStockRetailOpenAllotorderGet, RetailStockRetailOpenStockinorderGet, RetailStockRetailOpenPurchaseorderGet, RetailStockRetailOpenApplyorderGet, RetailStockRetailOpenStockinorderCreate, RetailStockRetailOpenStockoutorderCreate, RetailShopRetailOpenWarehouseQuery, RetailShopRetailOpenStaffQuery, PayCustomsDeclarationPayCustomsDeclarationReportpaymentQuery, PayCustomsDeclarationPayCustomsDeclarationReportpaymentReport, CustomerScrmCustomerCreate, CustomerScrmCustomerUpdate, CustomerScrmCustomerRemarkUpdate, CustomerScrmCustomerGet, CustomerScrmCustomerSearch } from '../../model';

/**
 * Generated at 2019-06-13T02:56:14.134Z
 */
export class GeneratedYouzanService {
  constructor(protected options: YouzanOptions,
              protected requestService: RequestService) {
  }

  /**
   * 获取店铺基础信息
   */
  async shopShopGet(params: ShopShopGet.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取店铺基本信息
   */
  async shopShopBasicGet(params: ShopShopBasicGet.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopBasicGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.basic.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取店铺状态信息
   */
  async shopShopStatusGet(params: ShopShopStatusGet.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopStatusGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.status.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 店铺地址库获取所有地址
   */
  async shopShopAddressList(params: ShopShopAddressList.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopAddressList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.address.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 店铺地址库获取一个地址
   */
  async shopShopAddressGet(params: ShopShopAddressGet.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopAddressGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.address.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 店铺地址库新建一个地址
   */
  async shopShopAddressCreate(params: ShopShopAddressCreate.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopAddressCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.address.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 店铺地址库删除一个地址
   */
  async shopShopAddressDelete(params: ShopShopAddressDelete.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopAddressDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.address.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 店铺地址库更新一个地址
   */
  async shopShopAddressUpdate(params: ShopShopAddressUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ShopShopAddressUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.shop.address.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除商品
   */
  async itemItemDelete(params: ItemItemDelete.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取单个商品信息
   */
  async itemItemGet(params: ItemItemGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 根据商品编码查询商品
   */
  async itemItemsCustomGet(params: ItemItemsCustomGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemsCustomGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.items.custom.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取仓库中的商品列表
   */
  async itemItemsInventoryGet(params: ItemItemsInventoryGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemsInventoryGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.items.inventory.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 上架商品
   */
  async itemItemUpdateListing(params: ItemItemUpdateListing.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemUpdateListing.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.update.listing',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 下架商品
   */
  async itemItemUpdateDelisting(params: ItemItemUpdateDelisting.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemUpdateDelisting.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.update.delisting',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据外部编号取商品Sku（商家为Sku设置的外部编号）获取商品Sku，如果一个outer_id对应多个Sku会返回符合条件的Sku列表，最多返回600条Sku记录
   */
  async itemSkusCustomGet(params: ItemSkusCustomGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemSkusCustomGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.skus.custom.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 按商品skuId查询sku
   */
  async itemItemSkuGet(params: ItemItemSkuGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemSkuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.sku.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新SKU
   */
  async itemItemSkuUpdate(params: ItemItemSkuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemSkuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.sku.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 全量或增量方式更新SKU库存
   */
  async itemItemQuantityUpdate(params: ItemItemQuantityUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemQuantityUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.quantity.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据店铺查询商品详情模板
   */
  async itemItemTemplateListSearch(params: ItemItemTemplateListSearch.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemTemplateListSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.template.list.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 新增商品
   */
  async itemItemCreate(params: ItemItemCreate.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新商品
   */
  async itemItemUpdate(params: ItemItemUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 分页查询商品列表
   */
  async itemItemSearch(params: ItemItemSearch.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取出售中的商品列表
   */
  async itemItemsOnsaleGet(params: ItemItemsOnsaleGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemsOnsaleGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.items.onsale.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 替换商品头图
   */
  async itemItemPicUpdate(params: ItemItemPicUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ItemItemPicUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.pic.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 新增一个商品分组
   */
  async itemCategoryItemcategoriesTagAdd(params: ItemCategoryItemcategoriesTagAdd.Request, client_id: string = this.options.defaultClientId): Promise<ItemCategoryItemcategoriesTagAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.itemcategories.tag.add',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除一个商品分组
   */
  async itemCategoryItemcategoriesTagDelete(params: ItemCategoryItemcategoriesTagDelete.Request, client_id: string = this.options.defaultClientId): Promise<ItemCategoryItemcategoriesTagDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.itemcategories.tag.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新一个商品分组名
   */
  async itemCategoryItemcategoriesTagUpdate(params: ItemCategoryItemcategoriesTagUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ItemCategoryItemcategoriesTagUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.itemcategories.tag.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询商品分组
   */
  async itemCategoryItemcategoriesTagsGet(params: ItemCategoryItemcategoriesTagsGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemCategoryItemcategoriesTagsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.itemcategories.tags.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 分页获取商品分组列表
   */
  async itemCategoryItemcategoriesTaglistSearch(params: ItemCategoryItemcategoriesTaglistSearch.Request, client_id: string = this.options.defaultClientId): Promise<ItemCategoryItemcategoriesTaglistSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.itemcategories.taglist.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取商品类目二维列表
   */
  async itemCategoryItemcategoriesGet(params: ItemCategoryItemcategoriesGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemCategoryItemcategoriesGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.itemcategories.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 商品评价和评论，复合条件查询接口
   */
  async reviewsItemReviewsQuery(params: ReviewsItemReviewsQuery.Request, client_id: string = this.options.defaultClientId): Promise<ReviewsItemReviewsQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.reviews.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品评价和评论的统计数接口
   */
  async reviewsItemReviewsCount(params: ReviewsItemReviewsCount.Request, client_id: string = this.options.defaultClientId): Promise<ReviewsItemReviewsCount.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.reviews.count',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据第三方用户id获取交易订单列表,当前仅支持App开店的开发者使用。
   */
  async tradeTradesSoldOuterGet(params: TradeTradesSoldOuterGet.Request, client_id: string = this.options.defaultClientId): Promise<TradeTradesSoldOuterGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trades.sold.outer.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 订单标星接口
   */
  async tradeTradeStarUpdate(params: TradeTradeStarUpdate.Request, client_id: string = this.options.defaultClientId): Promise<TradeTradeStarUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.star.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 增加/修改订单备注
   */
  async tradeTradeMemoUpdate(params: TradeTradeMemoUpdate.Request, client_id: string = this.options.defaultClientId): Promise<TradeTradeMemoUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.memo.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单改价，使用场景下订单状态：待支付
   */
  async tradeTradePriceUpdate(params: TradeTradePriceUpdate.Request, client_id: string = this.options.defaultClientId): Promise<TradeTradePriceUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.price.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单列表4.0接口
   */
  async tradeTradesSoldGet(params: TradeTradesSoldGet.Request, client_id: string = this.options.defaultClientId): Promise<TradeTradesSoldGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trades.sold.get',
      version: '4.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 交易订单详情4.0接口
   */
  async tradeTradeGet(params: TradeTradeGet.Request, client_id: string = this.options.defaultClientId): Promise<TradeTradeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.get',
      version: '4.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查看退款详情
   */
  async tradeAdvancedTradeRefundGet(params: TradeAdvancedTradeRefundGet.Request, client_id: string = this.options.defaultClientId): Promise<TradeAdvancedTradeRefundGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查看退款凭证列表接口
   */
  async tradeAdvancedTradeRefundMessagesGet(params: TradeAdvancedTradeRefundMessagesGet.Request, client_id: string = this.options.defaultClientId): Promise<TradeAdvancedTradeRefundMessagesGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.messages.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查看退款列表
   */
  async tradeAdvancedTradeRefundSearch(params: TradeAdvancedTradeRefundSearch.Request, client_id: string = this.options.defaultClientId): Promise<TradeAdvancedTradeRefundSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建物流模板
   */
  async logisticsLogisticsTemplateCreate(params: LogisticsLogisticsTemplateCreate.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsTemplateCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.template.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取店铺所有模板列表
   */
  async logisticsLogisticsTemplateSearch(params: LogisticsLogisticsTemplateSearch.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsTemplateSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.template.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取区域地名列表信息
   */
  async logisticsRegionsGet(params: LogisticsRegionsGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsRegionsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.regions.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取快递公司的列表
   */
  async logisticsLogisticsExpressGet(params: LogisticsLogisticsExpressGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsExpressGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.express.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 运费计算
   */
  async logisticsLogisticsFeeGet(params: LogisticsLogisticsFeeGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsFeeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.fee.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 通过订单号获取物流信息，需要发货后物流这边才会拿到数据
   */
  async logisticsLogisticsExpressbyordernoGet(params: LogisticsLogisticsExpressbyordernoGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsExpressbyordernoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.expressbyorderno.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 通过订单号获取物流信息，建议用youzan.trade.dc.query.querybyorderno接口
   */
  async logisticsLogisticsExpressbyordernoSearch(params: LogisticsLogisticsExpressbyordernoSearch.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsExpressbyordernoSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.expressbyorderno.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取物流快递信息
   */
  async logisticsLogisticsGoodsexpressGet(params: LogisticsLogisticsGoodsexpressGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsGoodsexpressGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.goodsexpress.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 设置开关配置 包括:(是否支持自提,是否支持同城,是否支持快递,计费类型)
   */
  async logisticsLogisticsSettingUpdate(params: LogisticsLogisticsSettingUpdate.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsSettingUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.setting.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 读取商家同城配置的信息
   */
  async logisticsLogisticsLocalGet(params: LogisticsLogisticsLocalGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsLocalGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.local.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取同成配送的所有开关
   */
  async logisticsLogisticsSettingGet(params: LogisticsLogisticsSettingGet.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsSettingGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.setting.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 卖家标记签收
   */
  async logisticsLogisticsOnlineMarksign(params: LogisticsLogisticsOnlineMarksign.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsOnlineMarksign.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.online.marksign',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量查询订单下所有包裹详情
   */
  async logisticsLogisticsOrderBatchQuery(params: LogisticsLogisticsOrderBatchQuery.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsOrderBatchQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.order.batch.query',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询订单下所有包裹详情
   */
  async logisticsLogisticsOrderQuery(params: LogisticsLogisticsOrderQuery.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsOrderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.order.query',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 设置商家同城配送多区域和定时达的信息
   */
  async logisticsLogisticsLocalMultipleUpdate(params: LogisticsLogisticsLocalMultipleUpdate.Request, client_id: string = this.options.defaultClientId): Promise<LogisticsLogisticsLocalMultipleUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.local.multiple.update',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 核销虚拟商品
   */
  async tradeVirtualTradeVirtualcodeApply(params: TradeVirtualTradeVirtualcodeApply.Request, client_id: string = this.options.defaultClientId): Promise<TradeVirtualTradeVirtualcodeApply.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.virtualcode.apply',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据购买虚拟商品获得的码，获取该码的相关信息
   */
  async tradeVirtualTradeVirtualcodeGet(params: TradeVirtualTradeVirtualcodeGet.Request, client_id: string = this.options.defaultClientId): Promise<TradeVirtualTradeVirtualcodeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.virtualcode.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 创建收款二维码
   */
  async payQrcodePayQrcodeCreate(params: PayQrcodePayQrcodeCreate.Request, client_id: string = this.options.defaultClientId): Promise<PayQrcodePayQrcodeCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.pay.qrcode.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取收款二维码生成记录列表
   */
  async payQrcodePayQrcodesGet(params: PayQrcodePayQrcodesGet.Request, client_id: string = this.options.defaultClientId): Promise<PayQrcodePayQrcodesGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.pay.qrcodes.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 二维码详情查询接口
   */
  async payQrcodePayQrcodeGet(params: PayQrcodePayQrcodeGet.Request, client_id: string = this.options.defaultClientId): Promise<PayQrcodePayQrcodeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.pay.qrcode.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 线下收银台外部订单号查看使用详情
   */
  async payQrcodeTradeQrcodeHasoutidGet(params: PayQrcodeTradeQrcodeHasoutidGet.Request, client_id: string = this.options.defaultClientId): Promise<PayQrcodeTradeQrcodeHasoutidGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.qrcode.hasoutid.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取二维码标签列表
   */
  async payQrcodeTradeQrlabelSearch(params: PayQrcodeTradeQrlabelSearch.Request, client_id: string = this.options.defaultClientId): Promise<PayQrcodeTradeQrlabelSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.qrlabel.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询二维码支付的交易列表，按创建时间的倒序排序
   */
  async payQrcodeTradesQrGet(params: PayQrcodeTradesQrGet.Request, client_id: string = this.options.defaultClientId): Promise<PayQrcodeTradesQrGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trades.qr.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 给用户赠送赠品
   */
  async couponAdvancedUmpPresentGive(params: CouponAdvancedUmpPresentGive.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpPresentGive.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.present.give',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取所有进行中的赠品列表
   */
  async couponAdvancedUmpPresentsOngoingAll(params: CouponAdvancedUmpPresentsOngoingAll.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpPresentsOngoingAll.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.presents.ongoing.all',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取商品优惠详情
   */
  async couponAdvancedUmpPromotionGet(params: CouponAdvancedUmpPromotionGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpPromotionGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promotion.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 根据商品id批量获取商品的自定义会员价
   */
  async couponAdvancedUmpMemberpriceQuery(params: CouponAdvancedUmpMemberpriceQuery.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpMemberpriceQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.memberprice.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 拼团活动-订单号获取团信息
   */
  async couponAdvancedUmpGrouponOrdergroupdetailsGet(params: CouponAdvancedUmpGrouponOrdergroupdetailsGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpGrouponOrdergroupdetailsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.groupon.ordergroupdetails.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询限时折扣活动基本信息，不含参与商品信息
   */
  async couponAdvancedUmpLimitdiscountGet(params: CouponAdvancedUmpLimitdiscountGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpLimitdiscountGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.limitdiscount.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询某一限时折扣活动下商品折扣列表
   */
  async couponAdvancedUmpLimitdiscountDetailSearch(params: CouponAdvancedUmpLimitdiscountDetailSearch.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpLimitdiscountDetailSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.limitdiscount.detail.search',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 给商品创建（设置）自定义会员价
   */
  async couponAdvancedUmpMemberpriceUpdate(params: CouponAdvancedUmpMemberpriceUpdate.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpMemberpriceUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.memberprice.update',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询商品参加的限时折扣活动信息
   */
  async couponAdvancedUmpLimitdiscountDetailQuery(params: CouponAdvancedUmpLimitdiscountDetailQuery.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpLimitdiscountDetailQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.limitdiscount.detail.query',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询限时折扣活动列表
   */
  async couponAdvancedUmpLimitdiscountSearch(params: CouponAdvancedUmpLimitdiscountSearch.Request, client_id: string = this.options.defaultClientId): Promise<CouponAdvancedUmpLimitdiscountSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.limitdiscount.search',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建优惠码
   */
  async couponUmpPromocodeAdd(params: CouponUmpPromocodeAdd.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpPromocodeAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promocode.add',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取买家优惠码详情
   */
  async couponUmpPromocodeDetailGet(params: CouponUmpPromocodeDetailGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpPromocodeDetailGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promocode.detail.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询买家优惠码列表
   */
  async couponUmpPromocodeBuyerSearch(params: CouponUmpPromocodeBuyerSearch.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpPromocodeBuyerSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promocode.buyer.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建优惠券
   */
  async couponUmpPromocardAdd(params: CouponUmpPromocardAdd.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpPromocardAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promocard.add',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 核销优惠券/优惠码
   */
  async couponUmpCouponConsumeVerify(params: CouponUmpCouponConsumeVerify.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponConsumeVerify.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.consume.verify',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取优惠券/优惠码核销记录
   */
  async couponUmpCouponConsumeVerifylogsGet(params: CouponUmpCouponConsumeVerifylogsGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponConsumeVerifylogsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.consume.verifylogs.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 根据核销码获取优惠券/优惠码
   */
  async couponUmpCouponConsumeGet(params: CouponUmpCouponConsumeGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponConsumeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.consume.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 发放优惠券优惠码
   */
  async couponUmpCouponTake(params: CouponUmpCouponTake.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponTake.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.take',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取优惠券/优惠码领取记录
   */
  async couponUmpCouponConsumeFetchlogsGet(params: CouponUmpCouponConsumeFetchlogsGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponConsumeFetchlogsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.consume.fetchlogs.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * （分页查询）查询优惠券/码列表
   */
  async couponUmpCouponSearch(params: CouponUmpCouponSearch.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取优惠活动详情
   */
  async couponUmpCouponDetailGet(params: CouponUmpCouponDetailGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponDetailGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupon.detail.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取所有未结束的优惠卷/码列表
   */
  async couponUmpCouponsUnfinishedSearch(params: CouponUmpCouponsUnfinishedSearch.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpCouponsUnfinishedSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.coupons.unfinished.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取优惠券详情
   */
  async couponUmpPromocardDetailGet(params: CouponUmpPromocardDetailGet.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpPromocardDetailGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promocard.detail.get',
      version: '3.0.1',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询买家优惠券列表
   */
  async couponUmpPromocardBuyerSearch(params: CouponUmpPromocardBuyerSearch.Request, client_id: string = this.options.defaultClientId): Promise<CouponUmpPromocardBuyerSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.ump.promocard.buyer.search',
      version: '3.0.2',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取分销员客户列表
   */
  async salesmanSalesmanCustomersGet(params: SalesmanSalesmanCustomersGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanCustomersGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.customers.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取分销员业绩统计
   */
  async salesmanSalesmanAccountScoreSearch(params: SalesmanSalesmanAccountScoreSearch.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanAccountScoreSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.account.score.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取店铺分销员列表
   */
  async salesmanSalesmanAccountsGet(params: SalesmanSalesmanAccountsGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanAccountsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.accounts.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询订单归属的分销员
   */
  async salesmanSalesmanTradesAccountGet(params: SalesmanSalesmanTradesAccountGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanTradesAccountGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.trades.account.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取商品推广链接
   */
  async salesmanSalesmanItemShareGet(params: SalesmanSalesmanItemShareGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanItemShareGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.item.share.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 批量获取商品提成比例信息
   */
  async salesmanSalesmanItemsGet(params: SalesmanSalesmanItemsGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanItemsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.items.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新分销员信息
   */
  async salesmanSalesmanAccountUpdate(params: SalesmanSalesmanAccountUpdate.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanAccountUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.account.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 新增分销员
   */
  async salesmanSalesmanAccountAdd(params: SalesmanSalesmanAccountAdd.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanAccountAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.account.add',
      version: '3.0.1',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取分销员账户信息
   */
  async salesmanSalesmanAccountGet(params: SalesmanSalesmanAccountGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanAccountGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.account.get',
      version: '3.0.1',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取分销员推广订单列表
   */
  async salesmanSalesmanTradesGet(params: SalesmanSalesmanTradesGet.Request, client_id: string = this.options.defaultClientId): Promise<SalesmanSalesmanTradesGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.salesman.trades.get',
      version: '3.0.1',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 创建网点
   */
  async multiStoreMultistoreOfflineCreate(params: MultiStoreMultistoreOfflineCreate.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreOfflineCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.offline.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除网点
   */
  async multiStoreMultistoreOfflineDelete(params: MultiStoreMultistoreOfflineDelete.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreOfflineDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.offline.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新网点
   */
  async multiStoreMultistoreOfflineUpdate(params: MultiStoreMultistoreOfflineUpdate.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreOfflineUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.offline.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取网点列表
   */
  async multiStoreMultistoreOfflineSearch(params: MultiStoreMultistoreOfflineSearch.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreOfflineSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.offline.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取多门店设置
   */
  async multiStoreMultistoreSettingGet(params: MultiStoreMultistoreSettingGet.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreSettingGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.setting.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新网点商品配送方式
   */
  async multiStoreMultistoreGoodsDeliveryUpdate(params: MultiStoreMultistoreGoodsDeliveryUpdate.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreGoodsDeliveryUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.goods.delivery.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新多网点商品单个sku信息
   */
  async multiStoreMultistoreGoodsSingleskuUpdate(params: MultiStoreMultistoreGoodsSingleskuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreGoodsSingleskuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.goods.singlesku.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取某个网点所有可配送商品的配送方式
   */
  async multiStoreMultistoreGoodsDeliveryList(params: MultiStoreMultistoreGoodsDeliveryList.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreGoodsDeliveryList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.goods.delivery.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取某个网点单个商品的配送方式
   */
  async multiStoreMultistoreGoodsDeliveryGet(params: MultiStoreMultistoreGoodsDeliveryGet.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreGoodsDeliveryGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.goods.delivery.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取网点商品sku
   */
  async multiStoreMultistoreGoodsSkuGet(params: MultiStoreMultistoreGoodsSkuGet.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreGoodsSkuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.goods.sku.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新网点商品sku
   */
  async multiStoreMultistoreGoodsSkuUpdate(params: MultiStoreMultistoreGoodsSkuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreGoodsSkuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.goods.sku.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取网点详情
   */
  async multiStoreMultistoreOfflineGet(params: MultiStoreMultistoreOfflineGet.Request, client_id: string = this.options.defaultClientId): Promise<MultiStoreMultistoreOfflineGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.multistore.offline.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取用户简要信息
   */
  async userUserBasicGet(params: UserUserBasicGet.Request, client_id: string = this.options.defaultClientId): Promise<UserUserBasicGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.user.basic.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 根据after_fans_id正序批量查询微信粉丝用户信息
   */
  async userUsersWeixinFollowersInfoPull(params: UserUsersWeixinFollowersInfoPull.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersWeixinFollowersInfoPull.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.followers.info.pull',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据微信粉丝用户的 weixin_openid 或 fans_id 获取用户信息
   */
  async userUsersWeixinFollowerGet(params: UserUsersWeixinFollowerGet.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersWeixinFollowerGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.follower.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 根据多个微信粉丝用户的 openid 或 user_id 获取用户信息
   */
  async userUsersWeixinFollowerGets(params: UserUsersWeixinFollowerGets.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersWeixinFollowerGets.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.follower.gets',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据微信粉丝关注时间段批量查询微信粉丝用户信息，绑定微信公众号后可拉取
   */
  async userUsersWeixinFollowersInfoSearch(params: UserUsersWeixinFollowersInfoSearch.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersWeixinFollowersInfoSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.followers.info.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 拉取微信粉丝用户信息列表（即将废弃）
   */
  async userUsersWeixinFollowersPull(params: UserUsersWeixinFollowersPull.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersWeixinFollowersPull.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.followers.pull',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询微信粉丝用户信息（即将废弃）
   */
  async userUsersWeixinFollowersGet(params: UserUsersWeixinFollowersGet.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersWeixinFollowersGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.followers.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 使用手机号获取用户openId
   */
  async userUserWeixinOpenidGet(params: UserUserWeixinOpenidGet.Request, client_id: string = this.options.defaultClientId): Promise<UserUserWeixinOpenidGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.user.weixin.openid.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询是否存在有赞帐号
   */
  async userUsersAccountCheck(params: UserUsersAccountCheck.Request, client_id: string = this.options.defaultClientId): Promise<UserUsersAccountCheck.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.account.check',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家创建会员卡
   */
  async crmAdvancedScrmCardCreate(params: CrmAdvancedScrmCardCreate.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家启用会员卡
   */
  async crmAdvancedScrmCardEnable(params: CrmAdvancedScrmCardEnable.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardEnable.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.enable',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家删除会员卡
   */
  async crmAdvancedScrmCardDelete(params: CrmAdvancedScrmCardDelete.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家禁用会员卡
   */
  async crmAdvancedScrmCardDisable(params: CrmAdvancedScrmCardDisable.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardDisable.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.disable',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新会员卡
   */
  async crmAdvancedScrmCardUpdate(params: CrmAdvancedScrmCardUpdate.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取商家会员卡列表
   */
  async crmAdvancedScrmCardList(params: CrmAdvancedScrmCardList.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 会员卡对应的会员列表
   */
  async crmAdvancedScrmCustomerSearch(params: CrmAdvancedScrmCustomerSearch.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCustomerSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员详情
   */
  async crmAdvancedScrmCustomerGet(params: CrmAdvancedScrmCustomerGet.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCustomerGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 通过商家会员卡的唯一标识获取会员卡详情
   */
  async crmAdvancedScrmCardGet(params: CrmAdvancedScrmCardGet.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 删除用户的会员卡
   */
  async crmAdvancedScrmCustomerCardDelete(params: CrmAdvancedScrmCustomerCardDelete.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCustomerCardDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.card.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 通过用户会员卡号获取会员信息
   */
  async crmAdvancedScrmCustomerInfoGet(params: CrmAdvancedScrmCustomerInfoGet.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCustomerInfoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.info.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取会员卡链接
   */
  async crmAdvancedScrmCardUrlGet(params: CrmAdvancedScrmCardUrlGet.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCardUrlGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.card.url.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取用户的会员卡列表
   */
  async crmAdvancedScrmCustomerCardList(params: CrmAdvancedScrmCustomerCardList.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCustomerCardList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.card.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 给用户发放会员卡（目前只支持无门槛和规则卡）
   */
  async crmAdvancedScrmCustomerCardGrant(params: CrmAdvancedScrmCustomerCardGrant.Request, client_id: string = this.options.defaultClientId): Promise<CrmAdvancedScrmCustomerCardGrant.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.card.grant',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取用户积分
   */
  async pointsCrmFansPointsGet(params: PointsCrmFansPointsGet.Request, client_id: string = this.options.defaultClientId): Promise<PointsCrmFansPointsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.fans.points.get',
      version: '3.0.1',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 检索用户积分及积分变更记录
   */
  async pointsCrmCustomerPointsChangelogSearch(params: PointsCrmCustomerPointsChangelogSearch.Request, client_id: string = this.options.defaultClientId): Promise<PointsCrmCustomerPointsChangelogSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.points.changelog.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询用户积分以及三方积分变更记录
   */
  async pointsCrmCustomerPointsChangelogGet(params: PointsCrmCustomerPointsChangelogGet.Request, client_id: string = this.options.defaultClientId): Promise<PointsCrmCustomerPointsChangelogGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.points.changelog.get',
      version: '3.0.1',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 给客户加积分
   */
  async pointsCrmCustomerPointsIncrease(params: PointsCrmCustomerPointsIncrease.Request, client_id: string = this.options.defaultClientId): Promise<PointsCrmCustomerPointsIncrease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.points.increase',
      version: '3.1.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 给客户减积分
   */
  async pointsCrmCustomerPointsDecrease(params: PointsCrmCustomerPointsDecrease.Request, client_id: string = this.options.defaultClientId): Promise<PointsCrmCustomerPointsDecrease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.points.decrease',
      version: '3.1.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 给客户同步积分
   */
  async pointsCrmCustomerPointsSync(params: PointsCrmCustomerPointsSync.Request, client_id: string = this.options.defaultClientId): Promise<PointsCrmCustomerPointsSync.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.points.sync',
      version: '3.1.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询用户在购物车中的商品数量
   */
  async buyerCartTradeCartCount(params: BuyerCartTradeCartCount.Request, client_id: string = this.options.defaultClientId): Promise<BuyerCartTradeCartCount.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.cart.count',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 购物车更新商品数量
   */
  async buyerCartTradeCartUpdate(params: BuyerCartTradeCartUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BuyerCartTradeCartUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.cart.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 清空购物车
   */
  async buyerCartTradeCartEmpty(params: BuyerCartTradeCartEmpty.Request, client_id: string = this.options.defaultClientId): Promise<BuyerCartTradeCartEmpty.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.cart.empty',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 显示购物车中的商品列表
   */
  async buyerCartTradeCartList(params: BuyerCartTradeCartList.Request, client_id: string = this.options.defaultClientId): Promise<BuyerCartTradeCartList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.cart.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 购物车删除商品
   */
  async buyerCartTradeCartDelete(params: BuyerCartTradeCartDelete.Request, client_id: string = this.options.defaultClientId): Promise<BuyerCartTradeCartDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.cart.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 添加商品至购物车
   */
  async buyerCartTradeCartAdd(params: BuyerCartTradeCartAdd.Request, client_id: string = this.options.defaultClientId): Promise<BuyerCartTradeCartAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.cart.add',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 下单入口，进入结算页
   */
  async buyerBillTradeBillGoodUrlGet(params: BuyerBillTradeBillGoodUrlGet.Request, client_id: string = this.options.defaultClientId): Promise<BuyerBillTradeBillGoodUrlGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.bill.good.url.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 多商品下单入口，进入结算页
   */
  async buyerBillTradeBillGoodsUrlGet(params: BuyerBillTradeBillGoodsUrlGet.Request, client_id: string = this.options.defaultClientId): Promise<BuyerBillTradeBillGoodsUrlGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.bill.goods.url.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 订单延长收货接口
   */
  async buyerTradeTradeLaterReceiveUpdate(params: BuyerTradeTradeLaterReceiveUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BuyerTradeTradeLaterReceiveUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.later.receive.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家确认收货接口
   */
  async buyerTradeTradeConfirmReceiveUpdate(params: BuyerTradeTradeConfirmReceiveUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BuyerTradeTradeConfirmReceiveUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.confirm.receive.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家取消订单

   */
  async buyerTradeTradeBillCancelGet(params: BuyerTradeTradeBillCancelGet.Request, client_id: string = this.options.defaultClientId): Promise<BuyerTradeTradeBillCancelGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.bill.cancel.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 买家修改申请
   */
  async buyerRefundTradeRefundModify(params: BuyerRefundTradeRefundModify.Request, client_id: string = this.options.defaultClientId): Promise<BuyerRefundTradeRefundModify.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.modify',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家申请客服介入
   */
  async buyerRefundTradeRefundIntervene(params: BuyerRefundTradeRefundIntervene.Request, client_id: string = this.options.defaultClientId): Promise<BuyerRefundTradeRefundIntervene.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.intervene',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家申请退款
   */
  async buyerRefundTradeRefundApply(params: BuyerRefundTradeRefundApply.Request, client_id: string = this.options.defaultClientId): Promise<BuyerRefundTradeRefundApply.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.apply',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家撤销退款申请
   */
  async buyerRefundTradeRefundClose(params: BuyerRefundTradeRefundClose.Request, client_id: string = this.options.defaultClientId): Promise<BuyerRefundTradeRefundClose.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.close',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 上传退货物流信息
   */
  async buyerRefundTradeReturngoodsFill(params: BuyerRefundTradeReturngoodsFill.Request, client_id: string = this.options.defaultClientId): Promise<BuyerRefundTradeReturngoodsFill.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.returngoods.fill',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 退款申请条件信息获取
   */
  async buyerRefundTradeRefundConditionGet(params: BuyerRefundTradeRefundConditionGet.Request, client_id: string = this.options.defaultClientId): Promise<BuyerRefundTradeRefundConditionGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.condition.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 设置房态
   */
  async itemHotelItemHotelRoomSet(params: ItemHotelItemHotelRoomSet.Request, client_id: string = this.options.defaultClientId): Promise<ItemHotelItemHotelRoomSet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.hotel.room.set',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量设置单天酒店商品房态
   */
  async itemHotelItemHotelRoomUpdate(params: ItemHotelItemHotelRoomUpdate.Request, client_id: string = this.options.defaultClientId): Promise<ItemHotelItemHotelRoomUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.hotel.room.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取房态信息
   */
  async itemHotelItemHotelRoomQuery(params: ItemHotelItemHotelRoomQuery.Request, client_id: string = this.options.defaultClientId): Promise<ItemHotelItemHotelRoomQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.hotel.room.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取商品信息详情
   */
  async retailProductRetailOpenSpuGet(params: RetailProductRetailOpenSpuGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSpuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.spu.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 商品查询
   */
  async retailProductRetailOpenSkuQuery(params: RetailProductRetailOpenSkuQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSkuQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.sku.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品分类信息更新（单个）
   */
  async retailProductRetailOpenCategoryUpdate(params: RetailProductRetailOpenCategoryUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenCategoryUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.category.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 发布网店商品
   */
  async retailProductRetailOpenOnlineSpuRelease(params: RetailProductRetailOpenOnlineSpuRelease.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenOnlineSpuRelease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.online.spu.release',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 门店发布商品
   */
  async retailProductRetailOpenOfflineSpuRelease(params: RetailProductRetailOpenOfflineSpuRelease.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenOfflineSpuRelease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.offline.spu.release',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询网店单个商品详情
   */
  async retailProductRetailOpenOnlineSpuGet(params: RetailProductRetailOpenOnlineSpuGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenOnlineSpuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.online.spu.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询门店商品信息
   */
  async retailProductRetailOpenOfflineSpuQuery(params: RetailProductRetailOpenOfflineSpuQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenOfflineSpuQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.offline.spu.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品分类信息新增
   */
  async retailProductRetailOpenCategoryCreate(params: RetailProductRetailOpenCategoryCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenCategoryCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.category.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品删除
   */
  async retailProductRetailOpenSpuDelete(params: RetailProductRetailOpenSpuDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSpuDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.spu.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品分类信息查询
   */
  async retailProductRetailOpenCategoryQuery(params: RetailProductRetailOpenCategoryQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenCategoryQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.category.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品查询（基于spu）
   */
  async retailProductRetailOpenSpuQuery(params: RetailProductRetailOpenSpuQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSpuQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.spu.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 网店商品分页查询接口
   */
  async retailProductRetailOpenOnlineSpuQuery(params: RetailProductRetailOpenOnlineSpuQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenOnlineSpuQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.online.spu.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品分类信息删除
   */
  async retailProductRetailOpenCategoryDelete(params: RetailProductRetailOpenCategoryDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenCategoryDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.category.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品创建
   */
  async retailProductRetailOpenSpuCreate(params: RetailProductRetailOpenSpuCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSpuCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.spu.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 单个商品信息更新（基于spu）
   */
  async retailProductRetailOpenSpuUpdate(params: RetailProductRetailOpenSpuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSpuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.spu.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品sku详情获取
   */
  async retailProductRetailOpenSkuGet(params: RetailProductRetailOpenSkuGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailProductRetailOpenSkuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.sku.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取预约的时间范围
   */
  async beautyAppointmentMeiReservationTimeRangeGet(params: BeautyAppointmentMeiReservationTimeRangeGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationTimeRangeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.time.range.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 取消一个预约
   */
  async beautyAppointmentMeiReservationCancel(params: BeautyAppointmentMeiReservationCancel.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationCancel.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.cancel',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 拉取技师列表
   */
  async beautyAppointmentMeiReservationTechnicianList(params: BeautyAppointmentMeiReservationTechnicianList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationTechnicianList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.technician.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询预约详细信息
   */
  async beautyAppointmentMeiReservationGet(params: BeautyAppointmentMeiReservationGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 拉取预约单列表
   */
  async beautyAppointmentMeiReservationList(params: BeautyAppointmentMeiReservationList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新一个预约单
   */
  async beautyAppointmentMeiReservationUpdate(params: BeautyAppointmentMeiReservationUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建一个服务预约
   */
  async beautyAppointmentMeiReservationCreate(params: BeautyAppointmentMeiReservationCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyAppointmentMeiReservationCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.reservation.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 给用户加成长值
   */
  async levelMembershipCrmCustomerGrowthIncrease(params: LevelMembershipCrmCustomerGrowthIncrease.Request, client_id: string = this.options.defaultClientId): Promise<LevelMembershipCrmCustomerGrowthIncrease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.growth.increase',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取客户成长值
   */
  async levelMembershipCrmCustomerGrowthGet(params: LevelMembershipCrmCustomerGrowthGet.Request, client_id: string = this.options.defaultClientId): Promise<LevelMembershipCrmCustomerGrowthGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.growth.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 给用户减成长值
   */
  async levelMembershipCrmCustomerGrowthDecrease(params: LevelMembershipCrmCustomerGrowthDecrease.Request, client_id: string = this.options.defaultClientId): Promise<LevelMembershipCrmCustomerGrowthDecrease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.growth.decrease',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量获取客户成长值
   */
  async levelMembershipCrmCustomerGrowthList(params: LevelMembershipCrmCustomerGrowthList.Request, client_id: string = this.options.defaultClientId): Promise<LevelMembershipCrmCustomerGrowthList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.crm.customer.growth.list',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除员工
   */
  async beautyStaffMeiStaffDelete(params: BeautyStaffMeiStaffDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStaffMeiStaffDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.staff.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 恢复员工
   */
  async beautyStaffMeiStaffRecover(params: BeautyStaffMeiStaffRecover.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStaffMeiStaffRecover.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.staff.recover',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询员工详情
   */
  async beautyStaffMeiStaffDetailQuery(params: BeautyStaffMeiStaffDetailQuery.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStaffMeiStaffDetailQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.staff.detail.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建员工
   */
  async beautyStaffMeiStaffCreate(params: BeautyStaffMeiStaffCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStaffMeiStaffCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.staff.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 分页查询员工
   */
  async beautyStaffMeiStaffPageQuery(params: BeautyStaffMeiStaffPageQuery.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStaffMeiStaffPageQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.staff.page.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 修改员工
   */
  async beautyStaffMeiStaffUpdate(params: BeautyStaffMeiStaffUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStaffMeiStaffUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.staff.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 导入三方帐号信息，用于App开店帐号一键授权
   */
  async accountImportUserPlatformImport(params: AccountImportUserPlatformImport.Request, client_id: string = this.options.defaultClientId): Promise<AccountImportUserPlatformImport.Response> {
    return await this.requestService.invoke({
      api: 'youzan.user.platform.import',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 拒绝退款
   */
  async retailTradeRetailOpenRefundorderRefuse(params: RetailTradeRetailOpenRefundorderRefuse.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenRefundorderRefuse.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.refundorder.refuse',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询退货单
   */
  async retailTradeRetailOpenReturnorderGet(params: RetailTradeRetailOpenReturnorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenReturnorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.returnorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 同意退货
   */
  async retailTradeRetailOpenRefundorderGoodsreturnAgree(params: RetailTradeRetailOpenRefundorderGoodsreturnAgree.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenRefundorderGoodsreturnAgree.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.refundorder.goodsreturn.agree',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量查询退款单
   */
  async retailTradeRetailOpenRefundorderQuery(params: RetailTradeRetailOpenRefundorderQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenRefundorderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.refundorder.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询销售退款单
   */
  async retailTradeRetailOpenRefundorderGet(params: RetailTradeRetailOpenRefundorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenRefundorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.refundorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 退货单确认，同意退款
   */
  async retailTradeRetailOpenReturnorderConfirm(params: RetailTradeRetailOpenReturnorderConfirm.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenReturnorderConfirm.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.returnorder.confirm',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询销售发货单
   */
  async retailTradeRetailOpenDeliveryorderGet(params: RetailTradeRetailOpenDeliveryorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenDeliveryorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.deliveryorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 卖家未收到货,拒绝退款
   */
  async retailTradeRetailOpenReturnorderRefuse(params: RetailTradeRetailOpenReturnorderRefuse.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenReturnorderRefuse.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.returnorder.refuse',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量查询销售退货单
   */
  async retailTradeRetailOpenReturnorderQuery(params: RetailTradeRetailOpenReturnorderQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenReturnorderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.returnorder.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 退款单确认，同意退款
   */
  async retailTradeRetailOpenRefundorderConfirm(params: RetailTradeRetailOpenRefundorderConfirm.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenRefundorderConfirm.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.refundorder.confirm',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 发货单确认
   */
  async retailTradeRetailOpenDeliveryorderConfirm(params: RetailTradeRetailOpenDeliveryorderConfirm.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenDeliveryorderConfirm.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.deliveryorder.confirm',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量查询销售发货单
   */
  async retailTradeRetailOpenDeliveryorderQuery(params: RetailTradeRetailOpenDeliveryorderQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailTradeRetailOpenDeliveryorderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.deliveryorder.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取分销精选供货订单商品发货信息
   */
  async supplierFenxiaoSupportOrderDeliveritemGet(params: SupplierFenxiaoSupportOrderDeliveritemGet.Request, client_id: string = this.options.defaultClientId): Promise<SupplierFenxiaoSupportOrderDeliveritemGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.fenxiao.support.order.deliveritem.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询分销精选供货商供货订单
   */
  async supplierFenxiaoSupportOrderSearch(params: SupplierFenxiaoSupportOrderSearch.Request, client_id: string = this.options.defaultClientId): Promise<SupplierFenxiaoSupportOrderSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.fenxiao.support.order.search',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 分销供货订单发货
   */
  async supplierFenxiaoSupportOrderDeliver(params: SupplierFenxiaoSupportOrderDeliver.Request, client_id: string = this.options.defaultClientId): Promise<SupplierFenxiaoSupportOrderDeliver.Response> {
    return await this.requestService.invoke({
      api: 'youzan.fenxiao.support.order.deliver',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取精选供货订单详情
   */
  async supplierFenxiaoSupportOrderDetailGet(params: SupplierFenxiaoSupportOrderDetailGet.Request, client_id: string = this.options.defaultClientId): Promise<SupplierFenxiaoSupportOrderDetailGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.fenxiao.support.order.detail.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 批量删除商品单位
   */
  async retailGoodsRetailProductUnitsDelete(params: RetailGoodsRetailProductUnitsDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductUnitsDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.units.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 编辑单位字典
   */
  async retailGoodsRetailProductUnitUpdate(params: RetailGoodsRetailProductUnitUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductUnitUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.unit.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建单位字典
   */
  async retailGoodsRetailProductUnitCreate(params: RetailGoodsRetailProductUnitCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductUnitCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.unit.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 分页查询商品单位
   */
  async retailGoodsRetailProductUnitsSearch(params: RetailGoodsRetailProductUnitsSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductUnitsSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.units.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询分类列表
   */
  async retailGoodsRetailProductCategorySearch(params: RetailGoodsRetailProductCategorySearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductCategorySearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.category.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除商品分类
   */
  async retailGoodsRetailProductCategoryDelete(params: RetailGoodsRetailProductCategoryDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductCategoryDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.category.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新分类
   */
  async retailGoodsRetailProductCategoryUpdate(params: RetailGoodsRetailProductCategoryUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductCategoryUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.category.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 新增商品分类
   */
  async retailGoodsRetailProductCategoryCreate(params: RetailGoodsRetailProductCategoryCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductCategoryCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.category.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库单个商品信息查询
   */
  async retailGoodsRetailProductSkuGet(params: RetailGoodsRetailProductSkuGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.sku.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询商品库接口
   */
  async retailGoodsRetailProductSkusSearch(params: RetailGoodsRetailProductSkusSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkusSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.skus.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品修改（已提供新版spu API 该接口准备逐步下线）
   */
  async retailGoodsRetailProductSkuUpdate(params: RetailGoodsRetailProductSkuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.sku.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品批量删除
   */
  async retailGoodsRetailProductSkusDelete(params: RetailGoodsRetailProductSkusDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkusDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.skus.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量修改商品库商品所属分类
   */
  async retailGoodsRetailProductSkucategoriesUpdate(params: RetailGoodsRetailProductSkucategoriesUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkucategoriesUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.skucategories.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品创建
   */
  async retailGoodsRetailProductSkuCreate(params: RetailGoodsRetailProductSkuCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkuCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.sku.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库spu搜索接口
   */
  async retailGoodsRetailProductSpusSearch(params: RetailGoodsRetailProductSpusSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSpusSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.spus.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品创建
   */
  async retailGoodsRetailProductSpuCreate(params: RetailGoodsRetailProductSpuCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSpuCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.spu.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品编辑
   */
  async retailGoodsRetailProductSpuUpdate(params: RetailGoodsRetailProductSpuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSpuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.spu.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品信息查询
   */
  async retailGoodsRetailProductSpuGet(params: RetailGoodsRetailProductSpuGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSpuGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.spu.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 批量更新商品分类
   */
  async retailGoodsRetailProductSpusBatchUpdate(params: RetailGoodsRetailProductSpusBatchUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSpusBatchUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.spus.batch.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量删除商品库商品
   */
  async retailGoodsRetailProductSpusBatchDelete(params: RetailGoodsRetailProductSpusBatchDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSpusBatchDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.spus.batch.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 发布门店商品
   */
  async retailGoodsRetailProductOfflineCreate(params: RetailGoodsRetailProductOfflineCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductOfflineCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.offline.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 编辑门店商品
   */
  async retailGoodsRetailProductOfflineUpdate(params: RetailGoodsRetailProductOfflineUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductOfflineUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.offline.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据id查询门店商品详情
   */
  async retailGoodsRetailProductOfflineGet(params: RetailGoodsRetailProductOfflineGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductOfflineGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.offline.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 批量上下架门店商品
   */
  async retailGoodsRetailProductsOfflineDisplay(params: RetailGoodsRetailProductsOfflineDisplay.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductsOfflineDisplay.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.products.offline.display',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量删除门店商品
   */
  async retailGoodsRetailProductsOfflineDelete(params: RetailGoodsRetailProductsOfflineDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductsOfflineDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.products.offline.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 门店商品搜索接口
   */
  async retailGoodsRetailProductsOfflineSearch(params: RetailGoodsRetailProductsOfflineSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductsOfflineSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.products.offline.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 库存业务单据通用搜索接口
   */
  async retailGoodsRetailStockBizorderSearch(params: RetailGoodsRetailStockBizorderSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockBizorderSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.bizorder.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 入库单查询接口
   */
  async retailGoodsRetailStocksStockinSearch(params: RetailGoodsRetailStocksStockinSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStocksStockinSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stocks.stockin.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 采购入库单单个查询接口
   */
  async retailGoodsRetailStockStockinGet(params: RetailGoodsRetailStockStockinGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockinGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockin.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 采购入库创建接口
   */
  async retailGoodsRetailStockStockinCreate(params: RetailGoodsRetailStockStockinCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockinCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockin.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 库存盘点查询接口
   */
  async retailGoodsRetailStocksStockcheckSearch(params: RetailGoodsRetailStocksStockcheckSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStocksStockcheckSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stocks.stockcheck.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 盘点单单个查询接口
   */
  async retailGoodsRetailStockStockcheckGet(params: RetailGoodsRetailStockStockcheckGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockcheckGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockcheck.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 库存盘点修改接口
   */
  async retailGoodsRetailStockStockcheckUpdate(params: RetailGoodsRetailStockStockcheckUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockcheckUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockcheck.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 库存盘点创建接口
   */
  async retailGoodsRetailStockStockcheckCreate(params: RetailGoodsRetailStockStockcheckCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockcheckCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockcheck.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 出库单查询接口
   */
  async retailGoodsRetailStocksStockoutSearch(params: RetailGoodsRetailStocksStockoutSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStocksStockoutSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stocks.stockout.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 出库单单个查询接口
   */
  async retailGoodsRetailStockStockoutGet(params: RetailGoodsRetailStockStockoutGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockoutGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockout.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 出库单创建接口
   */
  async retailGoodsRetailStockStockoutCreate(params: RetailGoodsRetailStockStockoutCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockoutCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockout.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 连锁版退货入库创建接口
   */
  async retailGoodsRetailStockStockreturnChainCreate(params: RetailGoodsRetailStockStockreturnChainCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockreturnChainCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockreturn.chain.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 退货入库创建接口
   */
  async retailGoodsRetailStockStockreturnCreate(params: RetailGoodsRetailStockStockreturnCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockreturnCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockreturn.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 退货入库单单个查询接口
   */
  async retailGoodsRetailStockStockreturnGet(params: RetailGoodsRetailStockStockreturnGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockreturnGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockreturn.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 成本调价单个查询接口
   */
  async retailGoodsRetailStockCostchangeGet(params: RetailGoodsRetailStockCostchangeGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockCostchangeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.costchange.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 成本变更创建接口
   */
  async retailGoodsRetailStockCostchangeCreate(params: RetailGoodsRetailStockCostchangeCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockCostchangeCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.costchange.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 供应商搜索
   */
  async retailGoodsRetailStockVendorsSearch(params: RetailGoodsRetailStockVendorsSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockVendorsSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.vendors.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 供应商单个查询
   */
  async retailGoodsRetailStockVendorGet(params: RetailGoodsRetailStockVendorGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockVendorGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.vendor.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 供应商修改
   */
  async retailGoodsRetailStockVendorUpdate(params: RetailGoodsRetailStockVendorUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockVendorUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.vendor.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 供应商创建
   */
  async retailGoodsRetailStockVendorCreate(params: RetailGoodsRetailStockVendorCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockVendorCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.vendor.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询分类列表
   */
  async retailGoodsRetailProductCategoriesSearch(params: RetailGoodsRetailProductCategoriesSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductCategoriesSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.categories.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品库商品批量删除确认接口
   */
  async retailGoodsRetailProductSkusConfirmationDelete(params: RetailGoodsRetailProductSkusConfirmationDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSkusConfirmationDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.skus.confirmation.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 修改网店商品规格信息
   */
  async retailGoodsRetailProductSellSkuUpdate(params: RetailGoodsRetailProductSellSkuUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductSellSkuUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.sell.sku.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 编辑网店商品
   */
  async retailGoodsRetailProductOnlineUpdate(params: RetailGoodsRetailProductOnlineUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductOnlineUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.online.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量删除网店商品
   */
  async retailGoodsRetailProductsOnlineDelete(params: RetailGoodsRetailProductsOnlineDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductsOnlineDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.products.online.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量上下架网店商品
   */
  async retailGoodsRetailProductsOnlineDisplay(params: RetailGoodsRetailProductsOnlineDisplay.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductsOnlineDisplay.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.products.online.display',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据网店商品id查询网店商品详情
   */
  async retailGoodsRetailProductOnlineGet(params: RetailGoodsRetailProductOnlineGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductOnlineGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.online.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 创建独立仓
   */
  async retailGoodsRetailStockWarehouseSingleCreate(params: RetailGoodsRetailStockWarehouseSingleCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseSingleCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.single.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 修改仓库与店铺之间的供货关系
   */
  async retailGoodsRetailStockRelationChange(params: RetailGoodsRetailStockRelationChange.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockRelationChange.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.relation.change',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建库存调拨单接口
   */
  async retailGoodsRetailStockStockallotCreate(params: RetailGoodsRetailStockStockallotCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 调拨单审核接口
   */
  async retailGoodsRetailStockStockallotCheck(params: RetailGoodsRetailStockStockallotCheck.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotCheck.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.check',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 修改库存调拨单接口
   */
  async retailGoodsRetailStockStockallotUpdate(params: RetailGoodsRetailStockStockallotUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 调拨出库接口
   */
  async retailGoodsRetailStockStockallotOut(params: RetailGoodsRetailStockStockallotOut.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotOut.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.out',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 调拨入库接口
   */
  async retailGoodsRetailStockStockallotIn(params: RetailGoodsRetailStockStockallotIn.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotIn.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.in',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 库存调拨单明细查询
   */
  async retailGoodsRetailStockStockallotGet(params: RetailGoodsRetailStockStockallotGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 库存调拨单列表查询
   */
  async retailGoodsRetailStockStockallotSearch(params: RetailGoodsRetailStockStockallotSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询仓库单据是否需要审核
   */
  async retailGoodsRetailStockWarehouseConfigGet(params: RetailGoodsRetailStockWarehouseConfigGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseConfigGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.config.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 设置仓库单据是否需要审核
   */
  async retailGoodsRetailStockWarehouseConfigSet(params: RetailGoodsRetailStockWarehouseConfigSet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseConfigSet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.config.set',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单修改
   */
  async retailGoodsRetailStockGoodsapplyUpdate(params: RetailGoodsRetailStockGoodsapplyUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockGoodsapplyUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.goodsapply.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 配送单出库
   */
  async retailGoodsRetailStockDeliveryOut(params: RetailGoodsRetailStockDeliveryOut.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockDeliveryOut.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.delivery.out',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 配送单入库操作
   */
  async retailGoodsRetailStockDeliveryIn(params: RetailGoodsRetailStockDeliveryIn.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockDeliveryIn.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.delivery.in',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单关闭
   */
  async retailGoodsRetailStockGoodsapplyClose(params: RetailGoodsRetailStockGoodsapplyClose.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockGoodsapplyClose.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.goodsapply.close',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单列表查询
   */
  async retailGoodsRetailStockGoodsapplySearch(params: RetailGoodsRetailStockGoodsapplySearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockGoodsapplySearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.goodsapply.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 配送单查询
   */
  async retailGoodsRetailStockDeliverySearch(params: RetailGoodsRetailStockDeliverySearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockDeliverySearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.delivery.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 配送单单个查询
   */
  async retailGoodsRetailStockDeliveryGet(params: RetailGoodsRetailStockDeliveryGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockDeliveryGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.delivery.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 网店商品搜索接口
   */
  async retailGoodsRetailProductsOnlineSearch(params: RetailGoodsRetailProductsOnlineSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductsOnlineSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.products.online.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新仓库信息
   */
  async retailGoodsRetailStockWarehouseUpdate(params: RetailGoodsRetailStockWarehouseUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单查询详情
   */
  async retailGoodsRetailStockGoodsapplyGet(params: RetailGoodsRetailStockGoodsapplyGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockGoodsapplyGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.goodsapply.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询仓库列表信息
   */
  async retailGoodsRetailStockWarehouseSearch(params: RetailGoodsRetailStockWarehouseSearch.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询单个仓库信息
   */
  async retailGoodsRetailStockWarehouseGet(params: RetailGoodsRetailStockWarehouseGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 调拨单关闭接口
   */
  async retailGoodsRetailStockStockallotClose(params: RetailGoodsRetailStockStockallotClose.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockStockallotClose.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.stockallot.close',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单审核
   */
  async retailGoodsRetailStockGoodsapplyCheck(params: RetailGoodsRetailStockGoodsapplyCheck.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockGoodsapplyCheck.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.goodsapply.check',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 修改仓库状态
   */
  async retailGoodsRetailStockWarehouseStatusUpdate(params: RetailGoodsRetailStockWarehouseStatusUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockWarehouseStatusUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.warehouse.status.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单创建
   */
  async retailGoodsRetailStockGoodsapplyCreate(params: RetailGoodsRetailStockGoodsapplyCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailStockGoodsapplyCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.stock.goodsapply.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 发布网店商品
   */
  async retailGoodsRetailProductOnlineCreate(params: RetailGoodsRetailProductOnlineCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailGoodsRetailProductOnlineCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.product.online.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除客户标签
   */
  async tagScrmTagRelationDelete(params: TagScrmTagRelationDelete.Request, client_id: string = this.options.defaultClientId): Promise<TagScrmTagRelationDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.tag.relation.delete',
      version: '4.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取客户标签信息
   */
  async tagScrmTagRelationGet(params: TagScrmTagRelationGet.Request, client_id: string = this.options.defaultClientId): Promise<TagScrmTagRelationGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.tag.relation.get',
      version: '4.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 给客户打标
   */
  async tagScrmTagRelationAdd(params: TagScrmTagRelationAdd.Request, client_id: string = this.options.defaultClientId): Promise<TagScrmTagRelationAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.tag.relation.add',
      version: '4.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取单条服务日志详情
   */
  async beautyServiceLogMeiServicelogGet(params: BeautyServiceLogMeiServicelogGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyServiceLogMeiServicelogGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.servicelog.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询服务日志列表
   */
  async beautyServiceLogMeiServicelogList(params: BeautyServiceLogMeiServicelogList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyServiceLogMeiServicelogList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.servicelog.list',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务日志
   */
  async beautyServiceLogMeiServicelogCreate(params: BeautyServiceLogMeiServicelogCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyServiceLogMeiServicelogCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.servicelog.create',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除服务日志
   */
  async beautyServiceLogMeiServicelogDelete(params: BeautyServiceLogMeiServicelogDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyServiceLogMeiServicelogDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.servicelog.delete',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 智能导购,创建门店与网店关系
   */
  async retailUmpRetailSalesShoprelationSave(params: RetailUmpRetailSalesShoprelationSave.Request, client_id: string = this.options.defaultClientId): Promise<RetailUmpRetailSalesShoprelationSave.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.sales.shoprelation.save',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 扣减会员积分
   */
  async beautyMemberMeiCustomerPointsDecrease(params: BeautyMemberMeiCustomerPointsDecrease.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerPointsDecrease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.points.decrease',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员权益列表
   */
  async beautyMemberMeiCustomerRightsList(params: BeautyMemberMeiCustomerRightsList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerRightsList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.rights.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新私密档案信息
   */
  async beautyMemberMeiCustomerSecretfileinfoUpdate(params: BeautyMemberMeiCustomerSecretfileinfoUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerSecretfileinfoUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.secretfileinfo.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询某个配置类型的配置信息
   */
  async beautyMemberMeiCustomerSettingGet(params: BeautyMemberMeiCustomerSettingGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerSettingGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.setting.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取会员私密档案信息
   */
  async beautyMemberMeiCustomerSecretfileinfoGet(params: BeautyMemberMeiCustomerSecretfileinfoGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerSecretfileinfoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.secretfileinfo.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 下架会员卡
   */
  async beautyMemberMeiCardOffsale(params: BeautyMemberMeiCardOffsale.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardOffsale.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.offsale',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新基础档案信息
   */
  async beautyMemberMeiCustomerFileinfoUpdate(params: BeautyMemberMeiCustomerFileinfoUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerFileinfoUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.fileinfo.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取某个会员的基础信息
   */
  async beautyMemberMeiCustomerGet(params: BeautyMemberMeiCustomerGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新会员档案模板
   */
  async beautyMemberMeiCustomerFiletemplateUpdate(params: BeautyMemberMeiCustomerFiletemplateUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerFiletemplateUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.filetemplate.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建会员卡
   */
  async beautyMemberMeiCardCreate(params: BeautyMemberMeiCardCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建一个会员等级
   */
  async beautyMemberMeiMemberlevelCreate(params: BeautyMemberMeiMemberlevelCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiMemberlevelCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.memberlevel.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员等级设置列表
   */
  async beautyMemberMeiMemberlevelList(params: BeautyMemberMeiMemberlevelList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiMemberlevelList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.memberlevel.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新会员卡
   */
  async beautyMemberMeiCardUpdate(params: BeautyMemberMeiCardUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 增加会员积分
   */
  async beautyMemberMeiCustomerPointsIncrease(params: BeautyMemberMeiCustomerPointsIncrease.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerPointsIncrease.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.points.increase',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 删除会员卡
   */
  async beautyMemberMeiCardDelete(params: BeautyMemberMeiCardDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员的交易统计信息
   */
  async beautyMemberMeiCustomerTradeinfoGet(params: BeautyMemberMeiCustomerTradeinfoGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerTradeinfoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.tradeinfo.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取会员卡详情
   */
  async beautyMemberMeiCardGet(params: BeautyMemberMeiCardGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 上架会员卡
   */
  async beautyMemberMeiCardOnsale(params: BeautyMemberMeiCardOnsale.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardOnsale.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.onsale',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员基础档案信息
   */
  async beautyMemberMeiCustomerFileinfoGet(params: BeautyMemberMeiCustomerFileinfoGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerFileinfoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.fileinfo.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新会员基础信息
   */
  async beautyMemberMeiCustomerCreate(params: BeautyMemberMeiCustomerCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员的资产数据
   */
  async beautyMemberMeiCustomerAssetsinfoGet(params: BeautyMemberMeiCustomerAssetsinfoGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerAssetsinfoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.assetsinfo.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新会员基础信息
   */
  async beautyMemberMeiCustomerUpdate(params: BeautyMemberMeiCustomerUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员卡列表
   */
  async beautyMemberMeiCardList(params: BeautyMemberMeiCardList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取某个会员的会员卡信息列表
   */
  async beautyMemberMeiCardCustomerList(params: BeautyMemberMeiCardCustomerList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCardCustomerList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.card.customer.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员档案设置
   */
  async beautyMemberMeiCustomerFiletemplateGet(params: BeautyMemberMeiCustomerFiletemplateGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerFiletemplateGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.filetemplate.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 搜索会员
   */
  async beautyMemberMeiCustomerList(params: BeautyMemberMeiCustomerList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新一个会员等级的信息
   */
  async beautyMemberMeiMemberlevelUpdate(params: BeautyMemberMeiMemberlevelUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiMemberlevelUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.memberlevel.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新会员设置信息
   */
  async beautyMemberMeiCustomerSettingUpdate(params: BeautyMemberMeiCustomerSettingUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerSettingUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.setting.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取会员标签列表
   */
  async beautyMemberMeiCustomerTagList(params: BeautyMemberMeiCustomerTagList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiCustomerTagList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.customer.tag.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取一个特等等级的配置信息
   */
  async beautyMemberMeiMemberlevelGet(params: BeautyMemberMeiMemberlevelGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiMemberlevelGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.memberlevel.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 删除一个会员等级
   */
  async beautyMemberMeiMemberlevelDelete(params: BeautyMemberMeiMemberlevelDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyMemberMeiMemberlevelDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.memberlevel.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取到店自提订单信息
   */
  async selffetchcodeTradeSelffetchcodeGet(params: SelffetchcodeTradeSelffetchcodeGet.Request, client_id: string = this.options.defaultClientId): Promise<SelffetchcodeTradeSelffetchcodeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.selffetchcode.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 核销到店自提订单
   */
  async selffetchcodeTradeSelffetchcodeApply(params: SelffetchcodeTradeSelffetchcodeApply.Request, client_id: string = this.options.defaultClientId): Promise<SelffetchcodeTradeSelffetchcodeApply.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.selffetchcode.apply',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 修改物流信息
   */
  async tradeDeliveryLogisticsOnlineUpdate(params: TradeDeliveryLogisticsOnlineUpdate.Request, client_id: string = this.options.defaultClientId): Promise<TradeDeliveryLogisticsOnlineUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.online.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 周期购订单一次性发多个期次
   */
  async tradeDeliveryTradeDcDeliveryDelivermultiissue(params: TradeDeliveryTradeDcDeliveryDelivermultiissue.Request, client_id: string = this.options.defaultClientId): Promise<TradeDeliveryTradeDcDeliveryDelivermultiissue.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.dc.delivery.delivermultiissue',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 单品多运单
   */
  async tradeDeliveryTradeDcDeliveryOrdersingleitemsend(params: TradeDeliveryTradeDcDeliveryOrdersingleitemsend.Request, client_id: string = this.options.defaultClientId): Promise<TradeDeliveryTradeDcDeliveryOrdersingleitemsend.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.dc.delivery.ordersingleitemsend',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 卖家确认发货
   */
  async tradeDeliveryLogisticsOnlineConfirm(params: TradeDeliveryLogisticsOnlineConfirm.Request, client_id: string = this.options.defaultClientId): Promise<TradeDeliveryLogisticsOnlineConfirm.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.online.confirm',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 发货单查询
   */
  async tradeDeliveryTradeDcQueryQuerybyorderno(params: TradeDeliveryTradeDcQueryQuerybyorderno.Request, client_id: string = this.options.defaultClientId): Promise<TradeDeliveryTradeDcQueryQuerybyorderno.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.dc.query.querybyorderno',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据微信粉丝用户的 weixin_openid 或 fans_id 绑定对应的标签
   */
  async tagsUsersWeixinFollowerTagsAdd(params: TagsUsersWeixinFollowerTagsAdd.Request, client_id: string = this.options.defaultClientId): Promise<TagsUsersWeixinFollowerTagsAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.follower.tags.add',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据微信粉丝用户的 weixin_openid 或 fans_id 删除对应的标签
   */
  async tagsUsersWeixinFollowerTagsDelete(params: TagsUsersWeixinFollowerTagsDelete.Request, client_id: string = this.options.defaultClientId): Promise<TagsUsersWeixinFollowerTagsDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.follower.tags.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取单个粉丝标签集合
   */
  async tagsUsersWeixinFollowerTagsGet(params: TagsUsersWeixinFollowerTagsGet.Request, client_id: string = this.options.defaultClientId): Promise<TagsUsersWeixinFollowerTagsGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.users.weixin.follower.tags.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取充值支付结果
   */
  async beautyCashierMeiCashierRechargeGet(params: BeautyCashierMeiCashierRechargeGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyCashierMeiCashierRechargeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.cashier.recharge.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 进行交易支付
   */
  async beautyCashierMeiCashierPay(params: BeautyCashierMeiCashierPay.Request, client_id: string = this.options.defaultClientId): Promise<BeautyCashierMeiCashierPay.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.cashier.pay',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取交易支付结果
   */
  async beautyCashierMeiCashierPayGet(params: BeautyCashierMeiCashierPayGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyCashierMeiCashierPayGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.cashier.pay.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 进行充值支付
   */
  async beautyCashierMeiCashierRecharge(params: BeautyCashierMeiCashierRecharge.Request, client_id: string = this.options.defaultClientId): Promise<BeautyCashierMeiCashierRecharge.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.cashier.recharge',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取推广分析详细推广数据
   */
  async extensionAnalysisDatacenterPspagesourceDataFetch(params: ExtensionAnalysisDatacenterPspagesourceDataFetch.Request, client_id: string = this.options.defaultClientId): Promise<ExtensionAnalysisDatacenterPspagesourceDataFetch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.datacenter.pspagesource.data.fetch',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建推广分析
   */
  async extensionAnalysisDatacenterPspagesourceCreate(params: ExtensionAnalysisDatacenterPspagesourceCreate.Request, client_id: string = this.options.defaultClientId): Promise<ExtensionAnalysisDatacenterPspagesourceCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.datacenter.pspagesource.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取某个店铺下监控链接剩余条数
   */
  async extensionAnalysisDatacenterPsstockFetch(params: ExtensionAnalysisDatacenterPsstockFetch.Request, client_id: string = this.options.defaultClientId): Promise<ExtensionAnalysisDatacenterPsstockFetch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.datacenter.psstock.fetch',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取推广监控列表
   */
  async extensionAnalysisDatacenterPspagesourceFetch(params: ExtensionAnalysisDatacenterPspagesourceFetch.Request, client_id: string = this.options.defaultClientId): Promise<ExtensionAnalysisDatacenterPspagesourceFetch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.datacenter.pspagesource.fetch',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取推广监控链接带来的订单
   */
  async extensionAnalysisDatacenterPspagesourceOrderFetch(params: ExtensionAnalysisDatacenterPspagesourceOrderFetch.Request, client_id: string = this.options.defaultClientId): Promise<ExtensionAnalysisDatacenterPspagesourceOrderFetch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.datacenter.pspagesource.order.fetch',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取推广渠道信息
   */
  async extensionAnalysisDatacenterPssourceFetch(params: ExtensionAnalysisDatacenterPssourceFetch.Request, client_id: string = this.options.defaultClientId): Promise<ExtensionAnalysisDatacenterPssourceFetch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.datacenter.pssource.fetch',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询商品标准
   */
  async itemStandardItemStandardGet(params: ItemStandardItemStandardGet.Request, client_id: string = this.options.defaultClientId): Promise<ItemStandardItemStandardGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.standard.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 根据条形码查询商品标准
   */
  async itemStandardItemStandardGetbycode(params: ItemStandardItemStandardGetbycode.Request, client_id: string = this.options.defaultClientId): Promise<ItemStandardItemStandardGetbycode.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.standard.getbycode',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据商品条形码查询商品标准
   */
  async itemStandardItemStandardCreate(params: ItemStandardItemStandardCreate.Request, client_id: string = this.options.defaultClientId): Promise<ItemStandardItemStandardCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.standard.create',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 分页查询商品标准列表
   */
  async itemStandardItemStandardSearch(params: ItemStandardItemStandardSearch.Request, client_id: string = this.options.defaultClientId): Promise<ItemStandardItemStandardSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.item.standard.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 周期购发货顺延
   */
  async circleLogisticsOnlineDelay(params: CircleLogisticsOnlineDelay.Request, client_id: string = this.options.defaultClientId): Promise<CircleLogisticsOnlineDelay.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.online.delay',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 周期购发货取消顺延接口
   */
  async circleLogisticsOnlineCanceldelay(params: CircleLogisticsOnlineCanceldelay.Request, client_id: string = this.options.defaultClientId): Promise<CircleLogisticsOnlineCanceldelay.Response> {
    return await this.requestService.invoke({
      api: 'youzan.logistics.online.canceldelay',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询周期购信息的发货记录
   */
  async circleTradeDcQueryMultiperiodQuerydeliveryrecords(params: CircleTradeDcQueryMultiperiodQuerydeliveryrecords.Request, client_id: string = this.options.defaultClientId): Promise<CircleTradeDcQueryMultiperiodQuerydeliveryrecords.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.dc.query.multiperiod.querydeliveryrecords',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询最新一期的发货记录
   */
  async circleTradeDcQueryMultiperiodQuerylatestplan(params: CircleTradeDcQueryMultiperiodQuerylatestplan.Request, client_id: string = this.options.defaultClientId): Promise<CircleTradeDcQueryMultiperiodQuerylatestplan.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.dc.query.multiperiod.querylatestplan',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 根据订单号和订单明细查询周期购相关的配置信息
   */
  async circleTradeDcQueryMultiperioddetail(params: CircleTradeDcQueryMultiperioddetail.Request, client_id: string = this.options.defaultClientId): Promise<CircleTradeDcQueryMultiperioddetail.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.dc.query.multiperioddetail',
      version: '2.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 储值卡支付
   */
  async storedValueCardCardvoucherValuecardFundPay(params: StoredValueCardCardvoucherValuecardFundPay.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardFundPay.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.fund.pay',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询该店铺发行的储值卡的退款记录
   */
  async storedValueCardCardvoucherValuecardRfndRcdBypubSearch(params: StoredValueCardCardvoucherValuecardRfndRcdBypubSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardRfndRcdBypubSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.rfnd.rcd.bypub.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询在该店铺发生的退款记录
   */
  async storedValueCardCardvoucherValuecardRfndRcdBysupSearch(params: StoredValueCardCardvoucherValuecardRfndRcdBysupSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardRfndRcdBysupSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.rfnd.rcd.bysup.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 储值卡退款
   */
  async storedValueCardCardvoucherValuecardFundRefund(params: StoredValueCardCardvoucherValuecardFundRefund.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardFundRefund.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.fund.refund',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询该店铺发行的储值卡
   */
  async storedValueCardCardvoucherValuecardInfoBypubSearch(params: StoredValueCardCardvoucherValuecardInfoBypubSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardInfoBypubSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.info.bypub.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询充值结果信息
   */
  async storedValueCardCardvoucherValuecardFundRechargeGet(params: StoredValueCardCardvoucherValuecardFundRechargeGet.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardFundRechargeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.fund.recharge.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询可在该店铺内使用的储值卡
   */
  async storedValueCardCardvoucherValuecardInfoBysupQuery(params: StoredValueCardCardvoucherValuecardInfoBysupQuery.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardInfoBysupQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.info.bysup.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询在该店铺发生的充值记录
   */
  async storedValueCardCardvoucherValuecardRechgRcdByacpSearch(params: StoredValueCardCardvoucherValuecardRechgRcdByacpSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardRechgRcdByacpSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.rechg.rcd.byacp.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 储值卡充值
   */
  async storedValueCardCardvoucherValuecardFundRecharge(params: StoredValueCardCardvoucherValuecardFundRecharge.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardFundRecharge.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.fund.recharge',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询该店铺发行的储值卡的充值记录
   */
  async storedValueCardCardvoucherValuecardRechgRcdBypubSearch(params: StoredValueCardCardvoucherValuecardRechgRcdBypubSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardRechgRcdBypubSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.rechg.rcd.bypub.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询在该店铺发生的支付记录
   */
  async storedValueCardCardvoucherValuecardPayRcdBysupSearch(params: StoredValueCardCardvoucherValuecardPayRcdBysupSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardPayRcdBysupSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.pay.rcd.bysup.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询该店铺发行的储值卡的支付记录
   */
  async storedValueCardCardvoucherValuecardPayRcdBypubSearch(params: StoredValueCardCardvoucherValuecardPayRcdBypubSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardPayRcdBypubSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.pay.rcd.bypub.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 储值卡调账
   */
  async storedValueCardCardvoucherValuecardFundAdjust(params: StoredValueCardCardvoucherValuecardFundAdjust.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardFundAdjust.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.fund.adjust',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询在该店铺发生的单笔调账记录
   */
  async storedValueCardCardvoucherValuecardAdjRcdByacpSearch(params: StoredValueCardCardvoucherValuecardAdjRcdByacpSearch.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardAdjRcdByacpSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.adj.rcd.byacp.search',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询单个用户在该店铺发行的储值卡
   */
  async storedValueCardCardvoucherValuecardInfoQuery(params: StoredValueCardCardvoucherValuecardInfoQuery.Request, client_id: string = this.options.defaultClientId): Promise<StoredValueCardCardvoucherValuecardInfoQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.cardvoucher.valuecard.info.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 开启或关闭安全码功能
   */
  async beautyShopMeiDeptSecurityCodeSwitch(params: BeautyShopMeiDeptSecurityCodeSwitch.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptSecurityCodeSwitch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.security.code.switch',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取店铺品牌认证信息
   */
  async beautyShopMeiDeptBrandinfoGet(params: BeautyShopMeiDeptBrandinfoGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptBrandinfoGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.brandinfo.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新安全码配置
   */
  async beautyShopMeiDeptSecurityCodeUpdate(params: BeautyShopMeiDeptSecurityCodeUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptSecurityCodeUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.security.code.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询安全码
   */
  async beautyShopMeiDeptSecurityCodeGet(params: BeautyShopMeiDeptSecurityCodeGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptSecurityCodeGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.security.code.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 拉取安全码使用记录
   */
  async beautyShopMeiDeptSecurityCodelogList(params: BeautyShopMeiDeptSecurityCodelogList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptSecurityCodelogList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.security.codelog.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取分店信息
   */
  async beautyShopMeiDeptGet(params: BeautyShopMeiDeptGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询可访问的店铺
   */
  async beautyShopMeiDeptAvailableQuery(params: BeautyShopMeiDeptAvailableQuery.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptAvailableQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.available.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 绑定店铺
   */
  async beautyShopMeiDeptBind(params: BeautyShopMeiDeptBind.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptBind.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.bind',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取店铺状态
   */
  async beautyShopMeiDeptStatusGet(params: BeautyShopMeiDeptStatusGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyShopMeiDeptStatusGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.dept.status.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取工单列表
   */
  async beautyWorkOrderMeiWorkorderList(params: BeautyWorkOrderMeiWorkorderList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyWorkOrderMeiWorkorderList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.workorder.list',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询工单列表，按照订单号分组返回
   */
  async beautyWorkOrderMeiWorkorderOrdergroup(params: BeautyWorkOrderMeiWorkorderOrdergroup.Request, client_id: string = this.options.defaultClientId): Promise<BeautyWorkOrderMeiWorkorderOrdergroup.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.workorder.ordergroup',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取单条工单记录
   */
  async beautyWorkOrderMeiWorkorderGet(params: BeautyWorkOrderMeiWorkorderGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyWorkOrderMeiWorkorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.workorder.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 更新工单状态
   */
  async beautyWorkOrderMeiWorkorderUpdate(params: BeautyWorkOrderMeiWorkorderUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyWorkOrderMeiWorkorderUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.workorder.update',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询库存详情
   */
  async beautyStockMeiStockGet(params: BeautyStockMeiStockGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStockMeiStockGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.stock.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询仓库列表
   */
  async beautyStockMeiStockWarehouseList(params: BeautyStockMeiStockWarehouseList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStockMeiStockWarehouseList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.stock.warehouse.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 入库商品
   */
  async beautyStockMeiStockCreate(params: BeautyStockMeiStockCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStockMeiStockCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.stock.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询库存列表
   */
  async beautyStockMeiStockList(params: BeautyStockMeiStockList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyStockMeiStockList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.stock.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 离线日志上报记录
   */
  async retailRetailConsoleLogAdd(params: RetailRetailConsoleLogAdd.Request, client_id: string = this.options.defaultClientId): Promise<RetailRetailConsoleLogAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.console.log.add',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询当前用户是否具有某一类型的权限
   */
  async retailPermissionSamPermsCheckGet(params: RetailPermissionSamPermsCheckGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailPermissionSamPermsCheckGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.sam.perms.check.get',
      version: '1.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 订单修改
   */
  async beautyOrderMeiOrderUpdate(params: BeautyOrderMeiOrderUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyOrderMeiOrderUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.order.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单详情查询
   */
  async beautyOrderMeiOrderQuery(params: BeautyOrderMeiOrderQuery.Request, client_id: string = this.options.defaultClientId): Promise<BeautyOrderMeiOrderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.order.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单退款
   */
  async beautyOrderMeiOrderRefund(params: BeautyOrderMeiOrderRefund.Request, client_id: string = this.options.defaultClientId): Promise<BeautyOrderMeiOrderRefund.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.order.refund',
      version: '1.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单列表查询
   */
  async beautyOrderMeiOrderList(params: BeautyOrderMeiOrderList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyOrderMeiOrderList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.order.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单取消
   */
  async beautyOrderMeiOrderCancel(params: BeautyOrderMeiOrderCancel.Request, client_id: string = this.options.defaultClientId): Promise<BeautyOrderMeiOrderCancel.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.order.cancel',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 订单创建
   */
  async beautyOrderMeiOrderCreate(params: BeautyOrderMeiOrderCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyOrderMeiOrderCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.order.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 电子卡券整单核销
   */
  async virtualticketTradeVirtualticketVerifycode(params: VirtualticketTradeVirtualticketVerifycode.Request, client_id: string = this.options.defaultClientId): Promise<VirtualticketTradeVirtualticketVerifycode.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.virtualticket.verifycode',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取电子卡券信息
   */
  async virtualticketTradeVirtualticketGet(params: VirtualticketTradeVirtualticketGet.Request, client_id: string = this.options.defaultClientId): Promise<VirtualticketTradeVirtualticketGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.virtualticket.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 电子卡券单个码券核销
   */
  async virtualticketTradeVirtualticketVerifyticket(params: VirtualticketTradeVirtualticketVerifyticket.Request, client_id: string = this.options.defaultClientId): Promise<VirtualticketTradeVirtualticketVerifyticket.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.virtualticket.verifyticket',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家同意退款
   */
  async sellerRefundTradeRefundAgree(params: SellerRefundTradeRefundAgree.Request, client_id: string = this.options.defaultClientId): Promise<SellerRefundTradeRefundAgree.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.agree',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家拒绝退款
   */
  async sellerRefundTradeRefundRefuse(params: SellerRefundTradeRefundRefuse.Request, client_id: string = this.options.defaultClientId): Promise<SellerRefundTradeRefundRefuse.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.refuse',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家拒绝退货
   */
  async sellerRefundTradeReturngoodsRefuse(params: SellerRefundTradeReturngoodsRefuse.Request, client_id: string = this.options.defaultClientId): Promise<SellerRefundTradeReturngoodsRefuse.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.returngoods.refuse',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 卖家同意退货
   */
  async sellerRefundTradeReturngoodsAgree(params: SellerRefundTradeReturngoodsAgree.Request, client_id: string = this.options.defaultClientId): Promise<SellerRefundTradeReturngoodsAgree.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.returngoods.agree',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商家主动退款
   */
  async sellerRefundTradeRefundSellerActive(params: SellerRefundTradeRefundSellerActive.Request, client_id: string = this.options.defaultClientId): Promise<SellerRefundTradeRefundSellerActive.Response> {
    return await this.requestService.invoke({
      api: 'youzan.trade.refund.seller.active',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品分类查询
   */
  async beautyItemMeiGoodsProductCategoryList(params: BeautyItemMeiGoodsProductCategoryList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductCategoryList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.category.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务分组创建
   */
  async beautyItemMeiGoodsServingCategoryCreate(params: BeautyItemMeiGoodsServingCategoryCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingCategoryCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.category.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务更新
   */
  async beautyItemMeiGoodsServingUpdate(params: BeautyItemMeiGoodsServingUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品创建
   */
  async beautyItemMeiGoodsProductCreate(params: BeautyItemMeiGoodsProductCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品分组删除
   */
  async beautyItemMeiGoodsProductCategoryDelete(params: BeautyItemMeiGoodsProductCategoryDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductCategoryDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.category.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务规格查询
   */
  async beautyItemMeiGoodsServingSkuList(params: BeautyItemMeiGoodsServingSkuList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingSkuList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.sku.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务创建
   */
  async beautyItemMeiGoodsServingCreate(params: BeautyItemMeiGoodsServingCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品标签更新
   */
  async beautyItemMeiGoodsProductTagUpdate(params: BeautyItemMeiGoodsProductTagUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductTagUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.tag.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品标签删除
   */
  async beautyItemMeiGoodsProductTagDelete(params: BeautyItemMeiGoodsProductTagDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductTagDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.tag.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品规格查询
   */
  async beautyItemMeiGoodsProductSkuList(params: BeautyItemMeiGoodsProductSkuList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductSkuList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.sku.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务标签创建
   */
  async beautyItemMeiGoodsServingTagCreate(params: BeautyItemMeiGoodsServingTagCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingTagCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.tag.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品更新
   */
  async beautyItemMeiGoodsProductUpdate(params: BeautyItemMeiGoodsProductUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品规格项查询
   */
  async beautyItemMeiGoodsProductSkuItemList(params: BeautyItemMeiGoodsProductSkuItemList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductSkuItemList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.sku.item.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品分组创建
   */
  async beautyItemMeiGoodsProductCategoryCreate(params: BeautyItemMeiGoodsProductCategoryCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductCategoryCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.category.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品标签创建
   */
  async beautyItemMeiGoodsProductTagCreate(params: BeautyItemMeiGoodsProductTagCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductTagCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.tag.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务分类查询
   */
  async beautyItemMeiGoodsServingCategoryList(params: BeautyItemMeiGoodsServingCategoryList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingCategoryList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.category.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务标签删除
   */
  async beautyItemMeiGoodsServingTagDelete(params: BeautyItemMeiGoodsServingTagDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingTagDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.tag.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务规格创建
   */
  async beautyItemMeiGoodsServingSkuCreate(params: BeautyItemMeiGoodsServingSkuCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingSkuCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.sku.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 商品上架下架
   */
  async beautyItemMeiGoodsShelveUpdate(params: BeautyItemMeiGoodsShelveUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsShelveUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.shelve.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务详情查询
   */
  async beautyItemMeiGoodsServingGet(params: BeautyItemMeiGoodsServingGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 产品详情查询
   */
  async beautyItemMeiGoodsProductGet(params: BeautyItemMeiGoodsProductGet.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 服务列表查询
   */
  async beautyItemMeiGoodsServingList(params: BeautyItemMeiGoodsServingList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务标签查询
   */
  async beautyItemMeiGoodsServingTagList(params: BeautyItemMeiGoodsServingTagList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingTagList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.tag.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务标签更新
   */
  async beautyItemMeiGoodsServingTagUpdate(params: BeautyItemMeiGoodsServingTagUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingTagUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.tag.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品标签查询
   */
  async beautyItemMeiGoodsProductTagList(params: BeautyItemMeiGoodsProductTagList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductTagList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.tag.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品列表查询
   */
  async beautyItemMeiGoodsProductList(params: BeautyItemMeiGoodsProductList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务分组删除
   */
  async beautyItemMeiGoodsServingCategoryDelete(params: BeautyItemMeiGoodsServingCategoryDelete.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingCategoryDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.category.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品规格项创建
   */
  async beautyItemMeiGoodsProductSkuItemCreate(params: BeautyItemMeiGoodsProductSkuItemCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductSkuItemCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.sku.item.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品分组更新
   */
  async beautyItemMeiGoodsProductCategoryUpdate(params: BeautyItemMeiGoodsProductCategoryUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductCategoryUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.category.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 产品规格创建
   */
  async beautyItemMeiGoodsProductSkuCreate(params: BeautyItemMeiGoodsProductSkuCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsProductSkuCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.product.sku.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务分组更新
   */
  async beautyItemMeiGoodsServingCategoryUpdate(params: BeautyItemMeiGoodsServingCategoryUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingCategoryUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.category.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务规格查询
   */
  async beautyItemMeiGoodsServingSkuItemList(params: BeautyItemMeiGoodsServingSkuItemList.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingSkuItemList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.sku.item.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 服务规格项创建
   */
  async beautyItemMeiGoodsServingSkuItemCreate(params: BeautyItemMeiGoodsServingSkuItemCreate.Request, client_id: string = this.options.defaultClientId): Promise<BeautyItemMeiGoodsServingSkuItemCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.goods.serving.sku.item.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家新增收货地址
   */
  async buyerAddressUserAddressAdd(params: BuyerAddressUserAddressAdd.Request, client_id: string = this.options.defaultClientId): Promise<BuyerAddressUserAddressAdd.Response> {
    return await this.requestService.invoke({
      api: 'youzan.user.address.add',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家修改收货地址
   */
  async buyerAddressUserAddressUpdate(params: BuyerAddressUserAddressUpdate.Request, client_id: string = this.options.defaultClientId): Promise<BuyerAddressUserAddressUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.user.address.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 买家读取收货地址
   */
  async buyerAddressUserAddressGet(params: BuyerAddressUserAddressGet.Request, client_id: string = this.options.defaultClientId): Promise<BuyerAddressUserAddressGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.user.address.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 供应商信息更新
   */
  async retailSupplierRetailOpenSupplierUpdate(params: RetailSupplierRetailOpenSupplierUpdate.Request, client_id: string = this.options.defaultClientId): Promise<RetailSupplierRetailOpenSupplierUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.supplier.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 供应商信息删除
   */
  async retailSupplierRetailOpenSupplierDelete(params: RetailSupplierRetailOpenSupplierDelete.Request, client_id: string = this.options.defaultClientId): Promise<RetailSupplierRetailOpenSupplierDelete.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.supplier.delete',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 供应商信息查询
   */
  async retailSupplierRetailOpenSupplierQuery(params: RetailSupplierRetailOpenSupplierQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailSupplierRetailOpenSupplierQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.supplier.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 供应商信息新增
   */
  async retailSupplierRetailOpenSupplierCreate(params: RetailSupplierRetailOpenSupplierCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailSupplierRetailOpenSupplierCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.supplier.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询推广员列表
   */
  async meiPromoterMeiPromoterList(params: MeiPromoterMeiPromoterList.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 将一批顾客更新绑定到某个推广员下面
   */
  async meiPromoterMeiPromoterCustomerBindUpdate(params: MeiPromoterMeiPromoterCustomerBindUpdate.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterCustomerBindUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.customer.bind.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询推广员下绑定的顾客列表
   */
  async meiPromoterMeiPromoterCustomerList(params: MeiPromoterMeiPromoterCustomerList.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterCustomerList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.customer.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 将一批顾客绑定到某个推广员下面
   */
  async meiPromoterMeiPromoterCustomerBind(params: MeiPromoterMeiPromoterCustomerBind.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterCustomerBind.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.customer.bind',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询某个推广员详细信息
   */
  async meiPromoterMeiPromoterGet(params: MeiPromoterMeiPromoterGet.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询推广员推广产生的订单列表
   */
  async meiPromoterMeiPromoterOrderList(params: MeiPromoterMeiPromoterOrderList.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterOrderList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.order.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量创建推广员
   */
  async meiPromoterMeiPromoterCreate(params: MeiPromoterMeiPromoterCreate.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询推广员邀请的下线推广员列表
   */
  async meiPromoterMeiPromoterInviteeList(params: MeiPromoterMeiPromoterInviteeList.Request, client_id: string = this.options.defaultClientId): Promise<MeiPromoterMeiPromoterInviteeList.Response> {
    return await this.requestService.invoke({
      api: 'youzan.mei.promoter.invitee.list',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 盘点单查询
   */
  async retailStockRetailOpenStockcheckorderGet(params: RetailStockRetailOpenStockcheckorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockcheckorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockcheckorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 批量查询入库单
   */
  async retailStockRetailOpenStockinorderQuery(params: RetailStockRetailOpenStockinorderQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockinorderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockinorder.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 要货申请单审核
   */
  async retailStockRetailOpenApplyorderCheck(params: RetailStockRetailOpenApplyorderCheck.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenApplyorderCheck.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.applyorder.check',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 配送单查询
   */
  async retailStockRetailOpenDistributionorderGet(params: RetailStockRetailOpenDistributionorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenDistributionorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.distributionorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 库存调整
   */
  async retailStockRetailOpenStockAdjust(params: RetailStockRetailOpenStockAdjust.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockAdjust.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stock.adjust',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询出库单
   */
  async retailStockRetailOpenStockoutorderGet(params: RetailStockRetailOpenStockoutorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockoutorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockoutorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 分页盘点单创建
   */
  async retailStockRetailOpenStockcheckCreate(params: RetailStockRetailOpenStockcheckCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockcheckCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockcheck.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 批量查询出库单
   */
  async retailStockRetailOpenStockoutorderQuery(params: RetailStockRetailOpenStockoutorderQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockoutorderQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockoutorder.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 调拨单查询
   */
  async retailStockRetailOpenAllotorderGet(params: RetailStockRetailOpenAllotorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenAllotorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.allotorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 查询入库单
   */
  async retailStockRetailOpenStockinorderGet(params: RetailStockRetailOpenStockinorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockinorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockinorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 采购单查询
   */
  async retailStockRetailOpenPurchaseorderGet(params: RetailStockRetailOpenPurchaseorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenPurchaseorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.purchaseorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 要货申请单查询
   */
  async retailStockRetailOpenApplyorderGet(params: RetailStockRetailOpenApplyorderGet.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenApplyorderGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.applyorder.get',
      version: '3.0.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 创建入库单
   */
  async retailStockRetailOpenStockinorderCreate(params: RetailStockRetailOpenStockinorderCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockinorderCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockinorder.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 创建出库单
   */
  async retailStockRetailOpenStockoutorderCreate(params: RetailStockRetailOpenStockoutorderCreate.Request, client_id: string = this.options.defaultClientId): Promise<RetailStockRetailOpenStockoutorderCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.stockoutorder.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 查询总部下门店和仓库信息
   */
  async retailShopRetailOpenWarehouseQuery(params: RetailShopRetailOpenWarehouseQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailShopRetailOpenWarehouseQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.warehouse.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 员工信息查询
   */
  async retailShopRetailOpenStaffQuery(params: RetailShopRetailOpenStaffQuery.Request, client_id: string = this.options.defaultClientId): Promise<RetailShopRetailOpenStaffQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.retail.open.staff.query',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 报关状态查询
   */
  async payCustomsDeclarationPayCustomsDeclarationReportpaymentQuery(params: PayCustomsDeclarationPayCustomsDeclarationReportpaymentQuery.Request, client_id: string = this.options.defaultClientId): Promise<PayCustomsDeclarationPayCustomsDeclarationReportpaymentQuery.Response> {
    return await this.requestService.invoke({
      api: 'youzan.pay.customs.declaration.reportpayment.query',
      version: '1.0.1',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 支付跨境报关接口
   */
  async payCustomsDeclarationPayCustomsDeclarationReportpaymentReport(params: PayCustomsDeclarationPayCustomsDeclarationReportpaymentReport.Request, client_id: string = this.options.defaultClientId): Promise<PayCustomsDeclarationPayCustomsDeclarationReportpaymentReport.Response> {
    return await this.requestService.invoke({
      api: 'youzan.pay.customs.declaration.reportpayment.report',
      version: '1.0.1',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 客户创建接口
   */
  async customerScrmCustomerCreate(params: CustomerScrmCustomerCreate.Request, client_id: string = this.options.defaultClientId): Promise<CustomerScrmCustomerCreate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.create',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 客户更新接口
   */
  async customerScrmCustomerUpdate(params: CustomerScrmCustomerUpdate.Request, client_id: string = this.options.defaultClientId): Promise<CustomerScrmCustomerUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 更新客户备注信息
   */
  async customerScrmCustomerRemarkUpdate(params: CustomerScrmCustomerRemarkUpdate.Request, client_id: string = this.options.defaultClientId): Promise<CustomerScrmCustomerRemarkUpdate.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.remark.update',
      version: '3.0.0',
      method: 'POST',
      params,
    }, client_id);
  }

  /**
   * 获取客户详情
   */
  async customerScrmCustomerGet(params: CustomerScrmCustomerGet.Request, client_id: string = this.options.defaultClientId): Promise<CustomerScrmCustomerGet.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.get',
      version: '3.1.0',
      method: 'GET',
      params,
    }, client_id);
  }

  /**
   * 获取客户列表
   */
  async customerScrmCustomerSearch(params: CustomerScrmCustomerSearch.Request, client_id: string = this.options.defaultClientId): Promise<CustomerScrmCustomerSearch.Response> {
    return await this.requestService.invoke({
      api: 'youzan.scrm.customer.search',
      version: '3.1.0',
      method: 'POST',
      params,
    }, client_id);
  }
}
