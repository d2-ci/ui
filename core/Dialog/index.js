"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dialog = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBackdropClick", function () {
      if (!_this.props.dismissible) {
        return;
      }

      _this.props.onClose && _this.props.onClose();
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "updateScroll",
    value: function updateScroll(forceOff) {
      var _this$props = this.props,
          open = _this$props.open,
          isAnimatingOut = _this$props.isAnimatingOut;
      var disableScrollingClass = (0, _styles.default)('disable-scroll');

      if (forceOff || !open && !isAnimatingOut) {
        document.body.classList.remove(disableScrollingClass);
      } else {
        document.body.classList.add(disableScrollingClass);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.updateScroll(true);
    }
  }, {
    key: "title",
    value: function title() {
      if (!this.props.title) {
        return null;
      }

      var title = this.props.title;
      var isText = ['string', 'number'].includes(_typeof(title));
      return _react.default.createElement("header", {
        className: (0, _styles.default)('title')
      }, isText ? _react.default.createElement("h6", null, title) : title);
    }
  }, {
    key: "footer",
    value: function footer() {
      if (this.props.actions.length === 0) {
        return null;
      }

      return _react.default.createElement("footer", {
        className: (0, _styles.default)('footer')
      }, this.props.actions);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.open && !this.props.isAnimatingOut) {
        return null;
      }

      var _this$props2 = this.props,
          isAnimatingOut = _this$props2.isAnimatingOut,
          onAnimationEnd = _this$props2.onAnimationEnd;

      var animateOutClass = _defineProperty({}, (0, _styles.default)('animate-out'), isAnimatingOut);

      var animateOutProps = isAnimatingOut ? {
        onAnimationEnd: onAnimationEnd
      } : null;
      return _reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _styles.default)('container')
      }, _react.default.createElement("div", _extends({
        className: (0, _styles.default)('backdrop', animateOutClass),
        onClick: this.onBackdropClick
      }, animateOutProps)), _react.default.createElement("div", {
        className: (0, _styles.default)('window', this.props.size, animateOutClass)
      }, this.title(), _react.default.createElement("section", {
        className: (0, _styles.default)('content')
      }, this.props.children), this.footer())), document.body);
    }
  }]);

  return Dialog;
}(_react.default.Component);

Dialog.defaultProps = {
  size: 'medium',
  dismissible: true
};
var EnhancedDialog = (0, _utils.withAnimatedClose)(Dialog);
exports.Dialog = EnhancedDialog;
var _default = EnhancedDialog;
exports.default = _default;