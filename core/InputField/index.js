"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputField = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _helpers = require("../helpers");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO disabled state
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
      return _this.props.onChange(_this.props.name, evt.target.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      if (_this.ref) {
        _this.ref.focus();

        _this.setState({
          focused: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      return _this.setState({
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
      var _this2 = this,
          _s;

      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: (0, _styles.default)('container', (_s = {
          disabled: this.props.disabled
        }, _defineProperty(_s, "size-".concat(this.props.size), true), _defineProperty(_s, "kind-".concat(this.props.kind), true), _defineProperty(_s, 'is-empty', !(this.props.value || this.props.placeholder || this.state.focused)), _s)),
        onClick: this.onClick
      }, _react.default.createElement("div", {
        className: (0, _styles.default)('field')
      }, this.props.icon && _react.default.createElement("div", {
        className: (0, _styles.default)('icon')
      }, _react.default.createElement(_Icon.default, {
        name: this.props.icon
      })), _react.default.createElement("input", {
        ref: function ref(c) {
          return _this2.ref = c;
        },
        className: (0, _styles.default)('input'),
        type: this.props.type,
        value: this.props.value,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        placeholder: this.props.placeholder
      }), _react.default.createElement(_helpers.Label, {
        size: this.props.size,
        kind: this.props.kind,
        text: this.props.label,
        status: this.props.status,
        focused: this.state.focused,
        disabled: this.props.disabled,
        hasIcon: !!this.props.icon,
        state: this.props.placeholder || this.props.value || this.state.focused ? 'minimized' : 'default'
      })), this.props.help && _react.default.createElement(_helpers.Help, {
        text: this.props.help,
        status: this.props.status
      }));
    }
  }]);

  return InputField;
}(_react.default.Component);

exports.InputField = InputField;
InputField.defaultProps = {
  disabled: false,
  label: '',
  size: 'default',
  kind: 'filled'
};
var _default = InputField;
exports.default = _default;