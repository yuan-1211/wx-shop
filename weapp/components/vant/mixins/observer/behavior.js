"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.behavior = void 0;
var behavior = Behavior({
  methods: {
    set: function set(data, callback) {
      this.setData(data, callback);
      return new Promise(function (resolve) {
        return wx.nextTick(resolve);
      });
    }
  }
});
exports.behavior = behavior;