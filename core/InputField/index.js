import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Label, Help } from '../helpers';
import s from './styles';

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      if (!_this.props.disabled) {
        _this.props.onChange(_this.props.name, evt.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      if (_this.ref && !_this.props.disabled) {
        _this.ref.focus();

        _this.setState({
          focused: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (evt) {
      if (_this.props.disabled) {
        evt.target.blur();
        return;
      }

      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      return _this.setState({
        focused: false
      });
    });

    return _this;
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      var _s,
          _this2 = this;

      return React.createElement("div", {
        className: s('container', (_s = {
          disabled: this.props.disabled
        }, _defineProperty(_s, "size-".concat(this.props.size), true), _defineProperty(_s, "kind-".concat(this.props.kind), true), _defineProperty(_s, 'is-empty', !(this.props.value || this.props.placeholder || this.state.focused)), _s)),
        onClick: this.onClick
      }, React.createElement("div", {
        className: s('field')
      }, this.props.icon && React.createElement("div", {
        className: s('icon')
      }, React.createElement(Icon, {
        name: this.props.icon
      })), React.createElement("input", {
        ref: function ref(c) {
          return _this2.ref = c;
        },
        className: s('input'),
        type: this.props.type,
        value: this.props.value,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        placeholder: this.props.placeholder
      }), React.createElement(Label, {
        size: this.props.size,
        kind: this.props.kind,
        text: this.props.label,
        status: this.props.status,
        focused: this.state.focused,
        disabled: this.props.disabled,
        hasIcon: !!this.props.icon,
        state: this.props.placeholder || this.props.value || this.state.focused ? 'minimized' : 'default'
      })), this.props.help && React.createElement(Help, {
        text: this.props.help,
        status: this.props.status
      }));
    }
  }]);

  return InputField;
}(React.Component);

InputField.defaultProps = {
  disabled: false,
  label: '',
  size: 'default',
  kind: 'filled'
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  help: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { InputField };
export default InputField;