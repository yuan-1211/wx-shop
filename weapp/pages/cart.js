"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _dialog = _interopRequireDefault(require('./../components/vant/dialog/dialog.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    goodsCart: [],
    address: {},
    checkedA: true
  },
  onShow: function onShow() {
    this.goodsCart = wx.getStorageSync('cartData') || [];
    this.address = wx.getStorageSync('address') || {};
    console.log(this.goodsCart);
  },
  methods: {
    sub: function sub(index) {
      if (this.goodsCart[index].num === 1) return false;
      this.goodsCart[index].num--;
      wx.setStorageSync('cartData', this.goodsCart);
      wx.setTabBarBadge({
        index: 2,
        text: this.allNum.toString()
      });
    },
    add: function add(index) {
      this.goodsCart[index].num++;
      wx.setStorageSync('cartData', this.goodsCart);
      wx.setTabBarBadge({
        index: 2,
        text: this.allNum.toString()
      });
    },
    changeStatus: function changeStatus(index) {
      this.goodsCart[index].selected = !this.goodsCart[index].selected;
      wx.setStorageSync('cartData', this.goodsCart);
    },
    checkedAll: function checkedAll() {
      var _this = this;

      this.checkedA = !this.checkedA;
      this.goodsCart.map(function (item) {
        item.selected = _this.checkedA;
      });
      wx.setStorageSync('cartData', this.goodsCart);
    },
    addAddress: function addAddress() {
      var _this2 = this;

      wx.chooseAddress({
        success: function success(res) {
          _this2.address = {
            userName: res.userName,
            telNumber: res.telNumber,
            addressInfo: res.provinceName + res.cityName + res.countyName
          };
          wx.setStorageSync('address', _this2.address);
        }
      });
    },
    goToIndex: function goToIndex() {
      wx.switchTab({
        url: '/pages/category/index'
      });
    },
    deletedGoods: function deletedGoods(e, index) {
      var _this3 = this;

      console.log(e);
      var instance = e.$wx.detail.instance;

      _dialog["default"].confirm({
        message: '确定删除吗？'
      }).then(function () {
        _this3.goodsCart.splice(index, 1);

        wx.setStorageSync('cartData', _this3.goodsCart);
        instance.close();
      })["catch"](function () {
        instance.close();
      });
    }
  },
  computed: {
    total: function total() {
      var total = 0;
      this.goodsCart.map(function (item) {
        if (item.selected === true) {
          total += item.goods_price * item.num;
        }
      });
      return total.toFixed(2);
    },
    allNum: function allNum() {
      var total = 0;
      this.goodsCart.map(function (item) {
        if (item.selected === true) {
          total += item.num;
        }
      });
      return total;
    },
    checked: function checked() {
      var index = this.goodsCart.findIndex(function (item) {
        return item.selected === false;
      });

      if (index !== -1) {
        return false;
      } else {
        return true;
      }
    },
    showAddress: function showAddress() {
      return Object.keys(this.address).length === 0;
    },
    showFlag: function showFlag() {
      return this.goodsCart.length !== 0;
    }
  }
}, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-swipe-cell":{"path":"..\\components\\vant\\swipe-cell\\index"},"van-field":{"path":"..\\components\\vant\\field\\index"}},"on":{"7-93":["close"]}}, handlers: {'7-91': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToIndex($event);
      })();
    
  }},'7-92': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'7-93': {"close": function proxy (index) {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedGoods($event,index);
      })();
    
  }},'7-94': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.changeStatus(index);
      })();
    
  }},'7-95': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.sub(index);
      })();
    
  }},'7-96': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.add(index);
      })();
    
  }},'7-97': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.checkedAll($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-dialog":{"path":"..\\components\\vant\\dialog\\index"},"van-swipe-cell":{"path":"..\\components\\vant\\swipe-cell\\index"},"van-field":{"path":"..\\components\\vant\\field\\index"}},"on":{"7-93":["close"]}}, handlers: {'7-91': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToIndex($event);
      })();
    
  }},'7-92': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'7-93': {"close": function proxy (index) {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.deletedGoods($event,index);
      })();
    
  }},'7-94': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.changeStatus(index);
      })();
    
  }},'7-95': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.sub(index);
      })();
    
  }},'7-96': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.add(index);
      })();
    
  }},'7-97': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.checkedAll($event);
      })();
    
  }}}, models: {}, refs: undefined });