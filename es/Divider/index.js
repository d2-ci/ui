import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';
export function Divider({
  margin,
  className
}) {
  const style = {
    margin
  };
  return React.createElement("div", {
    style: style,
    className: _JSXStyle.dynamic([["3843445062", [colors.grey300]]]) + " " + (cx('base', className) || "")
  }, React.createElement(_JSXStyle, {
    id: "3843445062",
    dynamic: [colors.grey300]
  }, `.base.__jsx-style-dynamic-selector{display:inline-block;width:100%;height:1px;background-color:${colors.grey300};}`));
}
Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  className: PropTypes.string,
  margin: PropTypes.string
};
export default Divider;