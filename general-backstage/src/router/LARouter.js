let LARouter = [
  {
    path: "/develop/management/backMenu",
    name: "backMenu",
    meta: ["拓展管理", "拓展信息", "后台菜单"],
    component: resolve =>
      require(["@/view/develop/management/backMenu.vue"], resolve)
  },
  {
    path: "/develop/management/imageMent",
    name: "imageMent",
    meta: ["拓展管理", "拓展信息", "图片管理"],
    component: resolve =>
      require(["@/view/develop/management/imageMent.vue"], resolve)
  },
  {
    path: "/develop/management/textMessage",
    name: "textMessage",
    meta: ["拓展管理", "拓展信息", "短信发送"],
    component: resolve =>
      require(["@/view/develop/management/textMessage.vue"], resolve)
  },
  {
    path: "/develop/management/groupMail",
    name: "groupMail",
    meta: ["拓展管理", "拓展信息", "邮件群发"],
    component: resolve =>
      require(["@/view/develop/management/groupMail.vue"], resolve)
  },
  {
    path: "/develop/management/taobaoConversion",
    name: "taobaoConversion",
    meta: ["拓展管理", "拓展信息", "淘宝转换"],
    component: resolve =>
      require(["@/view/develop/management/taobaoConversion.vue"], resolve)
  },
  {
    path: "/develop/management/trustManagement",
    name: "trustManagement",
    meta: ["拓展管理", "拓展信息", "托管管理"],
    component: resolve =>
      require(["@/view/develop/management/trustManagement.vue"], resolve)
  },
  {
    path: "/develop/wechat/weChatmenu",
    name: "weChatmenu",
    meta: ["拓展管理", "微信整合", "微信菜单管理"],
    component: resolve => require(["@/view/develop/wechat/menu.vue"], resolve)
  },
  {
    path: "/develop/log/adminLog",
    name: "adminLog",
    meta: ["拓展管理", "日志管理", "后台管理日志"],
    component: resolve => require(["@/view/develop/log/adminLog.vue"], resolve)
  },
  {
    path: "/develop/log/taskLog",
    name: "taskLog",
    meta: ["拓展管理", "日志管理", "定期任务日志"],
    component: resolve => require(["@/view/develop/log/taskLog.vue"], resolve)
  },
  {
    path: "/through/classify/classList",
    name: "classList",
    meta: ["通证管理", "分类信息管理", "分类信息列表"],
    component: resolve =>
      require(["@/view/through/classify/classList.vue"], resolve)
  },
  {
    path: "/through/throughThe/management",
    name: "management",
    meta: ["通证管理", "通证管理", "通证管理"],
    component: resolve =>
      require(["@/view/through/throughThe/management.vue"], resolve)
  },
  {
    path: "/through/throughThe/passOrder",
    name: "passOrder",
    meta: ["通证管理", "通证管理", "通证订单"],
    component: resolve =>
      require(["@/view/through/throughThe/passOrder.vue"], resolve)
  },
  {
    path: "/through/throughThe/addManagement",
    name: "addManagement",
    meta: ["添加通证"],
    component: resolve =>
      require(["@/view/through/throughThe/addManagement.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/merchant",
    name: "merchant",
    meta: ["平台设置", "基本设置", "商家设置"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/merchant.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/foundational",
    name: "foundational",
    meta: ["平台设置", "基本设置", "基础信息"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/foundational.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/service",
    name: "service",
    meta: ["平台设置", "基本设置", "客服设置"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/service.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/emailPlatform",
    name: "emailPlatform",
    meta: ["平台设置", "基本设置", "邮件平台"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/emailPlatform.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/setNote",
    name: "setNote",
    meta: ["平台设置", "基本设置", "短信设置"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/setNote.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/register",
    name: "register",
    meta: ["平台设置", "基本设置", "注册设置"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/register.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/scoreValue",
    name: "scoreValue",
    meta: ["平台设置", "基本设置", "分值比例"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/scoreValue.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/domain",
    name: "domain",
    meta: ["平台设置", "基本设置", "保留域名"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/domain.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/shopCertification",
    name: "shopCertification",
    meta: ["平台设置", "基本设置", "商铺认证"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/shopCertification.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/setDomain",
    name: "setDomain",
    meta: ["平台设置", "基本设置", "域名设置"],
    component: resolve =>
      require(["@/view/setPlatform/setBasic/setDomain.vue"], resolve)
  }
];

export default LARouter;
