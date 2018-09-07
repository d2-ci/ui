"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.find");

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireWildcard(require("./TextField"));

var _Menu = require("../Menu");

var _utils = require("../utils");

require("./selectfield.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bem = (0, _utils.bemClassNames)('d2ui-select');

var SelectField =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openDropdown", function () {
      _this.setState({
        dropdownOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeDropdown", function () {
      _this.setState({
        dropdownOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAnchorRef", function (node) {
      _this.anchorRef = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getAnchorRef", function () {
      return _this.anchorRef;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectHandler", function (event, value) {
      _this.closeDropdown();

      _this.props.onChange(value);
    });

    _this.state = {
      dropdownOpen: false
    };
    _this.anchorRef = null;
    return _this;
  }

  _createClass(SelectField, [{
    key: "renderCustomSelect",
    value: function renderCustomSelect(displayValue) {
      var className = "".concat(bem.e('input'), " ").concat(_TextField.bem.e('input'));
      return _react.default.createElement("input", {
        className: className,
        value: displayValue,
        onClick: this.openDropdown // input type "button" is focusable, which ensures the correct :focus styles are applied
        // input type "button" does not show a caret when focussed
        ,
        type: "button",
        ref: this.setAnchorRef
      });
    }
  }, {
    key: "renderNativeSelect",
    value: function renderNativeSelect() {
      return _react.default.createElement("div", null, "Not implemented yet");
    }
  }, {
    key: "getLabelOfValue",
    value: function getLabelOfValue() {
      var _this$props = this.props,
          options = _this$props.options,
          value = _this$props.value;
      var selectedOption = options.find(function (option) {
        return option.value === value;
      });
      return selectedOption ? selectedOption.label : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          options = _this$props2.options,
          label = _this$props2.label,
          variant = _this$props2.variant,
          leadingIcon = _this$props2.leadingIcon,
          helpText = _this$props2.helpText,
          dense = _this$props2.dense,
          valid = _this$props2.valid,
          error = _this$props2.error,
          warning = _this$props2.warning,
          native = _this$props2.native;
      var displayValue = this.getLabelOfValue();
      var inputComponent = native ? this.renderNativeSelect() : this.renderCustomSelect(displayValue);
      var textFieldProps = {
        variant: variant,
        label: label,
        leadingIcon: leadingIcon,
        helpText: helpText,
        dense: dense,
        valid: valid,
        error: error,
        warning: warning
      };
      return _react.default.createElement("div", {
        className: bem.b()
      }, _react.default.createElement(_TextField.default, _extends({
        inputComponent: inputComponent,
        onChange: _utils.noop,
        value: displayValue,
        trailingIcon: "keyboard_arrow_down"
      }, textFieldProps)), _react.default.createElement(_Menu.PopoverMenu, {
        menuProps: {
          options: options,
          selectHandler: this.selectHandler
        },
        getAnchorRef: this.getAnchorRef,
        open: this.state.dropdownOpen,
        closePopover: this.closeDropdown,
        anchorAttachPoint: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        popoverAttachPoint: {
          vertical: 'top',
          horizontal: 'right'
        }
      }));
    }
  }]);

  return SelectField;
}(_react.Component);

var _default = SelectField;
exports.default = _default;