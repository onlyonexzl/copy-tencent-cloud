import Vue from 'vue'
// import VueRouter from 'vue-router'
import { getMenuRouter } from './nav'
import store from '../store'

// Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/view/index'),
      meta: {
        keepAlive: true,
        auth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/view/Login'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('@/view/Register'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/BaseInfo',
      name: 'BaseInfo',
      component: () => import('@/view/register/baseInfo'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/BaseInfo2',
      name: 'BaseInfo',
      component: () => import('@/view/register/baseInfo2'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/view/error/404'),
      meta: {
        keepAlive: false
      }
    }
  ]
});

let isInitMenus = false;
router.beforeEach((to, from, next) => {
  //未登陆用户跳转到登陆页
  if (store.getters.isLogin) {
    //如果已登录，则判断权限是否初始化，为初始化则初始化一次
    if (!isInitMenus) {
      isInitMenus = true;
      console.log("初始化菜单数据", store.getters);
      router.addRoutes(getMenuRouter());
      next({...to, replace: true});
    } else {
      //已登录且已初始化则直接跳转，如果无权限则会打开空白页面
      next();
    }
  } else {
    //未登陆，判断to要不要登陆，如果需要则跳转到登陆页面
    if (to.meta.auth) {
      // 跳转，并携带重定向地址
      next({
        path: '/Login',
        query: {
          redirect: to.path
        }
      });
    } else {
      next();
    }
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location);
};

export default router;
