import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import s from './styles';
var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

function Label(_ref) {
  var _s;

  var text = _ref.text,
      type = _ref.type,
      focused = _ref.focused,
      size = _ref.size,
      kind = _ref.kind,
      state = _ref.state,
      status = _ref.status,
      disabled = _ref.disabled,
      hasIcon = _ref.hasIcon;
  return React.createElement("div", {
    className: s('container', (_s = {
      disabled: disabled,
      'has-icon': hasIcon
    }, _defineProperty(_s, "focused", focused), _defineProperty(_s, "state-".concat(state), true), _defineProperty(_s, "size-".concat(size), true), _defineProperty(_s, "type-".concat(type), true), _defineProperty(_s, "status-".concat(status), true), _defineProperty(_s, "kind-".concat(kind), true), _s))
  }, React.createElement("div", {
    className: s('content', _defineProperty({}, "state-".concat(state), true))
  }, text), status !== 'default' && React.createElement(Icon, {
    name: statusToIcon[status],
    className: s('icon')
  }));
}

Label.defaultProps = {
  type: 'text',
  hasIcon: false,
  size: 'default',
  status: 'default',
  border: 'none',
  disabled: false
};
Label.propTypes = {
  text: PropTypes.string,
  focused: PropTypes.bool,
  hasIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  state: PropTypes.oneOf(['default', 'minimized']),
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url', 'select'])
};
export { Label };
export default Label;