"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireWildcard(require("./styles"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

function icon(i) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (i) {
    return _react.default.createElement("div", {
      className: (0, _styles.rx)()
    }, _react.default.createElement(_Icon.default, {
      name: i,
      onClick: action,
      className: (0, _styles.default)('icon', extra)
    }));
  }

  return null;
}

function trailIcon(status, trail, fn) {
  if (status !== 'default') {
    return icon(statusToIcon[status], fn, "icon-".concat(status));
  } else {
    return icon(trail, fn);
  }
}

var _ref =
/*#__PURE__*/
_react.default.createElement("span", null, "\u200B");

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focused: false,
      labelWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (evt) {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (evt) {
      _this.setState({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (evt) {
      if (_this.props.disabled) {
        return;
      }

      _this.props.onChange(_this.props.name, evt.target.value);
    });

    _this.labelRef = _react.default.createRef();
    _this.inputRef = _react.default.createRef();
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
      return !!(this.isFocused() || this.props.value || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _rx, _rx2, _rx3;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: '0.01px'
      };
      return _react.default.createElement("div", {
        className: (0, _styles.rx)('base', {
          focused: this.isFocused(),
          disabled: this.props.disabled
        })
      }, _react.default.createElement("div", {
        className: (0, _styles.rx)('field', (_rx = {}, _defineProperty(_rx, "size-".concat(this.props.size), true), _defineProperty(_rx, "status-".concat(this.props.status), true), _defineProperty(_rx, "kind-".concat(this.props.kind), true), _defineProperty(_rx, "focused", this.isFocused()), _defineProperty(_rx, "filled", this.props.value), _defineProperty(_rx, "disabled", this.props.disabled), _rx))
      }, _react.default.createElement("label", {
        ref: this.labelRef,
        className: (0, _styles.rx)('label', (_rx2 = {}, _defineProperty(_rx2, "".concat(this.props.status), true), _defineProperty(_rx2, "".concat(this.props.size), true), _defineProperty(_rx2, "".concat(this.props.kind), true), _defineProperty(_rx2, 'has-icon', !!this.props.icon), _defineProperty(_rx2, "required", this.props.required), _defineProperty(_rx2, "disabled", this.props.disabled), _defineProperty(_rx2, "focused", this.isFocused()), _defineProperty(_rx2, "shrink", this.shrink()), _rx2))
      }, this.props.label), this.props.kind === 'outlined' && _react.default.createElement("fieldset", {
        className: (0, _styles.rx)('flatline', (_rx3 = {}, _defineProperty(_rx3, "".concat(this.props.status), true), _defineProperty(_rx3, "focused", this.isFocused()), _defineProperty(_rx3, "idle", !this.isFocused()), _defineProperty(_rx3, "filled", this.props.value), _rx3))
      }, _react.default.createElement("legend", {
        className: (0, _styles.rx)('legend'),
        style: legendWidth
      }, _ref)), icon(this.props.icon), _react.default.createElement("input", {
        className: (0, _styles.rx)('input', {
          disabled: this.props.disabled
        }),
        ref: this.inputRef,
        type: this.props.type,
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        value: this.props.value,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }), trailIcon(this.props.status, this.props.trailIcon, this.props.onTrailIconClick)), this.props.help && _react.default.createElement(_helpers.Help, {
        text: this.props.help,
        status: this.props.status
      }));
    }
  }]);

  return InputField;
}(_react.default.Component);

exports.InputField = InputField;
InputField.defaultProps = {
  value: '',
  label: '',
  help: '',
  placeholder: '',
  icon: '',
  trailIcon: '',
  status: 'default',
  size: 'default',
  kind: 'filled',
  type: 'text',
  focus: false,
  disabled: false,
  required: false,
  onTrailIconClick: null
};
InputField.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  help: _propTypes.default.string,
  icon: _propTypes.default.string,
  trailIcon: _propTypes.default.string,
  onTrailIconClick: _propTypes.default.func,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error']),
  size: _propTypes.default.oneOf(['default', 'dense']),
  kind: _propTypes.default.oneOf(['filled', 'outlined']),
  type: _propTypes.default.oneOf(['text', 'email', 'number', 'password', 'url']),
  focus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
var _default = InputField;
exports.default = _default;