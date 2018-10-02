"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Apps;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../core/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function Apps() {
  return _react.default.createElement("div", {
    className: "apps-container"
  }, _react.default.createElement(_Icon.default, {
    name: "apps"
  }));
}