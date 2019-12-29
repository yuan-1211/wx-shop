export default class http {
  static request(url, data = '{}', method = 'Get') {
    wx.showLoading({
      title: '加载中',
      mask: 'true'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, // 仅为示例，并非真实的接口地址
        data: data,
        method: method,
        success(res) {
          wx.hideLoading({})
          resolve(res)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
  static getRequest(url, data) {
    return this.request(url, data, 'get')
  }
}
