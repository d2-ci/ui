import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.js';

function Button({
  type,
  children,
  kind,
  size,
  icon,
  label,
  disabled,
  onClick,
  className
}) {
  return React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    type: type,
    className: `jsx-${styles.__hash}` + " " + (cx('base', `kind-${kind}`, `size-${size}`, className, {
      'icon-only': icon && !label && !children,
      icon
    }) || "")
  }, icon && React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "button-icon"
  }, icon), label || children, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}

Button.defaultProps = {
  kind: 'basic',
  type: 'button',
  size: 'medium',
  disabled: false,
  onClick: undefined
};
Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  kind: PropTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
export { Button };
export default Button;