import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import cx, { rx } from './styles';

function Button(_ref) {
  var type = _ref.type,
      children = _ref.children,
      kind = _ref.kind,
      size = _ref.size,
      icon = _ref.icon,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    className: rx('base', "kind-".concat(kind), "size-".concat(size), {
      'icon-only': icon && !label && !children,
      icon: icon
    })
  }, icon && React.createElement(Icon, {
    className: cx('button-icon'),
    name: icon
  }), label || children);
}

Button.defaultProps = {
  icon: '',
  label: '',
  kind: 'basic',
  size: 'medium',
  disabled: false,
  onClick: undefined
};
Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func
};
export { Button };
export default Button;