import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.PROFILE_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      driverId: params.driverId,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList() {
    return request.post(Api.PROFILE_LIST_URL)
  },
  add(formData) {
    return request.post(Api.PROFILE_ADD_URL, {
      name: formData.name,
      share: formData.share,
      driverId: formData.driverId,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.PROFILE_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      share: formData.share,
      driverId: formData.driverId,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.PROFILE_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.PROFILE_DELETE_URL + id);
  }
}
