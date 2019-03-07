"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Chip = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _styles = _interopRequireDefault(require("./styles.js"));

var _Cancel = require("../../icons/Cancel.js");

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

var removeIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "495350568"
  }, "svg.jsx-495350568{margin-right:4px;color:".concat(_theme.colors.grey700, ";height:18px;width:18px;cursor:pointer;opacity:1;pointer-events:all;}svg.jsx-495350568 hover.jsx-495350568{opacity:0.82;}")),
  className: "jsx-495350568"
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "1103371405"
}, "img.jsx-1103371405{width:24px;height:24px;margin-left:4px;border-radius:50%;}");

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "3458732931"
}, "span.jsx-3458732931{width:24px;height:24px;margin-left:4px;border-radius:50%;overflow:hidden;}");

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      if (!_this.props.disabled && _this.props.onClick) {
        return _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRemove", function (evt) {
      evt.stopPropagation(); // stop onRemove from triggering onClick on container

      _this.props.onRemove();
    });

    return _this;
  }

  _createClass(Chip, [{
    key: "showIcon",
    value: function showIcon() {
      var icon = this.props.icon;

      if (!icon) {
        return;
      }

      if (this.props.type === 'image') {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("img", {
          src: icon,
          alt: "chip icon",
          className: "jsx-1103371405"
        }), _ref);
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
        className: "jsx-3458732931"
      }, icon), _ref2);
    }
  }, {
    key: "showRemove",
    value: function showRemove() {
      if (this.props.onRemove) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Cancel.Cancel, {
          className: removeIcon.className,
          onClick: this.onRemove
        }), removeIcon.styles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          selected = _this$props.selected,
          disabled = _this$props.disabled,
          dragging = _this$props.dragging,
          overflow = _this$props.overflow,
          className = _this$props.className;
      return _react.default.createElement("div", {
        onClick: this.onClick,
        className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', className, {
          selected: selected,
          disabled: disabled,
          dragging: dragging,
          static: !this.props.onClick
        }) || "")
      }, this.showIcon(), _react.default.createElement("span", {
        className: "jsx-".concat(_theme.fonts.__hash, " jsx-").concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', {
          overflow: overflow
        }) || "")
      }, label), this.showRemove(), _react.default.createElement(_style.default, {
        id: _theme.fonts.__hash
      }, _theme.fonts), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Chip;
}(_react.default.PureComponent);

exports.Chip = Chip;
Chip.defaultProps = {
  type: 'icon',
  selected: false,
  disabled: false,
  dragging: false,
  overflow: true
};
Chip.propTypes = {
  className: _propTypes.default.className,
  label: _propTypes.default.string.isRequired,
  icon: _propTypes.default.element,
  type: _propTypes.default.oneOf(['icon', 'image']),
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  dragging: _propTypes.default.bool,
  overflow: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onRemove: _propTypes.default.func
};
var _default = Chip;
exports.default = _default;