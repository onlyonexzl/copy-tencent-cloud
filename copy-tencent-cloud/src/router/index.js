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
      }]
    },

  ]
})
