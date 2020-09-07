import axios from '../http'

const article = {
  //注册账号
  getMusicList (params) {
    return axios.post('/common/register', {
      ...params
    })
  },
  //注册账号验证码
  getPthomeCode (params) {
    return axios.post('/common/get_registerverify_code', {
      ...params
    })
  },
  // 手机号登陆
  POST_PHLOGIN (params) {
    return axios.post('/common/phlogin', {
      ...params
    })
  },
  //手机号登陆验证码
  POST_PHCODE (params) {
    return axios.post('/common/get_loginverify_code', {
      ...params
    })
  },
  //密码登陆
  POST_PASLOGIN (params) {
    return axios.post('/common/login', {
      ...params
    })
  },
  //忘记密码发送短信
  POST_FYCODE (params) {
    return axios.post('/common/get_lossverify_code', {
      ...params
    })
  },
  //更改密码
  POST_LOSTPASSWD (params) {
    return axios.post('/common/lostpasswd', {
      ...params
    })
  },
  //获取轮播图
  POST_BANNER () {
    return axios.post('/index/app_floor_banner')
  }
}

export default article
