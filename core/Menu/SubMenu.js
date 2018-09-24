"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenu = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../utils/index");

var _PopoverMenu = _interopRequireDefault(require("./PopoverMenu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var anchorAttachPoint = {
  vertical: 'top',
  horizontal: 'right'
};
var popoverAttachPoint = {
  vertical: 'top',
  horizontal: 'left'
};

var SubMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(SubMenu, _Component);

  function SubMenu(props) {
    var _this;

    _classCallCheck(this, SubMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openPopover", function () {
      _this.setState({
        popoverOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.setState({
        popoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getAnchorRef", function () {
      return _this.anchorRef;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAnchorRef", function (node) {
      return _this.anchorRef = node;
    });

    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(SubMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          label = _this$props.label,
          icon = _this$props.icon,
          menuItems = _this$props.menuItems;
      var arrowIconName = (0, _index.isRtl)() ? 'keyboard_arrow_left' : 'keyboard_arrow_right'; // There MUST be a better way of doing this!

      var menuProps = (0, _react.isValidElement)(menuItems[0]) ? {
        children: menuItems
      } : {
        options: menuItems
      };
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_MenuItem.default, {
        ref: this.setAnchorRef,
        onClick: this.openPopover
      }, children ? children : [icon && _react.default.createElement(_Icon.default, {
        key: "icon",
        name: icon
      }), label], _react.default.createElement(_Icon.default, {
        name: arrowIconName
      })), _react.default.createElement(_PopoverMenu.default, {
        anchorAttachPoint: anchorAttachPoint,
        closePopover: this.closePopover,
        getAnchorRef: this.getAnchorRef,
        open: this.state.popoverOpen,
        menuProps: menuProps,
        popoverAttachPoint: popoverAttachPoint,
        appearAnimation: "slide-x-y"
      }));
    }
  }]);

  return SubMenu;
}(_react.Component);

exports.SubMenu = SubMenu;