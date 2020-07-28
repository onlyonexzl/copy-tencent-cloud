let LAMenu = [{
  id: "SYSTEM",
  name: "营销管理",
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
  name: "服务管理",
  icon: "el-icon-s-cooperation",
  subset: [
    {
      id: 'IOT_REPORT',
      name: '数据报表',
      icon: 'el-icon-link',
      url: '/homepage',
      menu: true,
    },
    {
      id: 'GROUP_LIST',
      name: '设备分组列表',
      icon: 'el-icon-link',
      url: '/group/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增分组',
      //     url: '/group/add',
      //     parent: '/group/list'
      //   },
      //   {
      //     name: '修改分组',
      //     url: '/group/edit',
      //     parent: '/group/list'
      //   }
      // ]
    },
    {
      id: 'DEVICE_LIST',
      name: '设备列表',
      icon: 'el-icon-link',
      url: '/device/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增设备',
      //     url: '/device/add',
      //     parent: '/device/list'
      //   },
      //   {
      //     name: '修改设备',
      //     url: '/device/edit',
      //     parent: '/device/list'
      //   }
      // ]
    },
    {
      id: 'DRIVER_LIST',
      name: '驱动列表',
      icon: 'el-icon-link',
      url: '/driver/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增驱动',
      //     url: '/driver/add',
      //     parent: '/driver/list'
      //   },
      //   {
      //     name: '修改驱动',
      //     url: '/driver/edit',
      //     parent: '/driver/list'
      //   }
      // ]
    },

    {
      id: 'DRIVER_ATTRIBUTE_LIST',
      name: '驱动属性列表',
      icon: 'el-icon-link',
      url: '/driverAttribute/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增驱动属性',
      //     url: '/driverAttribute/add',
      //     parent: '/driverAttribute/list'
      //   },
      //   {
      //     name: '修改驱动属性',
      //     url: '/driverAttribute/edit',
      //     parent: '/driverAttribute/list'
      //   }
      // ]
    },
    {
      id: 'DRIVER_INFO_LIST',
      name: '驱动配置列表',
      icon: 'el-icon-link',
      url: '/driverInfo/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增驱动配置',
      //     url: '/driverInfo/add',
      //     parent: '/driverInfo/list'
      //   },
      //   {
      //     name: '修改驱动配置',
      //     url: '/driverInfo/edit',
      //     parent: '/driverInfo/list'
      //   }
      // ]
    },

    {
      id: 'POINT_ATTRIBUTE_LIST',
      name: '位号属性列表',
      icon: 'el-icon-link',
      url: '/pointAttribute/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增位号属性',
      //     url: '/pointAttribute/add',
      //     parent: '/pointAttribute/list'
      //   },
      //   {
      //     name: '修改位号属性',
      //     url: '/pointAttribute/edit',
      //     parent: '/pointAttribute/list'
      //   }
      // ]
    },

    {
      id: 'PROFILE_LIST',
      name: '模板列表',
      icon: 'el-icon-link',
      url: '/profile/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增模板',
      //     url: '/profile/add',
      //     parent: '/profile/list'
      //   },
      //   {
      //     name: '修改模板',
      //     url: '/profile/edit',
      //     parent: '/profile/list'
      //   }
      // ]
    },

    {
      id: 'POINT_LIST',
      name: '位号列表',
      icon: 'el-icon-link',
      url: '/point/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增位号',
      //     url: '/point/add',
      //     parent: '/point/list'
      //   },
      //   {
      //     name: '修改位号',
      //     url: '/point/edit',
      //     parent: '/point/list'
      //   }
      // ]
    },

    {
      id: 'POINT_INFO_LIST',
      name: '位号配置列表',
      icon: 'el-icon-link',
      url: '/pointInfo/list',
      menu: true,
      // actions: [
      //   {
      //     name: '新增位号配置',
      //     url: '/pointInfo/add',
      //     parent: '/pointInfo/list'
      //   },
      //   {
      //     name: '修改位号配置',
      //     url: '/pointInfo/edit',
      //     parent: '/pointInfo/list'
      //   }
      // ]
    },
  ]
},
{
  id: "SYSTEM",
  name: "商铺装修",
  icon: "el-icon-s-cooperation",
  subset: [
    {
      id: 'ADMIN_LIST',
      name: "收银台",
      icon: "el-icon-user",
      url: "/checkstand",
      menu: true,
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
  name: "商铺管理",
  icon: "el-icon-s-cooperation",
  subset: [
    {
      id: 'ADMIN_LIST',
      name: "通证",
      icon: "el-icon-user",
      url: "/admin/list",
      menu: true,
      actions: [
        {
          name: "通证管理",
          url: "/throughTheManagement/throughTheManagement"
        },
        {
          name: "通证订单",
          url: "/throughTheManagement/throughDd"
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
  name: "分类设置",
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
  name: "商铺设置",
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
    }
  ]
},
{
  id: "SYSTEM",
  name: "美城通",
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
    }
  ]
},
{
  id: "SYSTEM",
  name: "开放平台",
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
    }
  ]
},
{
  id: "SYSTEM",
  name: "拓展管理",
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
    }
  ]
},
{
  id: "SYSTEM",
  name: "帮助",
  icon: "el-icon-setting",
}]

export default LAMenu