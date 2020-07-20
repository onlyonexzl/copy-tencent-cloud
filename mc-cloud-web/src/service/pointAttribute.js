import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.POINTATTRIBUTE_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      driverId: params.driverId,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList(deviceId) {
    return request.post(Api.POINTATTRIBUTE_LIST_URL, {
      deviceId: deviceId
    })
  },
  add(formData) {
    return request.post(Api.POINTATTRIBUTE_ADD_URL, {
      displayName: formData.displayName,
      name: formData.name,
      type: formData.type,
      value: formData.value,
      driverId: formData.driverId,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.POINTATTRIBUTE_UPDATE_URL, {
      id: formData.id,
      displayName: formData.displayName,
      name: formData.name,
      type: formData.type,
      value: formData.value,
      driverId: formData.driverId,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.POINTATTRIBUTE_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.POINTATTRIBUTE_DELETE_URL + id);
  }
}
