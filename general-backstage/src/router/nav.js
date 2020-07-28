import LAnav from './LAnav'
console.log(LAnav)
let navArr = [
  {
    id: 'PROVIDER',
    name: '首页',
    icon: 'el-icon-box',
    // 1、账号管理  2、资金管理  3、收货地址  4、短消息
    subset: [{
      id: 'PROVIDER_LIST',
      name: '后台首页',  //我的账号
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
    }, {
      id: 'PROVIDER_LIST',
      name: '数据备份', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '账户概览',
        // url: '/shopManagement/shippingAddress'
      },
      {
        name: '积分明细',
        // url: '/shopManagement/modifyTheData',
      }, {
        name: '资金明细',
        // url: '/provider/list',
      }
      ]
    },]
  },
  {
    id: 'PROVIDER',
    name: '杂志管理',
    icon: 'el-icon-box',
    // 1、账号管理  2、资金管理  3、收货地址  4、短消息
    subset: [{
      id: 'PROVIDER_LIST',
      name: '账号管理',  //我的账号
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '修改资料',
        url: '/shopManagement/shippingAddress'
      },
      {
        name: '收货地址',
        url: '/shopManagement/modifyTheData',
      }, {
        name: '短消息',
        url: '/provider/list',
      }
        // {
        //   name: '短消息',
        //   url: '/company/edit',
        //   parent: '/company/list'
        // }
      ]
    }, {
      id: 'PROVIDER_LIST',
      name: '资金管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '账户概览',
        // url: '/shopManagement/shippingAddress'
      },
      {
        name: '积分明细',
        // url: '/shopManagement/modifyTheData',
      }, {
        name: '资金明细',
        // url: '/provider/list',
      }
      ]
    },]
  },
  {
    id: 'PROVIDER',
    name: '商品管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PROVIDER_LIST',
        name: '商铺装修',
        icon: 'el-icon-menu',
        // url: '/provider/list',
        menu: true,
        actions: [
          {
            name: '页面管理',
            url: '/shopManagement/shopManagement',
            // parent: '/company/list'
          },
          // {
          //   name: '商铺地图',
          //   url: '/company/edit',
          //   // parent: '/company/list'
          // },
          {
            name: '手机轮转广告',
            url: '/shopManagement/mobilePhoneBy',
          },
          {
            name: '轮转广告',
            url: '/shopManagement/phoneBy',
          },
          {
            name: '图片广告',
            url: '/shopManagement/imageAds',
          },
          {
            name: '弹窗广告',
            url: '/shopManagement/popUpAds',
          },
          {
            name: '商家展示',
            url: '/shopManagement/showMerchants'
          },
          {
            name: '模版购买',
            url: '/shopManagement/templateToBuy',
          },
          {
            name: '友情连接',
            url: '/shopManagement/friendshipConnection',
          }
        ]
      }, {
        id: 'PROVIDER_LIST',
        name: '商铺设置',
        icon: 'el-icon-menu',
        url: '/provider/list',
        menu: true,
        actions: [{
          name: '导航管理',
          url: '/setUpShops/navigationManagement'
        }, {
          name: '基础信息',
          url: '/setUpShops/information'
        }, {
          name: '客服设置',
          url: '/setUpShops/settingService'
        }, {
          name: '短信设置',
          url: '/setUpShops/SMSSettings',
        }, {
          name: '商铺认证',
          url: '/setUpShops/shopCertification'
        }, {
          name: '域名设置',
          url: '/setUpShops/theHttp'
        }]
      }, {
        id: 'PROVIDER_LIST',
        name: '拓展管理',
        icon: 'el-icon-menu',
        url: '/provider/list',
        menu: true,
        actions: [{
          name: '图片管理',
          url: '/developManagement/imageManagement'
        }, {
          name: '淘宝转换',
          url: '/developManagement/taobaoConversion'
        }, {
          name: '托管管理',
          url: '/developManagement/trustManagement'
        },
          // {
          //   name: '微信菜单管理',
          //   url: '/company/edit',
          //   parent: '/company/list'
          // }
        ]
      }
    ]
  },
  // {
  //   id: 'COMPANY',
  //   name: '企业户管理',
  //   icon: 'el-icon-box',
  //   subset: [
  //     {
  //       id: 'PROVIDER_LIST',
  //       name: '企业户列表',
  //       icon: 'el-icon-menu',
  //       url: '/company/list',
  //       menu: true,
  //     }
  //   ]
  // },
  {
    id: 'PRODUCT',
    name: '交易管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PRODUCT_LIST',
        name: '商品管理',
        icon: 'el-icon-menu',
        url: '/product/list',
        menu: true,
        actions: [{
          name: '常规商品管理',
          url: '/commodity/conventionalKnowledge'
        }, {
          name: '知识商品管理',
          url: '/commodity/productsKnowledge'
        }, {
          name: '拼团商品管理',
          url: '/commodity/spellMassGoods'
        }, {
          name: '返利商品管理',
          url: '/commodity/rebateGoods'
        }, {
          name: '秒杀商品管理',
          url: '/commodity/secondsKillGoods'
        }, {
          name: '团购商品管理',
          url: '/commodity/bulkGoods'
        }, {
          name: '拍卖商品管理',
          url: '/commodity/auctionGoods'
        }, {
          name: '分销商品管理',
          url: '/commodity/distributionGoods'
        }, {
          name: '批发商品管理',
          url: '/commodity/wholesaleGoods'
        }, {
          name: '未上架商品',
          url: '/commodity/notGoods'
        }]
      },
      {
        id: 'PRODUCT_LIST',
        name: '分类设置',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '常规商品分类',
          url: '/conventionalProducts/conventionalProducts'
        }]
      },
      // {
      //   id: 'PRODUCT_CATEGORY_LIST',
      //   name: '产品分类列表',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [
      //     {
      //       name: '新增产品分类',
      //       url: '/product/category/add',
      //       parent: '/product/category/list'
      //     },
      //     {
      //       name: '修改产品分类',
      //       url: '/product/category/edit',
      //       parent: '/product/category/list'
      //     }
      //   ]
      // }
    ]
  },
  {
    id: 'INFORMATION',
    name: '用户管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'INFORMATION_LIST',
        name: '杂志管理',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        // actions: [
        //   {
        //     name: '新增资讯',
        //     url: '/information/add',
        //     parent: '/information/list'
        //   },
        //   {
        //     name: '修改资讯',
        //     url: '/information/edit',
        //     parent: '/information/list'
        //   }
        // ]
      },
      // {
      // id: 'INFORMATION_TYPE_LIST',
      // name: '资讯类型列表',
      // icon: 'el-icon-menu',
      // url: '/information/type/list',
      // menu: true,
      // actions: [
      //   {
      //     name: '新增资讯类型',
      //     url: '/information/type/add',
      //     parent: '/information/type/list'
      //   },
      //   {
      //     name: '修改资讯类型',
      //     url: '/information/type/edit',
      //     parent: '/information/type/list'
      //   }
      // ]
      // }
    ]
  },
  {
    id: 'IOT',
    name: '社区管理',
    icon: 'el-icon-s-platform',
    subset: [
      {
        id: 'IOT_REPORT',
        name: '交易管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '知识订单',
            url: '/transactionManagement/magazineManagement'
          },
          {
            name: '客户订单',
            url: '/transactionManagement/customerOrder'
          },
          {
            name: '退货通道',
            url: '/transactionManagement/returnsChannel'
          },
          {
            name: '拼团订单',
            url: '/transactionManagement/spellGroupOrder'
          },
          {
            name: '体现申请',
            url: '/transactionManagement/toApplyFor'
          },
          {
            name: '拼团退货',
            url: '/transactionManagement/spellGroupReturns'
          },
          {
            name: '物流工具',
            url: '/transactionManagement/logisticsTools'
          },
          {
            name: '销售商品咨询',
            url: '/transactionManagement/consultation'
          },
          {
            name: '评价买家',
            url: '/transactionManagement/evaluationOfTheBuyer'
          },
          {
            name: '消保明细',
            url: '/transactionManagement/fromTheDetail'
          },
          // {
          //   name: '信用管理',
          //   url: '/group/edit',
          //   parent: '/group/list'
          // },
          {
            name: '我的返佣订单',
            url: '/transactionManagement/orderManagement'
          }
        ]
      }
      // ,
      // {
      //   id: 'GROUP_LIST',
      //   name: '设备分组列表',
      //   icon: 'el-icon-link',
      //   url: '/group/list',
      //   menu: true,

      // },
      // {
      //   id: 'DEVICE_LIST',
      //   name: '设备列表',
      //   icon: 'el-icon-link',
      //   url: '/device/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增设备',
      //   //     url: '/device/add',
      //   //     parent: '/device/list'
      //   //   },
      //   //   {
      //   //     name: '修改设备',
      //   //     url: '/device/edit',
      //   //     parent: '/device/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'DRIVER_LIST',
      //   name: '驱动列表',
      //   icon: 'el-icon-link',
      //   url: '/driver/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增驱动',
      //   //     url: '/driver/add',
      //   //     parent: '/driver/list'
      //   //   },
      //   //   {
      //   //     name: '修改驱动',
      //   //     url: '/driver/edit',
      //   //     parent: '/driver/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'DRIVER_ATTRIBUTE_LIST',
      //   name: '驱动属性列表',
      //   icon: 'el-icon-link',
      //   url: '/driverAttribute/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增驱动属性',
      //   //     url: '/driverAttribute/add',
      //   //     parent: '/driverAttribute/list'
      //   //   },
      //   //   {
      //   //     name: '修改驱动属性',
      //   //     url: '/driverAttribute/edit',
      //   //     parent: '/driverAttribute/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'DRIVER_INFO_LIST',
      //   name: '驱动配置列表',
      //   icon: 'el-icon-link',
      //   url: '/driverInfo/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增驱动配置',
      //   //     url: '/driverInfo/add',
      //   //     parent: '/driverInfo/list'
      //   //   },
      //   //   {
      //   //     name: '修改驱动配置',
      //   //     url: '/driverInfo/edit',
      //   //     parent: '/driverInfo/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'POINT_ATTRIBUTE_LIST',
      //   name: '位号属性列表',
      //   icon: 'el-icon-link',
      //   url: '/pointAttribute/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增位号属性',
      //   //     url: '/pointAttribute/add',
      //   //     parent: '/pointAttribute/list'
      //   //   },
      //   //   {
      //   //     name: '修改位号属性',
      //   //     url: '/pointAttribute/edit',
      //   //     parent: '/pointAttribute/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'PROFILE_LIST',
      //   name: '模板列表',
      //   icon: 'el-icon-link',
      //   url: '/profile/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增模板',
      //   //     url: '/profile/add',
      //   //     parent: '/profile/list'
      //   //   },
      //   //   {
      //   //     name: '修改模板',
      //   //     url: '/profile/edit',
      //   //     parent: '/profile/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'POINT_LIST',
      //   name: '位号列表',
      //   icon: 'el-icon-link',
      //   url: '/point/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增位号',
      //   //     url: '/point/add',
      //   //     parent: '/point/list'
      //   //   },
      //   //   {
      //   //     name: '修改位号',
      //   //     url: '/point/edit',
      //   //     parent: '/point/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'POINT_INFO_LIST',
      //   name: '位号配置列表',
      //   icon: 'el-icon-link',
      //   url: '/pointInfo/list',
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: '新增位号配置',
      //   //     url: '/pointInfo/add',
      //   //     parent: '/pointInfo/list'
      //   //   },
      //   //   {
      //   //     name: '修改位号配置',
      //   //     url: '/pointInfo/edit',
      //   //     parent: '/pointInfo/list'
      //   //   }
      //   // ]
      // },
    ]
  },
  {
    id: "SYSTEM",
    name: "集市管理",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "营销管理",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "优惠卷管理",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "积分汇专区",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "广告管理",
            url: "/marketingManagement/advertisingManagement"
          },
          {
            name: "自定义区域",
            url: "/marketingManagement/customArea"
          },
          {
            name: "商品排行",
            url: "/marketingManagement/commodityList"
          },
          {
            name: "品牌管理",
            url: "/marketingManagement/brandManagement"
          },
          {
            name: "水印设置",
            url: "/marketingManagement/watermarkIsSet"
          }
        ]
      },
      // {
      //   id: 'ROLE_LIST',
      //   name: "角色列表",
      //   icon: "el-icon-edit",
      //   url: "/role/list",
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: "新增角色",
      //   //     url: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     name: "修改角色",
      //   //     url: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     name: "菜单功能权限",
      //   //     url: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   name: "菜单列表",
      //   icon: "el-icon-edit",
      //   url: "/menu/list",
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: "新增菜单",
      //   //     url: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     name: "修改菜单",
      //   //     url: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }

    ]
  },

  ...LAnav
  // {
  //   id: "SYSTEM",
  //   name: "我的资金",
  //   icon: "el-icon-s-cooperation",
  //   subset: [
  //     {
  //       id: 'ADMIN_LIST',
  //       name: "我的资金",
  //       icon: "el-icon-user",
  //       url: "/admin/list",
  //       menu: true,
  //       actions: [
  //         {
  //           name: "账号概览",
  //           url: "/admin/add",
  //           parent: '/admin/list'
  //         },
  //         {
  //           name: "积分明细",
  //           url: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           name: "资金明细",
  //           url: "/admin/edit",
  //           parent: '/admin/list'
  //         }
  //       ]
  //     },
  //     // {
  //     //   id: 'ROLE_LIST',
  //     //   name: "角色列表",
  //     //   icon: "el-icon-edit",
  //     //   url: "/role/list",
  //     //   menu: true,
  //     //   // actions: [
  //     //   //   {
  //     //   //     name: "新增角色",
  //     //   //     url: "/role/add",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     name: "修改角色",
  //     //   //     url: "/role/edit",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     name: "菜单功能权限",
  //     //   //     url: "/role/menus",
  //     //   //     parent: '/role/list'
  //     //   //   }
  //     //   // ]
  //     // },
  //     // {
  //     //   id: 'MENU_LIST',
  //     //   name: "菜单列表",
  //     //   icon: "el-icon-edit",
  //     //   url: "/menu/list",
  //     //   menu: true,
  //     //   // actions: [
  //     //   //   {
  //     //   //     name: "新增菜单",
  //     //   //     url: "/menu/add",
  //     //   //     parent: '/menu/list'
  //     //   //   },
  //     //   //   {
  //     //   //     name: "修改菜单",
  //     //   //     url: "/menu/edit",
  //     //   //     parent: '/menu/list'
  //     //   //   }
  //     //   // ]
  //     // }

  //   ]
  // }
];

export default navArr