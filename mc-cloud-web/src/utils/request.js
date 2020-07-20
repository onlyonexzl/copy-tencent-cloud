// import axios from 'axios'
import store from '@/store'
import Qs from 'qs'

const service = axios.create({
  timeout: 30000, // request timeout
  transformRequest: [function (data) {
    return Qs.stringify(data);
  }]
});

// request interceptor
service.interceptors.request.use(config => {
  if (store.getters.isLogin) {
    config.headers['Token'] = store.getters.token;
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  return config
}, error => {
  Promise.reject(error)
});

export default service;
