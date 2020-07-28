import request from '../utils/request'
import Api from './api'

export default {
  queryPage(pageNo, pageSize, params) {
    return request.post(Api.PROVIDER_PAGE_URL, {
      pageNo: pageNo,
      pageSize: pageSize,
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate
    })
  },
  add(formData) {
    return request.post(Api.PROVIDER_ADD_URL, {
      name: formData.name,
      orgCode: formData.orgCode,
      licenceUrl: formData.licenceUrl,
      loginId: formData.loginId,
      loginPwd: formData.loginPwd,
      linkName: formData.linkName,
      linkQq: formData.linkQq,
      linkPhone: formData.linkPhone,
      linkEmail: formData.linkEmail,
      businessScope: formData.businessScope,
      description: formData.description
    });
  },
  update(formData) {
    return request.post(Api.PROVIDER_UPDATE_URL, {
      id: formData.id,
      name: formData.name,
      orgCode: formData.orgCode,
      licenceUrl: formData.licenceUrl,
      loginId: formData.loginId,
      loginPwd: formData.loginPwd,
      linkName: formData.linkName,
      linkQq: formData.linkQq,
      linkPhone: formData.linkPhone,
      linkEmail: formData.linkEmail,
      businessScope: formData.businessScope,
      description: formData.description
    });
  },
  getById(id) {
    return request.post(Api.PROVIDER_GETBYID_URL + id);
  },
  deleteById(id) {
    return request.post(Api.PROVIDER_DELETE_URL + id);
  }
}
