import request from '../utils/request'
import Api from './api'

export default {
  getSmsCode(phone){
    console.info(phone);
    return request.post(Api.SMS_CODE_URL,{phone:phone});
  },
  register(user){
    return request.post(Api.AUTH_REGISTER_URL,{
      phone:user.phone,
      password:user.password,
      code:user.code,
    });
  },
	login(user) {
		return request.post(Api.AUTH_LOGIN_URL, {
			username: user.username,
			password: user.password
		});
	},
	getUserInfo() {
		return request.post(Api.USER_INFO_URL);
	},
	updatePwd(user) {
        return request.post(Api.AUTH_UPDATEPWD_URL, user);
    }
}
