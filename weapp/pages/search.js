"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _dialog = _interopRequireDefault(require('./../components/vant/dialog/dialog.js'));

var _search = _interopRequireDefault(require('./../api/search.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    inputVal: '',
    searchList: [],
    historyList: [],
    time: null
  },
  onLoad: function onLoad() {
    this.historyList = wx.getStorageSync('historyList') || [];
  },
  methods: {
    onChange: function onChange(e) {
      var _this = this;

      this.inputVal = e.$wx.detail.trim();
      clearTimeout(this.time);
      this.time = setTimeout(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref2, data;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _search["default"].getSearchData(_this.inputVal);

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                _this.searchList = data.message;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 1000);
    },
    onSearch: function () {
      var _onSearch = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.inputVal.length !== 0) {
                  if (!this.historyList.includes(this.inputVal)) {
                    this.historyList.unshift(this.inputVal);
                  }

                  wx.setStorageSync('historyList', this.historyList);
                }

                wx.navigateTo({
                  url: "/pages/goods-list?query=".concat(this.inputVal)
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onSearch() {
        return _onSearch.apply(this, arguments);
      }

      return onSearch;
    }(),
    onCancel: function onCancel() {
      this.inputVal = '';
      console.log(this.inputVal);
    },
    deletedHistory: function deletedHistory() {
      var _this2 = this;

      _dialog["default"].confirm({
        title: '提示',
        message: '是否真的要删除历史记录'
      }).then(function () {
        _this2.historyList = [];
        wx.setStorageSync('historyList', []); // on confirm
      })["catch"](function () {// on cancel
      });
    }
  },
  computed: {
    showHistory: function showHistory() {
      return this.inputVal.length === 0;
    }
  }
}, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-cell":{"path":"..\\components\\vant\\cell\\index"},"van-search":{"path":"..\\components\\vant\\search\\index"},"van-divider":{"path":"..\\components\\vant\\divider\\index"},"van-cell-group":{"path":"..\\components\\vant\\cell-group\\index"},"van-tag":{"path":"..\\components\\vant\\tag\\index"}},"on":{"9-0":["change","search","cancel"],"9-3":["tap"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'9-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedHistory($event);
      })();
    
  }}}, models: {}, refs: undefined });