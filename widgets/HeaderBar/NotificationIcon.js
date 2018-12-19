import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../core/Icon';
import { t } from '../../utils';
import { rx } from './styles';

function NotificationIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count,
      href = _ref.href;
  return React.createElement("a", {
    className: rx('notification', {
      icon: icon
    }),
    href: href
  }, count > 0 && React.createElement("span", {
    className: rx('count')
  }, count), React.createElement(Icon, {
    name: icon
  }));
}

NotificationIcon.defaultProps = {
  count: 0
};
NotificationIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  count: PropTypes.number
};
export default NotificationIcon;