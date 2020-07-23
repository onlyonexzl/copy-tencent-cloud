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
        // 注册页面
        path: '/registeredW',
        name: 'registeredW',
        component: (resolve) => require(['@/view/login/registeredW.vue'], resolve)
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
        // 页面管理
        path: '/shopManagement/shopManagement',
        name: 'shopManagement',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/pageManagement.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '页面管理']
      }, {
        //增加页面
        path: '/shopManagement/addPageManagement',
        name: 'addPageManagement',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/addPageManagement.vue'], resolve),
        // meta: ['商铺管理', '商铺维修', '页面管理']
      }, {
        //手机轮播图
        path: '/shopManagement/mobilePhoneBy',
        name: 'mobilePhoneBy',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/mobilePhoneBy.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '手机轮播广告']
      }, {
        //手机轮播图
        path: '/shopManagement/phoneBy',
        name: 'phoneBy',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/phoneBy.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '轮播广告']
      }, {
        // 图片广告
        path: '/shopManagement/imageAds',
        name: 'imageAds',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/imageAds.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '图片广告']
      }, {
        // 增加图片广告
        path: '/shopManagement/editImageAds',
        name: 'editImageAds',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/editImageAds.vue'], resolve),
        // meta: ['商铺管理', '商铺维修', '轮播广告']
      }, {
        // 友情连接
        path: '/shopManagement/friendshipConnection',
        name: 'friendshipConnection',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/friendshipConnection.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '友情连接']
      }, {
        // 增加友情连接
        path: '/shopManagement/editFriendshipConnection',
        name: 'editFriendshipConnection',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/editFriendshipConnection.vue'], resolve),
        // meta: ['商铺管理', '商铺维修', '轮播广告']
      }, {
        // 购买模版
        path: '/shopManagement/templateToBuy',
        name: 'templateToBuy',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/templateToBuy.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '购买模版']
      }, {
        // 弹窗广告
        path: '/shopManagement/popUpAds',
        name: 'popUpAds',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/popUpAds.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '弹窗广告']
      }, {
        // 商家展示
        path: '/shopManagement/showMerchants',
        name: 'showMerchants',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/showMerchants.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '商家展示']
      },

      //-----------------------------------------------------------------修改资料
      {
        // 收获地址
        path: '/shopManagement/modifyTheData',
        name: 'modifyTheData',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/modifyTheData/modifyTheData.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '收获地址']
      }, {
        // 收获地址
        path: '/shopManagement/addModifyTheData',
        name: 'addModifyTheData',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/modifyTheData/addModifyTheData.vue'], resolve),
        // meta: ['商铺管理', '商铺维修', '收获地址']
      }, {
        // 修改资料
        path: '/shopManagement/shippingAddress',
        name: 'shippingAddress',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/modifyTheData/shippingAddress.vue'], resolve),
        meta: ['商铺管理', '商铺维修', '修改资料']
      },

      //-----------------------------------------------------------------商铺设置
      {
        // 导航管理
        path: '/setUpShops/navigationManagement',
        name: 'navigationManagement',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/navigationManagement.vue'], resolve),
        meta: ['商铺管理', '商铺设置', '导航管理']
      }, {
        // 添加导航管理
        path: '/setUpShops/editNavigationManagement',
        name: 'editNavigationManagement',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/editNavigationManagement.vue'], resolve),
        // meta: ['商铺管理', '商铺设置', '导航管理']
      }, {
        // 基础信息
        path: '/setUpShops/information',
        name: 'information',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/information.vue'], resolve),
        meta: ['商铺管理', '商铺设置', '基础信息']
      }, {
        // 头部样式设置
        path: '/setUpShops/navigationStyleSettings',
        name: 'navigationStyleSettings',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/navigationStyleSettings.vue'], resolve),
        // meta: ['商铺管理', '商铺设置', '基础信息']
      }, {
        // 客服设置
        path: '/setUpShops/settingService',
        name: 'settingService',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/settingService.vue'], resolve),
        meta: ['商铺管理', '商铺设置', '客服设置']
      }, {
        // 域名设置
        path: '/setUpShops/theHttp',
        name: 'theHttp',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/theHttp.vue'], resolve),
        meta: ['商铺管理', '商铺设置', '域名设置']
      }, {
        // 短信设置
        path: '/setUpShops/shopCertification',
        name: 'shopCertification',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/shopCertification.vue'], resolve),
        meta: ['商铺管理', '商铺设置', '短信设置']
      }, {
        // 商铺认证
        path: '/setUpShops/SMSSettings',
        name: 'SMSSettings',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/SMSSettings.vue'], resolve),
        meta: ['商铺管理', '商铺设置', '商铺认证']
      },

      //-----------------------------------------------------------------拓展管理
      {
        // 图片管理
        path: '/developManagement/imageManagement',
        name: 'imageManagement',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/imageManagement.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '图片管理']
      }, {
        // 淘宝转换
        path: '/developManagement/taobaoConversion',
        name: 'taobaoConversion',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/taobaoConversion.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '淘宝导出']
      }, {
        // 淘宝导入
        path: '/developManagement/theImport',
        name: 'theImport',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/theImport.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '淘宝导入']
      }, {
        // 托管管理
        path: '/developManagement/trustManagement',
        name: 'trustManagement',
        component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/trustManagement.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '托管管理']
      },

      // --------------------------------------商品管理
      // 
      {
        // 常规产品管理
        path: '/commodity/conventionalKnowledge',
        name: 'conventionalKnowledge',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/conventionalKnowledge.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '常规商品管理']
      }, {
        // 知识商品管理
        path: '/commodity/productsKnowledge',
        name: 'productsKnowledge',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/productsKnowledge.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '知识商品管理']
      }, {
        // 拼团商品管理
        path: '/commodity/spellMassGoods',
        name: 'spellMassGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/spellMassGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '拼团商品管理']
      }, {
        // 返利商品管理
        path: '/commodity/rebateGoods',
        name: 'rebateGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/rebateGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '返利商品管理']
      }, {
        // 秒杀商品管理
        path: '/commodity/secondsKillGoods',
        name: 'secondsKillGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/secondsKillGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '秒杀商品管理']
      }, {
        // 团购商品管理
        path: '/commodity/bulkGoods',
        name: 'bulkGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/bulkGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '团购商品管理']
      }, {
        // 拍卖商品管理
        path: '/commodity/auctionGoods',
        name: 'auctionGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/auctionGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '拍卖商品管理']
      }, {
        // 分销商品管理
        path: '/commodity/distributionGoods',
        name: 'distributionGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/distributionGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '分销商品管理']
      }, {
        // 批发商品管理
        path: '/commodity/wholesaleGoods',
        name: 'wholesaleGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/wholesaleGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '批发商品管理']
      }, {
        // 未上架商品
        path: '/commodity/notGoods',
        name: 'notGoods',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/notGoods.vue'], resolve),
        meta: ['商铺管理', '拓展管理', '未上架商品']
      },

      {
        // 未上架商品
        path: '/conventionalProducts/conventionalProducts',
        name: 'conventionalProducts',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/conventionalProducts/conventionalProducts.vue'], resolve),
        meta: ['商铺管理', '分类设置', '常规商品分类']
      }, {
        // 编辑未上架商品
        path: '/conventionalProducts/editConventional',
        name: 'editConventional',
        component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/conventionalProducts/editConventional.vue'], resolve),
        // meta: ['商铺管理', '分类设置', '常规商品分类']
      }]

    },
  ]
})
