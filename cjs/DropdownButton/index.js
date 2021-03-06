"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownButton = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _utils = require("../utils");

var _Arrow = require("../icons/Arrow.js");

var _styles = _interopRequireDefault(require("../Button/styles.js"));

var _styles2 = _interopRequireDefault(require("./styles.js"));

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

var ArrowIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "1039571365"
  }, "svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"),
  className: "jsx-1039571365"
};

var DropdownButton =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownButton, _Component);

  function DropdownButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elMenu) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var menu = _this.elMenu.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _utils.isPointInRect)(target, menu) && !(0, _utils.isPointInRect)(target, container)) {
          _this.setState({
            open: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  _createClass(DropdownButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var width = this.props.width;

      if (!width) {
        width = this.elContainer ? this.elContainer.getBoundingClientRect()['width'] : 'inherit';
      }

      var icon = open ? _react.default.createElement(_Arrow.ArrowUp, {
        className: ArrowIcon.className
      }) : _react.default.createElement(_Arrow.ArrowDown, {
        className: ArrowIcon.className
      });
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-".concat(_styles.default.__hash, " jsx-").concat(_styles2.default.__hash)
      }, _react.default.createElement("button", {
        disabled: this.props.disabled,
        onClick: this.onToggle,
        className: "jsx-".concat(_styles.default.__hash, " jsx-").concat(_styles2.default.__hash) + " " + ((0, _classnames.default)('base', "kind-".concat(this.props.kind), "size-".concat(this.props.size), this.props.className, {
          'icon-only': this.props.icon && !this.props.label && !this.props.children,
          icon: this.props.icon
        }) || "")
      }, this.props.icon && _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash, " jsx-").concat(_styles2.default.__hash) + " " + "button-icon"
      }, this.props.icon), _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash, " jsx-").concat(_styles2.default.__hash) + " " + "menu-label"
      }, this.props.label), icon), open && _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elMenu = c;
        },
        className: "jsx-".concat(_styles.default.__hash, " jsx-").concat(_styles2.default.__hash) + " " + "menu"
      }, _react.default.createElement(_Menu.default, {
        list: this.props.list,
        onClick: this.props.onClick
      })), ArrowIcon.styles, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default), _react.default.createElement(_style.default, {
        id: _styles2.default.__hash
      }, _styles2.default));
    }
  }]);

  return DropdownButton;
}(_react.Component);

exports.DropdownButton = DropdownButton;
DropdownButton.defaultProps = {
  size: 'medium',
  kind: 'basic',
  disabled: false
};
DropdownButton.propTypes = {
  className: _propTypes.default.string,
  list: _propTypes.default.array.isRequired,
  width: _propTypes.default.string,
  icon: _propTypes.default.element,
  label: _propTypes.default.string,
  kind: _propTypes.default.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = DropdownButton;
exports.default = _default;