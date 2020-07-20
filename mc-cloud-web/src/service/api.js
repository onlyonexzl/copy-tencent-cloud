export default {
  BASE_URL: "http://localhost/",
  /*登陆接口*/
  AUTH_LOGIN_URL: "/auth/token",
  AUTH_REGISTER_URL: "/auth/register",
  USER_INFO_URL: "/auth/info",
  AUTH_UPDATEPWD_URL: "/auth/password/update",

  // 获取手机验证码
  SMS_CODE_URL:"/auth/getSmsCode",

  /*管理员接口*/
  ADMIN_PAGE_URL: "/api/console/admin/page",
  ADMIN_ADD_URL: "/api/console/admin/insert",
  ADMIN_UPDATE_URL: "/api/console/admin/update",
  ADMIN_GETBYID_URL: "/api/console/admin/",
  ADMIN_DELETE_URL: "/api/console/admin/delete/",

  /*角色接口*/
  ROLE_PAGE_URL: "/api/console/role/page",
  ROLE_ADD_URL: "/api/console/role/insert",
  ROLE_UPDATE_URL: "/api/console/role/update",
  ROLE_GETBYID_URL: "/api/console/role/",
  ROLE_GETBYID_WITH_MENU_URL: "/api/console/role/menu/",
  ROLE_DELETE_URL: "/api/console/role/delete/",
  ROLE_UPDATE_MENU_URL: "/api/console/role/menu/update",

  /*菜单接口*/
  MENU_TREEDATA_URL: "/api/console/menu/treeData",
  MENU_ADD_URL: "/api/console/menu/insert",
  MENU_UPDATE_URL: "/api/console/menu/update",
  MENU_GETBYID_URL: "/api/console/menu/",
  MENU_DELETE_URL: "/api/console/menu/delete/",

  /*设备分组接口*/
  GROUP_PAGE_URL: "/api/iot/group/page",
  GROUP_LIST_URL: "/api/iot/group/list",
  GROUP_ADD_URL: "/api/iot/group/insert",
  GROUP_UPDATE_URL: "/api/iot/group/update",
  GROUP_GETBYID_URL: "/api/iot/group/",
  GROUP_DELETE_URL: "/api/iot/group/delete/",

  /*设备接口*/
  DEVICE_PAGE_URL: "/api/iot/device/page",
  DEVICE_LIST_URL: "/api/iot/device/list",
  DEVICE_ADD_URL: "/api/iot/device/insert",
  DEVICE_UPDATE_URL: "/api/iot/device/update",
  DEVICE_GETBYID_URL: "/api/iot/device/",
  DEVICE_DELETE_URL: "/api/iot/device/delete/",

  /*驱动接口*/
  DRIVER_PAGE_URL: "/api/iot/driver/page",
  DRIVER_LIST_URL: "/api/iot/driver/list",
  DRIVER_ADD_URL: "/api/iot/driver/insert",
  DRIVER_UPDATE_URL: "/api/iot/driver/update",
  DRIVER_GETBYID_URL: "/api/iot/driver/",
  DRIVER_DELETE_URL: "/api/iot/driver/delete/",

  /*驱动属性接口*/
  DRIVERATTRIBUTE_PAGE_URL: "/api/iot/driverAttribute/page",
  DRIVERATTRIBUTE_LIST_URL: "/api/iot/driverAttribute/list",
  DRIVERATTRIBUTE_ADD_URL: "/api/iot/driverAttribute/insert",
  DRIVERATTRIBUTE_UPDATE_URL: "/api/iot/driverAttribute/update",
  DRIVERATTRIBUTE_GETBYID_URL: "/api/iot/driverAttribute/",
  DRIVERATTRIBUTE_DELETE_URL: "/api/iot/driverAttribute/delete/",

  /*驱动配置接口*/
  DRIVERINFO_PAGE_URL: "/api/iot/driverInfo/page",
  DRIVERINFO_ADD_URL: "/api/iot/driverInfo/insert",
  DRIVERINFO_UPDATE_URL: "/api/iot/driverInfo/update",
  DRIVERINFO_GETBYID_URL: "/api/iot/driverInfo/",
  DRIVERINFO_DELETE_URL: "/api/iot/driverInfo/delete/",

  /*位号属性接口*/
  POINTATTRIBUTE_PAGE_URL: "/api/iot/pointAttribute/page",
  POINTATTRIBUTE_LIST_URL: "/api/iot/pointAttribute/list",
  POINTATTRIBUTE_ADD_URL: "/api/iot/pointAttribute/insert",
  POINTATTRIBUTE_UPDATE_URL: "/api/iot/pointAttribute/update",
  POINTATTRIBUTE_GETBYID_URL: "/api/iot/pointAttribute/",
  POINTATTRIBUTE_DELETE_URL: "/api/iot/pointAttribute/delete/",

  /*模板接口*/
  PROFILE_PAGE_URL: "/api/iot/profile/page",
  PROFILE_LIST_URL: "/api/iot/profile/list",
  PROFILE_ADD_URL: "/api/iot/profile/insert",
  PROFILE_UPDATE_URL: "/api/iot/profile/update",
  PROFILE_GETBYID_URL: "/api/iot/profile/",
  PROFILE_DELETE_URL: "/api/iot/profile/delete/",

  /*位号接口*/
  POINT_PAGE_URL: "/api/iot/point/page",
  POINT_LIST_URL: "/api/iot/point/list",
  POINT_ADD_URL: "/api/iot/point/insert",
  POINT_UPDATE_URL: "/api/iot/point/update",
  POINT_GETBYID_URL: "/api/iot/point/",
  POINT_DELETE_URL: "/api/iot/point/delete/",

  /*位号配置接口*/
  POINTINFO_PAGE_URL: "/api/iot/pointInfo/page",
  POINTINFO_ADD_URL: "/api/iot/pointInfo/insert",
  POINTINFO_UPDATE_URL: "/api/iot/pointInfo/update",
  POINTINFO_GETBYID_URL: "/api/iot/pointInfo/",
  POINTINFO_DELETE_URL: "/api/iot/pointInfo/delete/",

  /*商品接口*/
  PRODUCT_PAGE_URL: "/api/console/product/page",

  /*菜单接口*/
  CATEGORY_TREEDATA_URL: "/api/console/product/category/treeData",
  CATEGORY_ADD_URL: "/api/console/product/category/insert",
  CATEGORY_UPDATE_URL: "/api/console/product/category/update",
  CATEGORY_GETBYID_URL: "/api/console/product/category/",
  CATEGORY_DELETE_URL: "/api/console/product/category/delete/",

  /*服务商接口*/
  PROVIDER_PAGE_URL: "/api/console/provider/page",
  PROVIDER_ADD_URL: "/api/console/provider/insert",
  PROVIDER_UPDATE_URL: "/api/console/provider/update",
  PROVIDER_GETBYID_URL: "/api/console/provider/",
  PROVIDER_DELETE_URL: "/api/console/provider/delete/",

  /*资讯接口*/
  INFORMATION_PAGE_URL: "/api/console/information/page",
  INFORMATION_ADD_URL: "/api/console/information/insert",
  INFORMATION_UPDATE_URL: "/api/console/information/update",
  INFORMATION_GETBYID_URL: "/api/console/information/",
  INFORMATION_DELETE_URL: "/api/console/information/delete/",

  /*资讯类型接口*/
  INFORMATION_TYPE_PAGE_URL: "/api/console/information/type/page",
  INFORMATION_TYPE_LIST_URL: "/api/console/information/type/list",
  INFORMATION_TYPE_ADD_URL: "/api/console/information/type/insert",
  INFORMATION_TYPE_UPDATE_URL: "/api/console/information/type/update",
  INFORMATION_TYPE_GETBYID_URL: "/api/console/information/type/",
  INFORMATION_TYPE_DELETE_URL: "/api/console/information/type/delete/",
}
