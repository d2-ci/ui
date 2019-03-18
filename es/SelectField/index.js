function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Help from '../Help';
import { isPointInRect } from '../utils/math';
import cx from 'classnames';
import styles from './styles.js';
import { colors } from '../theme.js';
import { Valid, Warning, Error } from '../icons/Status.js';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
const arrowIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "1039571365"
  }, "svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"),
  className: "jsx-1039571365"
};
const menuOverride = {
  styles: React.createElement(_JSXStyle, {
    id: "1122726799"
  }, ".jsx-1122726799{max-height:300px;overflow-y:auto;}"),
  className: "jsx-1122726799"
};
const statusToIcon = {
  valid: React.createElement(Valid, null),
  warning: React.createElement(Warning, null),
  error: React.createElement(Error, null)
};
const icons = {
  default: {
    styles: React.createElement(_JSXStyle, {
      id: "2215268291"
    }, `svg.jsx-2215268291{fill:${colors.grey700};height:24px;width:24px;}`),
    className: "jsx-2215268291"
  },
  valid: {
    styles: React.createElement(_JSXStyle, {
      id: "1378458444"
    }, `svg.jsx-1378458444{fill:${colors.blue600};height:24px;width:24px;}`),
    className: "jsx-1378458444"
  },
  warning: {
    styles: React.createElement(_JSXStyle, {
      id: "3220898470"
    }, `svg.jsx-3220898470{fill:${colors.yellow500};height:24px;width:24px;}`),
    className: "jsx-3220898470"
  },
  error: {
    styles: React.createElement(_JSXStyle, {
      id: "2028575264"
    }, `svg.jsx-2028575264{fill:${colors.red500};height:24px;width:24px;}`),
    className: "jsx-2028575264"
  }
};

function icon(Icon, action = null, extra = 'default') {
  if (Icon) {
    return React.createElement(Fragment, null, React.createElement(Icon.type, _extends({}, Icon.props, {
      onClick: action,
      className: icons[extra].className
    })), icons[extra].styles);
  }

  return null;
}

function trailIcon(status, trail, fn) {
  if (status !== 'default') {
    return icon(statusToIcon[status], fn, status);
  } else {
    return icon(trail, fn);
  }
}

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(item => {
    item.active = item.value && item.value === value;

    if (Array.isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      open: false,
      labelWidth: 0
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && this.elMenu) {
        const target = {
          x: evt.clientX,
          y: evt.clientY
        };
        const menu = this.elMenu.getBoundingClientRect();
        const container = this.elContainer.getBoundingClientRect();

        if (!isPointInRect(target, menu) && !isPointInRect(target, container)) {
          this.setState({
            open: false
          });
        }
      }
    });

    _defineProperty(this, "onToggle", () => {
      if (this.props.disabled) {
        return false;
      }

      this.setState({
        open: !this.state.open
      });
    });

    _defineProperty(this, "onClick", value => {
      if (this.props.disabled) {
        return false;
      }

      this.setState({
        open: false
      });
      this.props.onChange(this.props.name, value);
    });

    this.labelRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
    this.setState({
      labelWidth: this.labelRef.current.offsetWidth
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  getLabel() {
    if (!this.props.value) {
      return false;
    }

    const selected = this.props.list.filter(({
      value
    }) => this.props.value === value);
    return selected.length > 0 ? selected[0]['label'] : null;
  }

  isFocused() {
    return this.state.focused;
  }

  shrink() {
    return !!(this.isFocused() || this.props.value || this.props.placeholder);
  }

  render() {
    const legendWidth = this.shrink() ? {
      width: `${this.state.labelWidth}px`
    } : {
      width: '0.01px'
    };
    const {
      open
    } = this.state;
    let width = 'inherit';

    if (open && this.elSelect) {
      width = `${this.elSelect.getBoundingClientRect().width}px`;
    }

    const selected = this.getLabel();
    const list = markActive(this.props.list, this.props.value);
    const Arrow = open ? React.createElement(ArrowUp, {
      className: arrowIcon.className
    }) : React.createElement(ArrowDown, {
      className: arrowIcon.className
    });
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: `jsx-${styles.__hash}` + " " + (cx('base', this.props.className, {
        selected: !!this.props.value,
        disabled: this.props.disabled,
        [`size-${this.props.size}`]: true
      }) || "")
    }, React.createElement("div", {
      ref: c => this.elSelect = c,
      onClick: this.onToggle,
      className: `jsx-${styles.__hash}` + " " + (cx('select', {
        [`kind-${this.props.kind}`]: true,
        [`status-${this.props.status}`]: true,
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("label", {
      ref: this.labelRef,
      className: `jsx-${styles.__hash}` + " " + (cx('label', {
        [`${this.props.status}`]: true,
        [`${this.props.size}`]: true,
        [`${this.props.kind}`]: true,
        'has-icon': !!this.props.icon,
        required: this.props.required,
        disabled: this.props.disabled,
        focused: this.isFocused(),
        shrink: !!selected
      }) || "")
    }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
      className: `jsx-${styles.__hash}` + " " + (cx('flatline', {
        [`${this.props.status}`]: true,
        focused: this.isFocused(),
        idle: !this.isFocused(),
        filled: this.state.text
      }) || "")
    }, React.createElement("legend", {
      style: legendWidth,
      className: `jsx-${styles.__hash}` + " " + "legend"
    }, React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, "\u200B"))), this.props.icon && React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "lead-icon-field"
    }, this.props.icon), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('input-field', {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "value"
    }, selected)), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "trail-icon-field"
    }, this.props.status !== 'default' && trailIcon(this.props.status)), React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('trail-icon-field', {
        disabled: this.props.disabled
      }) || "")
    }, Arrow)), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }), open && React.createElement("div", {
      ref: c => this.elMenu = c,
      className: `jsx-${styles.__hash}` + " " + "menu"
    }, React.createElement(Menu, {
      list: list,
      size: this.props.size,
      onClick: this.onClick,
      className: menuOverride.className
    })), menuOverride.styles, arrowIcon.styles, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

SelectField.defaultProps = {
  size: 'default',
  kind: 'filled',
  status: 'default',
  disabled: false,
  required: false
};
SelectField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.element,
  help: PropTypes.string,
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  disabled: PropTypes.bool,
  required: PropTypes.bool
};
export { SelectField };
export default SelectField;