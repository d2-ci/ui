import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.js';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "1483867407"
}, ".jsx-1483867407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;}");

function CircularProgress({
  size,
  overlay,
  className
}) {
  const loader = React.createElement("div", {
    role: "progressbar",
    className: `jsx-${styles.__hash}` + " " + (cx('base', size, className) || "")
  }, React.createElement("svg", {
    viewBox: "22 22 44 44",
    className: `jsx-${styles.__hash}`
  }, React.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: `jsx-${styles.__hash}` + " " + 'circle'
  })), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));

  if (overlay) {
    return React.createElement("div", {
      className: "jsx-1483867407"
    }, loader, _ref);
  }

  return loader;
}

CircularProgress.defaultProps = {
  overlay: false,
  size: 'medium'
};
CircularProgress.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
export { CircularProgress };
export default CircularProgress;