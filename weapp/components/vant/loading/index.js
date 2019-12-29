"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    color: String,
    vertical: Boolean,
    type: {
      type: String,
      value: 'circular'
    },
    size: String,
    textSize: String
  }
});