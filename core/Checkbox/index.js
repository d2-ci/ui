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

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      indeterminate: _this.props.indeterminate
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function () {
      _this.props.onChange(_this.props.name, !_this.props.checked);

      if (_this.state.indeterminate) {
        _this.setState({
          indeterminate: false
        });
      }
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          status = _this$props.status;
      var name = 'check_box_outline_blank';

      if (this.state.indeterminate) {
        name = 'indeterminate_check_box';
      } else if (this.props.checked) {
        name = 'check_box';
      }

      var icon = React.createElement(Icon, {
        name: name,
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
        type: "checkbox",
        onChange: this.onChange,
        checked: this.props.checked,
        disabled: this.props.disabled
      }), icon, React.createElement("span", {
        className: rx('label', {
          required: required
        })
      }, this.props.label));
    }
  }]);

  return Checkbox;
}(React.Component);

Checkbox.defaultProps = {
  label: '',
  checked: false,
  required: false,
  disabled: false,
  indeterminate: false,
  status: 'default'
};
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: PropTypes.func.isRequired
};
export { Checkbox };
export default Checkbox;