import request from '../utils/request'
import Api from './api'

export default {
  queryTreeData() {
    return request.post(Api.MENU_TREEDATA_URL)
  },
  add(formData) {
    return request.post(Api.MENU_ADD_URL, {
      codeNo: formData.codeNo,
      name: formData.name,
      parentId: formData.parentId,
      state: formData.state,
      remark: formData.remark
    });
  },
  update(formData) {
    return request.post(Api.MENU_UPDATE_URL, {
      id: formData.id,
      codeNo: formData.codeNo,
      name: formData.name,
      parentId: formData.parentId,
      state: formData.state,
      remark: formData.remark
    });
  },
  getById(id) {
    return request.post(Api.MENU_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.MENU_DELETE_URL + id);
  }
}
