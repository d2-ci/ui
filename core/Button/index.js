"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FlatButton: true,
  RaisedButton: true,
  PrimaryButton: true,
  OutlinedButton: true,
  CircleButton: true,
  Button: true
};
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
exports.default = exports.CircleButton = exports.OutlinedButton = exports.PrimaryButton = exports.RaisedButton = exports.FlatButton = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _DropdownButton = require("./DropdownButton");

Object.keys(_DropdownButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DropdownButton[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FlatButton = function FlatButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    kind: "flat"
  }, props));
};

exports.FlatButton = FlatButton;

var RaisedButton = function RaisedButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    kind: "raised"
  }, props));
};

exports.RaisedButton = RaisedButton;

var PrimaryButton = function PrimaryButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    kind: "primary"
  }, props));
};

exports.PrimaryButton = PrimaryButton;

var OutlinedButton = function OutlinedButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    kind: "outlined"
  }, props));
};

exports.OutlinedButton = OutlinedButton;

var CircleButton = function CircleButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    kind: "circle"
  }, props));
};

exports.CircleButton = CircleButton;
var _default = _Button.default;
exports.default = _default;