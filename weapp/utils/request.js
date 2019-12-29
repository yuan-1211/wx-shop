"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var http =
/*#__PURE__*/
function () {
  function http() {
    _classCallCheck(this, http);
  }

  _createClass(http, null, [{
    key: "request",
    value: function request(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '{}';
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Get';
      wx.showLoading({
        title: '加载中',
        mask: 'true'
      });
      return new Promise(function (resolve, reject) {
        wx.request({
          url: url,
          // 仅为示例，并非真实的接口地址
          data: data,
          method: method,
          success: function success(res) {
            wx.hideLoading({});
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: "getRequest",
    value: function getRequest(url, data) {
      return this.request(url, data, 'get');
    }
  }]);

  return http;
}();

exports["default"] = http;