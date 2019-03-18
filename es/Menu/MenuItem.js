import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import Menu from './index';
import cx from 'classnames';
import styles from './styles';
import { ChevronRight } from '../icons/Chevron.js';
const subChevron = {
  styles: React.createElement(_JSXStyle, {
    id: "2023721407"
  }, "svg.jsx-2023721407{margin:0 -14px 0 auto;width:18px;height:18px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"),
  className: "jsx-2023721407"
};

function SubMenu({
  size,
  list,
  onClick,
  className
}) {
  return React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('sub-menu', className) || "")
  }, React.createElement(Menu, {
    size: size,
    list: list,
    onClick: onClick
  }), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}

export default function MenuItem({
  label,
  value,
  icon,
  list,
  active,
  disabled,
  size,
  onClick,
  className
}) {
  const hasMenu = list.length > 0;
  return React.createElement("li", {
    onClick: evt => {
      if (onClick) {
        evt.preventDefault();
        evt.stopPropagation();
        onClick(value);
      }
    },
    className: `jsx-${styles.__hash}` + " " + (cx('item', className, {
      disabled,
      active
    }) || "")
  }, icon, React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label), hasMenu && React.createElement(ChevronRight, {
    className: subChevron.className
  }), hasMenu && React.createElement(SubMenu, {
    size: size,
    list: list,
    onClick: onClick
  }), subChevron.styles, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}
MenuItem.defaultProps = {
  list: [],
  size: 'default',
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element,
  list: PropTypes.array,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func
};