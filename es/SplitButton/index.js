function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import { isPointInRect } from '../utils';
import buttons from '../Button/styles.js';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import cx from 'classnames';
import styles from './styles';
const ArrowIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "1039571365"
  }, "svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"),
  className: "jsx-1039571365"
};

class SplitButton extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
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

    _defineProperty(this, "onToggle", () => this.setState({
      open: !this.state.open
    }));
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  render() {
    const {
      open
    } = this.state;
    let width = this.props.width;

    if (!width) {
      width = this.elContainer ? this.elContainer.getBoundingClientRect()['width'] : 'inherit';
    }

    const icon = open ? React.createElement(ArrowUp, {
      className: ArrowIcon.className
    }) : React.createElement(ArrowDown, {
      className: ArrowIcon.className
    });
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}`
    }, React.createElement("button", {
      disabled: this.props.disabled,
      onClick: this.props.onClick,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`, this.props.className, {
        'icon-only': this.props.icon && !this.props.label && !this.props.children,
        icon: this.props.icon
      }) || "")
    }, this.props.icon && React.createElement("span", {
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + "button-icon"
    }, this.props.icon), this.props.label || this.props.children), React.createElement("button", {
      disabled: this.props.disabled,
      onClick: this.onToggle,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`) || "")
    }, icon), open && React.createElement("div", {
      ref: c => this.elMenu = c,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + "menu"
    }, React.createElement(Menu, {
      width: `${width}px`,
      list: this.props.list,
      onClick: this.props.onClick
    })), ArrowIcon.styles, React.createElement(_JSXStyle, {
      id: buttons.__hash
    }, buttons), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

SplitButton.defaultProps = {
  size: 'medium',
  kind: 'basic',
  disabled: false
};
SplitButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  width: PropTypes.string,
  kind: PropTypes.oneOf(['basic', 'primary']),
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
export { SplitButton };
export default SplitButton;