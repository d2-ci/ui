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

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTitle(instanceName) {
  var appName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!appName) {
    return instanceName;
  }

  return "".concat(instanceName, " - ").concat(appName);
}

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Logo.LogoIconWhite, null);

function HeaderBar(_ref) {
  var baseURL = _ref.baseURL,
      instanceName = _ref.instanceName,
      appName = _ref.appName,
      apps = _ref.apps,
      profile = _ref.profile,
      messages = _ref.messages,
      interpretations = _ref.interpretations;
  return _react.default.createElement("header", {
    className: (0, _styles.rx)('base', 'blue')
  }, _react.default.createElement("div", {
    className: (0, _styles.rx)('first')
  }, _react.default.createElement("div", {
    className: (0, _styles.rx)('logo')
  }, _react.default.createElement("a", {
    href: "".concat(baseURL),
    className: (0, _styles.rx)()
  }, _ref2)), _react.default.createElement("div", {
    className: (0, _styles.rx)('title')
  }, getTitle(instanceName, appName))), _react.default.createElement("div", {
    className: (0, _styles.rx)('last')
  }, _react.default.createElement(_NotificationIcon.default, {
    icon: "message",
    count: interpretations.count,
    href: "".concat(baseURL, "/dhis-web-interpretation")
  }), _react.default.createElement(_NotificationIcon.default, {
    icon: "email",
    count: messages.count,
    href: "".concat(baseURL, "/dhis-web-messaging")
  }), _react.default.createElement(_Apps.default, {
    apps: apps,
    baseURL: baseURL
  }), _react.default.createElement(_Profile.default, {
    profile: profile,
    baseURL: baseURL
  })));
}

HeaderBar.propTypes = {
  baseURL: _propTypes.default.string,
  instanceName: _propTypes.default.string.isRequired,
  appName: _propTypes.default.string,
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