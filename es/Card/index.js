import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';

function Card({
  className,
  children
}) {
  return React.createElement("div", {
    className: _JSXStyle.dynamic([["84828388", [colors.white]]]) + " " + (cx('base', className) || "")
  }, children, React.createElement(_JSXStyle, {
    id: "84828388",
    dynamic: [colors.white]
  }, `.base.__jsx-style-dynamic-selector{display:inline-block;position:relative;width:100%;height:100%;border-radius:2px;background:${colors.white};box-shadow:0 0 2px 0 rgba(0,0,0,0.14), 0 2px 2px 0 rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);}`));
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
export { Card };
export default Card;