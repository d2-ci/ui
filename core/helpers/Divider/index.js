import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';
export function Divider(_ref) {
  var margin = _ref.margin;
  var style = {
    margin: margin
  };
  return React.createElement("div", {
    style: style,
    className: s('base')
  });
}
Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  margin: PropTypes.string
};
export default Divider;