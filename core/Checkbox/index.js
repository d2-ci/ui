"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _styles = _interopRequireDefault(require("./styles.js"));

var _Checkbox = require("../../icons/Checkbox.js");

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

var icons = {
  default: {
    styles: _react.default.createElement(_style.default, {
      id: "2215268291"
    }, "svg.jsx-2215268291{fill:".concat(_theme.colors.grey700, ";height:24px;width:24px;}")),
    className: "jsx-2215268291"
  },
  checked: {
    styles: _react.default.createElement(_style.default, {
      id: "3230514506"
    }, "svg.jsx-3230514506{fill:".concat(_theme.colors.teal400, ";height:24px;width:24px;}")),
    className: "jsx-3230514506"
  },
  valid: {
    styles: _react.default.createElement(_style.default, {
      id: "1378458444"
    }, "svg.jsx-1378458444{fill:".concat(_theme.colors.blue600, ";height:24px;width:24px;}")),
    className: "jsx-1378458444"
  },
  warning: {
    styles: _react.default.createElement(_style.default, {
      id: "3220898470"
    }, "svg.jsx-3220898470{fill:".concat(_theme.colors.yellow500, ";height:24px;width:24px;}")),
    className: "jsx-3220898470"
  },
  error: {
    styles: _react.default.createElement(_style.default, {
      id: "2028575264"
    }, "svg.jsx-2028575264{fill:".concat(_theme.colors.red500, ";height:24px;width:24px;}")),
    className: "jsx-2028575264"
  }
};

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      indeterminate: _this.props.indeterminate
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function () {
      _this.props.onChange(_this.props.name, !_this.props.checked);

      if (_this.state.indeterminate) {
        _this.setState({
          indeterminate: false
        });
      }
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          status = _this$props.status,
          checked = _this$props.checked,
          className = _this$props.className;
      var state = status === 'default' && checked ? 'checked' : status;

      var icon = _react.default.createElement(_Checkbox.Unchecked, {
        className: icons[state].className
      });

      if (this.state.indeterminate) {
        icon = _react.default.createElement(_Checkbox.Indeterminate, {
          className: icons[state].className
        });
      } else if (this.props.checked) {
        icon = _react.default.createElement(_Checkbox.Checked, {
          className: icons[state].className
        });
      }

      console.log(icon);
      return _react.default.createElement("label", {
        className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', className, {
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement("input", {
        type: "checkbox",
        onChange: this.onChange,
        checked: this.props.checked,
        disabled: this.props.disabled,
        className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash)
      }), icon, _react.default.createElement("span", {
        className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', {
          required: required
        }) || "")
      }, this.props.label), icons[state].styles, _react.default.createElement(_style.default, {
        id: _theme.fonts.__hash
      }, _theme.fonts), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Checkbox;
}(_react.default.Component);

exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  checked: false,
  required: false,
  disabled: false,
  indeterminate: false,
  status: 'default'
};
Checkbox.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  checked: _propTypes.default.bool,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  indeterminate: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error'])
};
var _default = Checkbox;
exports.default = _default;