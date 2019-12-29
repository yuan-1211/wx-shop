"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _search = _interopRequireDefault(require('./../api/search.js'));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    params: {
      query: '',
      cid: '',
      pagenum: 1,
      pagesize: 10
    },
    goodsList: [],
    stop: true
  },
  onLoad: function onLoad(value) {
    this.params.query = value.query || '';
    this.getGoodData();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.params.pagenum = 1;
    this.stop = true;
    this.getGoodData();
    wx.stopPullDownRefresh();
  },
  onReachBottom: function () {
    var _onReachBottom = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var _ref, data;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.stop) {
                _context.next = 11;
                break;
              }

              this.params.pagenum++;
              _context.next = 4;
              return _search["default"].getSearchGoods(this.params);

            case 4:
              _ref = _context.sent;
              data = _ref.data;

              if (!(data.message.goods.length === 0)) {
                _context.next = 10;
                break;
              }

              this.params.pagenum--;
              this.stop = false;
              return _context.abrupt("return", _toast["default"].fail('没有更多了'));

            case 10:
              this.goodsList = [].concat(_toConsumableArray(this.goodsList), _toConsumableArray(data.message.goods));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onReachBottom() {
      return _onReachBottom.apply(this, arguments);
    }

    return onReachBottom;
  }(),
  methods: {
    getGoodData: function () {
      var _getGoodData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _ref2, data;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _search["default"].getSearchGoods(this.params);

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.goodsList = data.message.goods;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGoodData() {
        return _getGoodData.apply(this, arguments);
      }

      return getGoodData;
    }(),
    goToDatail: function goToDatail(id) {
      wx.navigateTo({
        url: "/pages/goods-datil?goods_id=".concat(id)
      });
    }
  }
}, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-card":{"path":"..\\components\\vant\\card\\index"},"van-toast":{"path":"..\\components\\vant\\toast\\index"}},"on":{"10-1":["tap"]}}, handlers: {'10-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToSearch($event);
      })();
    
  }},'10-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goToDatail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined });