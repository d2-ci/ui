import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import cx, { rx } from './styles';
import { Help } from '../helpers';
var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

function icon(i) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (i) {
    return React.createElement("div", null, React.createElement(Icon, {
      name: i,
      onClick: action,
      className: cx('icon', extra)
    }));
  }

  return null;
}

function trailIcon(status, trail) {
  if (status !== 'default') {
    return icon(statusToIcon[status], null, "icon-".concat(status));
  } else {
    return icon(trail);
  }
}

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false,
      text: _this.props.value,
      labelWidth: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (evt) {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (evt) {
      _this.setState({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      if (_this.props.disabled) {
        return;
      }

      _this.props.onChange(_this.props.name, evt.target.value);

      _this.setState({
        text: evt.target.value
      });
    });

    _this.labelRef = React.createRef();
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(InputField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        labelWidth: this.labelRef.current.offsetWidth,
        focused: this.props.focus
      });

      if (this.props.focus) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      return !!(this.isFocused() || this.state.text || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _rx, _rx2, _rx3;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: 0
      };
      return React.createElement("div", {
        className: rx('base', {
          focused: this.isFocused(),
          disabled: this.props.disabled
        })
      }, React.createElement("div", {
        className: rx('field', (_rx = {}, _defineProperty(_rx, "size-".concat(this.props.size), true), _defineProperty(_rx, "status-".concat(this.props.status), true), _defineProperty(_rx, "kind-".concat(this.props.kind), true), _defineProperty(_rx, "focused", this.isFocused()), _defineProperty(_rx, "filled", this.state.text), _defineProperty(_rx, "disabled", this.props.disabled), _rx))
      }, React.createElement("label", {
        ref: this.labelRef,
        className: rx('label', (_rx2 = {}, _defineProperty(_rx2, "".concat(this.props.status), true), _defineProperty(_rx2, "".concat(this.props.size), true), _defineProperty(_rx2, "".concat(this.props.kind), true), _defineProperty(_rx2, 'has-icon', !!this.props.icon), _defineProperty(_rx2, "required", this.props.required), _defineProperty(_rx2, "disabled", this.props.disabled), _defineProperty(_rx2, "focused", this.isFocused()), _defineProperty(_rx2, "shrink", this.shrink()), _rx2))
      }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
        className: rx('flatline', (_rx3 = {}, _defineProperty(_rx3, "".concat(this.props.status), true), _defineProperty(_rx3, "focused", this.isFocused()), _defineProperty(_rx3, "idle", !this.isFocused()), _defineProperty(_rx3, "filled", this.state.text), _rx3))
      }, React.createElement("legend", {
        className: rx(),
        style: legendWidth
      }, "\xA0")), icon(this.props.icon), React.createElement("input", {
        className: rx('input', {
          disabled: this.props.disabled
        }),
        ref: this.inputRef,
        type: this.props.type,
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        value: this.state.text,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }), trailIcon(this.props.status, this.props.trailIcon)), this.props.help && React.createElement(Help, {
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
  status: 'default',
  size: 'default',
  kind: 'filled',
  focus: false,
  type: 'text'
};
InputField.propTypes = {
  focus: PropTypes.string.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  trailIcon: PropTypes.string,
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