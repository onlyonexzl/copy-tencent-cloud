import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.ROLE_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  add(formData) {
    return request.post(Api.ROLE_ADD_URL, {
      name: formData.name,
      state: formData.state,
      remark: formData.remark
    });
  },
  update(formData) {
    return request.post(Api.ROLE_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      state: formData.state,
      remark: formData.remark
    });
  },
  getById(id) {
    return request.post(Api.ROLE_GETBYID_URL + id);
  },
  getByIdWithMenus(id) {
    return request.post(Api.ROLE_GETBYID_WITH_MENU_URL + id);
  },
  deleteById(id) {
    return request.post(Api.ROLE_DELETE_URL + id);
  },
  updateRoleMenu(id, menus) {
    return request.post(Api.ROLE_UPDATE_MENU_URL, {
      id: id,
      menus: menus
    });
  }
}
