"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectField = void 0;

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

var _Field = _interopRequireWildcard(require("./Field"));

var _FieldWrap = _interopRequireDefault(require("./FieldWrap"));

var _Menu = require("../Menu");

var _utils = require("../../utils");

require("./selectfield.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var bem = (0, _utils.bemClassNames)('select');
var inputClassName = "".concat(bem.e('input'), " ").concat(_Field.bem.e('input')); // React uses a "value" property on the <select/> which can't be null so we use this magic string instead

var EMPTY_NATIVE_OPTION_VALUE = '#^NONE^#';

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

      _this.inputRef.focus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInputRef", function (node) {
      _this.inputRef = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInputRef", function () {
      return _this.inputRef;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectHandler", function (event, value) {
      _this.closeDropdown();

      _this.changeHandler(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nativeSelectHandler", function (event) {
      var elValue = event.target.value;
      var value = elValue === EMPTY_NATIVE_OPTION_VALUE ? null : elValue;

      _this.changeHandler(value);
    });

    _this.state = {
      dropdownOpen: false
    };
    _this.inputRef = null;
    _this.isEmptyOptionSelected = false;
    return _this;
  }

  _createClass(SelectField, [{
    key: "changeHandler",
    value: function changeHandler(value) {
      var _this$props = this.props,
          emptyOption = _this$props.emptyOption,
          onChange = _this$props.onChange;
      this.isEmptyOptionSelected = emptyOption && value === null ? true : false;
      onChange(value);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this$props2 = this.props,
          emptyOption = _this$props2.emptyOption,
          options = _this$props2.options,
          native = _this$props2.native;

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
      return _react.default.createElement("input", {
        className: inputClassName,
        value: displayValue,
        onClick: this.openDropdown // input type "button" is focusable, which ensures the correct :focus styles are applied
        // input type "button" does not show a caret when focussed
        ,
        type: "button",
        ref: this.setInputRef
      });
    }
  }, {
    key: "renderNativeSelect",
    value: function renderNativeSelect() {
      var options = this.getOptions();
      var value = this.props.value || EMPTY_NATIVE_OPTION_VALUE;
      return _react.default.createElement("select", {
        ref: this.setInputRef,
        className: inputClassName,
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
      var _this$props3 = this.props,
          options = _this$props3.options,
          value = _this$props3.value,
          emptyOption = _this$props3.emptyOption;
      var selectedOption = options.find(function (option) {
        return option.value === value;
      }); // If some valid option is selected always display this

      if (selectedOption && selectedOption.label) {
        return selectedOption.label;
      } // If the user selected the "None" option, display it


      if (this.isEmptyOptionSelected) {
        return emptyOption;
      } // Otherwise return an empty value so the floating label text shows


      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          label = _this$props4.label,
          variant = _this$props4.variant,
          leadingIcon = _this$props4.leadingIcon,
          helpText = _this$props4.helpText,
          dense = _this$props4.dense,
          valid = _this$props4.valid,
          error = _this$props4.error,
          warning = _this$props4.warning,
          native = _this$props4.native,
          disabled = _this$props4.disabled,
          required = _this$props4.required,
          block = _this$props4.block;
      var displayValue = this.getLabelOfValue();
      var inputComponent = native ? this.renderNativeSelect() : this.renderCustomSelect(displayValue);
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_FieldWrap.default, {
        valid: valid,
        warning: warning,
        disabled: disabled,
        error: error,
        dense: dense,
        block: block,
        helpText: helpText,
        className: bem.b({
          native: native
        })
      }, _react.default.createElement(_Field.default, {
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
        inputComponent: inputComponent,
        block: block,
        required: required
      })), !native && _react.default.createElement(_Menu.PopoverMenu, {
        menuProps: {
          options: this.getOptions(),
          selectHandler: this.selectHandler
        },
        getAnchorRef: this.getInputRef,
        open: this.state.dropdownOpen,
        closePopover: this.closeDropdown,
        anchorAttachPoint: {
          vertical: 'top',
          horizontal: 'center'
        },
        popoverAttachPoint: {
          vertical: 'top',
          horizontal: 'center'
        },
        appearAnimation: "slide-down"
      }));
    }
  }]);

  return SelectField;
}(_react.Component);

exports.SelectField = SelectField;
var _default = SelectField;
exports.default = _default;