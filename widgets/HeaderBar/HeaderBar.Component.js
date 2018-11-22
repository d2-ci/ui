import React from 'react';
import PropTypes from 'prop-types';
import { LogoIconWhite } from '../../core/Logo';
import NotificationIcon from './NotificationIcon';
import Apps from './Apps';
import Profile from './Profile';
import s from './styles';

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
      interpretations = _ref.interpretations;
  return React.createElement("header", {
    className: s('base', 'blue')
  }, React.createElement("div", {
    className: s('first')
  }, React.createElement("div", {
    className: s('logo')
  }, React.createElement("a", {
    href: "".concat(baseURL)
  }, React.createElement(LogoIconWhite, null))), React.createElement("div", {
    className: s('title')
  }, getTitle(instanceName, appName))), React.createElement("div", {
    className: s('last')
  }, React.createElement(NotificationIcon, {
    icon: "message",
    count: interpretations.count,
    href: "".concat(baseURL, "/dhis-web-interpretation")
  }), React.createElement(NotificationIcon, {
    icon: "email",
    count: messages.count,
    href: "".concat(baseURL, "/dhis-web-messaging")
  }), React.createElement(Apps, {
    apps: apps,
    baseURL: baseURL
  }), React.createElement(Profile, {
    profile: profile,
    baseURL: baseURL
  })));
}

HeaderBar.propTypes = {
  baseURL: PropTypes.string,
  instanceName: PropTypes.string.isRequired,
  appName: PropTypes.string,
  messages: PropTypes.shape({
    count: PropTypes.number
  }),
  interpretations: PropTypes.shape({
    count: PropTypes.number
  }),
  apps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    img: PropTypes.string
  })),
  profile: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    src: PropTypes.string
  })
};
export { HeaderBar };
export default HeaderBar;