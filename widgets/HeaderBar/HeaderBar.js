"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = HeaderBar;
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("../../core/Logo"));

var _NotificationIcon = _interopRequireDefault(require("./NotificationIcon"));

var _Apps = _interopRequireDefault(require("./Apps"));

var _Profile = _interopRequireDefault(require("./Profile"));

require("./styles.css");

var _utils = require("../../utils");

var _styles2 = _interopRequireDefault(require("./styles.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var css = (0, _utils.componentStyles)(_styles2.default);
console.log("css('left')", css('left'));
console.log('left', _styles2.default);

function HeaderBar(_ref) {
  var type = _ref.type,
      title = _ref.title,
      selection = _ref.selection,
      name = _ref.name,
      email = _ref.email,
      src = _ref.src;
  return _react.default.createElement("div", {
    className: "".concat(css('container'), " ").concat(css("container-".concat(type)))
  }, _react.default.createElement("div", {
    className: css('first')
  }, _react.default.createElement("div", {
    className: css('logo')
  }, _react.default.createElement(_Logo.default, {
    color: type === 'blue' ? 'white' : 'blue',
    type: "icon",
    width: "27.5px"
  })), _react.default.createElement("div", {
    className: css('title')
  }, title)), selection && _react.default.createElement("div", {
    className: css('current-selection')
  }, selection), _react.default.createElement("div", {
    className: css('last')
  }, _react.default.createElement(_NotificationIcon.default, {
    icon: "message",
    count: 8
  }), _react.default.createElement(_NotificationIcon.default, {
    icon: "email",
    count: 4
  }), _react.default.createElement(_Apps.default, null), _react.default.createElement(_Profile.default, {
    name: name,
    email: email,
    src: src
  })));
}

HeaderBar.defaultProps = {
  type: 'blue'
};
var _default = HeaderBar;
exports.default = _default;