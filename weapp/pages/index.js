"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _home = _interopRequireDefault(require('./../api/home.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    imageList: [],
    cataList: [],
    floorData: []
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var res, cata, data;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _home["default"].getSwiper();

            case 3:
              res = _context.sent;
              this.imageList = res.data.message;
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
              _context.prev = 9;
              _context.next = 12;
              return _home["default"].getCate();

            case 12:
              cata = _context.sent;
              this.cataList = cata.data.message;
              _context.next = 18;
              break;

            case 16:
              _context.prev = 16;
              _context.t1 = _context["catch"](9);

            case 18:
              _context.prev = 18;
              _context.next = 21;
              return _home["default"].getFloorData();

            case 21:
              data = _context.sent;
              this.floorData = data.data.message;
              _context.next = 27;
              break;

            case 25:
              _context.prev = 25;
              _context.t2 = _context["catch"](18);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7], [9, 16], [18, 25]]);
    }));

    function onLoad() {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }()
}, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"search-box":{"path":"..\\components\\search"}},"on":{}}, handlers: {}, models: {}, refs: undefined });