import http from '@/utils/request'
import base from '@/api/base'
export default class searchReq extends base {
  static getSearchData = (params) => http.request(`${this.baseURL}/goods/qsearch?query=${params}`)
  static getSearchGoods = (data) => http.request(`${this.baseURL}/goods/search`, data)
}
