"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = HeaderBar;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Logo = require("../../core/Logo");

var _NotificationIcon = _interopRequireDefault(require("./NotificationIcon"));

var _Apps = _interopRequireDefault(require("./Apps"));

var _Profile = _interopRequireDefault(require("./Profile"));

var _Email = require("../../icons/Email.js");

var _Message = require("../../icons/Message.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _theme = require("../../core/theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notificationIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "3606299726"
  }, "svg.jsx-3606299726{fill:".concat(_theme.colors.white, ";cursor:pointer;height:24px;width:24px;}")),
  className: "jsx-3606299726"
};
var logotype = {
  styles: _react.default.createElement(_style.default, {
    id: "3071992754"
  }, "svg.jsx-3071992754{width:27px;height:25px;cursor:pointer;}"),
  className: "jsx-3071992754"
};

function getTitle(instanceName) {
  var appName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!appName) {
    return instanceName;
  }

  return "".concat(instanceName, " - ").concat(appName);
}

function HeaderBar(_ref) {
  var baseURL = _ref.baseURL,
      instanceName = _ref.instanceName,
      appName = _ref.appName,
      apps = _ref.apps,
      profile = _ref.profile,
      messages = _ref.messages,
      interpretations = _ref.interpretations,
      className = _ref.className;
  return _react.default.createElement("header", {
    className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('blue', className) || "")
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash)
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + "headerbar-logo"
  }, _react.default.createElement("a", {
    href: "".concat(baseURL),
    className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash)
  }, _react.default.createElement(_Logo.LogoIconWhite, {
    className: logotype.className
  }))), _react.default.createElement("div", {
    className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + "headerbar-title"
  }, getTitle(instanceName, appName))), _react.default.createElement("div", {
    className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash)
  }, _react.default.createElement(_NotificationIcon.default, {
    count: interpretations.count,
    href: "".concat(baseURL, "/dhis-web-interpretation")
  }, _react.default.createElement(_Message.Message, {
    className: notificationIcon.className
  })), _react.default.createElement(_NotificationIcon.default, {
    icon: "email",
    count: messages.count,
    href: "".concat(baseURL, "/dhis-web-messaging")
  }, _react.default.createElement(_Email.Email, {
    className: notificationIcon.className
  })), _react.default.createElement(_Apps.default, {
    apps: apps,
    baseURL: baseURL
  }), _react.default.createElement(_Profile.default, {
    profile: profile,
    baseURL: baseURL
  })), notificationIcon.styles, logotype.styles, _react.default.createElement(_style.default, {
    id: _theme.fonts.__hash
  }, _theme.fonts), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

HeaderBar.propTypes = {
  className: _propTypes.default.string,
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