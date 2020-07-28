import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.POINT_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      profileId: params.profileId,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList(deviceId) {
    return request.post(Api.POINT_LIST_URL, {
      deviceId: deviceId
    })
  },
  add(formData) {
    return request.post(Api.POINT_ADD_URL, {
      name: formData.name,
      type: formData.type,
      rw: formData.rw,
      base: formData.base,
      minimum: formData.minimum,
      maximum: formData.maximum,
      multiple: formData.multiple,
      accrue: formData.accrue,
      format: formData.format,
      unit: formData.unit,
      profileId: formData.profileId,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.POINT_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      type: formData.type,
      rw: formData.rw,
      base: formData.base,
      minimum: formData.minimum,
      maximum: formData.maximum,
      multiple: formData.multiple,
      accrue: formData.accrue,
      format: formData.format,
      unit: formData.unit,
      profileId: formData.profileId,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.POINT_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.POINT_DELETE_URL + id);
  }
}
