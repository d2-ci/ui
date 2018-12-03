import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

function Card(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: s('reset', 'base', className)
  }, children);
}

Card.defaultProps = {
  className: ''
};
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
export { Card };
export default Card;