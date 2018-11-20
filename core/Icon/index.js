import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement("i", {
    onClick: onClick,
    className: s('container', className)
  }, name);
}

Icon.defaultProps = {
  name: '',
  className: '',
  onClick: undefined
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};
export { Icon };
export default Icon;