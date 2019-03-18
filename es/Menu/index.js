import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import MenuItem from './MenuItem';
import Divider from '../Divider';
import cx from 'classnames';
import styles from './styles';
export function Menu({
  size,
  width,
  list,
  onClick,
  className
}) {
  return React.createElement(Card, null, React.createElement("ul", {
    className: `jsx-${styles.__hash}` + " " + (cx('base', size, className) || "")
  }, list.map(({
    label,
    value,
    icon,
    list,
    active,
    type,
    disabled
  }, i) => {
    if (type === 'divider') {
      return React.createElement(Divider, {
        key: `mid-${i}`
      });
    }

    return React.createElement(MenuItem, {
      key: `mi-${value}`,
      label: label,
      value: value,
      icon: icon,
      list: list,
      type: type,
      size: size,
      disabled: disabled,
      active: active,
      onClick: onClick
    });
  })), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}
Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['divider']),
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    list: PropTypes.array,
    icon: PropTypes.element,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['default', 'dense'])
};
export { MenuItem };
export default Menu;