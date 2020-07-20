import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.ADMIN_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  add(formData) {
    return request.post(Api.ADMIN_ADD_URL, {
      loginId: formData.loginId,
      loginPwd: formData.loginPwd,
      username: formData.username,
      phone: formData.phone,
      state: formData.state
    });
  },
  update(formData) {
    return request.post(Api.ADMIN_UPDATE_URL, {
      id: formData.id,
      loginId: formData.loginId,
      loginPwd: formData.loginPwd,
      username: formData.username,
      phone: formData.phone,
      state: formData.state
    });
  },
  getById(id) {
    return request.post(Api.ADMIN_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.ADMIN_DELETE_URL + id);
  }
}
