// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Distpicker from 'v-distpicker'
// import ElementUI from 'element-ui'
// import axios from 'axios'
// import echarts from 'echarts'
// import '../static/css/common.css'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/index.js'
// import '../static/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
// Vue.use(ElementUI);
Vue.component('v-distpicker', Distpicker)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
