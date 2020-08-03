import LAnav from './LAnav'
console.log(LAnav)
let navArr = [
  {
    id: 'PROVIDER',
    name: '首页',
    icon: 'el-icon-box',
    subset: [{
      id: 'PROVIDER_LIST',
      name: '后台首页',
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
    }, {
      id: 'PROVIDER_LIST',
      name: '数据备份',
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '数据备份',
        url: '/DataBackup/dataBackup'
      },
      {
        name: '恢复数据',
        url: '/DataBackup/recoverData'
      }, {
        name: '数据修复',
        url: '/DataBackup/optimizationAndRepair',
      }, {
        name: '执行SQL',
        url: '/DataBackup/executeSQL',
      }
      ]
    }]
  },
  {
    id: 'PROVIDER',
    name: '杂志管理',
    icon: 'el-icon-box',
    subset: [{
      id: 'PROVIDER_LIST',
      name: '动态管理',  //我的账号
      icon: 'el-icon-menu',
      menu: true,
      actions: [{
        name: '动态话题管理',
        url: '/topicManagement/topicManagement'
      },
      {
        name: '动态类目删除',
        url: '/topicManagement/categoryDeletion',
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '视频管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '短视频管理',
        url: '/videoManagement/videoManagement'
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '关注管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '关注管理',
        url: '/focusOnManagement/followList'
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '问答管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '问答列表',
        url: '/Amanagement/Alist'
      },
      {
        name: '评论列表',
        url: '/Amanagement/commentList'
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '杂志管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '资讯一级分类',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '美食',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '娱乐',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '美妆',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '服饰',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '时尚',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '文化',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '艺术',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '商业',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '酒店',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '旅游',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '亲子',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '健康',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '医疗',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '教育',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '运动',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '家政',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '生鲜',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '农场',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '家居',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '电器',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '装饰',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '房产',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '装饰',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '汽车',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '科技',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '国际',
        url: '/magazineManagement/magazineManagement'
      }]
    }]
  },
  {
    id: 'PROVIDER',
    name: '商品管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PROVIDER_LIST',
        name: '商品信息',
        icon: 'el-icon-menu',
        // url: '/provider/list',
        menu: true,
        actions: [
          {
            name: '常规商品管理',
            url: '/commodityInformation/generalMerchandise',
          },
          {
            name: '知识商品管理',
            url: '/commodityInformation/knowledgeCommodity',
          },
          {
            name: '拼团商品管理',
            url: '/commodityInformation/groupGoods',
          },
          {
            name: '返利商品管理',
            url: '/commodityInformation/rebateGoods',
          },
          {
            name: '秒杀商品管理',
            url: '/commodityInformation/secondKill',
          },
          {
            name: '展示商品管理',
            url: '/commodityInformation/displayProducts',
          },
          {
            name: '团购商品管理',
            url: '/commodityInformation/groupBuying'
          },
          {
            name: '拍卖商品管理',
            url: '/commodityInformation/auctionGoods',
          },
          // {
          //   name: '分销商品管理',
          //   url: '/commodityInformation/auctionGoods',
          // },
          {
            name: '批发商品管理',
            url: '/commodityInformation/wholesaleGoods',
          },
          {
            name: '代销商品管理',
            url: '/commodityInformation/consignmentGoods',
          },
          {
            name: '未上架商品',
            url: '/commodityInformation/notOn',
          }
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
        name: '商铺订单',
        icon: 'el-icon-menu',
        url: '/product/list',
        menu: true,
        actions: [{
          name: '客户订单',
          url: '/shopOrder/customerOrder'
        }, {
          name: '知识订单',
          url: '/shopOrder/knowledgeOrder'
        }, {
          name: '退货通道',
          url: '/shopOrder/returnChannel'
        },
        // , {
        //   name: '拼团订单',
        //   url: '/commodity/rebateGoods'
        // }, 
        {
          name: '提现申请',
          url: '/shopOrder/withdrawalApplication'
        }
          // , {
          //   name: '拼团退货',
          //   url: '/commodity/bulkGoods'
          // }
        ]
      },
      // {
      //   id: 'PRODUCT_LIST',
      //   name: '配送方式',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [{
      //     name: '物流工具',
      //     url: '/conventionalProducts/conventionalProducts'
      //   }]
      // },
      {
        id: 'PRODUCT_LIST',
        name: '商品咨询管理',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '销售商品咨询',
          url: '/commodityConsultation/sellingGoods'
        }, {
          name: '展示商品咨询',
          url: '/commodityConsultation/displayProducts'
        }]
      },
      // {
      //   id: 'PRODUCT_LIST',
      //   name: '评价留言',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [{
      //     name: '评价买家',
      //     url: '/conventionalProducts/conventionalProducts'
      //   }]
      // },
      {
        id: 'PRODUCT_LIST',
        name: '支付方式',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '收款设置',
          url: '/paymentMethod/collectionSettings'
        }]
      }, {
        id: 'PRODUCT_LIST',
        name: '交易明细',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '积分明细',
          url: '/transactionDetails/creditDetails'
        }, {
          name: '资金明细',
          url: '/transactionDetails/capitalDetails'
        }, {
          name: '消保明细',
          url: '/transactionDetails/protectionDetails'
        }]
      },
      //  {
      //   id: 'PRODUCT_LIST',
      //   name: '信用管理',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [{
      //     name: '信用管理',
      //     url: '/conventionalProducts/conventionalProducts'
      //   }]
      // }
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
        name: '用户资料',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        actions: [
          {
            name: '用户列表',
            url: '/userProfile/userList'
          }
        ]
      }, {
        id: 'INFORMATION_LIST',
        name: '等级管理',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        actions: [
          {
            name: '等级列表',
            url: '/userProfile/rankList'
          }
        ]
      }, {
        id: 'INFORMATION_LIST',
        name: '分销设置',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        actions: [
          {
            name: '推荐设置',
            url: '/userProfile/recommendedSettings'
          }
        ]
      },
    ]
  },
  {
    id: 'IOT',
    name: '社区管理',
    icon: 'el-icon-s-platform',
    subset: [
      {
        id: 'IOT_REPORT',
        name: '动态管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '动态话题管理',
            url: '/dynamicManagement/dynamicTopics'
          },
          {
            name: '动态类目删除',
            url: '/dynamicManagement/dynamicCategory'
          }
        ]
      }, {
        id: 'IOT_REPORT',
        name: '圈子管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '圈子管理',
            url: '/circleManagement/circleManagement'
          },
          {
            name: '成员管理',
            url: '/circleManagement/memberManagement'
          },
          {
            name: '帖子管理',
            url: '/circleManagement/postManagement'
          },
          {
            name: '评论管理',
            url: '/circleManagement/comment'
          }
        ]
      }, {
        id: 'IOT_REPORT',
        name: '视频管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '短视频管理',
            url: '/shortVideoMa/shortVideo'
          }
        ]
      }
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
  {
    id: "SYSTEM",
    name: "营销管理",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "云集云仓",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "云集商品",
            url: "/cloudsAndWarehouses/gatheringCommodities"
          },
          {
            name: "云仓商品",
            url: "/cloudsAndWarehouses/warehouseGoods"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "幸运抽奖",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "抽奖活动",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "抽奖结果",
            url: "/luckyDraw/lotteryResults"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "优惠管理",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "优惠券管理",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "积分汇专区",
            url: "/marketingManagement/bonusPointArea"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "广告管理",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "广告管理",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "已展示",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "待申请",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "将到期",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "待审核",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "待展示",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "自定义区域",
            url: "/marketingManagement/bonusPointArea"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "楼层营销",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "专题页面",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "首页楼层",
            url: "/marketingManagement/bonusPointArea"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "品牌信息",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "品牌管理",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "水印设置",
            url: "/marketingManagement/bonusPointArea"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "数据中心",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "商铺排行",
            url: "/marketingManagement/couponManagement"
          },
          {
            name: "消费排行",
            url: "/marketingManagement/bonusPointArea"
          },
          {
            name: "商品排行",
            url: "/marketingManagement/bonusPointArea"
          }
        ]
      },
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