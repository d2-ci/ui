"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Help = _interopRequireDefault(require("../Help"));

var _Status = require("../../icons/Status.js");

var _styles = _interopRequireDefault(require("./styles.js"));

var _colors = require("../colors.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var statusToIcon = {
  valid: _react.default.createElement(_Status.Valid, null),
  warning: _react.default.createElement(_Status.Warning, null),
  error: _react.default.createElement(_Status.Error, null)
};
var icons = {
  default: {
    styles: _react.default.createElement(_style.default, {
      id: "3476497423"
    }, "svg.jsx-3476497423{fill:".concat(_colors.colors.grey700, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-3476497423"
  },
  valid: {
    styles: _react.default.createElement(_style.default, {
      id: "3522955246"
    }, "svg.jsx-3522955246{fill:".concat(_colors.colors.blue600, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-3522955246"
  },
  warning: {
    styles: _react.default.createElement(_style.default, {
      id: "3520916525"
    }, "svg.jsx-3520916525{fill:".concat(_colors.colors.yellow500, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-3520916525"
  },
  error: {
    styles: _react.default.createElement(_style.default, {
      id: "898494457"
    }, "svg.jsx-898494457{fill:".concat(_colors.colors.red500, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-898494457"
  }
};

function icon(Icon) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

  if (Icon) {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Icon.type, _extends({}, Icon.props, {
      className: icons[extra].className
    })), icons[extra].styles);
  }

  return null;
}

function trailIcon(status, trail, fn) {
  if (status !== 'default') {
    return icon(statusToIcon[status], fn, status);
  } else {
    return trail;
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
      var _cx, _cx2, _cx3;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: '0.01px'
      };
      return _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', this.props.className, {
          focused: this.isFocused(),
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('field', (_cx = {}, _defineProperty(_cx, "size-".concat(this.props.size), true), _defineProperty(_cx, "status-".concat(this.props.status), true), _defineProperty(_cx, "kind-".concat(this.props.kind), true), _defineProperty(_cx, "focused", this.isFocused()), _defineProperty(_cx, "filled", this.props.value), _defineProperty(_cx, "disabled", this.props.disabled), _cx)) || "")
      }, _react.default.createElement("label", {
        ref: this.labelRef,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', (_cx2 = {}, _defineProperty(_cx2, "".concat(this.props.status), true), _defineProperty(_cx2, "".concat(this.props.size), true), _defineProperty(_cx2, "".concat(this.props.kind), true), _defineProperty(_cx2, 'has-icon', !!this.props.icon), _defineProperty(_cx2, "required", this.props.required), _defineProperty(_cx2, "disabled", this.props.disabled), _defineProperty(_cx2, "focused", this.isFocused()), _defineProperty(_cx2, "shrink", this.shrink()), _cx2)) || "")
      }, this.props.label), this.props.kind === 'outlined' && _react.default.createElement("fieldset", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('flatline', (_cx3 = {}, _defineProperty(_cx3, "".concat(this.props.status), true), _defineProperty(_cx3, "focused", this.isFocused()), _defineProperty(_cx3, "idle", !this.isFocused()), _defineProperty(_cx3, "filled", this.props.value), _cx3)) || "")
      }, _react.default.createElement("legend", {
        style: legendWidth,
        className: "jsx-".concat(_styles.default.__hash) + " " + "legend"
      }, _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash)
      }, "\u200B"))), icon(this.props.icon), _react.default.createElement("input", {
        ref: this.inputRef,
        type: this.props.type,
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        value: this.props.value,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)({
          disabled: this.props.disabled
        }) || "")
      }), trailIcon(this.props.status, this.props.trailIcon)), this.props.help && _react.default.createElement(_Help.default, {
        text: this.props.help,
        status: this.props.status
      }), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return InputField;
}(_react.default.Component);

exports.InputField = InputField;
InputField.defaultProps = {
  status: 'default',
  size: 'default',
  kind: 'filled',
  type: 'text',
  focus: false,
  disabled: false,
  required: false
};
InputField.propTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  help: _propTypes.default.string,
  icon: _propTypes.default.element,
  trailIcon: _propTypes.default.element,
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