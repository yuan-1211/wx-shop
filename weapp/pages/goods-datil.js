"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _goods = _interopRequireDefault(require('./../api/goods.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    goodId: 1,
    goodsDatil: [],
    imgUrl: [],
    cartData: []
  },
  onLoad: function onLoad(obj) {
    this.cartData = wx.getStorageSync('cartData') || [];
    this.goodId = obj.goods_id;
    this.initGoodsDatil();
  },
  methods: {
    initGoodsDatil: function () {
      var _initGoodsDatil = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _this = this;

        var _ref, data;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _goods["default"].getGoodsDatil(this.goodId);

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.goodsDatil = data.message;
                data.message.pics.map(function (item) {
                  _this.imgUrl.push(item.pics_big_url);
                }); // console.log(data)

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initGoodsDatil() {
        return _initGoodsDatil.apply(this, arguments);
      }

      return initGoodsDatil;
    }(),
    showBig: function showBig(obj) {
      wx.previewImage({
        current: obj,
        // 当前显示图片的http链接
        urls: this.imgUrl // 需要预览的图片http链接列表

      });
    },
    addToCart: function addToCart() {
      var _this2 = this;

      var index = this.cartData.findIndex(function (item) {
        return item.id === _this2.goodsDatil.goods_id;
      });

      if (index !== -1) {
        this.cartData[index].num++;
      } else {
        var goods = {
          id: this.goodsDatil.goods_id,
          num: 1,
          selected: true,
          goods_name: this.goodsDatil.goods_name,
          goods_small_logo: this.goodsDatil.goods_small_logo,
          goods_price: this.goodsDatil.goods_price
        };
        this.cartData.push(goods);
      }

      wx.setStorageSync('cartData', this.cartData);
      console.log(this.cartData);
      var total = 0;
      this.cartData.map(function (item) {
        if (item.selected === true) {
          total += item.num;
        }
      });
      wx.setTabBarBadge({
        index: 2,
        text: total.toString()
      });
    }
  },
  computed: {
    total: function total() {
      var totalNum = 0;
      this.cartData.map(function (item) {
        totalNum += item.num;
      });
      return totalNum;
    }
  }
}, {info: {"components":{"van-tabs":{"path":"..\\components\\vant\\tabs\\index"},"van-tab":{"path":"..\\components\\vant\\tab\\index"},"van-icon":{"path":"..\\components\\vant\\icon\\index"},"van-goods-action":{"path":"..\\components\\vant\\goods-action\\index"},"van-goods-action-icon":{"path":"..\\components\\vant\\goods-action-icon\\index"},"van-goods-action-button":{"path":"..\\components\\vant\\goods-action-button\\index"},"van-row":{"path":"..\\components\\vant\\row\\index"},"van-col":{"path":"..\\components\\vant\\col\\index"}},"on":{"11-11":["tap"]}}, handlers: {'11-10': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showBig(item.pics_big);
      })();
    
  }},'11-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addToCart($event);
      })();
    
  }}}, models: {}, refs: undefined });