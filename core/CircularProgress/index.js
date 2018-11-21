import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

function Circle() {
  return React.createElement("svg", {
    viewBox: "22 22 44 44"
  }, React.createElement("circle", {
    className: s('circle'),
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6"
  }));
}

function CircularProgress(_ref) {
  var size = _ref.size,
      overlay = _ref.overlay;
  var loader = React.createElement("div", {
    role: "progressbar",
    className: s('container', size)
  }, React.createElement(Circle, null));

  if (overlay) {
    return React.createElement("div", {
      className: s('overlay')
    }, loader);
  }

  return loader;
}

CircularProgress.defaultProps = {
  size: 'medium'
};
CircularProgress.propTypes = {
  overlay: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
export { CircularProgress };
export default CircularProgress;