import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime-corejs2/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import cx, { rx } from './styles';
import Menu from '../Menu';
import Icon from '../Icon';
import { isPointInRect } from '../../utils';

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

        if (!isPointInRect(target, menu) && !isPointInRect(target, container)) {
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

      var icon = open ? 'arrow_drop_up' : 'arrow_drop_down';
      return React.createElement("div", {
        className: rx('base', "".concat(this.props.size)),
        ref: function ref(c) {
          return _this2.elContainer = c;
        }
      }, React.createElement(Button, {
        icon: this.props.icon,
        kind: this.props.kind,
        active: this.props.active,
        disabled: this.props.disabled,
        onClick: this.onToggle
      }, React.createElement("span", {
        className: rx('menu-label')
      }, this.props.label), React.createElement(Icon, {
        className: cx('menu-icon'),
        name: icon
      })), open && React.createElement("div", {
        className: rx('menu'),
        ref: function ref(c) {
          return _this2.elMenu = c;
        }
      }, React.createElement(Menu, {
        size: this.props.size,
        list: this.props.list,
        onClick: this.props.onClick
      })));
    }
  }]);

  return DropdownButton;
}(Component);

DropdownButton.defaultProps = {
  size: 'default',
  kind: 'basic',
  active: false,
  disabled: false
};
DropdownButton.propTypes = {
  width: PropTypes.string,
  kind: PropTypes.oneOf(['basic', 'primary']),
  icon: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'dense']),
  label: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};
export { DropdownButton };
export default DropdownButton;