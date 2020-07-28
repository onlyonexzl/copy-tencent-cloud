import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.INFORMATION_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  add(formData) {
    return request.post(Api.INFORMATION_ADD_URL, {
      title: formData.title,
      typeId: formData.typeId,
      remark: formData.remark,
      content: formData.content
    });
  },
  update(formData) {
    return request.post(Api.INFORMATION_UPDATE_URL, {
      id: formData.id,
      title: formData.title,
      typeId: formData.typeId,
      remark: formData.remark,
      content: formData.content
    });
  },
  getById(id) {
    return request.post(Api.INFORMATION_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.INFORMATION_DELETE_URL + id);
  }
}
