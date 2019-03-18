function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Help from '../Help';
import { Valid, Warning, Error } from '../icons/Status.js';
import styles from './styles.js';
import { colors } from '../theme.js';
const statusToIcon = {
  valid: React.createElement(Valid, null),
  warning: React.createElement(Warning, null),
  error: React.createElement(Error, null)
};
const icons = {
  default: {
    styles: React.createElement(_JSXStyle, {
      id: "3033330349"
    }, `svg.jsx-3033330349{fill:${colors.grey700};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-3033330349"
  },
  valid: {
    styles: React.createElement(_JSXStyle, {
      id: "3522955246"
    }, `svg.jsx-3522955246{fill:${colors.blue600};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-3522955246"
  },
  warning: {
    styles: React.createElement(_JSXStyle, {
      id: "3520916525"
    }, `svg.jsx-3520916525{fill:${colors.yellow500};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-3520916525"
  },
  error: {
    styles: React.createElement(_JSXStyle, {
      id: "898494457"
    }, `svg.jsx-898494457{fill:${colors.red500};height:24px;width:24px;margin-right:8px;}`),
    className: "jsx-898494457"
  }
};

function icon(Icon, action = null, extra = 'default') {
  if (Icon) {
    return React.createElement("span", null, React.createElement(Icon.type, _extends({}, Icon.props, {
      className: icons[extra].className
    })), icons[extra].styles);
  }

  return null;
}

function trailIcon(status, trail, fn) {
  if (status !== 'default') {
    return icon(statusToIcon[status], fn, status);
  } else {
    return trail;
  }
}

class InputField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      focused: false,
      labelWidth: 0
    });

    _defineProperty(this, "onFocus", evt => {
      this.setState({
        focused: true
      });
    });

    _defineProperty(this, "onBlur", evt => {
      this.setState({
        focused: false
      });
    });

    _defineProperty(this, "onChange", evt => {
      if (this.props.disabled) {
        return;
      }

      this.props.onChange(this.props.name, evt.target.value);
    });

    this.labelRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      labelWidth: this.labelRef.current.offsetWidth,
      focused: this.props.focus
    });

    if (this.props.focus) {
      this.inputRef.current.focus();
    }
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
    return React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('base', this.props.className, {
        focused: this.isFocused(),
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('field', {
        [`size-${this.props.size}`]: true,
        [`status-${this.props.status}`]: true,
        [`kind-${this.props.kind}`]: true,
        focused: this.isFocused(),
        filled: this.props.value,
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
        shrink: this.shrink()
      }) || "")
    }, this.props.label), this.props.kind === 'outlined' && React.createElement("fieldset", {
      className: `jsx-${styles.__hash}` + " " + (cx('flatline', {
        [`${this.props.status}`]: true,
        focused: this.isFocused(),
        idle: !this.isFocused(),
        filled: this.props.value
      }) || "")
    }, React.createElement("legend", {
      style: legendWidth,
      className: `jsx-${styles.__hash}` + " " + "legend"
    }, React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, "\u200B"))), icon(this.props.icon), React.createElement("input", {
      ref: this.inputRef,
      type: this.props.type,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      value: this.props.value,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange,
      className: `jsx-${styles.__hash}` + " " + (cx({
        disabled: this.props.disabled
      }) || "")
    }), trailIcon(this.props.status, this.props.trailIcon)), this.props.help && React.createElement(Help, {
      text: this.props.help,
      status: this.props.status
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

InputField.defaultProps = {
  status: 'default',
  size: 'default',
  kind: 'filled',
  type: 'text',
  focus: false,
  disabled: false,
  required: false
};
InputField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  help: PropTypes.string,
  icon: PropTypes.element,
  trailIcon: PropTypes.element,
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
  size: PropTypes.oneOf(['default', 'dense']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url']),
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};
export { InputField };
export default InputField;