import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.DEVICE_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      status: params.status,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList() {
    return request.post(Api.DEVICE_LIST_URL)
  },
  add(formData) {
    return request.post(Api.DEVICE_ADD_URL, {
      name: formData.name,
      code: formData.code,
      status: formData.status,
      profileId: formData.profileId,
      groupId: formData.groupId,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.DEVICE_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      code: formData.code,
      status: formData.status,
      profileId: formData.profileId,
      groupId: formData.groupId,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.DEVICE_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.DEVICE_DELETE_URL + id);
  }
}
