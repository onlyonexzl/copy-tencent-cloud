let navArr = [
  {
    id: 'PROVIDER',
    name: '服务商管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PROVIDER_LIST',
        name: '服务商列表',
        icon: 'el-icon-menu',
        url: '/provider/list',
        menu: true,
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
  //       actions: [
  //         {
  //           name: '新增企业户',
  //           url: '/company/add',
  //           parent: '/company/list'
  //         },
  //         {
  //           name: '修改企业户',
  //           url: '/company/edit',
  //           parent: '/company/list'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 'PRODUCT',
    name: '商品管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PRODUCT_LIST',
        name: '产品列表',
        icon: 'el-icon-menu',
        url: '/product/list',
        menu: true
      },
      {
        id: 'PRODUCT_LIST',
        name: '产品分类列表',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true
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
    name: '资讯管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'INFORMATION_LIST',
        name: '资讯列表',
        icon: 'el-icon-menu',
        url: '/information/list',
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
      {
        id: 'INFORMATION_TYPE_LIST',
        name: '资讯类型列表',
        icon: 'el-icon-menu',
        url: '/information/type/list',
        menu: true,
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
      }
    ]
  },
  {
    id: 'IOT',
    name: '物联网管理',
    icon: 'el-icon-s-platform',
    subset: [
      {
        id: 'IOT_REPORT',
        name: '数据报表',
        icon: 'el-icon-link',
        url: '/report/main',
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
    name: "系统管理",
    icon: "el-icon-setting",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "管理员列表",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        // actions: [
        //   {
        //     name: "新增账号",
        //     url: "/admin/add",
        //     parent: '/admin/list'
        //   },
        //   {
        //     name: "修改账号",
        //     url: "/admin/edit",
        //     parent: '/admin/list'
        //   }
        // ]
      },
      {
        id: 'ROLE_LIST',
        name: "角色列表",
        icon: "el-icon-edit",
        url: "/role/list",
        menu: true,
        // actions: [
        //   {
        //     name: "新增角色",
        //     url: "/role/add",
        //     parent: '/role/list'
        //   },
        //   {
        //     name: "修改角色",
        //     url: "/role/edit",
        //     parent: '/role/list'
        //   },
        //   {
        //     name: "菜单功能权限",
        //     url: "/role/menus",
        //     parent: '/role/list'
        //   }
        // ]
      },
      {
        id: 'MENU_LIST',
        name: "菜单列表",
        icon: "el-icon-edit",
        url: "/menu/list",
        menu: true,
        // actions: [
        //   {
        //     name: "新增菜单",
        //     url: "/menu/add",
        //     parent: '/menu/list'
        //   },
        //   {
        //     name: "修改菜单",
        //     url: "/menu/edit",
        //     parent: '/menu/list'
        //   }
        // ]
      }

    ]
  }
];

export default navArr