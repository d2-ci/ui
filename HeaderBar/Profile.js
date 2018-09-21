"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Apps;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextIcon(_ref) {
  var name = _ref.name;
  var title = name[0];

  if (name.indexOf(' ') > 0) {
    title += name.split(' ')[1][0];
  }

  return _react.default.createElement("div", {
    className: "icon"
  }, _react.default.createElement("div", {
    className: "initials"
  }, title));
}

function Apps() {
  return _react.default.createElement("div", {
    className: "profile"
  }, _react.default.createElement(TextIcon, {
    name: "Adam Adam"
  }));
}