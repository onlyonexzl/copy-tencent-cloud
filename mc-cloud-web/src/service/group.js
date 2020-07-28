import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.GROUP_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList() {
    return request.post(Api.GROUP_LIST_URL)
  },
  add(formData) {
    return request.post(Api.GROUP_ADD_URL, {
      name: formData.name,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.GROUP_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.GROUP_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.GROUP_DELETE_URL + id);
  }
}
