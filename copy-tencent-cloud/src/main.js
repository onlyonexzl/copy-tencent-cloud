// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Loading from './components/loading.js'
import api from './request/api/index'
import loading from './components/loading.js';

// 挂租公共组建
Vue.use(Loading)

// 挂在element
Vue.use(ElementUI);

//axios
Vue.prototype.$api = api.article

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
