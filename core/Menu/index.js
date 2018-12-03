import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import MenuItem from './MenuItem';
import Divider from '../helpers/Divider';
import s from './styles';
export function Menu(_ref) {
  var size = _ref.size,
      width = _ref.width,
      list = _ref.list,
      onClick = _ref.onClick;
  return React.createElement(Card, null, React.createElement("ul", {
    className: s('base', size)
  }, list.map(function (_ref2, i) {
    var label = _ref2.label,
        value = _ref2.value,
        icon = _ref2.icon,
        list = _ref2.list,
        active = _ref2.active,
        type = _ref2.type,
        disabled = _ref2.disabled;

    if (type === 'divider') {
      return React.createElement(Divider, {
        key: "mid-".concat(i)
      });
    }

    return React.createElement(MenuItem, {
      key: "mi-".concat(value),
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
  })));
}
Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['divider']),
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    list: PropTypes.array,
    icon: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  })),
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['default', 'dense'])
};
export { MenuItem };
export default Menu;