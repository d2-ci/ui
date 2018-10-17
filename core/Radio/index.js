"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Radio = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

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

var Radio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      return _this.props.onChange(_this.props.name, _this.props.value);
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var color = this.props.disabled ? 'grey-light' : 'grey';

      var icon = _react.default.createElement(_Icon.default, {
        name: this.props.checked ? 'radio_button_checked' : 'radio_button_unchecked',
        className: "".concat(color, " ").concat(this.props.status)
      });

      return _react.default.createElement("label", {
        className: (0, _styles.default)('container')
      }, _react.default.createElement("input", {
        type: "radio",
        name: this.props.name,
        onChange: this.onChange,
        checked: this.props.checked,
        value: this.props.value,
        disabled: this.props.disabled
      }), icon, _react.default.createElement("span", {
        className: (0, _styles.default)('label', _defineProperty({}, this.props.status, true))
      }, this.props.label));
    }
  }]);

  return Radio;
}(_react.default.Component);

exports.Radio = Radio;
Radio.defaultProps = {
  label: '',
  checked: false,
  status: 'default',
  disabled: false
};
Radio.propTypes = {
  name: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: _propTypes.default.func.isRequired
};
var _default = Radio;
exports.default = _default;