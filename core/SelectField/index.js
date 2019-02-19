"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _helpers = require("../helpers");

var _utils = require("../../utils");

var _styles = _interopRequireWildcard(require("./styles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var statusToIcon = {
  valid: 'check_circle',
  warning: 'warning',
  error: 'error'
};

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

var _ref2 =
/*#__PURE__*/
_react.default.createElement("span", null, "\u200B");

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
          _rx2,
          _rx3,
          _rx4;

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
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: (0, _styles.rx)('base', _defineProperty({
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, "size-".concat(this.props.size), true))
      }, _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elSelect = c;
        },
        className: (0, _styles.rx)('select', (_rx2 = {}, _defineProperty(_rx2, "kind-".concat(this.props.kind), true), _defineProperty(_rx2, "status-".concat(this.props.status), true), _defineProperty(_rx2, "disabled", this.props.disabled), _rx2)),
        onClick: this.onToggle
      }, _react.default.createElement("label", {
        ref: this.labelRef,
        className: (0, _styles.rx)('label', (_rx3 = {}, _defineProperty(_rx3, "".concat(this.props.status), true), _defineProperty(_rx3, "".concat(this.props.size), true), _defineProperty(_rx3, "".concat(this.props.kind), true), _defineProperty(_rx3, 'has-icon', !!this.props.icon), _defineProperty(_rx3, "required", this.props.required), _defineProperty(_rx3, "disabled", this.props.disabled), _defineProperty(_rx3, "focused", this.isFocused()), _defineProperty(_rx3, "shrink", !!selected), _rx3))
      }, this.props.label), this.props.kind === 'outlined' && _react.default.createElement("fieldset", {
        className: (0, _styles.rx)('flatline', (_rx4 = {}, _defineProperty(_rx4, "".concat(this.props.status), true), _defineProperty(_rx4, "focused", this.isFocused()), _defineProperty(_rx4, "idle", !this.isFocused()), _defineProperty(_rx4, "filled", this.state.text), _rx4))
      }, _react.default.createElement("legend", {
        className: (0, _styles.default)('legend'),
        style: legendWidth
      }, _ref2)), this.props.icon && _react.default.createElement("div", {
        className: (0, _styles.default)('lead-icon-field')
      }, _react.default.createElement(_Icon.default, {
        name: this.props.icon,
        className: (0, _styles.default)('icon')
      })), _react.default.createElement("div", {
        className: (0, _styles.rx)('input-field', {
          disabled: this.props.disabled
        })
      }, _react.default.createElement("div", {
        className: (0, _styles.rx)('value')
      }, selected)), _react.default.createElement("div", {
        className: (0, _styles.rx)('trail-icon-field')
      }, this.props.status !== 'default' && _react.default.createElement(_Icon.default, {
        name: statusToIcon[this.props.status],
        className: (0, _styles.default)('icon', _defineProperty({}, "icon-".concat(this.props.status), true))
      })), _react.default.createElement("div", {
        className: (0, _styles.rx)('trail-icon-field', {
          disabled: this.props.disabled
        })
      }, _react.default.createElement(_Icon.default, {
        name: open ? 'arrow_drop_up' : 'arrow_drop_down',
        className: (0, _styles.default)('arrow-icon', {
          disabled: this.props.disabled
        })
      }))), this.props.help && _react.default.createElement(_helpers.Help, {
        text: this.props.help,
        status: this.props.status
      }), open && _react.default.createElement("div", {
        className: (0, _styles.rx)('menu'),
        ref: function ref(c) {
          return _this3.elMenu = c;
        }
      }, _react.default.createElement(_Menu.default, {
        list: list,
        size: this.props.size,
        onClick: this.onClick
      })));
    }
  }]);

  return SelectField;
}(_react.default.Component);

exports.SelectField = SelectField;
SelectField.defaultProps = {
  value: '',
  icon: '',
  help: '',
  size: 'default',
  kind: 'filled',
  status: 'default',
  disabled: false,
  required: false
};
SelectField.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
  })).isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  icon: _propTypes.default.string,
  help: _propTypes.default.string,
  size: _propTypes.default.oneOf(['default', 'dense']),
  kind: _propTypes.default.oneOf(['filled', 'outlined']),
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error']),
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
var _default = SelectField;
exports.default = _default;