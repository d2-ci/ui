"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "DropdownButton", {
  enumerable: true,
  get: function get() {
    return _DropdownButton.default;
  }
});
exports.default = exports.CircleButton = exports.OutlinedButton = exports.PrimaryButton = exports.RaisedButton = exports.FlatButton = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var VARIANTS = _interopRequireWildcard(require("./variants"));

var _DropdownButton = _interopRequireDefault(require("./DropdownButton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// These other named exports are more convenient and explicit
var FlatButton = function FlatButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    variant: VARIANTS.FLAT
  }, props));
};

exports.FlatButton = FlatButton;

var RaisedButton = function RaisedButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    variant: VARIANTS.RAISED
  }, props));
};

exports.RaisedButton = RaisedButton;

var PrimaryButton = function PrimaryButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    variant: VARIANTS.PRIMARY
  }, props));
};

exports.PrimaryButton = PrimaryButton;

var OutlinedButton = function OutlinedButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    variant: VARIANTS.OUTLINED
  }, props));
};

exports.OutlinedButton = OutlinedButton;

var CircleButton = function CircleButton(props) {
  return _react.default.createElement(_Button.default, _extends({
    variant: VARIANTS.CIRCLE
  }, props));
};

exports.CircleButton = CircleButton;
var _default = _Button.default;
exports.default = _default;