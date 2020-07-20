import request from '../utils/request'
import Api from './api'

export default {
  queryTreeData() {
    return request.post(Api.CATEGORY_TREEDATA_URL)
  },
  add(formData) {
    return request.post(Api.CATEGORY_ADD_URL, {
      name: formData.name,
      parentId: formData.parentId,
      state: formData.state,
      remark: formData.remark
    });
  },
  update(formData) {
    return request.post(Api.CATEGORY_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      parentId: formData.parentId,
      state: formData.state,
      remark: formData.remark
    });
  },
  getById(id) {
    return request.post(Api.CATEGORY_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.CATEGORY_DELETE_URL + id);
  }
}
