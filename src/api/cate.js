import http from '@/utils/request'
import base from '@/api/base'
export default class cateReq extends base {
  static getCate = () => http.request(`${this.baseURL}/categories`)
}
