"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectField = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _LabelField = _interopRequireDefault(require("../shared/LabelField"));

var _styles = _interopRequireDefault(require("../shared/LabelField/styles"));

var _Menu = require("../../Menu");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputClassName = "".concat((0, _styles2.default)('input'), " ").concat((0, _styles.default)('input')); // React uses a "value" property on the <select/> which can't be null so we use this magic string instead

var EMPTY_NATIVE_OPTION_VALUE = '#^NONE^#';

var SelectField =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isEmptyOptionSelected", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpen", function () {
      return _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      _this.setState({
        open: false
      });

      _this.inputRef.focus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInputRef", function () {
      return _this.inputRef;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectHandler", function (event, value) {
      _this.onClose();

      _this.changeHandler(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nativeSelectHandler", function (event) {
      var elValue = event.target.value;
      var value = elValue === EMPTY_NATIVE_OPTION_VALUE ? null : elValue;

      _this.changeHandler(value);
    });

    return _this;
  }

  _createClass(SelectField, [{
    key: "changeHandler",
    value: function changeHandler(value) {
      this.isEmptyOptionSelected = this.props.emptyOption && value === null ? true : false;
      this.props.onChange(value);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this$props = this.props,
          emptyOption = _this$props.emptyOption,
          options = _this$props.options,
          native = _this$props.native;

      if (!emptyOption) {
        return options;
      }

      var emptyOptionObject = native ? {
        value: EMPTY_NATIVE_OPTION_VALUE,
        label: emptyOption
      } : {
        value: null,
        label: emptyOption
      };
      return [emptyOptionObject].concat(_toConsumableArray(options));
    }
  }, {
    key: "renderCustomSelect",
    value: function renderCustomSelect(displayValue) {
      var _this2 = this;

      return _react.default.createElement("input", {
        className: inputClassName,
        value: displayValue,
        onClick: this.onOpen // input type "button" is focusable, which ensures the correct :focus styles are applied
        // input type "button" does not show a caret when focussed
        ,
        type: "button",
        ref: function ref(c) {
          return _this2.inputRef = c;
        }
      });
    }
  }, {
    key: "renderNativeSelect",
    value: function renderNativeSelect() {
      var _this3 = this;

      var options = this.getOptions();
      var value = this.props.value || EMPTY_NATIVE_OPTION_VALUE;
      return _react.default.createElement("select", {
        ref: function ref(c) {
          return _this3.inputRef = c;
        },
        className: (0, _styles2.default)('native', inputClassName),
        onChange: this.nativeSelectHandler,
        value: value
      }, options.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return _react.default.createElement("option", {
          key: value,
          value: value
        }, label);
      }));
    }
  }, {
    key: "getLabelOfValue",
    value: function getLabelOfValue() {
      var _this4 = this;

      var option = this.props.options.find(function (o) {
        return o.value === _this4.props.value;
      });

      if (option && option.label) {
        return option.label;
      }

      if (this.isEmptyOptionSelected) {
        return this.props.emptyOption;
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          variant = _this$props2.variant,
          leadingIcon = _this$props2.leadingIcon,
          helpText = _this$props2.helpText,
          dense = _this$props2.dense,
          valid = _this$props2.valid,
          error = _this$props2.error,
          warning = _this$props2.warning,
          native = _this$props2.native,
          disabled = _this$props2.disabled,
          required = _this$props2.required,
          block = _this$props2.block;
      var displayValue = this.getLabelOfValue();
      var inputComponent = native ? this.renderNativeSelect() : this.renderCustomSelect(displayValue);
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_LabelField.default, _extends({
        className: (0, _styles2.default)('container')
      }, {
        variant: variant,
        dense: dense,
        label: label,
        value: displayValue,
        leadingIcon: leadingIcon,
        trailingIcon: 'keyboard_arrow_down',
        error: error,
        valid: valid,
        warning: warning,
        disabled: disabled,
        block: block,
        required: required,
        helpText: helpText
      }), inputComponent), !native && _react.default.createElement(_Menu.PopoverMenu, {
        menuProps: {
          options: this.getOptions(),
          selectHandler: this.selectHandler
        },
        getAnchorRef: this.getInputRef,
        open: this.state.open,
        closePopover: this.onClose,
        anchorPosition: {
          vertical: 'top',
          horizontal: 'center'
        },
        popoverPosition: {
          vertical: 'top',
          horizontal: 'center'
        },
        animation: "slide-down"
      }));
    }
  }]);

  return SelectField;
}(_react.Component);

exports.SelectField = SelectField;
var _default = SelectField;
exports.default = _default;