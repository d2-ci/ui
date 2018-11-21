import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import _Array$isArray from "@babel/runtime-corejs2/core-js/array/is-array";
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Menu from '../Menu';
import { Label, Help } from '../helpers';
import { isPointInRect } from '../../utils';
import s from './styles';

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(function (item) {
    item.active = item.value && item.value === value;

    if (_Array$isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elMenu) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var menu = _this.elMenu.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!isPointInRect(target, menu) && !isPointInRect(target, container)) {
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

    return _this;
  }

  _createClass(SelectField, [{
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
    key: "render",
    value: function render() {
      var _this3 = this,
          _s;

      var open = this.state.open;
      var width = 'inherit';

      if (open && this.elSelect) {
        width = "".concat(this.elSelect.getBoundingClientRect().width, "px");
      }

      var selected = this.getLabel();
      var list = markActive(this.props.list, this.props.value);
      return React.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: s('container', (_s = {
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, _defineProperty(_s, "kind-".concat(this.props.kind), true), _defineProperty(_s, "size-".concat(this.props.size), true), _s))
      }, React.createElement("div", {
        ref: function ref(c) {
          return _this3.elSelect = c;
        },
        className: s('select'),
        onClick: this.onToggle
      }, this.props.icon && React.createElement("div", {
        className: s('icon')
      }, React.createElement(Icon, {
        name: this.props.icon
      })), React.createElement("div", {
        className: s('value')
      }, selected), React.createElement(Label, {
        type: "select",
        size: this.props.size,
        kind: this.props.kind,
        text: this.props.label,
        status: this.props.status,
        hasIcon: !!this.props.icon,
        disabled: this.props.disabled,
        state: selected ? 'minimized' : 'default'
      }), React.createElement(Icon, {
        name: open ? 'arrow_drop_up' : 'arrow_drop_down',
        className: s('dropdown-icon')
      })), this.props.help && React.createElement(Help, {
        text: this.props.help,
        status: this.props.status
      }), open && React.createElement("div", {
        className: s('menu'),
        ref: function ref(c) {
          return _this3.elMenu = c;
        }
      }, React.createElement(Menu, {
        list: list,
        size: this.props.size,
        onClick: this.onClick
      })));
    }
  }]);

  return SelectField;
}(React.Component);

SelectField.defaultProps = {
  disabled: false,
  label: '',
  size: 'default'
};
SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  })),
  icon: PropTypes.string,
  help: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  onChange: PropTypes.func.isRequired
};
export { SelectField };
export default SelectField;