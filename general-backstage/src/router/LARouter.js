let LARouter = [
  {
    path: "/develop",
    name: "develop",
    meta: ["拓展管理"],
    // component: resolve => require(["@/view/develop/homePage.vue"], resolve),
    // meta: ['心理管理', '心理健康指导', '详情']
    children: [
      {
        path: "/develop/management",
        name: "management",
        meta: ["拓展管理", "拓展信息"],
        component: resolve => require(["@/view/develop/homePage.vue"], resolve),
        children: [
          {
            path: "/develop/management/backMenu",
            name: "backMenu",
            meta: ["拓展管理", "拓展信息", "后台菜单"],
            component: resolve =>
              require(["@/view/develop/management/backMenu.vue"], resolve)
          }
        ]
      }
    ]
  }
];

export default LARouter;
