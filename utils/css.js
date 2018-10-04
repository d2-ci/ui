"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = classNames;

require("core-js/modules/es6.function.bind");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function classNames(styles) {
  return _bind.default.bind(styles);
}