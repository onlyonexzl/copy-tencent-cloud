import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.DRIVERINFO_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      profileId: params.profileId,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  add(formData) {
    return request.post(Api.DRIVERINFO_ADD_URL, {
      profileId: formData.profileId,
      driverAttributeId: formData.driverAttributeId,
      value: formData.value,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.DRIVERINFO_UPDATE_URL, {
      id: formData.id,
      profileId: formData.profileId,
      driverAttributeId: formData.driverAttributeId,
      value: formData.value,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.DRIVERINFO_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.DRIVERINFO_DELETE_URL + id);
  }
}
