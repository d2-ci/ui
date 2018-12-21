import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import cx, { rx } from './styles';

var Radio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function () {
      return _this.props.onChange(_this.props.name, _this.props.value);
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          status = _this$props.status;
      var icon = React.createElement(Icon, {
        name: this.props.checked ? 'radio_button_checked' : 'radio_button_unchecked',
        className: cx('icon', "".concat(status, "-icon"), {
          disabled: this.props.disabled,
          checked: this.props.checked
        })
      });
      return React.createElement("label", {
        className: rx('base', {
          disabled: this.props.disabled
        })
      }, React.createElement("input", {
        type: "radio",
        name: this.props.name,
        value: this.props.value,
        checked: this.props.checked,
        disabled: this.props.disabled,
        onChange: this.onChange
      }), icon, React.createElement("span", {
        className: rx('label', {
          required: required
        })
      }, this.props.label));
    }
  }]);

  return Radio;
}(React.Component);

Radio.defaultProps = {
  label: '',
  checked: false,
  status: 'default',
  disabled: false
};
Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: PropTypes.func.isRequired
};
export { Radio };
export default Radio;