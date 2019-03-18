function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';
import styles from './styles.js';
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox.js';
const icons = {
  default: {
    styles: React.createElement(_JSXStyle, {
      id: "2215268291"
    }, `svg.jsx-2215268291{fill:${colors.grey700};height:24px;width:24px;}`),
    className: "jsx-2215268291"
  },
  checked: {
    styles: React.createElement(_JSXStyle, {
      id: "3230514506"
    }, `svg.jsx-3230514506{fill:${colors.teal400};height:24px;width:24px;}`),
    className: "jsx-3230514506"
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

class Checkbox extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      indeterminate: this.props.indeterminate
    });

    _defineProperty(this, "onChange", () => {
      this.props.onChange(this.props.name, !this.props.checked);

      if (this.state.indeterminate) {
        this.setState({
          indeterminate: false
        });
      }
    });
  }

  render() {
    const {
      required,
      status,
      checked,
      className
    } = this.props;
    const state = status === 'default' && checked ? 'checked' : status;
    let icon = React.createElement(Unchecked, {
      className: icons[state].className
    });

    if (this.state.indeterminate) {
      icon = React.createElement(Indeterminate, {
        className: icons[state].className
      });
    } else if (this.props.checked) {
      icon = React.createElement(Checked, {
        className: icons[state].className
      });
    }

    console.log(icon);
    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx('base', className, {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement("input", {
      type: "checkbox",
      onChange: this.onChange,
      checked: this.props.checked,
      disabled: this.props.disabled,
      className: `jsx-${styles.__hash}`
    }), icon, React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx('label', {
        required
      }) || "")
    }, this.props.label), icons[state].styles, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Checkbox.defaultProps = {
  checked: false,
  required: false,
  disabled: false,
  indeterminate: false,
  status: 'default'
};
Checkbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { Checkbox };
export default Checkbox;