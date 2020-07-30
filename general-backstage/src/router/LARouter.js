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
  }
];

export default LARouter;
