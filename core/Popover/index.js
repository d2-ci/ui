"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Popover = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _computePosition = _interopRequireWildcard(require("./computePosition"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bem = (0, _utils.bemClassNames)('popover');

var Popover =
/*#__PURE__*/
function (_Component) {
  _inherits(Popover, _Component);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPopupRendered", function (ref) {
      _this.popupRef = ref;

      _this.positionPopup();
    });

    _this.state = {
      popupComputedStyle: null
    };
    _this.popupRef = null;
    return _this;
  }

  _createClass(Popover, [{
    key: "positionPopup",
    value: function positionPopup() {
      var _this$props = this.props,
          getAnchorRef = _this$props.getAnchorRef,
          anchorAttachPoint = _this$props.anchorAttachPoint,
          popoverAttachPoint = _this$props.popoverAttachPoint;

      var triggerEl = _reactDom.default.findDOMNode(getAnchorRef());

      if (triggerEl && this.popupRef) {
        this.setState({
          popupComputedStyle: _objectSpread({}, (0, _computePosition.default)(this.popupRef, triggerEl, anchorAttachPoint, popoverAttachPoint), {
            opacity: 1
          })
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          children = _this$props2.children,
          closePopover = _this$props2.closePopover,
          appearAnimation = _this$props2.appearAnimation;
      var popupComputedStyle = this.state.popupComputedStyle;

      if (!open) {
        return null;
      }

      return _reactDom.default.createPortal(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: bem.e('overlay'),
        onClick: closePopover
      }), _react.default.createElement("div", {
        className: bem.b(appearAnimation),
        ref: this.onPopupRendered,
        style: popupComputedStyle
      }, children)), document.body);
    }
  }]);

  return Popover;
}(_react.Component);

exports.Popover = Popover;

var attachPointPropType = _propTypes.default.shape({
  vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([_computePosition.TOP, _computePosition.MIDDLE, _computePosition.BOTTOM])]).isRequired,
  horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([_computePosition.LEFT, _computePosition.CENTER, _computePosition.RIGHT])]).isRequired
});

Popover.defaultProps = {
  anchorAttachPoint: {
    vertical: 'middle',
    horizontal: 'center'
  },
  popoverAttachPoint: {
    vertical: 'middle',
    horizontal: 'center'
  },
  appearAnimation: 'fade-in'
};
var _default = Popover;
exports.default = _default;