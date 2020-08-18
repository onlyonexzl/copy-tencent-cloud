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
        children: [{
          path: '/shop/shopContent',
          name: 'shop',
          component: (resolve) =>
            require(['@/view/shop/shopContent'], resolve),
        }, {
          path: '/shop/shopDetail',
          name: 'shopDetail',
          component: (resolve) =>
            require(['@/view/shop/shopDetail'], resolve),
        }]
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
      }, {
        path: '/video',
        name: 'video',
        component: (resolve) =>
          require(['@/view/video/video'], resolve),
      }, {
        path: '/community',
        name: 'community',
        component: (resolve) =>
          require(['@/view/community/community'], resolve),
      }, {
        path: '/login',
        name: 'login',
        component: (resolve) =>
          require(['@/view/login/login'], resolve),
      }, {
        path: '/password',
        name: 'password',
        component: (resolve) =>
          require(['@/view/login/password'], resolve),
      }, {
        path: '/registered',
        name: 'registered',
        component: (resolve) =>
          require(['@/view/login/registered'], resolve),
      }, {
        path: '/management',
        name: 'management',
        component: (resolve) =>
          require(['@/view/management/management'], resolve),
        children: [{
          path: '/myShopping/myOrder',
          name: 'myOrder',
          component: (resolve) =>
            require(['@/view/management/myShopping/myOrder'], resolve),
          meta: ['我的购物', '我的购物', '我的订单']
        }, {
          path: '/myShopping/knowledgeOrder',
          name: 'knowledgeOrder',
          component: (resolve) =>
            require(['@/view/management/myShopping/knowledgeOrder'], resolve),
          meta: ['我的购物', '我的购物', '我的知识订单']
        }, {
          path: '/myShopping/doubleOrder',
          name: 'doubleOrder',
          component: (resolve) =>
            require(['@/view/management/myShopping/doubleOrder'], resolve),
          meta: ['我的购物', '我的购物', '我的拼团订单']
        }, {
          path: '/myShopping/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myShopping/returnChannel'], resolve),
          meta: ['我的购物', '我的购物', '退货通道']
        }, {
          path: '/myShopping/myAuction',
          name: 'myAuction',
          component: (resolve) =>
            require(['@/view/management/myShopping/myAuction'], resolve),
          meta: ['我的购物', '我的购物', '我的竞拍']
        }, {
          path: '/myShopping/luckyDraw',
          name: 'luckyDraw',
          component: (resolve) =>
            require(['@/view/management/myShopping/luckyDraw'], resolve),
          meta: ['我的购物', '我的购物', '我的幸运抽奖']
        }, {
          path: '/myShopping/coupon',
          name: 'coupon',
          component: (resolve) =>
            require(['@/view/management/myShopping/coupon'], resolve),
          meta: ['我的购物', '我的购物', '我的优惠卷']
        }, {
          path: '/myShopping/credit',
          name: 'credit',
          component: (resolve) =>
            require(['@/view/management/myShopping/credit'], resolve),
          meta: ['我的购物', '我的购物', '信用管理']
        }, {
          path: '/myShopping/evaluate',
          name: 'evaluate',
          component: (resolve) =>
            require(['@/view/management/myShopping/evaluate'], resolve),
          meta: ['我的购物', '我的购物', '评价商家']
        }]
      }]
    }
  ]
})
