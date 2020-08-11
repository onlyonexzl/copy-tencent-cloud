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
        name: 'share',
        component: (resolve) =>
          require(['@/view/share/shareDetails'], resolve),
      }]
    }
  ]
})
