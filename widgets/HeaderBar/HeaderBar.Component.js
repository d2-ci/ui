"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = HeaderBar;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Logo = require("../../core/Logo");

var _NotificationIcon = _interopRequireDefault(require("./NotificationIcon"));

var _Apps = _interopRequireDefault(require("./Apps"));

var _Profile = _interopRequireDefault(require("./Profile"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderBar(_ref) {
  var type = _ref.type,
      baseURL = _ref.baseURL,
      title = _ref.title,
      status = _ref.status,
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
  }, type === 'blue' ? _react.default.createElement(_Logo.LogoIconWhite, null) : _react.default.createElement(_Logo.LogoIcon, null)), _react.default.createElement("div", {
    className: (0, _styles.default)('title')
  }, title)), status && _react.default.createElement("div", {
    className: (0, _styles.default)('status')
  }, status), _react.default.createElement("div", {
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
  type: 'blue',
  status: ''
};
HeaderBar.propTypes = {
  baseURL: _propTypes.default.string,
  type: _propTypes.default.oneOf(['blue', 'white', 'transparent']),
  title: _propTypes.default.string,
  status: _propTypes.default.string,
  messages: _propTypes.default.shape({
    count: _propTypes.default.number
  }),
  interpretations: _propTypes.default.shape({
    count: _propTypes.default.number
  }),
  apps: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    path: _propTypes.default.string,
    img: _propTypes.default.string
  })),
  profile: _propTypes.default.shape({
    name: _propTypes.default.string,
    email: _propTypes.default.string,
    src: _propTypes.default.string
  })
};
var _default = HeaderBar;
exports.default = _default;