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

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _utils = require("../../utils");

var _styles = _interopRequireDefault(require("./styles"));

var _Paper = _interopRequireDefault(require("../Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var disableScrollingClass = (0, _styles.default)('disable-scroll');

var Dialog =
/*#__PURE__*/
function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBackdropClick", function () {
      var _this$props = _this.props,
          dismissible = _this$props.dismissible,
          closeHandler = _this$props.closeHandler;
      dismissible && closeHandler && closeHandler();
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBodyScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBodyScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.updateBodyScroll(true);
    }
  }, {
    key: "updateBodyScroll",
    value: function updateBodyScroll(forceOff) {
      var _this$props2 = this.props,
          open = _this$props2.open,
          isAnimatingOut = _this$props2.isAnimatingOut;

      if (forceOff || !open && !isAnimatingOut) {
        document.body.classList.remove(disableScrollingClass);
      } else {
        document.body.classList.add(disableScrollingClass);
      }
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var title = this.props.title;

      if (!title) {
        return null;
      }

      var isText = ['string', 'number'].includes(_typeof(title));
      return _react.default.createElement("header", {
        className: (0, _styles.default)('title')
      }, isText ? _react.default.createElement("h6", null, title) : title);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var actions = this.props.actions;

      if (_react.default.Children.count(actions) === 0) {
        return null;
      }

      return _react.default.createElement("footer", {
        className: (0, _styles.default)('footer')
      }, _react.default.Children.toArray(actions));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          size = _this$props3.size,
          content = _this$props3.content,
          open = _this$props3.open,
          isAnimatingOut = _this$props3.isAnimatingOut,
          onAnimationEnd = _this$props3.onAnimationEnd;

      if (!open && !isAnimatingOut) {
        return null;
      }

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
        className: (0, _styles.default)('window', size, animateOutClass)
      }, _react.default.createElement("div", {
        className: (0, _styles.default)('scroll-box')
      }, this.renderTitle(), _react.default.createElement("section", {
        className: (0, _styles.default)('content')
      }, content), this.renderFooter()))), document.body);
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.defaultProps = {
  size: 'medium',
  dismissible: true
};
var EnhancedDialog = (0, _utils.withAnimatedClose)(Dialog);
exports.Dialog = EnhancedDialog;

var _default = (0, _utils.withAnimatedClose)(EnhancedDialog);

exports.default = _default;