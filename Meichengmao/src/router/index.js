import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: (resolve) =>
        require(['@/view/home/home.vue'], resolve),
      redirect: '/homePage',
      children: [{
        path: '/homePage',
        name: 'homePage',
        component: (resolve) =>
          require(['@/view/homePage/homePage'], resolve),
      }]
    }
  ]
})
