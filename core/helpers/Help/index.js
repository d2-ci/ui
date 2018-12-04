import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

function Help(_ref) {
  var text = _ref.text,
      status = _ref.status;
  return React.createElement("div", {
    className: s('reset', 'base', _defineProperty({}, "status-".concat(status), true))
  }, text);
}

Help.defaultProps = {
  status: 'default'
};
Help.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { Help };
export default Help;