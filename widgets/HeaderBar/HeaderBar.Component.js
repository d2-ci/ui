"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = HeaderBar;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("../../core/Logo"));

var _NotificationIcon = _interopRequireDefault(require("./NotificationIcon"));

var _Apps = _interopRequireDefault(require("./Apps"));

var _Profile = _interopRequireDefault(require("./Profile"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
function HeaderBar(_ref) {
  var type = _ref.type,
      baseURL = _ref.baseURL,
      title = _ref.title,
      selection = _ref.selection,
      apps = _ref.apps,
      profile = _ref.profile,
      messages = _ref.messages,
      interpretations = _ref.interpretations;
  return _react.default.createElement("header", {
    className: (0, _styles.default)('container', type)
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('first')
  }, _react.default.createElement("div", {
    className: (0, _styles.default)('logo')
  }, _react.default.createElement(_Logo.default, {
    color: type === 'blue' ? 'white' : 'blue',
    type: "icon",
    width: "27.5px"
  })), _react.default.createElement("div", {
    className: (0, _styles.default)('title')
  }, title)), selection && _react.default.createElement("div", {
    className: (0, _styles.default)('current-selection')
  }, selection), _react.default.createElement("div", {
    className: (0, _styles.default)('last')
  }, _react.default.createElement(_NotificationIcon.default, {
    icon: "message",
    count: interpretations.count
  }), _react.default.createElement(_NotificationIcon.default, {
    icon: "email",
    count: messages.count
  }), _react.default.createElement(_Apps.default, {
    apps: apps
  }), _react.default.createElement(_Profile.default, {
    profile: profile,
    baseURL: baseURL
  })));
}

HeaderBar.defaultProps = {
  type: 'blue'
};
var _default = HeaderBar;
exports.default = _default;