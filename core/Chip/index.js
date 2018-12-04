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
import s from './styles';

var Chip =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Chip, _React$PureComponent);

  function Chip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      if (!_this.props.disabled && _this.props.onClick) {
        return _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRemove", function (evt) {
      evt.stopPropagation(); // stop onRemove from triggering onClick on container

      _this.props.onRemove();
    });

    return _this;
  }

  _createClass(Chip, [{
    key: "showIcon",
    value: function showIcon() {
      var icon = this.props.icon;

      if (!icon) {
        return;
      }

      if (this.props.type === 'image') {
        return React.createElement("img", {
          src: icon,
          alt: "chip icon",
          className: s('reset', 'image-icon')
        });
      }

      return React.createElement(Icon, {
        name: icon,
        className: s('icon')
      });
    }
  }, {
    key: "showRemove",
    value: function showRemove() {
      if (this.props.onRemove) {
        return React.createElement(Icon, {
          name: "cancel",
          className: s('remove-icon'),
          onClick: this.onRemove
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          selected = _this$props.selected,
          disabled = _this$props.disabled,
          dragging = _this$props.dragging,
          overflow = _this$props.overflow;
      return React.createElement("div", {
        className: s('reset', 'base', {
          selected: selected,
          disabled: disabled,
          dragging: dragging,
          static: !this.props.onClick
        }),
        onClick: this.onClick
      }, this.showIcon(), React.createElement("span", {
        className: s('reset', 'label', {
          overflow: overflow
        })
      }, label), this.showRemove());
    }
  }]);

  return Chip;
}(React.PureComponent);

Chip.defaultProps = {
  type: 'icon',
  selected: false,
  disabled: false,
  dragging: false,
  overflow: true,
  onClick: undefined,
  onRemove: undefined
};
Chip.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['icon', 'image']),
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  dragging: PropTypes.bool,
  overflow: PropTypes.bool,
  onClick: PropTypes.func,
  onRemove: PropTypes.func
};
export { Chip };
export default Chip;