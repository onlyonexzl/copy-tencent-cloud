import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.POINTINFO_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      deviceId: params.deviceId,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  add(formData) {
    return request.post(Api.POINTINFO_ADD_URL, {
      deviceId: formData.deviceId,
      pointId: formData.pointId,
      pointAttributeId: formData.pointAttributeId,
      value: formData.value,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.POINTINFO_UPDATE_URL, {
      id: formData.id,
      deviceId: formData.deviceId,
      pointId: formData.pointId,
      pointAttributeId: formData.pointAttributeId,
      value: formData.value,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.POINTINFO_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.POINTINFO_DELETE_URL + id);
  }
}
