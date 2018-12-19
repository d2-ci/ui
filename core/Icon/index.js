import React from 'react';
import PropTypes from 'prop-types';
import { rx } from './styles';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement("i", {
    onClick: onClick,
    className: rx('base', className)
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