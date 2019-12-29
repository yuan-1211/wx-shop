import http from '@/utils/request'
import base from '@/api/base'
export default class goodsReq extends base {
  static getGoodsDatil = (id) => http.request(`${this.baseURL}/goods/detail?goods_id=${id}`)
}
