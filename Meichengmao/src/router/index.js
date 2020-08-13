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
      redirect: '/homePage',
      children: [{
        path: '/homePage',
        name: 'homePage',
        component: (resolve) =>
          require(['@/view/homePage/homePage'], resolve),
      }, {
        path: '/shop',
        name: 'shop',
        component: (resolve) =>
          require(['@/view/shop/shop'], resolve),
      }, {
        path: '/question',
        name: 'question',
        component: (resolve) =>
          require(['@/view/question/question'], resolve),
      }, {
        path: '/share',
        name: 'share',
        component: (resolve) =>
          require(['@/view/share/share'], resolve),
      }, {
        path: '/share/shareDetails',
        name: 'shareDetails',
        component: (resolve) =>
          require(['@/view/share/shareDetails'], resolve),
      }, {
        path: '/specialOffer',
        name: 'specialOffer',
        component: (resolve) =>
          require(['@/view/specialOffer/specialOffer'], resolve),
      }, {
        path: '/auction',
        name: 'auction',
        component: (resolve) =>
          require(['@/view/auction/auction'], resolve),
      }, {
        path: '/market',
        name: 'market',
        component: (resolve) =>
          require(['@/view/market/market'], resolve),
      }, {
        path: '/groupBuying',
        name: 'groupBuying',
        component: (resolve) =>
          require(['@/view/groupBuying/groupBuying'], resolve),
      }, {
        path: '/service',
        name: 'service',
        component: (resolve) =>
          require(['@/view/service/service'], resolve),
      }, {
        path: '/friends',
        name: 'friends',
        component: (resolve) =>
          require(['@/view/friends/friends'], resolve),
      }]
    }
  ]
})
