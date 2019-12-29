import http from '@/utils/request'
import base from '@/api/base'
export default class homeReq extends base {
  static getSwiper = () => http.request(`${this.baseURL}/home/swiperdata`)
  static getCate=() => http.request(`${this.baseURL}/home/catitems`)
  static getFloorData=() => http.request(`${this.baseURL}/home/floordata`)
}
