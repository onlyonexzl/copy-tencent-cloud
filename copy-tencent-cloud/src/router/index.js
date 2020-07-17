import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) =>
        require(['@/view/home/home.vue'], resolve),
      redirect: '/home/product',
      children: [{
        path: '/home/product',
        name: 'product',
        component: (resolve) =>
          require(['@/view/product/product.vue'], resolve),
      }, {
        path: '/product',
        name: 'product',
        component: (resolve) =>
          require(['@/view/productPage/productPage.vue'], resolve),
      }, {
        path: '/solution',
        name: 'solution',
        component: (resolve) =>
          require(['@/view/solution/solution.vue'], resolve),
      }, {
        path: '/price',
        name: 'price',
        component: (resolve) => require(['@/view/price/price.vue'], resolve)
      }, {
        // 注册页面
        path: '/registered',
        name: 'registered',
        component: (resolve) => require(['@/view/login/registered.vue'], resolve)
      }, {
        // 注册页面
        path: '/registeredQ',
        name: 'registeredQ',
        component: (resolve) => require(['@/view/login/registeredQ.vue'], resolve)
      }, {
        // 注册页面
        path: '/registeredF',
        name: 'registeredF',
        component: (resolve) => require(['@/view/login/registeredF.vue'], resolve)
      }, {
        path: '/login',
        name: 'login',
        component: (resolve) => require(['@/view/login/login.vue'], resolve)
      }]
    },
    {
      path: '/marketHome',
      name: 'marketHome',
      component: (resolve) => require(['@/view/market/marketHome.vue'], resolve),
      children: [{
        path: '/marketHome/viewPage',
        name: 'viewPath',
        component: (resolve) => require(['@/view/market/viewPage.vue'], resolve)
      }, {
        path: '/marketHome/products',
        name: 'products',
        component: (resolve) => require(['@/view/market/products/products.vue'], resolve)
      }, {
        path: '/marketHome/details',
        name: 'details',
        component: (resolve) => require(['@/view/market/products/details.vue'], resolve)
      }]
    },
    // 后台管理
    {
      path: '/pageHome',
      name: 'pageHome',
      component: (resolve) => require(['@/view/BackgroundManagement/pageHome.vue'], resolve),
      children: [{
        path: '/homePage',
        name: 'homepage',
        component: (resolve) => require(['@/view/BackgroundManagement/homePage/homePage.vue'], resolve),
        // meta: ['心理管理', '心理健康指导', '详情']
      }, {
        // 服务商管理
        path: '/provider/list',
        name: 'provider',
        component: (resolve) => require(['@/view/BackgroundManagement/provider/list.vue'], resolve),
        meta: ['服务商管理', '服务商列表']
      },
      {
        path: '/provider/add',
        name: 'provider_add',
        component: (resolve) => require(['@/view/BackgroundManagement/provider/add.vue'], resolve)
      }, {
        // 服务商管理
        path: '/product/list',
        name: 'provider',
        component: (resolve) => require(['@/view/BackgroundManagement/product/list.vue'], resolve),
        meta: ['商品管理', '产品列表']
      },
      {
        path: '/product/category/list',
        name: 'provider_add',
        meta: ['商品管理', '产品分类列表'],
        component: (resolve) => require(['@/view/BackgroundManagement/product/category/list.vue'], resolve)
      },
      {
        path: '/product/category/edit',
        name: 'provider_add',
        component: (resolve) => require(['@/view/BackgroundManagement/product/category/edit.vue'], resolve)
      }, {
        // 资讯管理
        path: '/information/list',
        name: 'information',
        component: (resolve) => require(['@/view/BackgroundManagement/information/list.vue'], resolve),
        meta: ['资讯管理', '资讯列表']
      }, {
        path: '/information/edit',
        name: 'information',
        meta: ['商品管理', '产品分类列表'],
        component: (resolve) => require(['@/view/BackgroundManagement/information/edit.vue'], resolve)
      },
      {
        path: '/information/type/list',
        name: 'information',
        meta: ['资讯管理', '资讯类型列表'],
        component: (resolve) => require(['@/view/BackgroundManagement/information/type/list.vue'], resolve)
      }, {
        path: '/information/type/edit',
        name: 'information',
        component: (resolve) => require(['@/view/BackgroundManagement/information/type/edit.vue'], resolve)
      }, {
        // 地图
        path: '/report/main',
        name: 'report',
        component: (resolve) => require(['@/view/BackgroundManagement/report/main.vue'], resolve)
      }, {
        // 设备分组
        path: '/group/list',
        name: 'group',
        component: (resolve) => require(['@/view/BackgroundManagement/group/list.vue'], resolve),
        meta: ['物联网管理', '设备分组列表']
      }, {
        // 设备分组编辑
        path: '/group/edit',
        name: 'group',
        component: (resolve) => require(['@/view/BackgroundManagement/group/edit.vue'], resolve),
        meta: ['物联网管理', '设备分组列表']
      }, {
        //  设备列表
        path: '/device/list',
        name: 'device',
        component: (resolve) => require(['@/view/BackgroundManagement/device/list.vue'], resolve),
        meta: ['物联网管理', '设备分组列表']
      }, {
        //设备列表binaji
        path: '/device/edit',
        name: 'device',
        component: (resolve) => require(['@/view/BackgroundManagement/device/edit.vue'], resolve),
      }, {
        //  驱动列表
        path: '/driver/list',
        name: 'driver',
        component: (resolve) => require(['@/view/BackgroundManagement/driver/list.vue'], resolve),
        meta: ['物联网管理', '驱动列表']
      }, {
        //驱动列表编辑
        path: '/driver/edit',
        name: 'driver',
        component: (resolve) => require(['@/view/BackgroundManagement/driver/edit.vue'], resolve),
      }, {
        //  驱动属性列表
        path: '/driverAttribute/list',
        name: 'driverAttribute',
        component: (resolve) => require(['@/view/BackgroundManagement/driverAttribute/list.vue'], resolve),
        meta: ['物联网管理', '驱动属性列表']
      }, {
        //驱动属性列表编辑
        path: '/driverAttribute/edit',
        name: 'driverAttribute',
        component: (resolve) => require(['@/view/BackgroundManagement/driverAttribute/edit.vue'], resolve),
      }, {
        //  驱动配置列表
        path: '/driverInfo/list',
        name: 'driverInfo',
        component: (resolve) => require(['@/view/BackgroundManagement/driverInfo/list.vue'], resolve),
        meta: ['物联网管理', '驱动配置列表']
      }, {
        //驱动配置列表编辑
        path: '/driverInfo/edit',
        name: 'driverInfo',
        component: (resolve) => require(['@/view/BackgroundManagement/driverInfo/edit.vue'], resolve),
      }, {
        //  位号属性列表
        path: '/pointAttribute/list',
        name: 'pointAttribute',
        component: (resolve) => require(['@/view/BackgroundManagement/pointAttribute/list.vue'], resolve),
        meta: ['物联网管理', '位号属性列表']
      }, {
        //位号属性列表编辑
        path: '/pointAttribute/edit',
        name: 'pointAttribute',
        component: (resolve) => require(['@/view/BackgroundManagement/pointAttribute/edit.vue'], resolve),
      }, {
        //  模板列表
        path: '/profile/list',
        name: 'profile',
        component: (resolve) => require(['@/view/BackgroundManagement/profile/list.vue'], resolve),
        meta: ['物联网管理', '模板列表']
      }, {
        //模板列表编辑
        path: '/profile/edit',
        name: 'profile',
        component: (resolve) => require(['@/view/BackgroundManagement/profile/edit.vue'], resolve),
      }, {
        //  位号列表
        path: '/point/list',
        name: 'point',
        component: (resolve) => require(['@/view/BackgroundManagement/point/list.vue'], resolve),
        meta: ['物联网管理', '位号列表']
      }, {
        //位号列表编辑
        path: '/point/edit',
        name: 'point',
        component: (resolve) => require(['@/view/BackgroundManagement/point/edit.vue'], resolve),
      }, {
        //  位号配置列表
        path: '/pointInfo/list',
        name: 'pointInfo',
        component: (resolve) => require(['@/view/BackgroundManagement/pointInfo/list.vue'], resolve),
        meta: ['物联网管理', '位号配置列表']
      }, {
        //位号配置列表编辑
        path: '/pointInfo/edit',
        name: 'pointInfo',
        component: (resolve) => require(['@/view/BackgroundManagement/pointInfo/edit.vue'], resolve),
      }, {

        //  管理员列表
        path: '/admin/list',
        name: 'admin',
        component: (resolve) => require(['@/view/BackgroundManagement/admin/list.vue'], resolve),
        meta: ['系统管理', '管理员列表']
      }, {
        //管理员列表编辑
        path: '/admin/edit',
        name: 'admin',
        component: (resolve) => require(['@/view/BackgroundManagement/admin/edit.vue'], resolve),
      }, {
        //  角色列表
        path: '/role/list',
        name: 'role',
        component: (resolve) => require(['@/view/BackgroundManagement/role/list.vue'], resolve),
        meta: ['系统管理', '角色列表']
      }, {
        //角色列表编辑
        path: '/role/edit',
        name: 'role',
        component: (resolve) => require(['@/view/BackgroundManagement/role/edit.vue'], resolve),
      }, {
        //授权角色
        path: '/role/menus',
        name: 'role',
        component: (resolve) => require(['@/view/BackgroundManagement/role/menus.vue'], resolve),
      }, {
        //角色列表编辑
        path: '/role/edit',
        name: 'role',
        component: (resolve) => require(['@/view/BackgroundManagement/role/edit.vue'], resolve),
      }, {
        //授权角色
        path: '/role/menus',
        name: 'role',
        component: (resolve) => require(['@/view/BackgroundManagement/role/menus.vue'], resolve),
      }, {
        // 菜单列表
        path: '/menu/edit',
        name: 'menu',
        component: (resolve) => require(['@/view/BackgroundManagement/menu/edit.vue'], resolve),
      }, {
        //菜单列表
        path: '/menu/list',
        name: 'menu',
        component: (resolve) => require(['@/view/BackgroundManagement/menu/list.vue'], resolve),
        meta: ['系统管理', '菜单列表']
      }]

    },

  ]
})
