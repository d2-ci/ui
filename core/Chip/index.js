"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Chip = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

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

var Chip =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Chip, _React$PureComponent);

  function Chip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRemove", function (event) {
      event.stopPropagation();

      _this.props.onRemove();
    });

    return _this;
  }

  _createClass(Chip, [{
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props = this.props,
          icon = _this$props.icon,
          type = _this$props.type;
      return type === 'icon' ? _react.default.createElement(_Icon.default, {
        name: icon,
        className: (0, _styles.default)('icon')
      }) : _react.default.createElement("img", {
        src: icon,
        alt: "chip-icon",
        className: (0, _styles.default)('image-icon')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          onClick = _this$props2.onClick,
          selected = _this$props2.selected,
          disabled = _this$props2.disabled,
          dragging = _this$props2.dragging,
          icon = _this$props2.icon;
      return _react.default.createElement("div", {
        className: (0, _styles.default)('container', {
          static: !onClick,
          selected: selected,
          disabled: disabled,
          dragging: dragging
        }),
        onClick: !disabled && onClick || undefined
      }, icon && this.renderIcon(icon), label && _react.default.createElement("span", {
        className: (0, _styles.default)('label')
      }, label), this.props.onRemove && _react.default.createElement(_Icon.default, {
        name: "cancel",
        className: (0, _styles.default)('remove-icon'),
        onClick: this.onRemove
      }));
    }
  }]);

  return Chip;
}(_react.default.PureComponent);

exports.Chip = Chip;
Chip.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  icon: _propTypes.default.string,
  type: _propTypes.default.oneOf(['image', 'icon']),
  onRemove: _propTypes.default.func,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  dragging: _propTypes.default.bool
};
Chip.defaultProps = {
  onClick: undefined,
  type: 'icon'
};
var _default = Chip;
exports.default = _default;