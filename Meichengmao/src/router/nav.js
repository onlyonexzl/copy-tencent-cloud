let navArr = [
  {
    id: 'PROVIDER',
    name: '我的购物',
    icon: 'el-icon-box',
    // 1、账号管理  2、资金管理  3、收货地址  4、短消息
    subset: [{
      id: 'PROVIDER_LIST',
      name: '我的购物',  //我的账号
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '我的订单',
        url: '/myShopping/myOrder'
      },
      {
        name: '我的知识订单',
        url: '/myShopping/knowledgeOrder',
      }, {
        name: '我的拼团订单',
        url: '/myShopping/doubleOrder',
      }, {
        name: '购物车',
        // url: '/provider/list',
      }, {
        name: '退货通道',
        url: '/myShopping/returnChannel',
      }, {
        name: '我的竞拍',
        url: '/myShopping/myAuction',
      }, {
        name: '我的幸运抽奖',
        url: '/myShopping/luckyDraw',
      }, {
        name: '我的优惠券',
        url: '/myShopping/coupon',
      }, {
        name: '评价商家',
        url: '/myShopping/evaluate',
      }, {
        name: '信用管理',
        url: '/myShopping/credit',
      }
        // {
        //   name: '短消息',
        //   url: '/company/edit',
        //   parent: '/company/list'
        // }
      ]
    }]
  },
  {
    id: 'PROVIDER',
    name: '我的内容',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PROVIDER_LIST',
        name: '美文管理',
        icon: 'el-icon-menu',
        // url: '/provider/list',
        menu: true,
        actions: [
          {
            name: '文章管理',
            url: '/bellesLettres/article',
            // parent: '/company/list'
          },
          // {
          //   name: '商铺地图',
          //   url: '/company/edit',
          //   // parent: '/company/list'
          // },
          {
            name: '发布文章',
            url: '/bellesLettres/release',
          }
        ]
      }, {
        id: 'PROVIDER_LIST',
        name: '社区管理',
        icon: 'el-icon-menu',
        url: '/provider/list',
        menu: true,
        actions: [{
          name: '我的社区',
          url: '/President/community'
        }, {
          name: '成员管理',
          url: '/errorMessage'
        }, {
          name: '话题管理',
          url: '/errorMessage',
        }, {
          name: '评论管理',
          url: '/errorMessage'
        }, {
          name: '我加入的社区',
          url: '/participateIn/joinTheCommunity'
        }, {
          name: '我的好友',
          url: '/participateIn/myFriend'
        }, {
          name: '我发表的话题',
          url: '/participateIn/conversation'
        }, {
          name: '我发表的评论',
          url: '/participateIn/myComment'
        },
        // {
        //   name: '我的参与',
        //   url: '/setUpShops/theHttp'
        // }, 
        {
          name: '时光管理',
          url: '/participateIn/share'
        }]
      }, {
        id: 'PROVIDER_LIST',
        name: '问答管理',
        icon: 'el-icon-menu',
        url: '/provider/list',
        menu: true,
        actions: [{
          name: '问答列表',
          url: '/ask/askList'
        }, {
          name: '评论列表',
          url: '/ask/commentList'
        }
          // {
          //   name: '微信菜单管理',
          //   url: '/company/edit',
          //   parent: '/company/list'
          // }
        ]
      }, {
        id: 'PROVIDER_LIST',
        name: '关注管理',
        icon: 'el-icon-menu',
        url: '/provider/list',
        menu: true,
        actions: [{
          name: '关注列表',
          url: '/follow/followList'
        }
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
    name: '我的社交',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PRODUCT_LIST',
        name: '我的社交',
        icon: 'el-icon-menu',
        url: '/product/list',
        menu: true,
        actions: [{
          name: '供应信息',
          url: '/mySocialLife/information'
        }, {
          name: '求购信息',
          url: '/mySocialLife/wantToBuy'
        }, {
          name: '供应信息_vip',
          url: '/mySocialLife/informationVIP'
        }, {
          name: '求购信息_vip',
          url: '/mySocialLife/wantToBuyVIP'
        }, {
          name: '我给别人的留言',
          url: '/mySocialLife/leaveAmessage'
        }, {
          name: '别人给我的留言',
          url: '/mySocialLife/myMessage'
        }]
      }
    ]
  },
  {
    id: 'IOT',
    name: '我的智云',
    icon: 'el-icon-s-platform',
    subset: [
      {
        id: 'IOT_REPORT',
        name: '我的美城营销',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/myZhiyun/information'
          }, {
            name: '求购信息',
            url: '/myZhiyun/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/myZhiyun/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/myZhiyun/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/myZhiyun/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/myZhiyun/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/myZhiyun/orderList'
          },
          {
            name: '退货通道',
            url: '/myZhiyun/returnChannel'
          }
        ]
      },
      {
        id: 'IOT_REPORT',
        name: '我的美城智造',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/manufacturing/information'
          }, {
            name: '求购信息',
            url: '/manufacturing/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/manufacturing/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/manufacturing/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/manufacturing/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/manufacturing/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/manufacturing/orderList'
          },
          {
            name: '退货通道',
            url: '/manufacturing/returnChannel'
          }
        ]
      },
      {
        id: 'IOT_REPORT',
        name: '我的美城管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/meichengManagement/information'
          }, {
            name: '求购信息',
            url: '/meichengManagement/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/meichengManagement/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/meichengManagement/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/meichengManagement/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/meichengManagement/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/meichengManagement/orderList'
          },
          {
            name: '退货通道',
            url: '/meichengManagement/returnChannel'
          }
        ]
      },
      {
        id: 'IOT_REPORT',
        name: '我的美城咨询',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/consulting/information'
          }, {
            name: '求购信息',
            url: '/consulting/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/consulting/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/consulting/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/consulting/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/consulting/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/consulting/orderList'
          },
          {
            name: '退货通道',
            url: '/consulting/returnChannel'
          }
        ]
      },
      {
        id: 'IOT_REPORT',
        name: '我的美城创新',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/innovation/information'
          }, {
            name: '求购信息',
            url: '/innovation/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/innovation/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/innovation/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/innovation/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/innovation/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/innovation/orderList'
          },
          {
            name: '退货通道',
            url: '/innovation/returnChannel'
          }
        ]
      },
      {
        id: 'IOT_REPORT',
        name: '我的美城服务',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/meichengService/information'
          }, {
            name: '求购信息',
            url: '/meichengService/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/meichengService/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/meichengService/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/meichengService/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/meichengService/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/meichengService/orderList'
          },
          {
            name: '退货通道',
            url: '/meichengService/returnChannel'
          }
        ]
      },
      {
        id: 'IOT_REPORT',
        name: '我的美城创投',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '供应信息',
            url: '/ventureCapital/information'
          }, {
            name: '求购信息',
            url: '/ventureCapital/wantToBuy'
          }, {
            name: '供应信息_vip',
            url: '/ventureCapital/informationVIP'
          }, {
            name: '求购信息_vip',
            url: '/ventureCapital/wantToBuyVIP'
          }, {
            name: '我给别人的留言',
            url: '/ventureCapital/leaveAmessage'
          }, {
            name: '别人给我的留言',
            url: '/ventureCapital/myMessage'
          },
          {
            name: '供应信息订单列表',
            url: '/ventureCapital/orderList'
          },
          {
            name: '退货通道',
            url: '/ventureCapital/returnChannel'
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "我的收藏",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "我的收藏",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "我的收藏",
            url: "/myCollection"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "我的资金",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'IOT_REPORT',
        name: '我的资金',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '帐户概览',
            url: '/group/add',
            parent: '/group/list'
          },
          {
            name: '积分明细',
            url: '/group/edit',
            parent: '/group/list'
          },
          {
            name: '资金明细',
            url: '/group/edit',
            parent: '/group/list'
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "我的账号",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "我的账号",
        icon: "el-icon-user",
        url: "/checkstand",
        menu: true,
        actions: [
          {
            name: '收货地址',
            url: '/group/add',
            parent: '/group/list'
          },
          {
            name: '修改资料',
            url: '/group/edit',
            parent: '/group/list'
          },
          {
            name: '短消息',
            url: '/group/edit',
            parent: '/group/list'
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "我的推广",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "我的推广",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "我要推广",
            url: "/throughTheManagement/throughTheManagement"
          },
          {
            name: "我的推广会员",
            url: "/throughTheManagement/throughDd"
          },
          {
            name: "我的推广明细",
            url: "/throughTheManagement/throughDd"
          },
          {
            name: "商品库列表",
            url: "/throughTheManagement/throughDd"
          },
          {
            name: "我的推广商品",
            url: "/throughTheManagement/throughDd"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "我是会员",
    icon: "el-icon-setting",
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
            url: "/admin/add",
            parent: '/admin/list'
          },
          {
            name: "积分汇专区",
            url: "/admin/edit",
            parent: '/admin/list'
          },
          {
            name: "广告管理",
            url: "/admin/edit",
            parent: '/admin/list'
          },
          {
            name: "自定义区域",
            url: "/admin/edit",
            parent: '/admin/list'
          },
          {
            name: "商品排行",
            url: "/admin/edit",
            parent: '/admin/list'
          },
          {
            name: "品牌管理",
            url: "/admin/edit",
            parent: '/admin/list'
          },
          {
            name: "水印设置",
            url: "/admin/edit",
            parent: '/admin/list'
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
    name: "我的通证",
    icon: "el-icon-setting",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "我的通证",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "我的通证",
            url: "/admin/add",
            parent: '/admin/list'
          },
          {
            name: "通证订单",
            url: "/admin/edit",
            parent: '/admin/list'
          }
        ]
      }
    ]
  },

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