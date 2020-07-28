import Vue from 'vue'
import Router from 'vue-router'
import LARouter from './LARouter.js'

console.log(LARouter[0])
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
    // 后台管理 测试
    {
      path: '/pageHome',
      name: 'pageHome',
      component: (resolve) => require(['@/view/BackgroundManagement/pageHome.vue'], resolve),
      children: [
        ...LARouter,
        // 数据备份
        {
          path: '/DataBackup/dataBackup',
          name: 'dataBackup',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/dataBackup.vue'], resolve),
          meta: ['首页', '数据备份', '数据备份']
        },
        {
          path: '/DataBackup/recoverData',
          name: 'recoverData',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/recoverData.vue'], resolve),
          meta: ['首页', '数据备份', '恢复数据']
        },
        {
          path: '/DataBackup/optimizationAndRepair',
          name: 'optimizationAndRepair',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/optimizationAndRepair.vue'], resolve),
          meta: ['首页', '数据备份', '数据表优化和修复']
        },
        {
          path: '/DataBackup/executeSQL',
          name: 'executeSQL',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/executeSQL.vue'], resolve),
          meta: ['首页', '数据备份', '执行SQL']
        },
        {
          path: '/topicManagement/topicManagement',
          name: 'topicManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/topicManagement/topicManagement.vue'], resolve),
          meta: ['杂志管理', '动态管理', '动态话题管理']
        },
        {
          path: '/topicManagement/categoryDeletion',
          name: 'categoryDeletion',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/topicManagement/categoryDeletion.vue'], resolve),
          meta: ['杂志管理', '动态管理', '动态类目删除']
        },
        {
          path: '/videoManagement/videoManagement',
          name: 'videoManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/videoManagement/videoManagement.vue'], resolve),
          meta: ['杂志管理', '视频管理', '短视频管理']
        },
        {
          path: '/focusOnManagement/followList',
          name: 'followList',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/focusOnManagement/followList.vue'], resolve),
          meta: ['杂志管理', '关注管理', '关注管理']
        },
        {
          path: '/Amanagement/Alist',
          name: 'Alist',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/Amanagement/Alist.vue'], resolve),
          meta: ['杂志管理', '问答管理', '问答列表']
        },
        {
          path: '/Amanagement/commentList',
          name: 'commentList',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/Amanagement/commentList.vue'], resolve),
          meta: ['杂志管理', '问答管理', '评论列表']
        },
        {
          path: '/magazineManagement/magazineManagement',
          name: 'magazineManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/magazineManagement/magazineManagement.vue'], resolve),
          meta: ['杂志管理', '杂志管理', '资讯一级分类']
        },
        {
          path: '/magazineManagement/editMagazineManagement',
          name: 'editMagazineManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/magazineManagement/editMagazineManagement.vue'], resolve),
          // meta: ['杂志管理', '杂志管理', '资讯一级分类']
        },
        {
          path: '/magazineManagement/addMagazineManagement',
          name: 'addMagazineManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/magazineManagement/addMagazineManagement.vue'], resolve),
          // meta: ['杂志管理', '杂志管理', '资讯一级分类']
        }
      ]
    }

  ]
})
