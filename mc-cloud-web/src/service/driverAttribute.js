import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.DRIVERATTRIBUTE_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      driverId: params.driverId,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList(profileId) {
    return request.post(Api.DRIVERATTRIBUTE_LIST_URL, {
      profileId: profileId
    })
  },
  add(formData) {
    return request.post(Api.DRIVERATTRIBUTE_ADD_URL, {
      displayName: formData.displayName,
      name: formData.name,
      type: formData.type,
      value: formData.value,
      driverId: formData.driverId,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.DRIVERATTRIBUTE_UPDATE_URL, {
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
    return request.post(Api.DRIVERATTRIBUTE_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.DRIVERATTRIBUTE_DELETE_URL + id);
  }
}
