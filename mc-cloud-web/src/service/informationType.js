import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.INFORMATION_TYPE_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList() {
    return request.post(Api.INFORMATION_TYPE_LIST_URL)
  },
  add(formData) {
    return request.post(Api.INFORMATION_TYPE_ADD_URL, {
      name: formData.name,
      parentId: formData.parentId,
      state: formData.state,
      remark: formData.remark
    });
  },
  update(formData) {
    return request.post(Api.INFORMATION_TYPE_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      parentId: formData.parentId,
      state: formData.state,
      remark: formData.remark
    });
  },
  getById(id) {
    return request.post(Api.INFORMATION_TYPE_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.INFORMATION_TYPE_DELETE_URL + id);
  }
}
