import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function () {
      if (_this.props.disabled) {
        return;
      }

      _this.props.onChange(_this.props.name, !_this.props.checked);
    });

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          disabled = _this$props.disabled;
      return React.createElement("label", {
        className: s('reset', 'base', status, {
          disabled: disabled
        }),
        onChange: this.onChange
      }, React.createElement("input", {
        type: "checkbox",
        className: s('input'),
        checked: this.props.checked,
        disabled: disabled
      }), React.createElement("span", {
        className: s('reset', 'label', _defineProperty({}, "status-".concat(status), true))
      }, this.props.label), this.props.required && React.createElement("span", {
        className: s('reset', 'required')
      }));
    }
  }]);

  return Switch;
}(React.Component);

Switch.defaultProps = {
  label: '',
  checked: false,
  disabled: false,
  status: 'default'
};
Switch.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: PropTypes.func.isRequired
};
export { Switch };
export default Switch;