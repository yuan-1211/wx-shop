"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../../vendor.js')(2));

var _core = _interopRequireDefault(require('./../../vendor.js')(0));

var _cate = _interopRequireDefault(require('./../../api/cate.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    cates: ['大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐', '大家电', '热门推荐'],
    rightList: [],
    currentIndex: 0
  },
  onLoad: function onLoad() {
    this.getCateList();
  },
  methods: {
    getCateList: function () {
      var _getCateList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref, data;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _cate["default"].getCate();

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.cates = data.message;
                this.rightList = data.message[0].children;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCateList() {
        return _getCateList.apply(this, arguments);
      }

      return getCateList;
    }(),
    switchTab: function switchTab(index) {
      // console.log(index)
      this.currentIndex = index;
      this.rightList = this.cates[index].children;
    }
  }
}, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\..\\components\\search"}},"on":{}}, handlers: {'6-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.switchTab(index);
      })();
    
  }}}, models: {}, refs: undefined });