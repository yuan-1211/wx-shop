"use strict";

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _component.VantComponent)({
  mixins: [_touch.touch],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
  relation: {
    name: 'tab',
    type: 'descendant',
    linked: function linked(target) {
      target.index = this.children.length;
      this.children.push(target);
      this.updateTabs();
    },
    unlinked: function unlinked(target) {
      this.children = this.children.filter(function (child) {
        return child !== target;
      }).map(function (child, index) {
        child.index = index;
        return child;
      });
      this.updateTabs();
    }
  },
  props: {
    color: {
      type: String,
      observer: 'setLine'
    },
    sticky: Boolean,
    animated: {
      type: Boolean,
      observer: function observer() {
        this.setTrack();
        this.children.forEach(function (child) {
          return child.updateRender();
        });
      }
    },
    swipeable: Boolean,
    lineWidth: {
      type: [String, Number],
      value: -1,
      observer: 'setLine'
    },
    lineHeight: {
      type: [String, Number],
      value: -1,
      observer: 'setLine'
    },
    titleActiveColor: String,
    titleInactiveColor: String,
    active: {
      type: [String, Number],
      value: 0,
      observer: function observer(name) {
        if (name !== this.getCurrentName()) {
          this.setCurrentIndexByName(name);
        }
      }
    },
    type: {
      type: String,
      value: 'line'
    },
    border: {
      type: Boolean,
      value: true
    },
    ellipsis: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0.3
    },
    zIndex: {
      type: Number,
      value: 1
    },
    swipeThreshold: {
      type: Number,
      value: 4,
      observer: function observer(value) {
        this.setData({
          scrollable: this.children.length > value || !this.data.ellipsis
        });
      }
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    lazyRender: {
      type: Boolean,
      value: true
    }
  },
  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false,
    trackStyle: '',
    currentIndex: null,
    container: null
  },
  beforeCreate: function beforeCreate() {
    this.children = [];
  },
  mounted: function mounted() {
    var _this = this;

    this.setData({
      container: function container() {
        return _this.createSelectorQuery().select('.van-tabs');
      }
    });
    this.setLine(true);
    this.setTrack();
    this.scrollIntoView();
  },
  methods: {
    updateTabs: function updateTabs() {
      var _this$children = this.children,
          children = _this$children === void 0 ? [] : _this$children,
          data = this.data;
      this.setData({
        tabs: children.map(function (child) {
          return child.data;
        }),
        scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
      });
      this.setCurrentIndexByName(this.getCurrentName() || data.active);
    },
    trigger: function trigger(eventName) {
      var currentIndex = this.data.currentIndex;
      var child = this.children[currentIndex];

      if (!(0, _utils.isDef)(child)) {
        return;
      }

      this.$emit(eventName, {
        index: currentIndex,
        name: child.getComputedName(),
        title: child.data.title
      });
    },
    onTap: function onTap(event) {
      var _this2 = this;

      var index = event.currentTarget.dataset.index;
      var child = this.children[index];

      if (child.data.disabled) {
        this.trigger('disabled');
      } else {
        this.setCurrentIndex(index);
        wx.nextTick(function () {
          _this2.trigger('click');
        });
      }
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var _this$children2 = this.children,
          children = _this$children2 === void 0 ? [] : _this$children2;
      var matched = children.filter(function (child) {
        return child.getComputedName() === name;
      });

      if (matched.length) {
        this.setCurrentIndex(matched[0].index);
      }
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      var _this3 = this;

      var data = this.data,
          _this$children3 = this.children,
          children = _this$children3 === void 0 ? [] : _this$children3;

      if (!(0, _utils.isDef)(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
        return;
      }

      children.forEach(function (item, index) {
        var active = index === currentIndex;

        if (active !== item.data.active || !item.inited) {
          item.updateRender(active, _this3);
        }
      });

      if (currentIndex === data.currentIndex) {
        return;
      }

      var shouldEmitChange = data.currentIndex !== null;
      this.setData({
        currentIndex: currentIndex
      });
      wx.nextTick(function () {
        _this3.setLine();

        _this3.setTrack();

        _this3.scrollIntoView();

        _this3.trigger('input');

        if (shouldEmitChange) {
          _this3.trigger('change');
        }
      });
    },
    getCurrentName: function getCurrentName() {
      var activeTab = this.children[this.data.currentIndex];

      if (activeTab) {
        return activeTab.getComputedName();
      }
    },
    setLine: function setLine(skipTransition) {
      var _this4 = this;

      if (this.data.type !== 'line') {
        return;
      }

      var _this$data = this.data,
          color = _this$data.color,
          duration = _this$data.duration,
          currentIndex = _this$data.currentIndex,
          lineWidth = _this$data.lineWidth,
          lineHeight = _this$data.lineHeight;
      this.getRect('.van-tab', true).then(function () {
        var rects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var rect = rects[currentIndex];

        if (rect == null) {
          return;
        }

        var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
        var height = lineHeight !== -1 ? "height: ".concat((0, _utils.addUnit)(lineHeight), "; border-radius: ").concat((0, _utils.addUnit)(lineHeight), ";") : '';
        var left = rects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        left += (rect.width - width) / 2;
        var transition = skipTransition ? '' : "transition-duration: ".concat(duration, "s; -webkit-transition-duration: ").concat(duration, "s;");

        _this4.setData({
          lineStyle: "\n            ".concat(height, "\n            width: ").concat((0, _utils.addUnit)(width), ";\n            background-color: ").concat(color, ";\n            -webkit-transform: translateX(").concat(left, "px);\n            transform: translateX(").concat(left, "px);\n            ").concat(transition, "\n          ")
        });
      });
    },
    setTrack: function setTrack() {
      var _this$data2 = this.data,
          animated = _this$data2.animated,
          duration = _this$data2.duration,
          currentIndex = _this$data2.currentIndex;

      if (!animated) {
        return;
      }

      this.setData({
        trackStyle: "\n          transform: translate3d(".concat(-100 * currentIndex, "%, 0, 0);\n          -webkit-transition-duration: ").concat(duration, "s;\n          transition-duration: ").concat(duration, "s;\n        ")
      });
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      var _this5 = this;

      var _this$data3 = this.data,
          currentIndex = _this$data3.currentIndex,
          scrollable = _this$data3.scrollable;

      if (!scrollable) {
        return;
      }

      Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            tabRects = _ref2[0],
            navRect = _ref2[1];

        var tabRect = tabRects[currentIndex];
        var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);

        _this5.setData({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
        });
      });
    },
    onTouchScroll: function onTouchScroll(event) {
      this.$emit('scroll', event.detail);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.data.swipeable) return;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.data.swipeable) return;
      this.touchMove(event);
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      if (!this.data.swipeable) return;
      var _this$data4 = this.data,
          tabs = _this$data4.tabs,
          currentIndex = _this$data4.currentIndex;
      var direction = this.direction,
          deltaX = this.deltaX,
          offsetX = this.offsetX;
      var minSwipeDistance = 50;

      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        if (deltaX > 0 && currentIndex !== 0) {
          this.setCurrentIndex(currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
          this.setCurrentIndex(currentIndex + 1);
        }
      }
    }
  }
});