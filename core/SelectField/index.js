"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _Help = _interopRequireDefault(require("../Help"));

var _utils = require("../../utils");

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _colors = require("../colors.js");

var _Status = require("../../icons/Status.js");

var _Arrow = require("../../icons/Arrow.js");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ArrowIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "1039571365"
  }, "svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"),
  className: "jsx-1039571365"
};
var statusToIcon = {
  valid: _react.default.createElement(_Status.Valid, null),
  warning: _react.default.createElement(_Status.Warning, null),
  error: _react.default.createElement(_Status.Error, null)
};
var icons = {
  default: {
    styles: _react.default.createElement(_style.default, {
      id: "2469916096"
    }, "svg.jsx-2469916096{fill:".concat(_colors.colors.grey700, ";height:24px;width:24px;}")),
    className: "jsx-2469916096"
  },
  valid: {
    styles: _react.default.createElement(_style.default, {
      id: "1378458444"
    }, "svg.jsx-1378458444{fill:".concat(_colors.colors.blue600, ";height:24px;width:24px;}")),
    className: "jsx-1378458444"
  },
  warning: {
    styles: _react.default.createElement(_style.default, {
      id: "3220898470"
    }, "svg.jsx-3220898470{fill:".concat(_colors.colors.yellow500, ";height:24px;width:24px;}")),
    className: "jsx-3220898470"
  },
  error: {
    styles: _react.default.createElement(_style.default, {
      id: "2028575264"
    }, "svg.jsx-2028575264{fill:".concat(_colors.colors.red500, ";height:24px;width:24px;}")),
    className: "jsx-2028575264"
  }
};

function icon(Icon) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

  if (Icon) {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Icon.type, _extends({}, Icon.props, {
      onClick: action,
      className: icons[extra].className
    })), icons[extra].styles);
  }

  return null;
}

function trailIcon(status, trail, fn) {
  if (status !== 'default') {
    return icon(statusToIcon[status], fn, status);
  } else {
    return icon(trail, fn);
  }
}

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(function (item) {
    item.active = item.value && item.value === value;

    if (Array.isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false,
      labelWidth: 0
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
      if (_this.props.disabled) {
        return false;
      }

      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (value) {
      if (_this.props.disabled) {
        return false;
      }

      _this.setState({
        open: false
      });

      _this.props.onChange(_this.props.name, value);
    });

    _this.labelRef = _react.default.createRef();
    return _this;
  }

  _createClass(SelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
      this.setState({
        labelWidth: this.labelRef.current.offsetWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      var _this2 = this;

      if (!this.props.value) {
        return false;
      }

      var selected = this.props.list.filter(function (_ref) {
        var value = _ref.value;
        return _this2.props.value === value;
      });
      return selected.length > 0 ? selected[0]['label'] : null;
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      return !!(this.isFocused() || this.props.value || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _cx2,
          _cx3,
          _cx4;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: '0.01px'
      };
      var open = this.state.open;
      var width = 'inherit';

      if (open && this.elSelect) {
        width = "".concat(this.elSelect.getBoundingClientRect().width, "px");
      }

      var selected = this.getLabel();
      var list = markActive(this.props.list, this.props.value);
      var Arrow = open ? _react.default.createElement(_Arrow.ArrowUp, {
        className: ArrowIcon.className
      }) : _react.default.createElement(_Arrow.ArrowDown, {
        className: ArrowIcon.className
      });
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', this.props.className, _defineProperty({
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, "size-".concat(this.props.size), true)) || "")
      }, _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elSelect = c;
        },
        onClick: this.onToggle,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('select', (_cx2 = {}, _defineProperty(_cx2, "kind-".concat(this.props.kind), true), _defineProperty(_cx2, "status-".concat(this.props.status), true), _defineProperty(_cx2, "disabled", this.props.disabled), _cx2)) || "")
      }, _react.default.createElement("label", {
        ref: this.labelRef,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', (_cx3 = {}, _defineProperty(_cx3, "".concat(this.props.status), true), _defineProperty(_cx3, "".concat(this.props.size), true), _defineProperty(_cx3, "".concat(this.props.kind), true), _defineProperty(_cx3, 'has-icon', !!this.props.icon), _defineProperty(_cx3, "required", this.props.required), _defineProperty(_cx3, "disabled", this.props.disabled), _defineProperty(_cx3, "focused", this.isFocused()), _defineProperty(_cx3, "shrink", !!selected), _cx3)) || "")
      }, this.props.label), this.props.kind === 'outlined' && _react.default.createElement("fieldset", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('flatline', (_cx4 = {}, _defineProperty(_cx4, "".concat(this.props.status), true), _defineProperty(_cx4, "focused", this.isFocused()), _defineProperty(_cx4, "idle", !this.isFocused()), _defineProperty(_cx4, "filled", this.state.text), _cx4)) || "")
      }, _react.default.createElement("legend", {
        style: legendWidth,
        className: "jsx-".concat(_styles.default.__hash) + " " + "legend"
      }, _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash)
      }, "\u200B"))), this.props.icon && _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "lead-icon-field"
      }, this.props.icon), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('input-field', {
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "value"
      }, selected)), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "trail-icon-field"
      }, this.props.status !== 'default' && trailIcon(this.props.status)), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('trail-icon-field', {
          disabled: this.props.disabled
        }) || "")
      }, Arrow)), this.props.help && _react.default.createElement(_Help.default, {
        text: this.props.help,
        status: this.props.status
      }), open && _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elMenu = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + "menu"
      }, _react.default.createElement(_Menu.default, {
        list: list,
        size: this.props.size,
        onClick: this.onClick
      })), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return SelectField;
}(_react.default.Component);

exports.SelectField = SelectField;
SelectField.defaultProps = {
  size: 'default',
  kind: 'filled',
  status: 'default',
  disabled: false,
  required: false
};
SelectField.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
  })).isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  icon: _propTypes.default.element,
  help: _propTypes.default.string,
  size: _propTypes.default.oneOf(['default', 'dense']),
  kind: _propTypes.default.oneOf(['filled', 'outlined']),
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error']),
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
var _default = SelectField;
exports.default = _default;