import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.DRIVER_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      host: params.host,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  queryList() {
    return request.post(Api.DRIVER_LIST_URL)
  },
  add(formData) {
    return request.post(Api.DRIVER_ADD_URL, {
      name: formData.name,
      serviceName: formData.serviceName,
      host: formData.host,
      port: formData.port,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.DRIVER_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      serviceName: formData.serviceName,
      host: formData.host,
      port: formData.port,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.DRIVER_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.DRIVER_DELETE_URL + id);
  }
}
