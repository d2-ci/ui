import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Menu from './index';
import s from './styles';

function SubMenu(_ref) {
  var size = _ref.size,
      list = _ref.list,
      onClick = _ref.onClick;
  return React.createElement("div", {
    className: s('sub-menu')
  }, React.createElement(Menu, {
    size: size,
    list: list,
    onClick: onClick
  }));
}

export default function MenuItem(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      icon = _ref2.icon,
      list = _ref2.list,
      active = _ref2.active,
      disabled = _ref2.disabled,
      size = _ref2.size,
      _onClick = _ref2.onClick;
  var hasMenu = list.length > 0;
  return React.createElement("li", {
    className: s('item', {
      disabled: disabled,
      active: active
    }),
    onClick: function onClick(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      _onClick(value);
    }
  }, icon && React.createElement(Icon, {
    name: icon,
    className: s('icon')
  }), React.createElement("div", {
    className: s('label')
  }, label), hasMenu && React.createElement(Icon, {
    name: "chevron_right",
    className: s('chevron')
  }), hasMenu && React.createElement(SubMenu, {
    size: size,
    list: list,
    onClick: _onClick
  }));
}
MenuItem.defaultProps = {
  icon: '',
  list: [],
  size: 'default',
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string,
  list: PropTypes.array,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired
};